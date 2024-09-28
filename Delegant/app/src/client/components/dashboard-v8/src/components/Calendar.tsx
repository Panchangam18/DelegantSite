import React, { useEffect, useState } from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { useAuth } from 'wasp/client/auth'; // Assuming you're using Wasp for auth

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

const sampleEvents: CalendarEvent[] = [
  {
    id: '1',
    calendarId: '1',
    title: 'Team Meeting',
    category: 'time',
    start: '2024-07-11T10:00:00',
    end: '2024-07-11T11:00:00',
    location: 'Meeting Room 1'
  },
  {
    id: '2',
    calendarId: '1',
    title: 'Client Call',
    category: 'time',
    start: '2024-07-12T14:00:00',
    end: '2024-07-12T15:00:00',
    location: 'Zoom'
  },
  {
    id: '3',
    calendarId: '1',
    title: 'Project Deadline',
    category: 'time',
    start: '2024-07-15T00:00:00',
    end: '2024-07-15T23:59:59',
    isAllDay: true
  }
];

const DelegantDash: React.FC = () => {
  const { data: user } = useAuth();
  const authToken = user?.authToken;

  const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents);
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');

  const handleCalendarChange = () => {
    // This function can be used to handle changes in the calendar view if needed
  };

  const handleViewChange = (newView: 'month' | 'week' | 'day') => {
    setView(newView);
    const calendarInstance = calendarRef.current?.getInstance();
    if (calendarInstance) {
      calendarInstance.changeView(newView);
      handleCalendarChange();
    }
  };

  const handlePrev = () => {
    const calendarInstance = calendarRef.current?.getInstance();
    if (calendarInstance) {
      calendarInstance.prev();
      handleCalendarChange();
    }
  };

  const handleNext = () => {
    const calendarInstance = calendarRef.current?.getInstance();
    if (calendarInstance) {
      calendarInstance.next();
      handleCalendarChange();
    }
  };

  const calendarRef = React.useRef<any>(null);

  return (
    <div>
      <h1>Calendar Dashboard</h1>
      <div>
        <div className="view-buttons">
          <button className="nav-button" onClick={handlePrev}>Previous</button>
          <button className="nav-button" onClick={handleNext}>Next</button>
          <button className="view-button" onClick={() => handleViewChange('month')}>Month</button>
          <button className="view-button" onClick={() => handleViewChange('week')}>Week</button>
          <button className="view-button" onClick={() => handleViewChange('day')}>Day</button>
        </div>
        <Calendar
          ref={calendarRef}
          height="700px"
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
          view={view}
          onBeforeRenderEvent={handleCalendarChange}
        />
      </div>
      <style>
        {`
          .view-buttons {
            margin-bottom: 20px;
          }
          .view-button, .nav-button {
            background-color: #14B8A6;
            color: white;
            border: none;
            padding: 10px 20px;
            margin-right: 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 13px;
          }
          .view-button:hover, .nav-button:hover {
            background-color: #007267;
          }
          .toastui-calendar-milestone,
          .toastui-calendar-task,
          .toastui-calendar-allday,
          .toastui-calendar-panel-resizer {
            display: none !important;
          }
        `}
      </style>
    </div>
  );
};

export default DelegantDash;