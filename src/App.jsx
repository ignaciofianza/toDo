import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import TasksContainer from "./components/TaskContainer";
import Form from "./components/Form";
import Hero from "./components/Hero";

const initialTasks = [];

function App() {
  const [tasks, setTask] = useState(initialTasks);

  // Cargar tareas desde localStorage al inicio
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTask(newTasks);

    // Guardar las tareas en localStorage
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = (id) => {
    const filteredArray = tasks.filter((item) => item.id !== id);
    setTask(filteredArray);

    // Guardar las tareas en localStorage
    localStorage.setItem("tasks", JSON.stringify(filteredArray));
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        const newState = !item.state;

        // Mostrar alerta diferente según el nuevo estado
        Swal.fire({
          title: newState
            ? "¡Tarea completada!"
            : "Tarea marcada como pendiente",
          text: newState
            ? "Has completado esta tarea. ¡Buen trabajo!"
            : "La tarea ha sido desmarcada como completada.",
          icon: newState ? "success" : "info",
          showConfirmButton: false,
          timer: 1200,
          toast: true,
          position: "top-right",
        });

        return { ...item, state: newState };
      }
      return item;
    });

    setTask(updatedTasks);

    // Guardar las tareas en localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const prioritizeTask = (id) => {
    const updatedPriorityTasks = tasks.map((item) => {
      if (item.id === id) {
        const newPriority = !item.priority;

        // Mostrar alerta diferente según el nuevo estado
        Swal.fire({
          title: newPriority
            ? "Tarea marcada como prioritaria"
            : "Tarea marcada como no prioritaria",
          text: newPriority
            ? "La tarea ha sido marcada como prioritaria."
            : "La tarea ha sido marcada como no prioritaria.",
          icon: newPriority ? "info" : "info",
          showConfirmButton: false,
          timer: 1200,
          toast: true,
          position: "top-right",
        });

        return { ...item, priority: newPriority };
      }
      return item;
    });

    setTask(updatedPriorityTasks);

    // Guardar las tareas en localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedPriorityTasks));
  };

  return (
    <div className="container mt-5 mb-5 bg-dark text-light rounded p-3">
      <Hero />
      <h2 className="text-primary">Nueva tarea</h2>
      <Form addTask={addTask} />
      <h2 className="text-primary text-center">Tareas</h2>
      <TasksContainer
        deleteTask={deleteTask}
        completeTask={completeTask}
        prioritizeTask={prioritizeTask}
        tasks={tasks}
      />
    </div>
  );
}

export default App;
