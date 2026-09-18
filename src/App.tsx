import { useState } from "react";
import { Calendar } from "./Calendar";

const calendarEvents = [
  {
    id: "team-retreat",
    label: "Team retreat",
    start: "2027-03-05",
    end: "2027-03-07",
  },
  {
    id: "spring-break",
    label: "Spring break",
    start: "2027-04-12",
    end: "2027-04-16",
  },
  {
    id: "product-launch",
    label: "Product launch",
    start: "2027-05-03",
    end: "2027-05-03",
  },
  {
    id: "planning-sprint",
    label: "Planning sprint",
    start: "2027-06-20",
    end: "2027-06-24",
  },
  {
    id: "summer-holiday",
    label: "Summer holiday",
    start: "2027-07-19",
    end: "2027-07-30",
  },
  {
    id: "roadshow",
    label: "Roadshow",
    start: "2027-08-10",
    end: "2027-08-12",
  },
  {
    id: "q3-review",
    label: "Q3 review",
    start: "2027-09-15",
    end: "2027-09-17",
  },
  {
    id: "conference",
    label: "Conference",
    start: "2027-10-04",
    end: "2027-10-08",
  },
  {
    id: "client-release",
    label: "Client release",
    start: "2027-11-22",
    end: "2027-11-25",
  },
  {
    id: "holiday-shutdown",
    label: "Holiday shutdown",
    start: "2027-12-20",
    end: "2027-12-31",
  },
];

const monthsToDisplay = Array.from({ length: 10 }, (_, index) => index + 3);

function getEventsForMonth(month: number, year: number) {
  const monthStart = new Date(year, month - 1, 1);
  const monthEnd = new Date(year, month, 0);

  return calendarEvents.filter((event) => {
    const startDate = new Date(`${event.start}T00:00:00`);
    const endDate = new Date(`${event.end}T00:00:00`);

    return startDate <= monthEnd && endDate >= monthStart;
  });
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main
      className={
        isDarkMode
          ? "dark min-h-screen bg-slate-950 text-slate-100"
          : "min-h-screen bg-slate-50 text-slate-900"
      }
    >
      <button
        type="button"
        className="theme-toggle absolute right-6 top-6 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium transition hover:bg-slate-200"
        onClick={() => setIsDarkMode((enabled) => !enabled)}
        aria-pressed={isDarkMode}
      >
        {isDarkMode ? "Light mode" : "Dark mode"}
      </button>

      {monthsToDisplay.map((month) => (
        <Calendar
          key={month}
          month={month}
          year={2027}
          events={getEventsForMonth(month, 2027)}
        />
      ))}
    </main>
  );
}

export default App;
