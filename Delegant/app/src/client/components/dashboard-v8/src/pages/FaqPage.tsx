import React from 'react';

const FaqPage = () => {
  const faqs = [
    {
      question: "What is Delegant?",
      answer: "Delegant is an AI-driven platform that automates employee scheduling and manages their calendars. It helps small businesses streamline their scheduling process and improve team coordination."
    },
    {
      question: "How do I add a new team member?",
      answer: "To add a new team member, go to the 'Team' section in the sidebar, click on 'Add Team Member,' and fill in the required details. The new member will receive an invitation to join the platform."
    },
    {
      question: "Can I integrate Google Calendar with Delegant?",
      answer: "Yes, Delegant supports integration with Google Calendar. You can connect your Google account from the account settings page and sync your calendar events seamlessly."
    },
    {
      question: "How do I manage shifts for my team?",
      answer: "To manage shifts, navigate to the 'Shifts' section under 'Work' in the sidebar. Here, you can assign, edit, and track shifts for all team members."
    },
    {
      question: "Where can I find help and support?",
      answer: "For help and support, go to the 'Guides' section in the sidebar and click on 'Help.' You will find detailed articles and support resources to assist you with any issues."
    }
  ];

  return (
    <div style={{ display: 'flex' }}>
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2 style={{ marginBottom: '10px' }}>{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FaqPage;
