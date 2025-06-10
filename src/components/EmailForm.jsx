import { useState } from "react";
import emailjs from '@emailjs/browser';
import '../css/EmailForm.css';

const EmailForm = ({ onClose }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              user_name: userName,
              user_email: userEmail,
              user_message: userMessage
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            (result) => {
                console.log('Email sent successfully:', result.text);
                alert('Email sent!');
            },
            (error) => {
                console.error('Email send error:', error.text);
                alert('Something went wrong.');
            }
        );

        setUserName("");
        setUserEmail("");
        setUserMessage("");
    };

    return (
      <div className="modal-overlay">
        <div className="email-form">
          <button className="close-button" onClick={onClose}>X</button>
            <h3>Contact Me</h3>
            <form onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="John Smith"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                maxLength={100}
                required
                />
                <input
                type="email"
                placeholder="johnsmith@example.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                maxLength={100}
                required
                />
                <input
                type="text"
                placeholder="Enter your message"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                maxLength={1000}
                required
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
      </div>
    );
};

export default EmailForm;