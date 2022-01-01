import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
// import format from "date-fns/format";
import "./WineScoreCardStyles.scss";

export default function Card({
  wine,
  vintage,
  gws,
  ci,
  nbj,
  country_id,
  country,
  date_created,
  date_updated,
}) {
  return (
    <BootstrapCard className="winedown-card">
      <BootstrapCard.Header>{wine}</BootstrapCard.Header>
      <BootstrapCard.Body>
        Vintage: {vintage}
        <br />
        GWS: {gws}
        <br />
        CI: {ci}
        <br />
        NBJ: {nbj}
        <br />
        COUNTRY: {country}
        <br />
      </BootstrapCard.Body>
      <BootstrapCard.Footer>Date Created: {date_created}</BootstrapCard.Footer>
    </BootstrapCard>
  );
}
