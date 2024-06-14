// Content.tsx
import React from 'react';
import MyCalendar from './Calendar';

interface ContentProps {
  title?: string;
}

export function Content(props: ContentProps) {
  return (
    <div className="relative h-screen bg-gray-100">
      <MyCalendar />
    </div>
  );
}
