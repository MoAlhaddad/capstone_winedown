import React, { useState } from "react";
import WineApi from "../api/wineapi";
import Card from "../components/Card";
import SearchFilter from "../components/SearchFilter";
import Paginate from "../components/Paginate";

export default function WineList() {
  //Set wines
  const [wines, setWines] = useState([]);
  React.useEffect(() => {
    async function getWines() {
      const wineResponse = await WineApi.getWines();
      setWines(wineResponse.wines);
    }

    getWines();
  }, []);

  return (
    <div>
      <h2> Winedown List </h2>

      <SearchFilter wineList={wines} setWinelist={setWines} />
      <Paginate wineList={wines} displayFavoriteWineColumn={true} />

      {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
        {wines && wines.map((wine) => <Card key={wine.id} {...wine} />)}
      </div> */}
    </div>
  );
}
