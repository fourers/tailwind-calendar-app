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
      <h2 className="mb-4 text-2xl font-semibold">
        March 2027
      </h2>

      <div className="grid grid-cols-7">
        {weekdays.map((day) => (
          <div
            key={day}
            className="border-b p-2 text-center text-sm font-medium"
          >
            {day}
          </div>
        ))}

        {days.map((day, index) => (
          <div
            key={index}
            className="
              aspect-square
              rounded-lg
              border
              bg-white
              p-3
              shadow-sm
              transition
              hover:-translate-y-0.5
              hover:shadow-md
            "
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
