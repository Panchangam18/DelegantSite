import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth } from 'wasp/client/auth';

// import page components here
import HomePage from './pages/index';
import AccountPage from '../../../app/AccountPage';
import WorkerPage from './pages/WorkerPage';
import TourPage from './pages/tour';
import FaqPage from './pages/FaqPage';
import HelpPage from './pages/HelpPage';

// Creating a mapping from paths to components
const routeComponents = {
  '/dashboard': HomePage,
  '/account': AccountPage,
  '/dashboard/tour': TourPage,
  '/dashboard/faqs': FaqPage,
  '/dashboard/help': HelpPage,
};

const workers = [
  {
    name: "Madhavan Panch",
    role_description: "team lead",
    working_times_description: "everyday"
  },
  {
    name: "John Doe",
    role_description: "Janitor",
    working_times_description: "Weekdays 9-5"
  },
  {
    name: "Emily Lewis",
    role_description: "Software Engineer",
    working_times_description: "Weekdays 10-6"
  },
  {
    name: "Carlos Pedrito",
    role_description: "Marketing Specialist",
    working_times_description: "Weekdays 9-5"
  },
  {
    name: "Priya Patel",
    role_description: "HR Manager",
    working_times_description: "Weekdays 8-4"
  },
  {
    name: "Aisha Mehta",
    role_description: "Data Analyst",
    working_times_description: "Weekdays 9-5"
  }
];

function App() {
  const { data: user } = useAuth();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        {Object.entries(routeComponents).map(([path, Component], index) => (
          <Route key={index} path={path} exact>
            {user && <Component user={user} />}
          </Route>
        ))}
        <Route path="/dashboard/worker/:name">
          {user && <WorkerPage workers={workers} />}
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
