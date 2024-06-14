import React from 'react';

const TourPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <h1>Welcome to the Delegant Dashboard Tour</h1>
        <p>This tour will guide you through the features and navigation of the Delegant dashboard.</p>

        <h2>Calendar</h2>
        <p>The Calendar section allows you to view all the team members' calendar events in one place. Navigate to the "Main" section under "Calendar" to see the combined calendar view. Here, you can add, edit, or delete events as needed.</p>

        <h2>Work</h2>
        <p>The Work section is divided into several parts:</p>
        <ul>
          <li><strong>Goals:</strong> Manage and track your goals. You can set new goals, update progress, and view goal status.</li>
          <li><strong>Projects:</strong> Organize and oversee all your projects. This section helps you manage project details, timelines, and assignments.</li>
          <li><strong>Tasks:</strong> Keep track of individual tasks. You can add new tasks, assign them to team members, and monitor their completion.</li>
          <li><strong>Events:</strong> Schedule and view events. This section allows you to manage events specific to your team or project.</li>
          <li><strong>Shifts:</strong> Manage work shifts for team members. Assign shifts, track attendance, and ensure coverage for all roles.</li>
        </ul>

        <h2>Team</h2>
        <p>In the Team section, you can see a list of all your team members. Clicking on a team member's name will take you to their individual work details, where you can view their assigned tasks, projects, goals, and events.</p>

        <h2>Guides</h2>
        <p>The Guides section provides useful information and help resources:</p>
        <ul>
          <li><strong>Tour:</strong> This tour page explains the different features and navigation of the dashboard.</li>
          <li><strong>Help:</strong> Find help articles and support for using the dashboard.</li>
          <li><strong>FAQs:</strong> Browse frequently asked questions for quick answers to common issues.</li>
        </ul>

        <h2>Account Settings</h2>
        <p>Click on your username in the top right corner to access your account settings. Here, you can update your email address, username, and plan. You also have the option to log out from this menu.</p>
      </main>
    </div>
  );
};

export default TourPage;
