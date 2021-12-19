SELECT *, ( select name from lk_countries lc where lc.id = wine_scores.country_id ) as country from wine_scores where is_favorite_wine = true ;

