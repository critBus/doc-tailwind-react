import EjemploPeerDoc from "./docs/EjemploPeerDoc";
import EjemploAfterDoc from "./docs/EjemploAfterDoc";
import EjemploPlaceholder from "./docs/EjemploPlaceholder";
import { EjemploFileDoc } from "./docs/EjemploFileDoc";
import EjemploListasDoc from "./docs/EjemploListasDoc";
import EjemploSeleccion from "./docs/EjemploSeleccion";
import EjemploPrimeraLineaTexto from "./docs/EjemploPrimeraLineaTexto";
import EjemploFlex from "./docs/EjemploFlex";
import EjemploGrid from "./docs/EjemploGrid";
import { HeaderDocs } from "./docs/HeaderDocs";
import EjemploModalDoc from "./docs/EjemploModalDoc";

export const DocTWcss = () => {
  return (
    <div className=" bg-black p-3 text-white text-center">
      <HeaderDocs />

      <div className="m-3 mt-6">
        <h1 className="font-bold mb-2 text-3xl">Reglas</h1>
        <ul className="mb-2">
          <li>
            - Ten en cuenta que cualquier modificación personalizada entre
            corchetes [], no puede tener espacios, sino que se usan guiones
            bajos "_"
          </li>
        </ul>
      </div>

      <div className="m-3">
        <h1 className="font-bold mb-2 text-3xl">Bg</h1>
        <h4>
          <span className="text-red-500">bg-red-500</span>{" "}
          <span>: para seleccionar colores fijos</span>
        </h4>
        <h4>
          <span className="text-red-500">bg-[#b33030]</span> : personalizados
        </h4>
        <h3 className="mt-2">Manipular la opacidad /0-100</h3>
        <ul>
          <li>
            <span className="text-red-500">bg-[#b33030]/50</span>
          </li>
          <li>
            <span className="text-red-500">bg-red-500/60</span>
          </li>
        </ul>

        <h3 className="mt-2">Manipular la opacidad 0.0-1.0 ultimo valor</h3>
        <ul>
          <li>
            <span className="text-red-500">bg-[rgba(41,12,62,0.5)]</span>
          </li>
        </ul>

        <h3 className="mt-2">Gradiente</h3>
        <ul>
          <li className="bg-linear-to-r from-cyan-500 to-blue-500">
            <div className="text-black">
              bg-linear-to-r from-cyan-500 to-blue-500
            </div>
          </li>
          <li className="bg-linear-65 from-purple-500 to-pink-500">
            <div className="text-black">
              bg-linear-65 from-purple-500 to-pink-500
            </div>
          </li>
          <li className="bg-[linear-gradient(to_right,#3b82f6,#22c55e)]">
            <div className="text-black">
              bg-[linear-gradient(to_right,#3b82f6,#22c55e)]
            </div>
          </li>
          <li>
            <div className="mt-2">
              La Radial vas agregando colores de derecha a isquierda, donde la
              derecha es el centro y la isquierda hacia afuera
            </div>
            <div className="text-red-500">
              rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700
            </div>
            <div className="w-full flex justify-center mt-2">
              <div className="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="m-3">
        <h1 className="font-bold mb-2 text-3xl">Text Colors</h1>
        <div>
          <span className="text-red-500">text-red-500</span> : Texto con color
        </div>
        <h1 className="font-bold mb-2 mt-2 text-xl">Text Colors BG</h1>
        <div>
          <div className="bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold bg-clip-text text-transparent">
            con el color de un fondo gradiente
          </div>
          <span className="text-red-500">bg-clip-text text-transparent</span>
        </div>
      </div>

      <div className="m-3">
        <h1 className="font-bold mb-2 text-3xl">Alto (h) Ancho (w)</h1>
        <ul className="mb-2">
          <li>
            - Basicamente es "h" o "w" "-#" donde se multiplica por 4 el # para
            el equivalente en px, las opciones son de doble en doble, osea
            0,1,2,4,8,16,32,64
          </li>
          <li>- Ademas de "-full" y "screen"</li>
          <li>
            - Se puede ajustar el tamaño personalizado en pixeles w-[##px]
          </li>
        </ul>

        <ul className="text-red-500">
          <li>w-0</li>
          <li>w-1</li>
          <li>h-4</li>
          <li>h-16</li>
          <li>h-full</li>
          <li>w-screen</li>
          <li>w-[200px]</li>
        </ul>
      </div>

      <div className="m-3">
        <h1 className="font-bold mb-2 text-3xl">Margen (m) Pading (w)</h1>
        <ul className="mb-2">
          <li>
            - Basicamente es "m" o "p" "-#" donde se multiplica por 4 el # para
            el equivalente en px, las opciones son de doble en doble, osea
            0,1,2,4,8,16,32,64
          </li>
          <li>- Direccion m"b","t","r","l"-#</li>
          <li>- Arriba Abajo py-# my-#</li>
          <li>- A los lados px-# mx-#</li>
          <li>
            - Se puede ajustar el tamaño personalizado en pixeles m-[##px]
          </li>
        </ul>

        <ul className="text-red-500">
          <li>m-0</li>
          <li>m-1</li>
          <li>m-4</li>
          <li>m-16</li>
          <li>mb-2</li>
          <li>ht-4</li>
          <li>px-4</li>
          <li>px-2</li>
          <li>px-[200px]</li>
          <li>m-[100px]</li>
        </ul>
      </div>

      <div className="m-3">
        <h1 className="font-bold mb-2 text-3xl">Text size</h1>
        <ul className="mb-2">
          <li>- text-"xs","sm","base","lg","xl","#x1" (x 2-9)</li>
        </ul>

        <ul className="text-red-500">
          <li>text-xs</li>
          <li>text-sm</li>
          <li>text-base</li>
          <li>text-lg</li>
          <li>text-xl</li>
          <li>text-2x1</li>
          <li>text-3x1</li>
        </ul>
      </div>

      <div className="m-3">
        <h1 className="font-bold mb-2 text-3xl">Text Alineacion</h1>
        <ul className="mb-2">
          <li>- text-"center","left","right"</li>
        </ul>

        <ul className="text-red-500">
          <li>text-center</li>
          <li>text-left</li>
          <li>text-right</li>
        </ul>
      </div>

      <div className="m-3">
        <h1 className="font-bold mb-2 text-3xl">Text Family</h1>
        <ul className="mb-2">
          <li>- se pone directamente el nombre de la familia</li>
          <li>
            - Ten en cuenta que los nombres personalizados es porblable que los
            tengas que completar con guiones bajos "_" porque no se admiten
            espacios entre corchetes
          </li>
        </ul>

        <ul className="text-red-500">
          <li className="font-sans">font-sans</li>
          <li className="font-serif">font-serif</li>
          <li className="font-mono">font-mono</li>
          <li>
            font-(family-name:{"<"}custom-property{">"})
          </li>
          <li>
            font-[{"<"}value{">"}]
          </li>
          <li className="font-[Times_New_Roman]">font-[Times_New_Roman]</li>
        </ul>
      </div>

      <EjemploFlex />

      <EjemploGrid />
      <div className="m-3 flex flex-col">
        <h1 className="font-bold mb-2 text-3xl">Responsive</h1>
        <span>- xx:clase</span>
        <span>- "sm", "md", "lg", "xl", "2xl"</span>
        <ul className="text-red-500">
          <li>sm:grid-cols-2</li>
          <li>md:text-center</li>
        </ul>
      </div>
      <div className="m-3 flex flex-col">
        <h1 className="font-bold mb-2 text-3xl">Posicion Relativa</h1>
        <span>- relative : se le pone al contenedor</span>
        <span>
          - absolute : luego al elemento se le pone al elemento interno
        </span>
        <span>
          - ubicacion : "bottom-#","right-#","top-#","left-#", para elegir entre
          las coordenadas del elemento padre
        </span>
        <span>
          - para valores negativos se agrega "-" delaten de la ubicacion,
          ejemplo "-bottom-#"
        </span>
        <span>
          - para valores negativos personalizados se agrega "-" dentro del
          corchete, ejemplo "bottom-[-20px]"
        </span>
        <ul className="text-red-500 mt-2">
          <li className="font-sans mt-2">relative</li>
          <li className="w-full mt-1 border-2 h-24 relative ">
            <div className="border-1 w-64 bg-amber-300 w-4 min-h-6 flex justify-center items-center absolute bottom-0 left-0">
              absolute bottom-0
            </div>
            <div className="border-1 w-64 bg-amber-300 w-4 min-h-6 flex justify-center items-center absolute top-0">
              absolute top-0
            </div>
            <div className="border-1 w-64 bg-amber-300 w-4 min-h-6 flex justify-center items-center absolute top-0 right-0">
              absolute top-0 right-0
            </div>
            <div className="border-1 w-64 bg-amber-300 w-4 min-h-6 flex justify-center items-center absolute bottom-0 right-0">
              absolute bottom-0 right-0
            </div>
          </li>
          <li className="font-sans mt-2 text-white">Negativo</li>
          <li className="w-full mt-1 border-2 h-24 relative ">
            <div className="border-1 w-64 bg-amber-300 w-4 min-h-6 flex justify-center items-center absolute -bottom-3 right-0">
              absolute -bottom-3 right-0
            </div>
            <div className="border-1 w-64 bg-amber-300 w-4 min-h-6 flex justify-center items-center absolute bottom-[-20px] left-0">
              absolute bottom-[-20px] left-0
            </div>
          </li>

          <li className="font-sans mt-2 text-white text-2xl font-bold">z-#</li>
          <li className="font-sans mt-2 text-white">
            - a mayor # mas por encima esta de los otros elmentos 1-10
          </li>
          <li className="w-full mt-1 border-2 h-24 relative ">
            <div className="border-1 w-64 bg-amber-300 w-4 min-h-6 flex justify-center items-center absolute bottom-0 right-0 z-2">
              z-2
            </div>
            <div className="border-3 border-blue-600 w-16 bg-amber-300  h-16 flex justify-center items-start absolute bottom-0 right-0 z-1">
              z-1
            </div>
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold mb-2 text-3xl">Bordes</h1>
        <span>- rounded-#xl o rounded-"pantalla" o solo rounded</span>
        <span>
          - rounded-"ubicacion"-"tipo" donde se elige entre
          "t","b","l","r","tp","tr","br","bl"
        </span>
        <div className="grid grid-cols-3 gap-1  text-red-500 mt-2">
          <div className="rounded-2xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-2xl
          </div>
          <div className="rounded-sm border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-sm
          </div>
          <div className="rounded border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded
          </div>
          <div className="rounded-md border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-md
          </div>
          <div className="rounded-lg border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-lg
          </div>
          <div className="rounded-xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-xl
          </div>
          <div className="rounded-full border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-full
          </div>
          <div className="rounded-3xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-3xl
          </div>
          <div className="rounded-t-full border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-t-full
          </div>
          <div className="rounded-b-full border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-b-full
          </div>
          <div className="rounded-r-full border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-r-full
          </div>
          <div className="rounded-l-full border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-l-full
          </div>

          <div className="rounded-tr-full border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-tr-full
          </div>
          <div className="rounded-tl-full border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-tl-full
          </div>
          <div className="rounded-br-full border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-br-full
          </div>
          <div className="rounded-bl-full border-1 h-10  bg-amber-300  flex justify-center items-center">
            rounded-bl-full
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold mb-2 text-3xl">Hover</h1>
        <span>- hover:"propiedad"</span>
        <span>
          - transition-"elemento" que elemento se ve afectado por la transision{" "}
        </span>
        <span>- duration-# cuanto tiempo toma la transision </span>
        <span>
          - "momento" de la transision, elegir entre
          "ease-in","ease-out","ease-in-out","ease-initial","ease-linear"
        </span>
        <div className="mt-2 text-red-500 flex flex-col gap-1">
          <div className="hover:bg-blue-300  rounded-2xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            hover:bg-blue-300
          </div>
          <div className="hover:bg-blue-300 transition-all  rounded-2xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            hover:bg-blue-300 transition-all
          </div>
          <div className="hover:bg-blue-300 transition-all duration-500  rounded-2xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            hover:bg-blue-300 transition-all duration-500
          </div>
          <div className="hover:bg-blue-300 ease-in transition-all duration-500  rounded-2xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            hover:bg-blue-300 ease-in transition-all duration-500
          </div>
          <div className="hover:bg-blue-300 ease-out transition-all duration-500  rounded-2xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            hover:bg-blue-300 ease-out transition-all duration-500
          </div>
          <div className="hover:bg-blue-300 ease-in-out transition-all duration-500  rounded-2xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            hover:bg-blue-300 ease-in-out transition-all duration-500
          </div>
          <div className="hover:bg-blue-300 ease-initial transition-all duration-500  rounded-2xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            hover:bg-blue-300 ease-initial transition-all duration-500
          </div>
          <div className="hover:bg-blue-300 ease-linear transition-all duration-500  rounded-2xl border-1 h-10  bg-amber-300  flex justify-center items-center">
            hover:bg-blue-300 ease-linear transition-all duration-500
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <h1 className="font-bold mb-2 text-3xl">Sombras</h1>
        <span>- shadow o shadow-"medida"</span>
        <span>
          - para el color es shadow-"color", en el ejemplo se usa
          shadow-amber-300
        </span>
        <div className="mt-2  text-red-500 w-full border-2 rounded-xl border-red-500 grid  grid-cols-3 gap-10 p-10">
          {/* Sombra pequeña */}
          <div className="shadow-sm shadow-amber-300 border-2 border-red-500 flex justify-center items-center h-20">
            shadow-sm
          </div>

          {/* Sombra predeterminada */}
          <div className="shadow shadow-amber-300 border-2 border-red-500 flex justify-center items-center h-20">
            shadow
          </div>

          {/* Sombra mediana */}
          <div className="shadow-md shadow-amber-300 border-2 border-red-500 flex justify-center items-center h-20">
            shadow-md
          </div>

          {/* Sombra grande */}
          <div className="shadow-lg shadow-amber-300 border-2 border-red-500 flex justify-center items-center h-20">
            shadow-lg
          </div>

          {/* Sombra extra grande */}
          <div className="shadow-xl  shadow-amber-300 border-2 border-red-500 flex justify-center items-center h-20">
            shadow-xl
          </div>

          {/* Sombra doblemente extra grande */}
          <div className="shadow-2xl shadow-amber-300  border-2 border-red-500 flex justify-center items-center h-20">
            shadow-2xl
          </div>

          {/* Sombra doblemente extra grande */}
          <div className="shadow-2xl  shadow-blue-700  border-2 border-red-500 flex justify-center items-center flex-col h-20">
            <span>shadow-2xl</span> <span>shadow-blue-700</span>
          </div>

          {/* Sin sombra */}
          <div className="shadow-none border-2 border-red-500 flex justify-center items-center h-20">
            shadow-none
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <h1 className="font-bold mb-2 text-3xl">Animaciones</h1>
        <span>- shadow o shadow-"medida"</span>
        <span>
          - para el color es shadow-"color", en el ejemplo se usa
          shadow-amber-300
        </span>
        <div className="mt-2  text-red-500 w-full  grid  grid-cols-2 lg:grid-cols-4 gap-10 p-10">
          <div className="flex flex-col  items-center border-2 rounded-xl border-red-500 h-full p-6">
            <span className="h-20">animate-spin</span>
            <div className="animate-spin hover:animate-none border-2 rounded-xl border-red-500 flex justify-center items-center h-20 w-20">
              animado
            </div>
          </div>
          <div className="flex flex-col  border-2 rounded-xl border-red-500 h-full p-6">
            <span className="h-20">animate-bounce</span>
            <div className="animate-bounce hover:animate-none border-2 rounded-xl border-red-500 flex justify-center items-center h-20">
              animado
            </div>
          </div>

          <div className="flex flex-col  border-2 rounded-xl border-red-500 h-full p-6">
            <span className="h-20">animate-ping</span>
            <div className="animate-ping hover:animate-none border-2 rounded-xl border-red-500 flex justify-center items-center h-20">
              animado
            </div>
          </div>

          <div className="flex flex-col items-center  border-2 rounded-xl border-red-500 h-full p-6">
            <div className="h-20 flex flex-col">
              <span>animate-ping</span>
              <span className="text-white">onda</span>
            </div>
            <div className="animate-ping hover:animate-none border-2 rounded-full border-red-500 flex justify-center items-center h-10 w-10"></div>
          </div>

          <div className="flex flex-col items-center  border-2 rounded-xl border-red-500 h-full p-6">
            <div className="h-20 flex flex-col">
              <span>animate-ping</span>
              <span className="text-white">onda full color</span>
            </div>
            <div className="animate-ping hover:animate-none border-2 rounded-full border-red-500 bg-red-500 flex justify-center items-center h-10 w-10"></div>
          </div>

          <div className="flex flex-col  items-center border-2 rounded-xl border-red-500 h-full p-6">
            <span className="h-20">animate-pulse</span>
            <div className="animate-pulse hover:animate-none border-2 rounded-xl border-red-500 flex justify-center items-center h-20  w-full">
              animate-pulse
            </div>
          </div>

          <div className="flex flex-col items-center  border-2 rounded-xl border-red-500 h-full p-6">
            <div className="h-20 flex flex-col">
              <span>animate-pulse</span>
              <span className="text-white">pulso full color</span>
            </div>
            <div className="animate-pulse hover:animate-none border-2 rounded-full border-red-500 bg-red-500 flex justify-center items-center h-10 w-10"></div>
          </div>
        </div>
      </div>

      {/* Sección de Estilos de Texto */}
      <div className="m-3 flex flex-col">
        <h1 className="font-bold mb-2 text-3xl">Estilos de Texto</h1>

        {/* Bold, Italic, Normal */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mt-2">Bold, Italic y Normal</h3>
          <ul className="flex flex-col gap-2 mt-2">
            <li className="font-normal">
              Texto normal: <span className="text-red-500">font-normal</span>
            </li>
            <li className="font-bold">
              Texto en negrita: <span className="text-red-500">font-bold</span>
            </li>
            <li className="italic">
              Texto en cursiva: <span className="text-red-500">italic</span>
            </li>
            <li className="font-bold italic">
              Combinación: Bold + Italic:
              <span className="text-red-500"> font-bold italic</span>
            </li>
          </ul>
        </div>

        {/* Underline y Tachado */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mt-2">Decoraciones</h3>
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <span className="underline">Texto subrayado</span>
              <span className="text-red-500 "> underline</span>
            </li>
            <li>
              <span className="line-through">Texto tachado</span>
              <span className="text-red-500"> line-through</span>
            </li>
            <li>
              <span className="line-through">Subrayado + Tachado</span>

              <span className="text-red-500"> underline line-through</span>
            </li>
          </ul>
        </div>

        {/* Variantes de Grosor */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mt-2">
            Grosor de Fuente Font-Weight
          </h3>
          <ul className="flex flex-col gap-2 mt-2">
            <li className="font-thin">
              Delgado - 100 <span className="text-red-500">font-thin</span>
            </li>
            <li className="font-light">
              Ligero - 300 <span className="text-red-500">font-light </span>
            </li>
            <li className="font-medium">
              Medio - 500 <span className="text-red-500">font-medium </span>
            </li>
            <li className="font-semibold">
              Semi-bold - 600
              <span className="text-red-500">font-semibold</span>
            </li>
            <li className="font-black">
              Extra Bold - 900 <span className="text-red-500">font-black</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="font-bold mb-2 text-3xl">Grupos</h1>
        <span>
          Es para poder disparar eventos, como el hover, pero que dependan del
          evento del padre, ósea por ejemplo si tenemos un contenedor que dentro
          tiene un botón y queremos que al hacer hover sobre el padre el botón
          cambie de color, entonces hay que atar de alguna manera al padre con
          el hijo, para eso, al padre se le agrega la clase “group” y al hijo
          “group-hover:propiedad”, de esta manera el hijo responde al hover del
          padre
        </span>
        <span>- hover:"propiedad"</span>
        <div className="group mt-3 border-2 border-red-500 p-5 hover:bg-blue-950">
          <span className="text-red-500 ">group</span>
          <div className="group-hover:bg-amber-950 mt-5 border-2 border-red-500 bg-black ">
            <span className="text-red-500">group-hover:bg-amber-950</span>
          </div>
        </div>
        <h3 className="text-lg font-bold my-3">Subgrupos</h3>
        <span>
          Cuando se tiene un grupo padre, pero esto elemento también contiene
          alguno otro que también va aser grupo, pasaría que los efectos se
          propagarían y es probable que no se quiera esto, ósea que los eventos
          del subgrupo solo los disparen sus elementos, para evitar esto se
          puede agregar una especie de identificador a cada grupo:
        </span>
        <ol className="mt-2">
          <li>
            1- group/identificador1 y luego en el hijo
            group/identificador1:propiedad
          </li>
          <li>
            2- En sus subgrupos seria entonces group/identificador2 y luego en
            sus hijos group/identificador2:propiedad
          </li>
        </ol>

        <div className="group/general mt-3 border-2 border-red-500 p-5 hover:bg-blue-950">
          <span className="text-red-500 ">group/general</span>
          <div className="group-hover/general:bg-amber-950 mt-5 border-2 border-red-500 bg-black ">
            <span className="text-red-500">
              group-hover/general:bg-amber-950
            </span>
          </div>
          <div className="group/individual mt-3 border-2 border-red-500 p-5 hover:bg-blue-950 bg-black">
            <span className="text-red-500 ">group/individual</span>
            <div className="group-hover/individual:bg-amber-950 mt-5 border-2 border-red-500 bg-black ">
              <span className="text-red-500">
                group-hover/individual:bg-amber-950
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h1 className="font-bold mb-2 text-3xl">Cursores</h1>
        <span>- cursor-"tipo"</span>
        <div className="mt-2  text-red-500 w-full  grid  grid-cols-2 lg:grid-cols-6 gap-10 p-10">
          <div className="cursor-alias flex flex-col  items-center border-2 rounded-xl border-red-500 h-full p-6">
            cursor-alias
          </div>
          <div className="cursor-all-scroll flex flex-col  items-center border-2 rounded-xl border-red-500 h-full p-6">
            cursor-all-scroll
          </div>
          <div className="cursor-auto flex flex-col  items-center border-2 rounded-xl border-red-500 h-full p-6">
            cursor-auto
          </div>
          <div className="cursor-pointer flex flex-col  items-center border-2 rounded-xl border-red-500 h-full p-6">
            cursor-pointer
          </div>
        </div>
      </div>

      {/* Sección de Outline y Ring */}
      <div className="m-3 flex flex-col">
        <h1 className="font-bold mb-2 text-3xl">Outline y Ring</h1>

        {/* Outline */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mt-2">Outline</h3>
          <p className="mt-2">
            El <span className="text-red-500">outline</span> dibuja una línea
            fuera del borde del elemento sin afectar el diseño.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="border-2 p-4 border-red-500">
              <div className="outline outline-red-500 outline-2 outline-dashed text-red-500">
                outline-red-500 outline-2 outline-dashed
              </div>
            </div>
            <div className="border-2 p-4 border-red-500">
              <div className="outline outline-blue-300 outline-offset-4 text-red-500">
                outline-blue-300 outline-offset-4
              </div>
            </div>
          </div>
        </div>

        {/* Ring */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mt-2">Ring</h3>
          <p className="mt-2 ">
            El <span className="text-red-500">ring</span> crea un anillo
            alrededor del elemento usando box-shadow.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="border-2 p-4 border-red-500">
              <div className="ring ring-green-500 ring-opacity-50 text-red-500">
                ring-green-500 ring-opacity-50
              </div>
            </div>
            <div className="border-2 p-4 border-red-500">
              <div className="ring-4 ring-purple-700 ring-offset-2 text-red-500">
                ring-4 ring-purple-700 ring-offset-2
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo Práctico */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mt-2">Ejemplo Combinado</h3>
          <div className="border-2 p-4 mt-2 border-red-500">
            <button className="px-4 py-2 bg-blue-500 text-white outline outline-2 outline-offset-4 outline-red-500 hover:ring-4 hover:ring-blue-300 transition-all">
              Hover para ver el ring
            </button>
          </div>
        </div>

        {/* Notas Adicionales */}
        <div className="mb-4">
          <h3 className="text-lg font-bold mt-2">Notas Clave</h3>
          <ul className=" mt-2 list-disc ml-6">
            <li>
              <span className="text-red-500">outline-none</span> : Elimina el
              outline predeterminado
            </li>
            <li>
              <span className="text-red-500">ring-0</span> : Elimina el anillo
            </li>
            <li>¡Usa ring para focus states accesibles!</li>
          </ul>
        </div>
      </div>

      {/* Sección de Validación con Peer */}
      <EjemploPeerDoc />

      <EjemploAfterDoc />

      <EjemploPlaceholder />

      <EjemploFileDoc />

      <EjemploListasDoc />
      <EjemploSeleccion />
      <EjemploPrimeraLineaTexto />
      <EjemploModalDoc />
    </div>
  );
};
