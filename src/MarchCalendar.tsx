const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getMarch2027() {
  const year = 2027;
  const month = 2; // March, zero-indexed

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  const days = [];

  // Empty cells before March 1
  for (let i = 0; i < startingDay; i++) {
    days.push(null);
  }

  // March's days
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return days;
}

export function March2027Calendar() {
  const days = getMarch2027();

  return (
    <section className="mx-auto max-w-5xl p-6">
      <h2 className="calendar-heading mb-4 text-2xl font-semibold">
        March 2027
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
              aspect-square
              rounded-lg
              border-slate-200
              p-3
              shadow-sm
              transition
              hover:-translate-y-0.5
              hover:shadow-md
              data-[empty=true]:invisible
              data-[tone=blue]:bg-blue-200
              data-[tone=cyan]:bg-cyan-200
              data-[tone=indigo]:bg-indigo-200
              data-[tone=sky]:bg-sky-200
              data-[tone=blue]:text-slate-950
              data-[tone=cyan]:text-slate-950
              data-[tone=indigo]:text-slate-950
              data-[tone=sky]:text-slate-950
            "
            data-empty={day === null}
            data-tone={['blue', 'cyan', 'indigo', 'sky'][index % 4]}
          >
            {day !== null && (
              <span className="text-sm font-medium">
                {day}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
