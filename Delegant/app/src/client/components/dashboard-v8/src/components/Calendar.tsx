import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { useAuth } from 'wasp/client/auth'; // Assuming you're using Wasp for auth

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://lexal-api.fly.dev/api/delegant', // Adjust this URL based on your backend setup
  headers: {
    'Content-Type': 'application/json',
  },
});

interface CalendarEvent {
  id: string;
  calendarId: string;
  title: string;
  category: 'time';
  start: string;
  end: string;
  isAllDay?: boolean;
  state?: 'Busy';
  location?: string;
}

interface TeamMemberCalendarEvent {
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
  description?: string;
  location?: string;
}

interface TeamMemberCalendar {
  team_member: string;
  events: TeamMemberCalendarEvent[];
}

const DelegantDash: React.FC = () => {
  const { data: user } = useAuth();
  const authToken = user?.authToken;

  const [events, setEvents] = useState<CalendarEvent[]>([]);

  // Fetch calendars and flatten events
  useEffect(() => {
    const fetchCalendars = async () => {
      try {
        const response = await axiosInstance.get('/team-members-calendars/', {
          headers: { Authorization: `Token ${authToken}` },
        });
        const calendarEvents = response.data.calendars.flatMap((member: TeamMemberCalendar) =>
          member.events.map(event => ({
            // id: event.id, // Ensure the event has a unique ID
            calendarId: '1', // Customize calendar ID as needed
            title: event.summary,
            category: 'time',
            start: event.start.dateTime,
            end: event.end.dateTime,
            location: event.location,
          }))
        );
        setEvents(calendarEvents);
      } catch (error) {
        console.error('Error fetching calendar events', error);
      }
    };

    fetchCalendars();
  }, [authToken]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Team Members' Calendars</h2>
        <Calendar
          height="900px"
          useDetailPopup={true}
          useFormPopup={true}
          calendars={[
            {
              id: '1',
              name: 'Company',
              color: '#00a9ff',
              borderColor: '#00a9ff',
            },
          ]}
          events={events}
        />
      </div>
    </div>
  );
};

export default Calendar;
