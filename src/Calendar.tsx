const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type CalendarProps = {
  month: number;
  year: number;
  events?: MultiDayEvent[];
};

export type MultiDayEvent = {
  id: string;
  label: string;
  start: string;
  end: string;
};

function getCalendarDays(month: number, year: number) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  const daysInMonth = lastDay.getDate();
  const startingDay = (firstDay.getDay() + 6) % 7;

  const days: (number | null)[] = [];

  for (let i = 0; i < startingDay; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return days;
}

function getDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function Calendar({ month, year, events = [] }: CalendarProps) {
  const days = getCalendarDays(month, year);
  const monthName = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(new Date(year, month - 1, 1));

  return (
    <section className="mx-auto max-w-5xl p-4">
      <h2 className="calendar-heading mb-2 text-center text-2xl font-semibold">
        {monthName} {year}
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {weekdays.map((day) => (
          <div
            key={day}
            className="calendar-weekday border-b border-slate-300 p-2 text-center text-sm font-medium text-slate-600"
          >
            {day}
          </div>
        ))}

        {days.map((day, index) => (
          <div
            key={index}
            className="calendar-date
              relative
              aspect-square
              rounded-lg
              border-slate-200
              p-3
              text-center
              shadow-sm
              transition
              hover:-translate-y-0.5
              hover:shadow-md
              data-[empty=true]:invisible
              data-[tone=blue]:bg-blue-200
              data-[tone=blue]:text-slate-950
              data-[tone=cyan]:bg-cyan-200
              data-[tone=cyan]:text-slate-950
              data-[tone=indigo]:bg-indigo-200
              data-[tone=indigo]:text-slate-950
              data-[tone=sky]:bg-sky-200
              data-[tone=sky]:text-slate-950"
            data-empty={day === null}
            data-tone={["blue", "cyan", "indigo", "sky"][month % 4]}
          >
            {day !== null && (
              <>
                <span className="text-sm font-medium">{day}</span>
                {events
                  .filter((event) => {
                    const dateKey = getDateKey(year, month, day);
                    return dateKey >= event.start && dateKey <= event.end;
                  })
                  .map((event) => (
                    <div
                      key={event.id}
                      className="absolute inset-x-1 top-1/2 -translate-y-1/2 rounded-md bg-rose-400 px-1 py-1 text-xs font-semibold break-words whitespace-normal text-rose-950"
                      title={event.label}
                    >
                      {event.label}
                    </div>
                  ))}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
