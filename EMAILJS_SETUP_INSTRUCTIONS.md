# 📧 EmailJS Setup Instructions for Your Portfolio

Your contact form is now configured with EmailJS! Follow these steps to start receiving messages directly in your email.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. For Gmail:
   - Click "Connect Account"
   - Login with your Gmail (iapreddy2004@gmail.com)
   - Grant permissions
5. Note down your **Service ID** (e.g., "service_xyz123")

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Set up your template:

**Template Name:** Portfolio Contact Form

**Subject:** New Portfolio Message: {{subject}}

**Content:**
```
Hello Anantha,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

You can reply directly to: {{from_email}}

Best regards,
Your Portfolio Contact Form
```

4. Note down your **Template ID** (e.g., "template_abc456")

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "user_def789")

### Step 5: Update Your Portfolio
1. Open `/app/frontend/src/components/Contact.jsx`
2. Find these lines around line 25:
```javascript
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

3. Replace with your actual values:
```javascript
const serviceID = 'service_xyz123';  // Your Service ID
const templateID = 'template_abc456'; // Your Template ID
const publicKey = 'user_def789';      // Your Public Key
```

4. Uncomment the EmailJS code (remove the /* and */ comments)
5. Comment out or remove the setTimeout simulation code

### Step 6: Test Your Contact Form
1. Visit your portfolio
2. Fill out the contact form
3. Submit the message
4. Check your email inbox for the message!

## 🎯 What You'll Receive

When someone fills out your contact form, you'll get an email like this:

```
From: noreply@emailjs.com
To: iapreddy2004@gmail.com
Subject: New Portfolio Message: Job Opportunity

Hello Anantha,

You have received a new message from your portfolio website:

Name: John Recruiter
Email: john@company.com
Subject: Job Opportunity

Message:
Hi Anantha, I saw your portfolio and I'm impressed with your projects. 
We have an exciting AI Developer position that would be perfect for you. 
Would you be interested in discussing this opportunity?

You can reply directly to: john@company.com
```

## 🔧 Troubleshooting

**Messages not arriving?**
- Check your spam/junk folder
- Verify Service ID, Template ID, and Public Key are correct
- Make sure EmailJS service is connected to your email
- Check EmailJS dashboard for delivery status

**Getting errors?**
- Ensure you've uncommented the EmailJS code
- Check browser console for error messages
- Verify your EmailJS account is verified

## 📈 Free Plan Limits
- 200 emails/month (plenty for a portfolio)
- No credit card required
- Can upgrade later if needed

## 🎉 You're All Set!

Once configured, your portfolio will:
✅ Send messages directly to your email
✅ Show success/error notifications to visitors
✅ Work reliably without any backend server
✅ Be ready for professional use

Your portfolio is now ready to receive real messages from potential employers and collaborators!