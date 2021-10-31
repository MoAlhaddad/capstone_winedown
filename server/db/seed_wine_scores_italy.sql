
INSERT INTO wine_scores(
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        'Masseto, Toscana',
        2015,
        100,
        'A+',
        3,
        (
            select id
            from lk_countries
            where name = 'Italy'
        ),
        current_timestamp
    );
INSERT INTO wine_scores(
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        'Masseto, Toscana',
        2016,
        99.98,
        'A+',
        3,
        (
            select id
            from lk_countries
            where name = 'Italy'
        ),
        current_timestamp
    );
INSERT INTO wine_scores(
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        'Marchesi Antinori, Tenuta Tignanello, Solaia, Toscana',
        2015,
        99.82,
        'A+',
        4,
        (
            select id
            from lk_countries
            where name = 'Italy'
        ),
        current_timestamp
    );
INSERT INTO wine_scores(
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        'Tenuta San Guido, Sassicaia, Bolgheri Sassicaia',
        1985,
        99.7,
        'A',
        6,
        (
            select id
            from lk_countries
            where name = 'Italy'
        ),
        current_timestamp
    );
INSERT INTO wine_scores(
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        'Marchesi Antinori, Tenuta Tignanello, Solaia, Toscana',
        2016,
        99.51,
        'B+',
        3,
        (
            select id
            from lk_countries
            where name = 'Italy'
        ),
        current_timestamp
    );
INSERT INTO wine_scores(
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        'Giacomo Conterno, Monfortino, Barolo Riserva',
        2010,
        99.26,
        'A',
        8,
        (
            select id
            from lk_countries
            where name = 'Italy'
        ),
        current_timestamp
    );
INSERT INTO wine_scores(
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        'Giacomo Conterno, Monfortino, Barolo Riserva',
        2006,
        99.13,
        'B+',
        4,
        (
            select id
            from lk_countries
            where name = 'Italy'
        ),
        current_timestamp
    );
INSERT INTO wine_scores(
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        'Giacomo Conterno, Monfortino, Barolo Riserva',
        2013,
        99.02,
        'B+',
        3,
        (
            select id
            from lk_countries
            where name = 'Italy'
        ),
        current_timestamp
    );