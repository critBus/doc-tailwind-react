import React from "react";

export const HeaderDocs = () => {
  const iconoTailwind = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        stroke="#fcd34d"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 2.5q-3 0-3.75 3.33C5 4.73 5.88 4.31 6.87 4.58c.58.16.98.62 1.43 1.13c.74.83 1.6 1.79 3.45 1.79q3 0 3.75-3.33c-.75 1.1-1.63 1.52-2.63 1.25c-.57-.16-.97-.62-1.42-1.13C10.7 3.46 9.85 2.5 8 2.5m-3.75 6q-3 0-3.75 3.33c.75-1.1 1.63-1.52 2.63-1.25c.57.16.97.62 1.42 1.13c.74.83 1.6 1.79 3.45 1.79q3 0 3.75-3.33c-.75 1.1-1.63 1.52-2.62 1.25c-.58-.16-.98-.62-1.43-1.13c-.74-.83-1.6-1.79-3.45-1.79"
        strokeWidth={1}
      ></path>
    </svg>
  );
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center justify-center">
        {iconoTailwind}
        <h1 className="font-extrabold text-3xl sm:text-7xl text-amber-300 sm:ml-2">
          Tailwind CSS
        </h1>
      </div>

      <span className="mt-3">Ejemplos Practicos</span>
    </div>
  );
};
