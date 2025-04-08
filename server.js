const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, message, plan, enquiryType } = req.body;

    // Format the message for WhatsApp
    const whatsappMessage = `
New Contact Form Submission:
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Plan: ${plan}
Enquiry Type: ${enquiryType}
Message: ${message}
    `.trim();

    // Create WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${process.env.WHATSAPP_NUMBER}&text=${encodeURIComponent(whatsappMessage)}`;

    res.status(200).json({ 
      message: 'WhatsApp URL generated successfully',
      whatsappUrl: whatsappUrl
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 