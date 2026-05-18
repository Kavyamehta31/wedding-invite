# 🚀 QUICK START GUIDE

## Installation & Running (2 minutes)

### Step 1: Install Dependencies

```bash
cd server
npm install
```

### Step 2: MongoDB Setup

**Option A - MongoDB Atlas (Cloud) - RECOMMENDED**

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Copy connection string
5. Paste in `server/.env` as `MONGO_URI`

**Option B - Local MongoDB**

1. Install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB (it runs automatically on `mongodb://localhost:27017`)
3. `server/.env` already configured for local

### Step 3: Start Backend Server

```bash
cd server
npm start
```

Server runs on: `http://localhost:5000`

### Step 4: Open Website

- **Option A (Easiest):** Double-click `client/index.html`
- **Option B (Better):** Use VS Code Live Server extension
- **Option C:** Command line:
  ```bash
  cd client
  python -m http.server 8000
  # Open http://localhost:8000
  ```

## That's It! 🎉

The website now works with:
✅ Interactive envelope
✅ Live countdown timer
✅ RSVP form saving to MongoDB
✅ Music toggle
✅ Scroll animations
✅ Mobile responsive
✅ WhatsApp integration

---

## Common Commands

### Restart Server

```bash
cd server
npm start
```

### Stop Server

Press `Ctrl + C` in terminal

### View All RSVPs

Visit: `http://localhost:5000/api/rsvps`

### RSVP Statistics

Visit: `http://localhost:5000/api/rsvps/stats`

---

## Customization Quick Links

**Edit couple names:** `client/index.html` (search for "Prisha" & "Ankit")
**Edit wedding date:** `client/index.html` (search for "9 December 2026")
**Edit colors:** `client/style.css` (top of file, `:root` section)
**Edit WhatsApp numbers:** `client/index.html` (bottom, "whatsapp-container" section)
**Edit events:** `client/index.html` (search for "event-card")

---

## Troubleshooting

**"Cannot GET /"**
→ Make sure you're opening `client/index.html` or using a local server

**RSVP not submitting**
→ Check server is running on localhost:5000
→ Check MongoDB is running (MongoDB Atlas or local)
→ Check browser console (F12) for errors

**Music not playing**
→ Some browsers need user interaction first
→ Check file exists: `client/assets/music/jashn-e-bahaara.mp3`

**Styling looks wrong**
→ Clear browser cache: Ctrl+Shift+Delete

**Mobile view looks bad**
→ Add this to browser address bar: `>Toggle device toolbar` or press `Ctrl+Shift+M`

---

## Frontend Features

### Interactive Elements

- Click envelope to open invitation
- Click music button to toggle background music
- Scroll to reveal animations
- Click date cards to scratch and reveal
- RSVP button opens form with validation
- WhatsApp chat button

### Responsive Design

- Desktop (1024px+)
- Tablet (768px-1024px)
- Mobile (below 768px)

### Performance

- Lazy loading images
- Optimized animations
- Mobile-friendly touch controls
- Fast page load time

---

## Backend API

### Submit RSVP

```
POST http://localhost:5000/api/rsvp
Content-Type: application/json

{
  "name": "Guest Name",
  "attending": "yes",
  "guests": 1,
  "message": "Looking forward!"
}
```

### Get All RSVPs

```
GET http://localhost:5000/api/rsvps
```

### Get RSVP Stats

```
GET http://localhost:5000/api/rsvps/stats
```

---

## Advanced Customization

### Change Wedding Date (for countdown)

Edit `client/script.js`, find:

```javascript
const weddingDate = new Date("December 9, 2026 00:00:00").getTime();
```

Change to your date.

### Add More WhatsApp Contacts

Edit `client/index.html`, add more `<a>` tags in whatsapp-container:

```html
<a href="https://wa.me/919876543210" target="_blank" class="wa-btn">
  <span class="wa-emoji">📱</span>
  <span>Other Contact</span>
</a>
```

### Change Color Scheme

Edit `client/style.css`, modify `:root` variables:

```css
:root {
  --gold: #ffd700; /* Change primary color */
  --blue: #1e90ff; /* Change secondary color */
  --ivory: #fffff0; /* Change background */
}
```

---

## Deployment (Optional)

### Free Hosting Options

**Backend:**

- Heroku (free tier ending, check alternatives)
- Railway.app (very easy)
- Render.com (free tier available)
- Replit.com (easiest for Node.js)

**Frontend:**

- Netlify (connect to GitHub)
- Vercel (connect to GitHub)
- GitHub Pages
- Surge.sh

Full deployment guides in README.md

---

## File Structure Reference

```
wedding-invite/
├── client/
│   ├── index.html (Main page - no changes needed to get running)
│   ├── style.css (All styling - edit colors here)
│   ├── script.js (All JavaScript - edit dates/numbers here)
│   └── assets/
│       ├── images/
│       │   ├── venue.svg
│       │   └── hero-bg.svg
│       ├── icons/ (optional)
│       └── music/ (add your music file here)
│
├── server/
│   ├── server.js (Backend server - no changes needed)
│   ├── package.json (Dependencies - don't edit)
│   └── .env (Configuration - edit MONGO_URI only)
│
├── README.md (Full documentation)
├── setup.bat (Windows auto-setup)
└── start-server.bat (Quick server start)
```

---

## Need Help?

1. Check browser console: F12 → Console tab
2. Check server logs in terminal
3. Check MongoDB is connected
4. Verify file paths exist
5. Clear cache and reload

---

## Success! 🎊

Your wedding website is now ready!

Next steps:

1. Customize names, dates, colors
2. Add your own music
3. Add venue photo
4. Share the link with guests
5. Monitor RSVPs in MongoDB

**Made with ❤️ for your special day!**
