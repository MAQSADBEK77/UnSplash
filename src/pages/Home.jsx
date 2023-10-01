import { useState } from "react";
import Carts from "../components/Carts";
import Recomended from "../components/Recomended";

function Home() {
  let [data, setData] = useState(false);
  const [value, setValue] = useState(null);
  const [changeSearch, setChangeSearch] = useState(false);
  function changeSearchF(e) {
    e.preventDefault();
    setValue(changeSearch);
    setData(true);
  }
  if (!data) {
    return (
      <>
        <div className="container-css">
          <form onSubmit={(e) => changeSearchF(e)}>
            <input
              onChange={(e) => setChangeSearch(e.target.value)}
              type="text"
              placeholder="Search for images enter"
              className="mt-12 input input-bordered input-primary w-[350px] h-10"
            />
          </form>

          <Carts />
          <Recomended value="home" />
        </div>
      </>
    );
  } else {
    return (
      <div className="container-css">
        <form onSubmit={(e) => changeSearchF(e)}>
          <input
            onChange={(e) => setChangeSearch(e.target.value)}
            type="text"
            placeholder="Search for images enter"
            className="mt-12 input input-bordered input-primary w-[350px] h-10"
          />
        </form>
        <Recomended value={value} title={false} />
      </div>
    );
  }
}

export default Home;
