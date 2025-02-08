import { useState } from "react";
import Swal from "sweetalert2";

const Form = (props) => {
  const { addTask } = props;
  const [formTask, setFormTask] = useState({
    title: "",
    description: "",
    state: false,
    priority: false,
  });

  const { title, description, state, priority } = formTask;
  const sendForm = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      Swal.fire({
        title: "Título obligatorio!",
        text: "Debes agregarle un título a la tarea!",
        icon: "warning",
        showConfirmButton: false,
        timer: 1200,
        background: "#fce1d2",
        color: "#0d6efd",
        toast: true,
        position: "top-right"
      });
      return;
    } else if (!description.trim()) {
      Swal.fire({
        title: "Descripción obligatoria!",
        text: "Debes agregarle una descripción a la tarea!",
        icon: "warning",
        showConfirmButton: false,
        timer: 1200,
        background: "#fce1d2",
        color: "#0d6efd",
        toast: true,
        position: "top-right"
      });
      return;
    }

    addTask({
      title: title,
      description: description,
      state: state,
      priority: priority,
      id: Date.now(),
    });

    Swal.fire({
      title: "¡Tarea agregada!",
      text: "Tu tarea ha sido añadida exitosamente.",
      icon: "success",
      showConfirmButton: false,
      timer: 1200,
      color: "#0d6efd",
      toast: true,
      position: "top-right"
    });

    // Limpiar el formulario después de enviar
    setFormTask({
      title: "",
      description: "",
      state: false,
      priority: false,
    });
  };

  return (
    <form onSubmit={sendForm}>
      <input
        type="text"
        placeholder="*Ingresa tarea"
        className="form-control mb-2"
        name="title"
        value={formTask.title}
        onChange={(e) => setFormTask({ ...formTask, title: e.target.value })}
      />
      <textarea
        name="description"
        placeholder="*Ingresa descripción"
        className="form-control mb-2"
        value={formTask.description}
        onChange={(e) =>
          setFormTask({ ...formTask, description: e.target.value })
        }
        style={{ resize: "none" }}
      ></textarea>
      <select
        name="state"
        className="form-select mb-2"
        value={formTask.state ? "completado" : "pendiente"}
        onChange={(e) =>
          setFormTask({
            ...formTask,
            state: e.target.value === "completado",
          })
        }
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <div className="form-check mb-1">
        <input
          type="checkbox"
          checked={formTask.priority}
          name="priority"
          className="form-check-input"
          onChange={(e) =>
            setFormTask({ ...formTask, priority: e.target.checked })
          }
        />
        <label className="form-check-label">Prioridad</label>
      </div>
      <div className="form-text text-muted mb-3">
        Los campos marcados con <span className="text-danger">*</span> son
        obligatorios.
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

export default Form;
