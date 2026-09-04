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
    {
      id: 1711958800000,
      title: "GYM",
      targetMinutes: 60,
      category: "Exercise",
      completed: true,
      streak: 30,
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
          <section className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
            <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200 sm:rounded-2xl sm:p-5">
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">Completion</p>
              <p className="mt-1 text-xl font-bold text-slate-900 sm:text-3xl">
                {completionPercent}%
              </p>
              <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                {completedCount} of {totalHabits} habits done
              </p>
            </div>

            <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200 sm:rounded-2xl sm:p-5">
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">Focus Time</p>
              <p className="mt-1 text-xl font-bold text-slate-900 sm:text-3xl">
                {totalFocusMinutes}
                <span className="ml-1 text-xs font-medium text-slate-500 sm:text-base">min</span>
              </p>
              <p className="mt-1 hidden text-xs text-slate-500 sm:block">Planned for today</p>
            </div>

            <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200 sm:rounded-2xl sm:p-5">
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">Habits</p>
              <p className="mt-1 text-xl font-bold text-slate-900 sm:text-3xl">{totalHabits}</p>
              <p className="mt-1 hidden text-xs text-slate-500 sm:block">Being tracked</p>
            </div>
          </section>
        <HabitForm onAddHabit={addHabit} />
        <HabitList habits={habits} onToggle={toggleComplete} onDelete={deleteHabit} />
      </div>
    </main>
  );
}

export default App;