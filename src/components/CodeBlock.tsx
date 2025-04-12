import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

export const CodeBlock = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const iconoCopiar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      >
        <path d="M20.998 10c-.012-2.175-.108-3.353-.877-4.121C19.243 5 17.828 5 15 5h-3c-2.828 0-4.243 0-5.121.879C6 6.757 6 8.172 6 11v5c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22h3c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16v-1"></path>
        <path d="M3 10v6a3 3 0 0 0 3 3M18 5a3 3 0 0 0-3-3h-4C7.229 2 5.343 2 4.172 3.172C3.518 3.825 3.229 4.7 3.102 6"></path>
      </g>
    </svg>
  );
  const iconoCopiado = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="#09dc11"
        d="M6.6 11.397c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c2.715 0 4.073 0 4.916.847c.844.847.844 2.21.844 4.936v4.82c0 2.726 0 4.089-.844 4.936c-.843.847-2.201.847-4.916.847h-2.88c-2.716 0-4.073 0-4.917-.847s-.843-2.21-.843-4.936z"
      ></path>
      <path
        fill="#09dc11"
        d="M4.172 3.172C3 4.343 3 6.229 3 10v2c0 3.771 0 5.657 1.172 6.828c.617.618 1.433.91 2.62 1.048c-.192-.84-.192-1.996-.192-3.66v-4.819c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c1.652 0 2.8 0 3.638.19c-.138-1.193-.43-2.012-1.05-2.632C16.657 2 14.771 2 11 2S5.343 2 4.172 3.172"
        opacity={0.5}
      ></path>
    </svg>
  );
  const iconoExpandir = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-down"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
  const iconoContraer = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
      />
    </svg>
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reinicia el estado después de 2 segundos
    } catch (error) {
      console.error("Error al copiar al portapapeles:", error);
    }
  };
  return (
    <div className="w-full">
      {isExpanded ? (
        <div className="relative w-full">
          {/* Botón de expansión */}
          <button
            className="absolute top-2 right-12 text-white/80 px-2 py-1 rounded hover:bg-gray-600 z-10"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? iconoContraer : iconoExpandir}
          </button>
          <CopyBlock
            text={code}
            language={language}
            showLineNumbers={true}
            theme={dracula}
            codeBlock
          />
        </div>
      ) : (
        <div className="flex flex-row justify-center">
          <button
            className="text-white/80 px-2 py-1 rounded hover:bg-gray-600 z-10"
            type="button"
            onClick={handleCopy}
          >
            {copied ? iconoCopiado : iconoCopiar}
          </button>
          <button
            className="text-white/80 px-2 py-1 rounded hover:bg-gray-600 z-10"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? iconoContraer : iconoExpandir}
          </button>
        </div>
      )}
    </div>
  );
};
