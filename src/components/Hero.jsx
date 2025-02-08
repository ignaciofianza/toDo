import React from "react";

const Hero = () => {
  return (
    <section className="hero text-white rounded text-center py-5">
      <div className="container">
        <h1 className="display-3 fw-bold mb-4 text-primary">ToDo List</h1>
        <p className="lead mb-4">
          Organiza tus tareas y hazlas más productivas. Marca, elimina y
          prioriza con facilidad.
        </p>
        <p className="follow mb-4">Hecho por Ignacio Fianza.</p>
      </div>
    </section>
  );
};

export default Hero;
