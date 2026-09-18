import { useState } from "react";
import { Calendar } from "./Calendar";

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
      <Calendar month={3} year={2027} />
      <Calendar month={4} year={2027} />
      <Calendar month={5} year={2027} />
    </main>
  );
}

export default App;
