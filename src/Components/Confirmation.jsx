export default function Confirmation({
  items,
  counts,
  totale,
  totalCart,
  handleconfirmation,
}) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen lg:justify-center lg:items-center">
      <section className=" bg-white lg:h-auto lg:w-1/3 h-screen mt-4 py-12 px-10 rounded-3xl lg:rounded-b-3xl rounded-b-none overflow-hidden">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
            fill="#1EA575"
          />
          <path
            d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
            fill="#1EA575"
          />
        </svg>
        <p className="mt-10 text-5xl font-bold">
          Order
          <br /> Confirmed
        </p>
        <span className="text-gray-400 block mt-4 font-semibold mb-8">
          We hope you enjoy your food!
        </span>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="border-gray-300 border-b flex justify-between bg-gray-100 rounded-md p-4 "
            >
              <div className="flex">
                <img
                  alt={item.name}
                  src={item.img2}
                  className="px-4"
                ></img>
                <div className="flex flex-col">
                  <span className="font-semibold text-xl mt-3">
                    {item.name}
                  </span>{" "}
                  <div className="flex">
                    <span className="my-3 mr-2 text-red-500 font-semibold text-xl ">{`x${
                      counts[item.id]
                    }`}</span>
                    <span className="my-3 mr-2 font-semibold text-gray-400 text-xl ">{`@ $${item.price.toFixed(
                      2
                    )}`}</span>
                  </div>
                </div>
              </div>
              <span className="my-3 font-bold text-gray-700 mr-4 flex items-center text-3xl">{`$${totale(
                item.price,
                counts[item.id]
              ).toFixed(2)}`}</span>
            </li>
          ))}
          {items.length > 0 && (
            <>
              <div className="bg-gray-100 flex justify-between items-center h-32 px-10 rounded-lg">
                <span className="font-semibold text-gray-700 text-2xl">
                  Order Total
                </span>
                <span className="font-extrabold text-4xl">{`$${totalCart().toFixed(
                  2
                )}`}</span>
              </div>

              <button
                onClick={handleconfirmation}
                className="bg-red-700 flex items-center justify-center rounded-full text-white font-semibold mt-8 h-20 w-full  "
              >
                <h3 className=" text-2xl">Start New Order</h3>
              </button>
            </>
          )}
        </ul>
      </section>
    </div>
  );
}
