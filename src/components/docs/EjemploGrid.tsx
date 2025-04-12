import React from "react";

const EjemploGrid = () => {
  return (
    <div className="m-3 flex flex-col">
      <h1 className="font-bold mb-2 text-3xl">Grid</h1>
      <span>- grid-cols-# 1-12, si no cabe se pone abajo</span>
      <span>
        - col-span-# en una columna se pone para que ocupe mas de una posicion
      </span>
      <span>
        - row-span-# en una columna se pone para que ocupe mas de una posicion,
        en este caso ten en cuenta si tienes algun limtite de tamaño maximo,
        porque si lo tiene no se ve
      </span>

      <ul className="text-red-500 mt-2">
        <li className="font-sans">grid grid-cols-3</li>
        <li className="w-full mt-1 border-2 grid grid-cols-3">
          <div className="border-1 w-full bg-amber-300 w-4 h-4"></div>
          <div className="border-1 w-full bg-amber-300 w-4 h-4"></div>
          <div className="border-1 w-full bg-amber-300 w-4 h-4"></div>
        </li>
        <li className="font-sans mt-2">grid grid-cols-2</li>
        <li className="w-full mt-1 border-2 grid grid-cols-2">
          <div className="border-1 w-full bg-amber-300 w-4 h-4"></div>
          <div className="border-1 w-full bg-amber-300 w-4 h-4"></div>
          <div className="border-1 w-full bg-amber-300 w-4 h-4"></div>
        </li>

        <li className="font-sans mt-2">col-span-2</li>
        <li className="w-full mt-1 border-2 grid grid-cols-3">
          <div className="border-1 w-full bg-amber-300 w-4 h-8 col-span-2">
            col-span-2
          </div>

          <div className="border-1 w-full bg-amber-300 w-4 h-8"></div>
          <div className="border-1 w-full bg-amber-300 w-4 h-8"></div>
          <div className="border-1 w-full bg-amber-300 w-4 h-8"></div>
          <div className="border-1 w-full bg-amber-300 w-4 h-8"></div>
        </li>

        <li className="font-sans mt-2">row-span-2</li>
        <li className="w-full mt-1 border-2 grid grid-cols-3 ">
          <div className="border-1 w-full bg-amber-300 w-4 min-h-8 flex justify-center items-center row-span-2">
            row-span-2
          </div>

          <div className="border-1 w-full bg-amber-300 w-4 h-8"></div>
          <div className="border-1 w-full bg-amber-300 w-4 h-8"></div>
          <div className="border-1 w-full bg-amber-300 w-4 h-8"></div>
          <div className="border-1 w-full bg-amber-300 w-4 h-8"></div>
        </li>
      </ul>

      <h3 className="text-xl mt-2 font-bold">Col Start y Col End</h3>
      <span className="mt-1">
        <span className="text-red-500">col-start-#</span> y{" "}
        <span className="text-red-500">col-end-#</span> permiten especificar
        exactamente en qué columnas comienza y termina un elemento.
      </span>
      <span className="mt-1">
        - <span className="text-red-500">col-start-#</span>: Define la columna
        donde comienza el elemento.
      </span>
      <span className="mt-1">
        - <span className="text-red-500">col-end-#</span>: Define la columna
        donde termina el elemento.
      </span>
      <div className=" border-2 text-red-500 border-red-500 grid grid-cols-8 gap-2 p-2">
        <div className="border-1 bg-amber-300  flex justify-center items-center flex-col col-start-1 col-end-3">
          <span>col-start-1</span> <span>col-end-3</span>
        </div>
        <div className="border-1 bg-amber-300  flex justify-center items-center flex-col col-start-5 col-end-8">
          <span>col-start-5</span> <span>col-end-8</span>
        </div>
      </div>
      <p className="mt-2 mb-1">
        De igual forma se puede utlizar
        <span className="text-red-500"> col-[#inicial/#final] </span>
        para expecificar lo mismo
      </p>
      <div className=" border-2 text-red-500 border-red-500 grid grid-cols-8 gap-2 p-2">
        <div className="border-1 bg-amber-300  flex justify-center items-center flex-col col-[1/3]">
          <span>col-[1/3]</span>
        </div>
        <div className="border-1 bg-amber-300  flex justify-center items-center flex-col col-[5/8]">
          <span>col-[5/8]</span>
        </div>
      </div>

      <h3 className="text-xl mt-2 font-bold">Row Start y Row End</h3>
      <span className="mt-1">
        <span className="text-red-500">row-start-#</span> y{" "}
        <span className="text-red-500">row-end-#</span> permiten especificar
        exactamente en qué filas comienza y termina un elemento.
      </span>
      <span className="mt-1">
        - <span className="text-red-500">row-start-#</span>: Define la fila
        donde comienza el elemento.
      </span>
      <span className="mt-1">
        - <span className="text-red-500">row-end-#</span>: Define la fila donde
        termina el elemento.
      </span>
      <div className="border-2 text-red-500 border-red-500 grid grid-cols-4 grid-rows-8 gap-2 p-2 h-64">
        <div className="border-1 bg-amber-300 flex justify-center items-center flex-col row-start-1 row-end-3 col-span-full">
          <span>row-start-1</span> <span>row-end-3</span>
        </div>
        <div className="border-1 bg-amber-300 flex justify-center items-center flex-col row-start-5 row-end-8 col-span-full">
          <span>row-start-5</span> <span>row-end-8</span>
        </div>
      </div>

      <p className="mt-2 mb-1">
        De igual forma, se puede utilizar{" "}
        <span className="text-red-500">row-[#inicial/#final]</span> para
        especificar lo mismo.
      </p>
      <div className="border-2 text-red-500 border-red-500 grid grid-cols-4 grid-rows-8 gap-2 p-2 h-64">
        <div className="border-1 bg-amber-300 flex justify-center items-center flex-col row-[1/3] col-span-full">
          <span>row-[1/3]</span>
        </div>
        <div className="border-1 bg-amber-300 flex justify-center items-center flex-col row-[5/8] col-span-full">
          <span>row-[5/8]</span>
        </div>
      </div>
    </div>
  );
};

export default EjemploGrid;
