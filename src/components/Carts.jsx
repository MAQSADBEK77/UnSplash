import useFetch from "../hooks/useFetch";
function Carts() {
  const { data } = useFetch("home");
  if (data) {
    return (
      <div className="md:flex hidden flex-col gap-7 mt-7">
        <h1 className="text-primary text-2xl sm:text-4xl mb-7">Home pictures for you</h1>
        <div className="carousel carousel-center p-12 space-x-4 bg-neutral rounded-box">
          {data.results.map((cart) => {
            return (
              <div
                key={cart.id}
                className="carousel-item flex-col gap-4 w-[450px]  h-72">
                <img
                  className="object-cover w-full h-full"
                  src={cart.urls.full}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carts;
