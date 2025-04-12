import { CodeBlock } from "../CodeBlock";

const EjemploPeerDoc = () => {
  const codigoEjemplo = `<form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-left mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                required
                className="border-2 border-gray-300 rounded px-3 py-2  focus:border-blue-500 focus:outline-none invalid:border-red-500"
              />
              <p className="mt-1 text-red-500 text-sm hidden peer-invalid:block">
                ¡El email no es válido!
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-left mb-1">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                minLength={6}
                required
                className="peer border-2 border-gray-300 rounded px-3 py-2focus:border-blue-500 focus:outline-none invalid:border-red-500"
              />
              <p className=" mt-1 text-red-500 text-sm hidden peer-invalid:block">
                ¡Mínimo 6 caracteres!
              </p>
            </div>
          </form>`;
  return (
    <div className="m-3 flex flex-col w-full">
      <h1 className="font-bold mb-2 text-3xl">Validación con Peer</h1>

      <div className="mb-4">
        <h3 className="text-lg font-bold mt-2">
          Mensajes de Error en Formularios
        </h3>
        <p className="mt-2">
          Usa <span className="text-red-500">peer</span> para vincular estilos
          de validación entre elementos hermanos.
        </p>

        <div className="mt-4">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-left mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                required
                className="border-2 border-gray-300 rounded px-3 py-2  focus:border-blue-500 focus:outline-none invalid:border-red-500"
              />
              <p className="mt-1 text-red-500 text-sm hidden peer-invalid:block">
                ¡El email no es válido!
              </p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-left mb-1">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                minLength={6}
                required
                className="peer border-2 border-gray-300 rounded px-3 py-2focus:border-blue-500 focus:outline-none invalid:border-red-500"
              />
              <p className=" mt-1 text-red-500 text-sm hidden peer-invalid:block">
                ¡Mínimo 6 caracteres!
              </p>
            </div>
          </form>
        </div>
        <CodeBlock code={codigoEjemplo} language="html" />
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mt-2">Cómo Funciona</h3>
        <ul className="text-red-500 mt-2 list-disc ml-6">
          <li>
            <span className="text-white">peer</span>: Se agrega al input
            principal
          </li>
          <li>
            <span className="text-white">peer-invalid:</span> Modificador para
            el mensaje de error
          </li>
          <li>
            <span className="text-white">hidden</span> +{" "}
            <span className="text-red-500">peer-invalid:block</span>: Muestra el
            mensaje solo cuando hay error
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mt-2">Tips Clave</h3>
        <ul className="text-red-500 mt-2 list-disc ml-6">
          <li>
            Usa <span className="text-white">peer-hover</span> o{" "}
            <span className="text-white">peer-focus</span> para otros estados
          </li>
          <li>
            Combina con <span className="text-white">aria-describedby</span>{" "}
            para accesibilidad
          </li>
          <li>Funciona con inputs nativos y componentes personalizados</li>
        </ul>
      </div>
    </div>
  );
};

export default EjemploPeerDoc;
