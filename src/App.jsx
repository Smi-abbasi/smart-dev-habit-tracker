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

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <Header />
        <section className="mt-8">
          <h2>Overview</h2>
          <p>Statistics will go here.</p>
        </section>
        <HabitForm onAddHabit={addHabit} />
        <HabitList habits={habits} onToggle={toggleComplete} onDelete={deleteHabit} />
      </div>
    </main>
  );
}

export default App;