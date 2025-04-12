const EjemploFlex = () => {
  return (
    <div className="m-3 flex flex-col">
      <h1 className="font-bold mb-2 text-3xl">Flex</h1>
      <ul className="mb-2">
        <li>- se pone directamente el nombre de la familia</li>
      </ul>

      <ul className="text-red-500">
        <li>flex place-content-between</li>
        <li className="w-full mt-1 border-2 flex  place-content-between">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>
        <li>flex place-content-around</li>
        <li className="w-full mt-1 border-2 flex  place-content-around">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>
        <li>flex justify-center</li>
        <li className="w-full mt-1 border-2 flex justify-center">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>

        <li className="mt-2">flex justify-end</li>
        <li className="w-full mt-1 border-2 flex justify-end">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>
        <li className="mt-2">flex justify-start</li>
        <li className="w-full mt-1 border-2 flex justify-start">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>

        <li className="mt-2">flex flex-col items-center</li>
        <li className="w-full mt-1 border-2 flex flex-col items-center">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>
        <li className="mt-2">flex flex-col items-start</li>
        <li className="w-full mt-1 border-2 flex flex-col items-start">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>
        <li className="mt-2">flex flex-col items-end</li>
        <li className="w-full mt-1 border-2 flex flex-col items-end">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>

        <li className="mt-2">flex items-end</li>
        <li className="w-full mt-1 h-10 border-2 flex  items-end">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>

        <li className="mt-2">flex items-center</li>
        <li className="w-full mt-1 h-10 border-2 flex  items-center">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>

        <li className="mt-2">flex items-start</li>
        <li className="w-full mt-1 h-10 border-2 flex  items-start">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>

        <li className="mt-2">flex justify-center items-start</li>
        <li className="w-full mt-1 h-10 border-2 flex justify-center items-start">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>

        <li className="mt-2">flex justify-center items-center</li>
        <li className="w-full mt-1 h-10 border-2 flex justify-center items-center">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>

        <li className="mt-2">flex justify-center items-end</li>
        <li className="w-full mt-1 h-10 border-2 flex justify-center items-end">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>
      </ul>

      <h3 className="text-xl mt-2 font-bold">Self</h3>
      <span className="mt-1">
        dentro de un flex-col se puede manipular que la orientacion expecifica
        de un item poniendole al mismo self-propiedad
      </span>
      <div className="w-full mt-1 border-2 border-red-500 flex flex-col">
        <div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </div>

        <div className="self-center w-28 flex flex-row items-center">
          <div className="border-1 bg-amber-300 w-4 h-4 mr-2"></div>
          <span className="text-red-500"> self-center</span>
        </div>

        <div className="self-end w-28 flex flex-row items-center">
          <div className="border-1 bg-amber-300 w-4 h-4 mr-2"></div>
          <span className="text-red-500"> self-end</span>
        </div>
      </div>

      <h3 className="text-xl mt-2 font-bold">Wrap</h3>
      <span className="mt-1">
        si se agrega a un flex flex-wrap, lo que pasa es que si los elementos no
        caben, se mueven hacia a bajo
      </span>
      <span className="text-red-500"> flex flex-wrap</span>
      <div className="w-full flex justify-center">
        <div className="w-30 mt-1 border-2 text-red-500 border-red-500 flex flex-wrap">
          <div className="border-1 bg-amber-300 w-10 h-10 flex justify-center items-center">
            1
          </div>
          <div className="border-1 bg-amber-300 w-10 h-10 flex justify-center items-center">
            2
          </div>
          <div className="border-1 bg-amber-300 w-10 h-10 flex justify-center items-center">
            3
          </div>
          <div className="border-1 bg-amber-300 w-10 h-10 flex justify-center items-center">
            4
          </div>
          <div className="border-1 bg-amber-300 w-10 h-10 flex justify-center items-center">
            5
          </div>
        </div>
      </div>

      <h3 className="text-xl mt-2 font-bold">Grow</h3>
      <span className="mt-1">
        si a un flex flex-wrap, le ponemos a cada elemento un grow, entonces el
        elemento crecera siempre que pueda
      </span>
      <span className="mt-1">
        la regla seria que segun su w-# calcula para ver si cabe en su posicion
        y si no cae abajo, luego caundo todos los elementos hayan decidido su
        posiscion, entonces hace efecto el grow y crecen para rellenar el
        espacio
      </span>
      <span className="text-red-500"> flex flex-wrap</span>
      <div className="w-full flex justify-center">
        <div className="w-30 mt-1 border-2 text-red-500 border-red-500 flex flex-wrap">
          <div className="border-1 bg-amber-300 w-10 h-10 flex justify-center items-center grow">
            grow
          </div>
          <div className="border-1 bg-amber-300 w-10 h-10 flex justify-center items-center grow">
            grow
          </div>
          <div className="border-1 bg-amber-300 w-10 h-10 flex justify-center items-center grow">
            grow
          </div>
          <div className="border-1 bg-amber-300 w-10 h-10 flex justify-center items-center grow">
            grow
          </div>
          <div className="border-1 bg-amber-300 w-10 h-10 flex justify-center items-center grow">
            grow
          </div>
        </div>
      </div>

      <h3 className="text-xl mt-2 font-bold">Shrink</h3>
      <span className="mt-1">
        La propiedad <span className="text-red-500">shrink</span> determina si
        un elemento puede reducirse cuando no hay suficiente espacio en el
        contenedor flex.
      </span>
      <span className="mt-1">
        Por defecto, todos los elementos tienen{" "}
        <span className="text-red-500">flex-shrink: 1</span>, lo que significa
        que pueden reducirse. Si se establece{" "}
        <span className="text-red-500">flex-shrink: 0</span>, el elemento no se
        reducirá.
      </span>
      <div className="w-full flex justify-center mt-4">
        <div className="w-64 border-2 text-red-500 border-red-500 flex">
          <div className="border-1 bg-amber-300 w-40 h-10 flex justify-center items-center shrink">
            shrink w-40
          </div>
          <div className="border-1 bg-amber-300 w-40 h-10 flex justify-center items-center shrink-0">
            shrink-0 w-10
          </div>
        </div>
      </div>

      <h3 className="text-xl mt-2 font-bold">Basis</h3>
      <span className="mt-1">
        En un contendor flex se le puede decir a modo de fraccion cuanto espacio
        van a ocupar cada elemento de modo indvidual con basis-1/#
      </span>

      <div className="w-full mt-1 border-2 text-red-500 border-red-500 flex ">
        <div className="border-1 bg-amber-300  h-10 flex justify-center items-center basis-1/4">
          basis-1/4
        </div>
        <div className="border-1 bg-amber-300  h-10 flex justify-center items-center basis-1/4">
          basis-1/4
        </div>
        <div className="border-1 bg-amber-300  h-10 flex justify-center items-center basis-1/2">
          basis-1/2
        </div>
      </div>

      <h3 className="text-lg font-bold my-2">Gaps</h3>
      <span>Es la separacion fija entre componentes</span>
      <span>gap-#</span>
      <ul className="text-red-500 mt-2">
        <li>flex justify-center gap-3</li>
        <li className="w-full mt-1 gap-3 border-2 flex justify-center">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>

        <li>flex justify-between </li>
        <li className="w-full mt-1 border-2 flex justify-between ">
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
          <div className="border-1 bg-amber-300 w-4 h-4"></div>
        </li>
      </ul>
    </div>
  );
};

export default EjemploFlex;
