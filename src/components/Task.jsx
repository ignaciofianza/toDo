import Swal from "sweetalert2";

const Task = ({ item, deleteTask, completeTask, prioritizeTask }) => {
  const { id, title, description, priority, state } = item;

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro? Esta acción no se puede deshacer.",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Sí",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      background: "#fce1d2",
      color: "#0d6efd",
      toast: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id);

        Swal.fire({
          title: "¡Tarea eliminada!",
          text: "La tarea fue eliminada exitosamente.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          color: "#0d6efd",
          toast: true,
          position: "top-right",
        });
      }
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-2 border p-2">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {title}
          <span
            className={`badge ms-2 ${
              state ? "bg-success" : "bg-info"
            } text-light rounded-pill`}
            style={{ minWidth: "100px", textAlign: "center" }}
          >
            {state ? "Completado" : "No completado"}
          </span>
        </div>
        <p>{description}</p>
        <div className="d-flex flex-wrap gap-2 w-auto">
          <button
            className="btn btn-sm btn-danger flex-grow-1 w-auto"
            onClick={() => handleDelete(id)}
          >
            Eliminar
          </button>
          <button
            className={`btn btn-sm ${
              priority ? "btn-secondary" : "btn-primary"
            } flex-grow-1 w-auto`}
            onClick={() => prioritizeTask(id)}
          >
            {priority ? "No priorizar" : "Priorizar"}
          </button>
          <button
            className={`btn btn-sm ${
              state ? "btn-secondary" : "btn-success"
            } flex-grow-1 w-auto`}
            onClick={() => completeTask(id)}
          >
            {state ? "No completar" : "Completar"}
          </button>
        </div>
      </div>
      <span
        className={`badge ${
          priority ? "bg-primary" : "bg-secondary"
        } rounded-pill`}
        style={{ minWidth: "100px", textAlign: "center" }}
      >
        {priority ? "Prioritario" : "No prioritario"}
      </span>
    </li>
  );
};

export default Task;
