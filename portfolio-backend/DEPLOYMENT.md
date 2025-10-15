# 🚀 Backend Deployment Guide

Your portfolio contact form works locally but needs a deployed backend for **n1-sb.com**.

## 🎯 Current Status

- ✅ **Localhost**: Contact form works at `http://localhost:3000`
- ⚠️ **Production**: Contact form temporarily shows success without submitting (n1-sb.com)
- 📝 **Next Step**: Deploy backend to make it work on production

## Quick Deploy Options (FREE)

### Option 1: Railway (Recommended) ⭐

**Why Railway?**
- ✅ Free tier available
- ✅ Automatic deployments from GitHub
- ✅ Built-in PostgreSQL (optional)
- ✅ Easy environment variables

**Steps:**

1. **Create Account**: https://railway.app/
2. **New Project** → **Deploy from GitHub**
3. **Select**: `nischalsb/my-portfolio-website`
4. **Set Root Directory**: `portfolio-backend`
5. **Add Environment Variables**:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=nischalsb2003@gmail.com
   SMTP_PASSWORD=ynsj gwob zqrr dxqc
   RECIPIENT_EMAIL=nischalsb2003@gmail.com
   FRONTEND_URL=http://localhost:3000
   PRODUCTION_FRONTEND_URL=https://n1-sb.com
   ```

6. **Deploy!** Railway will give you a URL like: `https://your-app.railway.app`

7. **Update Frontend**: 
   - Edit `src/components/Contact.jsx`
   - Replace `https://your-backend-url.com/contact` with your Railway URL
   - Rebuild: `npm run build`
   - Push to GitHub

---

### Option 2: Render

**Steps:**

1. **Create Account**: https://render.com/
2. **New** → **Web Service**
3. **Connect GitHub**: Select `nischalsb/my-portfolio-website`
4. **Settings**:
   - **Name**: `portfolio-backend`
   - **Root Directory**: `portfolio-backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Instance Type**: Free

5. **Environment Variables** (same as Railway above)

6. **Deploy** - Render gives you: `https://portfolio-backend.onrender.com`

7. **Update Frontend** (same as Railway)

---

### Option 3: Heroku (Paid after Nov 2022)

Similar process but requires payment info.

---

## 📝 After Deployment

### 1. Update Frontend

```javascript
// src/components/Contact.jsx - Line 35
const apiUrl = isLocalhost 
  ? 'http://localhost:8000/contact'
  : 'https://YOUR-DEPLOYED-URL.railway.app/contact' // ← Update this!
```

### 2. Rebuild

```bash
npm run build
git add .
git commit -m "Add deployed backend URL"
git push origin main
```

### 3. Test Production

Go to https://n1-sb.com and submit the contact form!

---

## 🔧 Create Procfile (for some platforms)

If needed, create `portfolio-backend/Procfile`:

```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

---

## 🔐 Security Checklist

Before deploying, verify:

- ✅ `.env` is in `.gitignore` (already done)
- ✅ Database files ignored (already done)
- ✅ Use environment variables for secrets (done)
- ✅ CORS configured for n1-sb.com (already done)

---

## 🧪 Test Deployed Backend

```bash
# Replace with your deployed URL
curl -X POST https://your-app.railway.app/contact \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "email": "test@test.com", "message": "Testing deployment"}'
```

You should receive an email if everything works!

---

## 💡 Tips

1. **Free Tier Limits**:
   - Railway: $5 free credits/month (plenty for portfolio)
   - Render: Free tier sleeps after 15 min inactivity (first request slow)

2. **Keep Backend Awake** (Render):
   - Use a service like UptimeRobot to ping your backend every 5 minutes

3. **Database**:
   - SQLite works on Railway (persistent storage)
   - Render: SQLite may reset (consider PostgreSQL for Render)

4. **Logs**:
   - Check platform dashboard for error logs
   - Railway: Click on service → Logs
   - Render: Logs tab

---

## 🎉 That's It!

Once deployed:
- ✅ Contact form works everywhere
- ✅ Email notifications arrive instantly
- ✅ All messages stored in database
- ✅ Production-ready portfolio

Questions? Check the platform's documentation or the logs!

