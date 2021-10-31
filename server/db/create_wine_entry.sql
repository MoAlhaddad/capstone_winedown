insert into wine_entries
(
    wine,
    vintage,
    gws,
    ci,
    nbj,
    country_id,
    entry_status_id,
    approved_by_expert, -- This is meaningless. All wine entries when approved will not require expert approval, but display it to not con users
    date_created
)
values
( ${wine}, ${vintage}, ${gws}, ${ci}, ${nbj}, ${country_id}, ${entry_status_id}, 'Needs Expert Approval', current_timestamp);