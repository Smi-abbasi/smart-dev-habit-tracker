import { useState } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState([
    {
      id: 1711958700000,
      title: "Reciting Quran",
      targetMinutes: 30,
      category: "Quran",
      completed: true,
      streak: 15,
    },
    {
      id: 1711958400000,
      title: "Solve LeetCode",
      targetMinutes: 45,
      category: "Coding",
      completed: false,
      streak: 5,
    },
    {
      id: 1711958450000,
      title: "Learn React",
      targetMinutes: 60,
      category: "Learning",
      completed: false,
      streak: 2,
    },
    {
      id: 1711958500000,
      title: "Read Tech Articles",
      targetMinutes: 30,
      category: "Reading",
      completed: true,
      streak: 3,
    },
    {
      id: 1711958600000,
      title: "Work on Portfolio",
      targetMinutes: 60,
      category: "Career",
      completed: false,
      streak: 7,
    },
  ]);

  function addHabit(newHabit) {
    setHabits((prev) => [
      ...prev,
      {
        id: Date.now(),
        completed: false,
        streak: 0,
        ...newHabit,
      },
    ]);
  }
  function toggleComplete(id) {
  setHabits((prev) =>
    prev.map((habit) =>
      habit.id === id
        ? {
            ...habit,
            completed: !habit.completed,
            streak: !habit.completed ? habit.streak + 1 : habit.streak - 1,
          }
        : habit
    )
  );
}

function deleteHabit(id) {
  setHabits((prev) => prev.filter((habit) => habit.id !== id));
}

const totalHabits = habits.length;
const completedCount = habits.filter((habit) => habit.completed).length;
const completionPercent =
  totalHabits === 0 ? 0 : Math.round((completedCount / totalHabits) * 100);

const totalFocusMinutes = habits.reduce(
  (sum, habit) => sum + habit.targetMinutes,
  0
);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <Header />
        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-medium text-slate-500">Completion</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              {completionPercent}%
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {completedCount} of {totalHabits} habits done
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-medium text-slate-500">Total Focus Time</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              {totalFocusMinutes}
              <span className="ml-1 text-base font-medium text-slate-500">min</span>
            </p>
            <p className="mt-1 text-xs text-slate-500">Planned for today</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-medium text-slate-500">Active Habits</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">{totalHabits}</p>
            <p className="mt-1 text-xs text-slate-500">Being tracked</p>
          </div>
        </section>
        <HabitForm onAddHabit={addHabit} />
        <HabitList habits={habits} onToggle={toggleComplete} onDelete={deleteHabit} />
      </div>
    </main>
  );
}

export default App;