// EmailJS Configuration
// To set up EmailJS for your portfolio:

export const emailJSConfig = {
  // You'll get these from https://www.emailjs.com/
  serviceID: 'YOUR_SERVICE_ID',
  templateID: 'YOUR_TEMPLATE_ID', 
  publicKey: 'YOUR_PUBLIC_KEY'
};

// Instructions to set up EmailJS:
/*
1. Go to https://www.emailjs.com/
2. Create a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Replace the values above with your actual keys
7. Uncomment the EmailJS code in Contact.jsx

Email Template Variables to use:
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email
- {{subject}} - Message subject
- {{message}} - Message content
- {{to_email}} - Your email (iapreddy2004@gmail.com)

Sample Email Template:
Subject: New Portfolio Contact: {{subject}}

Hello Anantha,

You have received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Contact Form
*/