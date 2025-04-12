import React from "react";

const EjemploPlaceholder = () => {
  return (
    <div className="m-3 flex flex-col ">
      <h1 className="font-bold mb-2 text-3xl">Placeholders</h1>
      <span>
        Se puede manipular los estilos de los Placeholders poniendo
        placeholder:propiedad1 placeholder:propiedad2
      </span>
      <div className="flex flex-col mt-2">
        <span className="text-red-500">
          placeholder:text-orange-600 placeholder:italic
        </span>
        <input
          className="border mt-2 ml-2 px-2 placeholder:text-orange-600 placeholder:italic"
          type="text"
          placeholder="Nombre"
        />
      </div>
    </div>
  );
};

export default EjemploPlaceholder;
