import "tailwindcss/tailwind.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { DashboardLayout } from "./dashboard/Layout";
import { type User } from "wasp/entities";
import { useHistory } from 'react-router-dom';

const DashboardComponent = ({ user }: { user: User }) => {
  const history = useHistory();

//   if (user.subscriptionStatus !== 'active') {
//     history.push('/pricing');
//     return null;
//   }

  return (
    <React.StrictMode>
      <Router>
        <DashboardLayout>
          <App />
        </DashboardLayout>
      </Router>
      
    </React.StrictMode>
  );
};

export default DashboardComponent;