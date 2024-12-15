import { useState } from "react";

export default function Articles({
  desserts,
  handleClick,

  increment,
  decrement,
  counts,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
      {desserts.map((dessert) => (
        <div key={dessert.id}>
          <article className="relative p-8">
            <img
              alt={dessert.name}
              src={dessert.img}
              className={`  w-full rounded-lg ${
                counts[dessert.id] && "border-2 border-red-800"
              }`}
            ></img>
            {!counts[dessert.id] ? (
              <button
                onClick={() => handleClick(dessert.id)}
                className=" border-gray-800 border flex gap-2 font-semibold absolute bottom-0 left-1/2 transform -translate-x-1/2 text-black bg-white py-3 px-6 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                  viewBox="0 0 21 20"
                >
                  <g
                    fill="#C73B0F"
                    clipPath="url(#a)"
                  >
                    <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                    <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        d="M.333 0h20v20h-20z"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Add to cart
              </button>
            ) : (
              <div className="border-gray-800 border flex justify-between items-center gap-2 font-semibold absolute bottom-0 left-1/2 transform -translate-x-1/2 text-black bg-red-700 py-3 px-6 w-52 rounded-full">
                <button onClick={() => increment(dessert.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {/* Círculo alrededor */}
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#fff"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Símbolo de "+" */}
                    <line
                      x1="12"
                      y1="8"
                      x2="12"
                      y2="16"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="8"
                      y1="12"
                      x2="16"
                      y2="12"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <span className="text-white">{counts[dessert.id]}</span>

                <button onClick={() => decrement(dessert.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {/* Círculo alrededor */}
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#fff"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Símbolo de "-" */}
                    <line
                      x1="8"
                      y1="12"
                      x2="16"
                      y2="12"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </article>
          <div className="flex flex-col mt-6 pl-8">
            <span className="text-gray-400 text-lg">{dessert.name}</span>
            <span className="font-semibold text-lg">{dessert.description}</span>
            <span className="text-red-700 font-semibold text-lg">{`$ ${dessert.price.toFixed(
              2
            )}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
