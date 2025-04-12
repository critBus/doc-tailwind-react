import React from 'react'

const EjemploPrimeraLineaTexto = () => {
  return (
    <div className="m-3 flex flex-col w-full">
      <h1 className="font-bold mb-2 text-3xl">Parrafo</h1>
      <h1 className="font-bold mb-2 text-lg">Primera Linea</h1>
      <p>
        Se puede modificar el estilo de la primera linea de un parrafo con first-line:propiedad
      </p>
      <div className="flex mt-2 border-2 border-red-500 rounded-xl flex-col items-center">
        <span className="text-red-500">first-line:uppercase</span>
        <p className="first-line:uppercase first-line:text-amber-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          nesciunt laudantium ducimus! Quam eligendi perferendis ex veritatis
          tenetur quae recusandae. Magnam eum laboriosam aspernatur quidem
          necessitatibus labore consequatur a magni!
        </p>
      </div>
      <div className="flex mt-2 border-2 border-red-500 rounded-xl flex-col items-center">
        <span className="text-red-500">first-line:tracking-widest</span>
        <p className="first-line:tracking-widest first-line:text-amber-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          nesciunt laudantium ducimus! Quam eligendi perferendis ex veritatis
          tenetur quae recusandae. Magnam eum laboriosam aspernatur quidem
          necessitatibus labore consequatur a magni!
        </p>
      </div>
      <h1 className="font-bold mb-2 text-lg">Primera Letra</h1>
      <p>
        Se puede modificar el estilo de la primera letra de un parrafo con first-letter:propiedad
      </p>
      <div className="flex mt-2 border-2 border-red-500 rounded-xl flex-col items-center">
        <span className="text-red-500">first-letter:text-7xl first-letter:font-bold first-letter:mr-3
        first-letter:float-left</span>
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3
            first-letter:float-left first-letter:text-amber-300 text-left
        ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          nesciunt laudantium ducimus! Quam eligendi perferendis ex veritatis
          tenetur quae recusandae. Magnam eum laboriosam aspernatur quidem
          necessitatibus labore consequatur a magni!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, laborum enim voluptatem suscipit voluptatibus eius ea autem magnam magni excepturi porro labore eos debitis eaque, dolores impedit quod deleniti. Reprehenderit?
        </p>
      </div>
    </div>
  )
}

export default EjemploPrimeraLineaTexto