const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  // Mailchimp configuration
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = API_KEY.split('-')[1];

  try {
    // Create member in Mailchimp list
    const response = await axios.post(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mailchimp API error:', error.response?.data || error.message);
    
    if (error.response?.data?.title === 'Member Exists') {
      return res.status(200).json({ 
        success: true, 
        message: 'You are already subscribed to our newsletter!'
      });
    }
    
    return res.status(500).json({ 
      error: 'Failed to subscribe', 
      details: error.response?.data?.title || 'Unknown error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});