# Portfolio Contact Form Backend

This is a simple Express server that handles contact form submissions from the portfolio website and stores them in a SQLite database.

## Setup Instructions

1. Install dependencies:
   ```
   cd server
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```
   
   For development with auto-reload:
   ```
   npm run dev
   ```

3. The server will automatically find an available port (starting from 5000)
   - The selected port will be displayed in the console
   - The port is also saved to `server/port.txt` for the client to find

## Automatic Port Discovery

The server is designed to automatically find an available port if the preferred one (5000) is already in use:

- It will try ports sequentially (5000, 5001, 5002, etc.) until it finds an available one
- Once it selects a port, it saves this information to `server/port.txt`
- The frontend automatically detects the correct port by:
  1. First trying to read `server/port.txt`
  2. If that fails, it tests common ports (5000-5005) until it finds a working one

This ensures the server and frontend can always connect without manual configuration.

## Contact Data Storage

### Database Storage
The application uses SQLite to store contact form submissions. The database file is created at `server/db/portfolio.db`.

### Excel/CSV File Storage
For easy access, all messages are automatically exported to a CSV file (Excel-compatible) at:
```
server/exports/contact_messages.csv
```

This file is:
- Updated automatically whenever a new message is submitted
- Created when the server starts
- Excel-compatible and can be opened directly in Microsoft Excel, Google Sheets, or any spreadsheet software
- Always contains the latest data from your database

## API Endpoints

### POST /api/contact
Saves a new contact form submission to the database and updates the CSV export file.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Your message has been received! I will get back to you soon.",
  "id": 1
}
```

### GET /api/messages
Retrieves all contact form submissions (for admin use) in JSON format.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello, I'd like to connect!",
      "created_at": "2023-08-15 14:30:45"
    }
  ]
}
```

### GET /api/messages/save-to-file
Manually trigger an export of all messages to the CSV file in the project folder.

**Response:**
```json
{
  "success": true,
  "message": "Successfully exported 5 messages to file",
  "filePath": "/path/to/server/exports/contact_messages.csv"
}
```

### GET /api/messages/html
Displays all contact form submissions in a nicely formatted HTML table for easy viewing in a browser.

Simply visit http://localhost:[PORT]/api/messages/html in your browser to see all messages in a clean, formatted table. This page also contains buttons to:
- Download the CSV file
- Save/update the CSV file in the project folder

### GET /api/messages/export
Exports all contact form submissions as a CSV file that can be opened in Excel or other spreadsheet applications.

Visit http://localhost:[PORT]/api/messages/export in your browser to download a CSV file with all the messages. 