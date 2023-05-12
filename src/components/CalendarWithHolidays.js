import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import indianHolidays from './indianHolidays.json';

const CalendarWithHolidays = () => {
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Upcoming Holidays</h2>
      <Calendar
        className="rounded-lg shadow-md"
        tileClassName="text-center border-2 border-gray-200"
        tileContent={({ date }) => {
          const formattedDate = formatDate(date);
          const holiday = indianHolidays.find((h) => h.date === formattedDate);
          if (holiday) {
            return (
              <p className="text-red-500 mt-2">
                {holiday.name}
              </p>
            );
          }
        }}
      />
    </div>
  );
};

export default CalendarWithHolidays;
