insert into wine_scores
(
    wine,
    vintage,
    gws,
    ci,
    nbj,
    country_id,
    date_created
)
values
( ${wine}, ${vintage}, ${gws}, ${ci}, ${nbj}, ${country}, current_timestamp);