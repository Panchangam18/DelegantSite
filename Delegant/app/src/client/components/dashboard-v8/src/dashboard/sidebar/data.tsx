import { EventIcon } from "./icons/EventIcon";
import { GuideIcon } from "./icons/GuideIcon";
// import { MessageIcon } from "./icons/MessageIcon";
// import { PictureIcon } from "./icons/PictureIcon";
import { DocumentIcon } from "./icons/DocumentIcon";
import { StatisticsIcon } from "./icons/StatisticsIcon";

const jsonData = {
  "workers": [
      {
          "name": "Madhavan Panch",
          "role_description": "team lead",
          "working_times_description": "everyday"
      },
      {
          "name": "John Doe",
          "role_description": "Janitor",
          "working_times_description": "Weekdays 9-5"
      },
      {
          "name": "Emily Lewis",
          "role_description": "Software Engineer",
          "working_times_description": "Weekdays 10-6"
      },
      {
          "name": "Carlos Pedrito",
          "role_description": "Marketing Specialist",
          "working_times_description": "Weekdays 9-5"
      },
      {
          "name": "Priya Patel",
          "role_description": "HR Manager",
          "working_times_description": "Weekdays 8-4"
      },
      {
          "name": "Aisha Mehta",
          "role_description": "Data Analyst",
          "working_times_description": "Weekdays 9-5"
      }
  ]
}


const teamContent = jsonData.workers.map(worker => ({
  title: worker.name,
  link: `/dashboard/worker/${encodeURIComponent(worker.name)}`,
}));

export const data = [
  {
    section: "Calendar",
    icon: <EventIcon />,
    content: [
      {
        title: "Main",
        link: "/dashboard",
      },
    ],
  },
  {
    section: "Work",
    icon: <DocumentIcon />,
    content: [
      {
        title: "Goals",
        link: "/dashboard/goals",
      },
      {
        title: "Projects",
        link: "/dashboard/projects",
      },
      {
        title: "Tasks",
        link: "/dashboard/tasks",
      },
      {
        title: "Events",
        link: "/dashboard/events",
      },
      {
        title: "Shifts",
        link: "/dashboard/shifts",
      },
    ],
  },
  // {
  //   section: "Messages",
  //   icon: <MessageIcon />,
  //   content: [
  //     {
  //       title: "Unbox",
  //       link: "/messages/unbox",
  //     },
  //     {
  //       title: "Unread",
  //       link: "/messages/unread",
  //     },
  //     {
  //       title: "Archived",
  //       link: "/messages/archived",
  //     },
  //   ],
  // },
  // {
  //   section: "Pictures",
  //   icon: <PictureIcon />,
  //   content: [
  //     {
  //       title: "Vacations",
  //       link: "/pictures/vacations",
  //     },
  //     {
  //       title: "Anniversary",
  //       link: "/pictures/anniversary",
  //     },
  //     {
  //       title: "University",
  //       link: "/pictures/university",
  //     },
  //   ],
  // },
  {
    section: "Team",
    icon: <StatisticsIcon />,
    content: teamContent,
  },
  {
    section: "Guides",
    icon: <GuideIcon />,
    content: [
      {
        title: "Tour",
        link: "/dashboard/tour",
      },
      {
        title: "Help",
        link: "/dashboard/help",
      },
      {
        title: "FAQs",
        link: "/dashboard/faqs",
      },
    ],
  },
];
