# 🎉 Prisha & Ankit - Royal Wedding Invitation Website

A complete, production-ready wedding invitation website with RSVP functionality, MongoDB backend, smooth animations, and full responsive design.

## ✨ Features

✅ **Interactive Envelope Screen** - Beautiful click-to-open invitation animation
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **Smooth Animations** - Scroll reveals, floating particles, and transitions
✅ **Countdown Timer** - Live countdown to the wedding date
✅ **Scratch-to-Reveal Cards** - Interactive date reveal scratch cards
✅ **Event Timeline** - Complete schedule of ceremonies and events
✅ **RSVP Functionality** - Form validation and MongoDB integration
✅ **WhatsApp Integration** - Quick contact buttons
✅ **Background Music** - Toggle wedding music
✅ **Performance Optimized** - Lazy loading, debounced scrolling
✅ **Dark Mode Support** - Automatic dark mode detection
✅ **Mobile Optimized** - Touch-friendly interactions

## 📁 Project Structure

```
wedding-invite/
├── client/
│   ├── index.html          # Main HTML structure
│   ├── style.css           # Complete styling with responsive design
│   ├── script.js           # All JavaScript functionality
│   └── assets/
│       ├── images/
│       │   ├── venue.svg
│       │   └── hero-bg.svg
│       ├── icons/          # For custom icons
│       └── music/          # Background music files
└── server/
    ├── server.js           # Express backend with MongoDB
    ├── package.json        # Node dependencies
    ├── .env               # Environment configuration
    └── .gitignore         # Git ignore rules
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14+)
- MongoDB (local or MongoDB Atlas cloud)
- Modern web browser

### 1. Clone / Setup Project

```bash
cd wedding-invite
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Configure MongoDB

Edit `server/.env`:

```env
# Local MongoDB
MONGO_URI=mongodb://localhost:27017/wedding-invite
PORT=5000
NODE_ENV=development

# OR MongoDB Atlas (cloud):
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding-invite?retryWrites=true&w=majority
```

### 4. Start MongoDB (if using local)

**Windows:**

```bash
mongod
```

**Mac/Linux:**

```bash
brew services start mongodb-community
# or
sudo systemctl start mongod
```

### 5. Start Backend Server

```bash
npm start
# or for development with auto-reload:
npm run dev
```

Server will run on: `http://localhost:5000`

### 6. Open Website

Simply open `client/index.html` in your browser:

- Double-click the file, or
- Use Live Server extension in VS Code, or
- Serve with any local server:

```bash
# Python 3
python -m http.server 8000

# Node http-server
npx http-server ./client
```

## 🎯 Usage

### Opening the Invitation

1. Click on the golden sealed envelope
2. Watch the envelope open animation
3. Main celebration page reveals with music

### RSVP Form

1. Scroll down to "Confirm Attendance"
2. Click "RSVP Now" button
3. Fill form with validation:
   - Name (required, 2+ characters)
   - Attendance status (yes/no)
   - Message (optional)
4. Submit - data saved to MongoDB

### Scratch Cards

- Hover over the date cards to see a preview
- Scratch with mouse or touch to reveal the full date
- Automatic reveal at 40% scratched

### WhatsApp Contact

- Click the chat bubble (bottom right)
- Choose contact to message organizers

### Music Control

- Click the music button (bottom left)
- Toggle background music on/off

## 🎨 Customization

### Edit Wedding Details

**HTML (client/index.html):**

```html
<title>Prisha & Ankit | Royal Wedding • 9 December 2026</title>
<h1 class="bride-name">Prisha</h1>
<h1 class="groom-name">Ankit</h1>
<p class="hero-date">9 December 2026</p>
```

### Edit Colors

**CSS Variables (client/style.css):**

```css
:root {
  --ivory: #faf6f0; /* Light background */
  --gold: #c9a84c; /* Primary accent */
  --blue: #5d7394; /* Secondary color */
  /* ... more colors ... */
}
```

### Edit WhatsApp Numbers

**HTML (near end of index.html):**

```html
<a href="https://wa.me/919425063550" target="_blank"> Nitin Ji • Bride Side </a>
```

### Add Background Music

Place MP3 file at: `client/assets/music/jashn-e-bahaara.mp3`

Edit HTML to change music source:

```html
<audio id="bgMusic" loop>
  <source src="assets/music/your-song.mp3" type="audio/mp3" />
</audio>
```

### Edit Events

**HTML Timeline Section:**

```html
<div class="event-card left scroll-reveal">
  <div class="event-dot"></div>
  <div class="event-body">
    <span class="event-time">HH:MM AM/PM</span>
    <h3>Event Name</h3>
    <p>Description</p>
  </div>
</div>
```

## 🔧 API Endpoints

### POST `/api/rsvp`

Submit a guest RSVP

**Request:**

```json
{
  "name": "Guest Name",
  "attending": "yes",
  "guests": 1,
  "message": "Looking forward to it!"
}
```

**Response:**

```json
{
  "success": true,
  "message": "RSVP Submitted Successfully",
  "data": { ... }
}
```

### GET `/api/rsvps`

Get all RSVPs (admin)

**Query Parameters:**

- `attending` - Filter by "yes" or "no"
- `limit` - Number of results (default: 50)
- `skip` - Skip records (default: 0)

### GET `/api/rsvps/stats`

Get RSVP statistics

### PUT `/api/rsvp/:id`

Update an RSVP by ID

### DELETE `/api/rsvp/:id`

Delete an RSVP by ID

## 📱 Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## ⚙️ Performance Features

- **Lazy Loading:** Images load on-demand
- **Debounced Scrolling:** Optimized scroll events
- **Hardware Acceleration:** GPU rendering for animations
- **Minified Assets:** Production-ready
- **Prefers Reduced Motion:** Respects user preferences

## 🐛 Troubleshooting

### RSVP Not Submitting

1. Check MongoDB is running: `mongosh`
2. Verify server is running: `http://localhost:5000`
3. Check browser console (F12) for errors
4. Ensure CORS is properly configured

### Music Not Playing

- Some browsers require user interaction first
- Check if audio file exists at correct path
- Try different audio format (mp3, wav, ogg)

### Images Not Loading

- Check image paths in HTML/CSS
- Verify files exist in `assets/images/`
- Use browser DevTools to check 404 errors

### Responsive Design Issues

- Clear browser cache
- Test in incognito mode
- Check viewport meta tag in HTML head
- Verify media queries in CSS

## 📊 Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers
⚠️ IE11 (limited support)

## 🔒 Security Notes

- Input validation on both client and server
- MongoDB injection prevention
- CORS configured for allowed origins
- No sensitive data in frontend code
- Environment variables for secrets

## 📦 Dependencies

**Frontend:**

- HTML5
- CSS3 with Grid/Flexbox
- Vanilla JavaScript (no frameworks)

**Backend:**

- Express.js (web framework)
- Mongoose (MongoDB ODM)
- CORS (cross-origin handling)
- dotenv (environment variables)

## 🚀 Deployment

### Deploy Backend (Free Options)

- **Heroku:** `git push heroku main`
- **Railway:** Connect GitHub repo
- **Render:** Set up from GitHub
- **AWS/Azure/Google Cloud:** Paid options

### Deploy Frontend

- **Netlify:** Drag-drop or Git connect
- **Vercel:** Git connect
- **GitHub Pages:** For static hosting
- **Your Domain:** Using any web host

## 📝 License

Personal use only. Created for Prisha & Ankit's wedding.

## 💬 Support

For issues or customization:

1. Check the troubleshooting section
2. Review browser console errors
3. Verify all files are in correct locations
4. Ensure MongoDB is running

---

**Made with ❤️ for a perfect celebration** 🎉
