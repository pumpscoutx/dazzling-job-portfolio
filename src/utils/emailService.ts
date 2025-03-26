
import emailjs from 'emailjs-com';

// You'll need to set up an EmailJS account and update these values
// Go to https://www.emailjs.com/ to set up a free account
const EMAIL_SERVICE_ID = "service_id";  // Replace with your EmailJS service ID
const EMAIL_TEMPLATE_ID = "template_id";  // Replace with your EmailJS template ID
const EMAIL_USER_ID = "user_id";  // Replace with your EmailJS user ID

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
  toEmail: string;
}

export const sendEmail = async (params: EmailParams): Promise<{ success: boolean; message: string }> => {
  const { name, email, subject, message, toEmail } = params;
  
  try {
    // For development/demo purposes, log the email data
    console.log("Sending email with the following data:", { name, email, subject, message, toEmail });
    
    // In production, uncomment the following code and replace the IDs with your actual EmailJS credentials
    /*
    await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      {
        from_name: name,
        reply_to: email,
        to_email: toEmail,
        subject: subject,
        message: message
      },
      EMAIL_USER_ID
    );
    */
    
    // For demo purposes, we'll simulate a successful email send
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      success: true,
      message: "Email sent successfully!"
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later."
    };
  }
};
