function LoadingCards() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            className="group bg-grey-400 col-span relative h-[12vw w-[24%] animate-pulse flex space-x-4"
            key={num}
          ></div>
        ))}
      </div>
    </>
  );
}

export default LoadingCards;
