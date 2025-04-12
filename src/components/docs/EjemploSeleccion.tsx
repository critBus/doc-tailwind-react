const EjemploSeleccion = () => {
  return (
    <div className="m-3 flex flex-col w-full">
      <h1 className="font-bold mb-2 text-3xl">Seleccion</h1>
      <p>
        Se puede modificar el estilo con el que se selecciona en un texto usando
        selection:propiedad
      </p>
      <div className="flex flex-col items-center">
        <span className="text-red-500">selection:bg-green-500</span>
        <p className="selection:bg-green-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          nesciunt laudantium ducimus! Quam eligendi perferendis ex veritatis
          tenetur quae recusandae. Magnam eum laboriosam aspernatur quidem
          necessitatibus labore consequatur a magni!
        </p>
      </div>
    </div>
  );
};

export default EjemploSeleccion;
