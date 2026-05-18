const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());

/* =========================
   DATABASE CONNECTION
========================= */

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log('✅ MongoDB Connected');

})

.catch((err) => {

  console.log(
    '❌ MongoDB Connection Error'
  );

  console.log(err.message);

});

/* =========================
   RSVP SCHEMA
========================= */

const rsvpSchema = new mongoose.Schema({

  name: {

    type: String,

    required: true,

    trim: true

  },

  guests: {

    type: Number,

    required: true

  },

  message: {

    type: String,

    trim: true,

    default: ''

  },

  createdAt: {

    type: Date,

    default: Date.now

  }

});

const RSVP =
  mongoose.model('RSVP', rsvpSchema);

/* =========================
   HOME ROUTE
========================= */

app.get('/', (req, res) => {

  res.send(
    'Wedding Invitation API Running'
  );

});

/* =========================
   SAVE RSVP
========================= */

app.post('/rsvp', async (req, res) => {

  try {

    const {
      name,
      guests,
      message
    } = req.body;

    /* VALIDATION */

    if (!name || !guests) {

      return res.status(400).json({

        success: false,

        message:
          'Please fill all required fields'

      });

    }

    /* SAVE TO DATABASE */

    const newRSVP = new RSVP({

      name,
      guests,
      message

    });

    await newRSVP.save();

    res.status(201).json({

      success: true,

      message:
        'RSVP Saved Successfully'

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
        'Internal Server Error'

    });

  }

});

/* =========================
   GET ALL RSVPS
========================= */

app.get('/rsvps', async (req, res) => {

  try {

    const allRSVPs =
      await RSVP.find()
      .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,

      data: allRSVPs

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
        'Failed to fetch RSVPs'

    });

  }

});

/* =========================
   DELETE RSVP
========================= */

app.delete('/rsvp/:id',
  async (req, res) => {

    try {

      await RSVP.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({

        success: true,

        message:
          'RSVP Deleted'

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          'Delete Failed'

      });

    }

  }
);

/* =========================
   SERVER
========================= */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});