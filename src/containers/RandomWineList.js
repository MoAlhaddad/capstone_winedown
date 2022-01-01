import React from "react";
import WineApi from "../api/wineapi";
import WineScoreCard from "../components/WineScoreCard";

export default function RandomWineList() {
  const [wines, setWines] = React.useState([]);
  React.useEffect(() => {
    async function getRandomWines() {
      const wineResponse = await WineApi.getRandomWines();
      setWines(wineResponse?.randomWines);
    }

    getRandomWines();
  }, []);

  return (
    <div>
      <h1 id="title">Random Wines based on Wine Preferences</h1>
      <div style={{ display: "flex", flex: "0 20%" }}>
        {wines.length &&
          wines.map((wine) => <WineScoreCard key={wine.id} {...wine} />)}
      </div>
    </div>
  );
}
