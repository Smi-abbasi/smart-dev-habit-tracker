const CATEGORY_STYLES = {
  Coding: "bg-indigo-50 text-indigo-600",
  Health: "bg-rose-50 text-rose-600",
  Reading: "bg-amber-50 text-amber-600",
  Career: "bg-sky-50 text-sky-600",
  Quran: "bg-emerald-50 text-emerald-600",
  Exercise: "bg-orange-50 text-orange-600",
  Learning: "bg-violet-50 text-violet-600",
};

function HabitList({ habits, onToggle, onDelete }) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        My Habits & Tasks
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {habit.title}
                </h3>

                <span
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                        CATEGORY_STYLES[habit.category] || "bg-slate-100 text-slate-600"
                    }`}
                    >
                    {habit.category}
               </span>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  habit.completed
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {habit.completed ? "Completed" : "Pending"}
              </span>
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Target Focus
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {habit.targetMinutes}
                  <span className="ml-1 text-sm font-medium text-slate-500">
                    min
                  </span>
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs font-medium text-slate-500">
                  Streak
                </p>

                <p className="mt-1 text-lg font-bold text-indigo-600">
                  🔥 {habit.streak}
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-2 border-t border-slate-100 pt-4">
                <button
                    onClick={() => onToggle(habit.id)}
                    className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    habit.completed
                        ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                >
                    {habit.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
                <button
                    onClick={() => onDelete(habit.id)}
                    className="rounded-lg bg-rose-50 px-3 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-100"
                >
                    Delete
                </button>
                </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HabitList;