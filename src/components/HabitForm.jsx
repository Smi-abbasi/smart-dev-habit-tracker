import { useState } from "react";

const CATEGORIES = ["Quran", "Health", "Reading", "Career","Coding","Exercise"];

function HabitForm({ onAddHabit }) {
  const [title, setTitle] = useState("");
  const [targetMinutes, setTargetMinutes] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !targetMinutes) return;

    onAddHabit({
      title: title.trim(),
      targetMinutes: Number(targetMinutes),
      category,
    });

    setTitle("");
    setTargetMinutes("");
    setCategory(CATEGORIES[0]);
  }

  return (
    <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="mb-4 text-xl font-bold text-slate-900">
        Add Habit / Task
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 sm:grid-cols-4 sm:items-end"
      >
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-600">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Reciting Quran"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-600">
            Target (min)
          </label>
          <input
            type="number"
            min="1"
            value={targetMinutes}
            onChange={(e) => setTargetMinutes(e.target.value)}
            placeholder="30"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-600">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:col-span-4"
        >
          Add Habit
        </button>
      </form>
    </section>
  );
}

export default HabitForm;