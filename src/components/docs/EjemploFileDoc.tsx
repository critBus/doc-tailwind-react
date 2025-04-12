export const EjemploFileDoc = () => {
  return (
    <div className="m-3 flex flex-col ">
      <h1 className="font-bold mb-2 text-3xl">Files</h1>
      <span>
        Se puede manipular los estilos del boton de seleccion de archivos
        poniendo file:propiedad1 file:propiedad2
      </span>
      <span>
        para manipular un estado, seria estado:file:propiedad, ejemplo
        hover:file:bg-red
      </span>
      <div className="flex flex-col  items-center mt-2">
        <span className="text-red-500">
          file:rounded-tr-full file:rounded-bl-full file:border-1 file:h-10
          file:bg-amber-300 file:text-red-500 file:font-semibold file:px-3
          hover:file:bg-violet-300
        </span>
        <input
          className="mt-3 file:rounded-tr-full file:rounded-bl-full file:border-1 file:h-10  file:bg-amber-300
             file:text-red-500
          file:font-semibold file:px-3 hover:file:bg-violet-300"
          type="file"
        />
      </div>
    </div>
  );
};
