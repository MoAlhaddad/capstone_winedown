import React, { useState } from "react";
import WineApi from "../api/wineapi";
import Paginate from "../components/Paginate";

export default function FavoriteWines() {
  //Set wines
  const [wines, setWines] = useState([]);
  React.useEffect(() => {
    async function getFavoriteWines() {
      const wineResponse = await WineApi.getFavoriteWines();
      setWines(wineResponse.wines);
    }

    getFavoriteWines();
  }, []);

  return (
    <div>
      <h2> Favorite WineList </h2>

      <Paginate wineList={wines} displayFavoriteWineColumn={false} />

      {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
        {wines && wines.map((wine) => <Card key={wine.id} {...wine} />)}
      </div> */}
    </div>
  );
}
