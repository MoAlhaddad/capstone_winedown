insert into wine_scores
(
    wine,
    vintage,
    gws,
    ci,
    nbj,
    country_id,
    is_favorite_wine,
    date_created
)

 values
( ${wine}, ${vintage}, ${gws}, ${ci}, ${nbj}, ${country},${isFavoriteWine}, current_timestamp);