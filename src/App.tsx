import { useState } from "react";

import { Calendar } from "./Calendar";

const calendarEvents = [
  {
    id: "bahrain-grand-prix",
    label: "Bahrain Grand Prix",
    start: "2027-03-12",
    end: "2027-03-14",
  },
  {
    id: "saudi-arabian-grand-prix",
    label: "Saudi Arabian Grand Prix",
    start: "2027-03-19",
    end: "2027-03-21",
  },
  {
    id: "australian-grand-prix",
    label: "Australian Grand Prix",
    start: "2027-04-02",
    end: "2027-04-04",
  },
  {
    id: "japanese-grand-prix",
    label: "Japanese Grand Prix",
    start: "2027-04-09",
    end: "2027-04-11",
  },
  {
    id: "chinese-grand-prix",
    label: "Chinese Grand Prix",
    start: "2027-04-16",
    end: "2027-04-18",
  },
  {
    id: "miami-grand-prix",
    label: "Miami Grand Prix",
    start: "2027-04-30",
    end: "2027-05-02",
  },
  {
    id: "canadian-grand-prix",
    label: "Canadian Grand Prix",
    start: "2027-05-21",
    end: "2027-05-23",
  },
  {
    id: "monaco-grand-prix",
    label: "Monaco Grand Prix",
    start: "2027-06-04",
    end: "2027-06-06",
  },
  {
    id: "portuguese-grand-prix",
    label: "Portuguese Grand Prix",
    start: "2027-06-18",
    end: "2027-06-20",
  },
  {
    id: "british-grand-prix",
    label: "British Grand Prix",
    start: "2027-07-02",
    end: "2027-07-04",
  },
  {
    id: "austrian-grand-prix",
    label: "Austrian Grand Prix",
    start: "2027-07-09",
    end: "2027-07-11",
  },
  {
    id: "belgian-grand-prix",
    label: "Belgian Grand Prix",
    start: "2027-07-23",
    end: "2027-07-25",
  },
  {
    id: "hungarian-grand-prix",
    label: "Hungarian Grand Prix",
    start: "2027-07-30",
    end: "2027-08-01",
  },
  {
    id: "italian-grand-prix",
    label: "Italian Grand Prix",
    start: "2027-09-03",
    end: "2027-09-05",
  },
  {
    id: "spanish-grand-prix",
    label: "Spanish Grand Prix",
    start: "2027-09-10",
    end: "2027-09-12",
  },
  {
    id: "azerbaijan-grand-prix",
    label: "Azerbaijan Grand Prix",
    start: "2027-09-24",
    end: "2027-09-26",
  },
  {
    id: "turkish-grand-prix",
    label: "Turkish Grand Prix",
    start: "2027-10-01",
    end: "2027-10-03",
  },
  {
    id: "singapore-grand-prix",
    label: "Singapore Grand Prix",
    start: "2027-10-08",
    end: "2027-10-10",
  },
  {
    id: "united-states-grand-prix",
    label: "United States Grand Prix",
    start: "2027-10-22",
    end: "2027-10-24",
  },
  {
    id: "mexican-grand-prix",
    label: "Mexico City Grand Prix",
    start: "2027-10-29",
    end: "2027-10-31",
  },
  {
    id: "sao-paulo-grand-prix",
    label: "São Paulo Grand Prix",
    start: "2027-11-05",
    end: "2027-11-07",
  },
  {
    id: "las-vegas-grand-prix",
    label: "Las Vegas Grand Prix",
    start: "2027-11-18",
    end: "2027-11-20",
  },
  {
    id: "qatar-grand-prix",
    label: "Qatar Grand Prix",
    start: "2027-12-03",
    end: "2027-12-05",
  },
  {
    id: "abu-dhabi-grand-prix",
    label: "Abu Dhabi Grand Prix",
    start: "2027-12-10",
    end: "2027-12-12",
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
          ? "dark flow-root min-h-screen bg-slate-950 text-slate-100"
          : "flow-root min-h-screen bg-slate-50 text-slate-900"
      }
    >
      <button
        type="button"
        className="
          theme-toggle relative mt-4 mr-4 ml-auto flex w-fit rounded-md border
          border-slate-300 px-3 py-2 text-sm font-medium transition
          hover:bg-slate-200
          sm:absolute sm:top-6 sm:right-6 sm:m-0
        "
        onClick={() => setIsDarkMode((enabled) => !enabled)}
        aria-pressed={isDarkMode}
      >
        {isDarkMode ? "Light mode" : "Dark mode"}
      </button>

      <div className="pb-6">
        <h1
          className="calendar-heading pt-6 pb-2 text-center text-3xl font-bold"
        >
          F1 2027 Calendar
        </h1>
        {monthsToDisplay.map((month) => (
          <Calendar key={month} month={month} year={2027} events={getEventsForMonth(month, 2027)} />
        ))}
      </div>
    </main>
  );
}

export default App;
