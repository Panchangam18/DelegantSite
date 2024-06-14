import React from 'react';

const HelpPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <h1>Help & Support</h1>
        <p>If you need any assistance or have any questions, feel free to reach out to us:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:mpanchangam.18@gmail.com">mpanchangam.18@gmail.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+17044930264">704-493-0264</a></li>
        </ul>
        <p>We are here to help you with any issues or concerns you might have. Don't hesitate to contact us for support.</p>
      </main>
    </div>
  );
};

export default HelpPage;
