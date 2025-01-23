const nodemailer = require('nodemailer');

// Set up transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD, // Use an App Password
    },
});

// Utility function to send emails
const sendEmail = async (to, subject, body) => {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to,
        subject,
        html: body,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error.message);
        throw new Error('Email sending failed');
    }
};

module.exports = sendEmail;
