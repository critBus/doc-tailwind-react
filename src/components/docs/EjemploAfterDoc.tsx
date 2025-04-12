import { CodeBlock } from "../CodeBlock";

const EjemploAfterDoc = () => {
  const codigoEjemploAfuera = `<button className="mt-2 bg-orange-600 w-32 p-3 rounded-md relative after:content-['Afuera'] after:absolute after:left-32">
          Adentro
        </button>`;
  const codigoEjemploFlecha = `<button
          className="mt-2 bg-orange-600 w-32 p-3 rounded-md relative 
        after:content-[''] after:absolute after:left-32 after:border-8
        after:border-transparent after:border-l-orange-600  after:top-4"
        >
          Adentro
        </button>`;
  return (
    <div className="m-3 flex flex-col">
      <h1 className="font-bold mb-2 text-3xl">After</h1>
      <span>
        Se puede manipular el contenido del After poniendo after:propiedad1
        after:propiedad2
      </span>
      <div className="mt-2 flex flex-col items-center border-2 border-red-500 p-2 rounded-2xl">
        <span className="text-red-500">
          relative after:content-['Afuera'] after:absolute after:left-32
        </span>
        <button className="mt-2 bg-orange-600 w-32 p-3 rounded-md relative after:content-['Afuera'] after:absolute after:left-32">
          Adentro
        </button>
        <CodeBlock code={codigoEjemploAfuera} language="html" />
      </div>
      <div className="mt-2 flex flex-col items-center border-2 border-red-500 p-2 rounded-2xl">
        <span className="text-red-500">
          after:content-[''] after:absolute after:left-32 after:border-8
          after:border-transparent after:border-l-orange-600 after:top-4
        </span>
        <button
          className="mt-2 bg-orange-600 w-32 p-3 rounded-md relative 
        after:content-[''] after:absolute after:left-32 after:border-8
        after:border-transparent after:border-l-orange-600  after:top-4"
        >
          Adentro
        </button>
        <CodeBlock code={codigoEjemploFlecha} language="html" />
      </div>
    </div>
  );
};

export default EjemploAfterDoc;
