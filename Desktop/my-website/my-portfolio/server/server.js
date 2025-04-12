const express = require('express');
const cors = require('cors');
const db = require('./db/database');
const fs = require('fs');
const path = require('path');
const net = require('net');

const app = express();
const PREFERRED_PORT = process.env.PORT || 5000;
const HOST = 'localhost';

// Function to check if a port is in use
const isPortInUse = (port) => {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(true); // Port is in use
      } else {
        resolve(false);
      }
    });
    
    server.once('listening', () => {
      server.close();
      resolve(false); // Port is available
    });
    
    server.listen(port, HOST);
  });
};

// Function to find an available port
const findAvailablePort = async (startPort, maxAttempts = 10) => {
  let port = startPort;
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    const inUse = await isPortInUse(port);
    if (!inUse) {
      return port; // Found an available port
    }
    port++;
    attempts++;
  }
  
  throw new Error(`Could not find an available port after ${maxAttempts} attempts`);
};

// Middleware
app.use(cors());
app.use(express.json());

// Function to export messages to a CSV file in the project
const exportMessagesToFile = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM messages ORDER BY created_at DESC', [], (err, rows) => {
      if (err) {
        console.error('Error fetching messages for export:', err.message);
        return reject(err);
      }
      
      if (rows.length === 0) {
        console.log('No messages to export');
        return resolve(null);
      }
      
      // Create a more structured Excel-friendly CSV content
      let csvContent = 'Contact Form Messages Export\n';
      csvContent += `Generated on: ${new Date().toLocaleString()}\n\n`;
      
      // Add each message as a separate table in CSV format
      rows.forEach((row, index) => {
        csvContent += `Message #${row.id}\n`;
        csvContent += `Timestamp,${row.created_at}\n`;
        csvContent += `Name,${row.name}\n`;
        csvContent += `Email,${row.email}\n`;
        
        // Properly handle commas and quotes in message
        let messageText = row.message;
        if (messageText.includes(',') || messageText.includes('"') || messageText.includes('\n')) {
          messageText = `"${messageText.replace(/"/g, '""')}"`;
        }
        
        csvContent += `Message,${messageText}\n`;
        
        // Add a separator between messages (except for the last one)
        if (index < rows.length - 1) {
          csvContent += '\n---\n\n';
        }
      });
      
      // Generate file name and paths
      const fileName = 'contact_messages.csv';
      const exportsDir = path.join(__dirname, 'exports');
      const filePath = path.join(exportsDir, fileName);
      
      // Ensure exports directory exists
      if (!fs.existsSync(exportsDir)) {
        fs.mkdirSync(exportsDir, { recursive: true });
      }
      
      // Save file
      fs.writeFileSync(filePath, csvContent);
      console.log(`Exported ${rows.length} messages to ${filePath}`);
      
      // Also create an Excel-compatible version with timestamp (for downloads)
      const timestampedFileName = `contact_messages_${new Date().toISOString().split('T')[0]}.csv`;
      const timestampedFilePath = path.join(exportsDir, timestampedFileName);
      fs.writeFileSync(timestampedFilePath, csvContent);
      
      return resolve({
        path: filePath,
        count: rows.length
      });
    });
  });
};

// Auto-export messages whenever a new one is added
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide name, email, and message' 
    });
  }
  
  // Insert into database
  const sql = `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`;
  const params = [name, email, message];
  
  db.run(sql, params, function(err) {
    if (err) {
      console.error('Error saving message:', err.message);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to save your message. Please try again later.' 
      });
    }
    
    console.log(`Message saved with ID: ${this.lastID}`);
    
    // Auto-export messages to CSV after adding a new one
    exportMessagesToFile()
      .then(() => {
        console.log('Messages exported to CSV after new submission');
      })
      .catch(exportErr => {
        console.error('Error exporting messages to CSV:', exportErr);
      });
    
    return res.status(201).json({ 
      success: true, 
      message: 'Your message has been received! I will get back to you soon.',
      id: this.lastID
    });
  });
});

// Route to get all messages (admin access for future use)
app.get('/api/messages', (req, res) => {
  db.all('SELECT * FROM messages ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching messages:', err.message);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
    
    return res.json({ success: true, data: rows });
  });
});

// Route to export messages as CSV and save to project folder
app.get('/api/messages/save-to-file', (req, res) => {
  exportMessagesToFile()
    .then(result => {
      if (!result) {
        return res.status(404).json({ 
          success: false, 
          message: 'No messages to export' 
        });
      }
      
      return res.json({ 
        success: true, 
        message: `Successfully exported ${result.count} messages to file`,
        filePath: result.path
      });
    })
    .catch(err => {
      return res.status(500).json({ 
        success: false, 
        message: 'Error exporting messages to file',
        error: err.message
      });
    });
});

// Route to export messages as CSV (Excel-compatible)
app.get('/api/messages/export', (req, res) => {
  db.all('SELECT * FROM messages ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching messages for export:', err.message);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
    
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'No messages to export' });
    }
    
    // Create a more structured Excel-friendly CSV content
    let csvContent = 'Contact Form Messages Export\n';
    csvContent += `Generated on: ${new Date().toLocaleString()}\n\n`;
    
    // Add each message as a separate table in CSV format
    rows.forEach((row, index) => {
      csvContent += `Message #${row.id}\n`;
      csvContent += `Timestamp,${row.created_at}\n`;
      csvContent += `Name,${row.name}\n`;
      csvContent += `Email,${row.email}\n`;
      
      // Properly handle commas and quotes in message
      let messageText = row.message;
      if (messageText.includes(',') || messageText.includes('"') || messageText.includes('\n')) {
        messageText = `"${messageText.replace(/"/g, '""')}"`;
      }
      
      csvContent += `Message,${messageText}\n`;
      
      // Add a separator between messages (except for the last one)
      if (index < rows.length - 1) {
        csvContent += '\n---\n\n';
      }
    });
    
    // Generate file name with date
    const fileName = `contact_messages_${new Date().toISOString().split('T')[0]}.csv`;
    const filePath = path.join(__dirname, 'exports', fileName);
    
    // Ensure exports directory exists
    const exportsDir = path.join(__dirname, 'exports');
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir, { recursive: true });
    }
    
    // Save file
    fs.writeFileSync(filePath, csvContent);
    
    // Set headers for file download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    
    // Send the file to the client
    res.sendFile(filePath);
  });
});

// Route to view messages in HTML format (more readable)
app.get('/api/messages/html', (req, res) => {
  db.all('SELECT * FROM messages ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error('Error fetching messages for HTML view:', err.message);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
    
    // Create HTML with individual tables for each message
    let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Messages</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; background-color: #f9f9f9; }
          .message-container { 
            background-color: white; 
            border-radius: 8px; 
            box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
            margin-bottom: 30px; 
            padding: 15px;
          }
          table { border-collapse: collapse; width: 100%; margin-bottom: 10px; }
          th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
          th { background-color: #f2f2f2; width: 120px; }
          h1, h2 { color: #333; }
          h2 { border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 15px; }
          .message-content { white-space: pre-wrap; }
          .export-link { 
            display: inline-block; 
            padding: 10px 15px; 
            background-color: #4CAF50; 
            color: white; 
            text-decoration: none; 
            border-radius: 4px; 
            margin-right: 10px;
            margin-bottom: 20px;
          }
          .export-link:hover { background-color: #45a049; }
          .delete-link {
            display: inline-block;
            padding: 10px 15px;
            background-color: #f44336;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            margin-right: 10px;
            margin-bottom: 20px;
            font-weight: bold;
          }
          .delete-link:hover { background-color: #d32f2f; }
          .no-messages {
            margin: 50px 0;
            text-align: center;
            font-style: italic;
            color: #999;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Contact Form Messages</h1>
            <div class="links">
              <a href="/api/messages/export" class="export-link">Download as CSV (Excel)</a>
              <a href="/api/messages/save-to-file" class="export-link" style="background-color: #2196F3;">Save to Project Folder</a>
              <a href="/api/delete-all-messages" class="delete-link" onclick="return confirm('Are you sure you want to delete ALL messages? This cannot be undone.')">Delete All Messages</a>
            </div>
          </div>

          ${rows.length > 0 
            ? rows.map(row => {
              const date = new Date(row.created_at).toLocaleString();
              return `
                <div class="message-container">
                  <h2>Message #${row.id} - ${date}</h2>
                  <table>
                    <tr>
                      <th>Name</th>
                      <td>${row.name}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>${row.email}</td>
                    </tr>
                    <tr>
                      <th>Message</th>
                      <td class="message-content">${row.message}</td>
                    </tr>
                  </table>
                </div>
              `;
            }).join('')
            : '<div class="no-messages">No messages found</div>'
          }
        </div>
      </body>
      </html>
    `;
    
    res.send(html);
  });
});

// Route to delete all messages with direct HTML response
app.get('/api/delete-all-messages', (req, res) => {
  // 1. Delete all records from the messages table
  db.run('DELETE FROM messages', function(err) {
    if (err) {
      console.error('Error clearing messages:', err.message);
      return res.status(500).send(`
        <html>
          <body>
            <h1>Error</h1>
            <p>Failed to delete messages: ${err.message}</p>
            <a href="/api/messages/html">Back to messages</a>
          </body>
        </html>
      `);
    }
    
    const deletedCount = this.changes;
    
    // 2. Reset the SQLite auto-increment counter
    db.run('DELETE FROM sqlite_sequence WHERE name = ?', ['messages']);
    
    // 3. Create an empty CSV file with headers
    const csvHeader = 'id,name,email,message,created_at\n';
    const timestampPath = path.join(__dirname, 'exports', `contact_messages_${new Date().toISOString().replace(/:/g, '-')}.csv`);
    const defaultPath = path.join(__dirname, 'exports', 'contact_messages.csv');
    
    // Create exports directory if it doesn't exist
    if (!fs.existsSync(path.join(__dirname, 'exports'))) {
      fs.mkdirSync(path.join(__dirname, 'exports'));
    }
    
    // Write empty files
    fs.writeFileSync(defaultPath, csvHeader);
    fs.writeFileSync(timestampPath, csvHeader);
    
    // Return a simple HTML response
    res.send(`
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Messages Deleted</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; text-align: center; }
            .container { max-width: 600px; margin: 0 auto; }
            h1 { color: #4CAF50; }
            .success { color: #4CAF50; font-weight: bold; margin: 20px 0; }
            .back-link { 
              display: inline-block; 
              margin-top: 20px; 
              padding: 10px 20px; 
              background-color: #2196F3; 
              color: white; 
              text-decoration: none; 
              border-radius: 4px; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Messages Deleted</h1>
            <p class="success">Successfully deleted all messages (${deletedCount} total)</p>
            <a href="/api/messages/html" class="back-link">Back to Messages</a>
          </div>
        </body>
      </html>
    `);
  });
});

// Export messages to file when server starts
exportMessagesToFile()
  .then(result => {
    if (result) {
      console.log(`Initial export: ${result.count} messages exported to ${result.path}`);
    }
  })
  .catch(err => {
    console.error('Error on initial export:', err);
  });

// Start the server with automatic port finding
(async () => {
  try {
    // Find an available port starting from the preferred port
    const port = await findAvailablePort(PREFERRED_PORT);
    
    // Save the port to a file so the client can find it
    const portFilePath = path.join(__dirname, 'port.txt');
    fs.writeFileSync(portFilePath, port.toString());
    
    // Start the server on the available port
    app.listen(port, HOST, () => {
      console.log(`Server running at http://${HOST}:${port}`);
      console.log(`Port information saved to: ${portFilePath}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
})(); 