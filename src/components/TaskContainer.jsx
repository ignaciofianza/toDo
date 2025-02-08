import Task from "./Task";

const TasksContainer = ({ tasks, deleteTask, completeTask, prioritizeTask }) => {
  return (
    <>
      {tasks.length === 0 ? (
        <p className="text-center text-muted">No hay tareas</p>
      ) : (
        <ul className="list-group">
          {tasks.map((item) => (
            <Task
              key={item.id}
              item={item}
              deleteTask={deleteTask}
              completeTask={completeTask}
              prioritizeTask  ={prioritizeTask }
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TasksContainer;
