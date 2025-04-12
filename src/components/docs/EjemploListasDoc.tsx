import React from "react";

const EjemploListasDoc = () => {
  return (
    <div className="m-3 flex flex-col w-full">
      <h1 className="font-bold mb-2 text-3xl">Listas</h1>
      <p>
        Las listas {"<ul>"} por defecto ocultan los puntos (viñetas), para
        evitar esto se le pone al elemento {"<ul>"} la clase
        <span className="text-red-500"> list-dist</span>
      </p>
      <div className="flex justify-center">
        <div className=" flex flex-col  max-w-60">
          <span className="text-red-500">list-dist</span>
          <ul className="list-disc">
            <li>Primer Elemento</li>
            <li>Segundo Elemento</li>
          </ul>
        </div>
      </div>
      <h3 className="font-bold mt-2 mb-2 text-lg">Viñetas</h3>
      <span>
        Las viñetas se peuden editar usando marker:propiedad en el {"<ul>"}
      </span>
      <div className="flex flex-col justify-center items-center">
        <span className="text-red-500">marker:text-amber-300</span>
        <div className=" max-w-60">
          <ul className="list-disc marker:text-amber-300">
            <li>Primer Elemento</li>
            <li>Segundo Elemento</li>
          </ul>
        </div>
      </div>

      <h3 className="font-bold mt-2 mb-2 text-lg">Numericas</h3>
      <span>
        Las listas numericas son{" "}
        <span className="text-red-500">list-decimal </span>
        en el {"<ul>"}
      </span>
      <div className="flex flex-col justify-center items-center">
        <span className="text-red-500">list-decimal marker:font-bold</span>
        <div className=" max-w-60">
          <ul className="list-decimal marker:font-bold marker:text-amber-300">
            <li>Primer Elemento</li>
            <li>Segundo Elemento</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EjemploListasDoc;
