
function Header() {
  return (
    <header className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 text-center shadow-lg sm:px-10 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Developer Productivity
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Smart Dev Habit & Task Tracker
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          Build consistency, stay focused, and track your progress every day.
        </p>
      </div>
    </header>
  );
}

export default Header;

