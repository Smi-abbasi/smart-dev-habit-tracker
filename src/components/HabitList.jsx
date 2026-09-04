function HabitList({ habits }) {
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

                <p className="mt-1 text-sm text-slate-500">
                  {habit.category}
                </p>
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default HabitList;