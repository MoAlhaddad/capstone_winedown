
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        1,
        'Domaine De La Romanee Conti,Romanee Conti Grand ',
         2005,
        100,
        'A+',
        4,
        (
            select id
            from lk_countries
            where name = 'France'
        ),
        current_timestamp
    );
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        3,
        'Domaine Leroy, Romanee Saint Vivant Grand Cru',
        2015,
        100,
        'A+',
        6,
        (
            select id
            from lk_countries
            where name = 'France'
        ),
        current_timestamp
    );
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        4,
        'Leroy Domaine D''Auvenay, Blanc, Chevalier Montrachet Grand Cru',
        2002,
        100,
        'A+',
        3,
        (
            select id
            from lk_countries
            where name = 'France'
        ),
        current_timestamp
    );
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        5,
        'Chateau Lafite Rothschild, Pauillac',
        1953,
        100,
        'B',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        6,
        'Domaine Georges & Christophe Roumier, Musigny Grand Cru',
        2005,
        100,
        'A',
        3,   
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (7, 'Chateau Lafleur, Pomerol', 1950, 100, 'A+', 4,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        8,
        'Leroy Domaine D''Auvenay, Blanc, Chevalier Montrachet Grand Cru',
        2008,
        100,
        'A',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        9,
        'Chateau D''Yquem, Blanc, Sauternes',
        1811,
        100,
        'A',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        10,
        'Domaine De La Romanee Conti, Romanee Conti Grand Cru',
        1999,
        100,
        'A+',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        11,
        'Domaine De La Romanee Conti, Romanee Conti Grand Cru',
        2015,
        100,
        'A+',
        6,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        12,
        'Chateau D''Yquem, Blanc, Sauternes',
        1847,
        100,
        'A+',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        13,
        'Domaine De La Romanee Conti, Romanee Conti Grand Cru',
        2012,
        100,
        'A',
        4,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        14,
        'Domaine De La Romanee Conti, La Tache Grand Cru',
        1999,
        100,
        'B',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        15,
        'Domaine Leroy, Musigny Grand Cru',
        2010,
        100,
        'A',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        16,
        'Coche Dury, Blanc, Corton Charlemagne Grand Cru',
        2014,
        99.97,
        'A+',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        17,
        'Domaine De La Romanee Conti, Romanee Conti Grand Cru',
        2010,
        99.85,
        'B+',
        5,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        18,
        'Leroy Domaine D''Auvenay, Bonnes Mares Grand Cru',
        2012,
        99.82,
        'A+',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        19,
        'Domaine Leroy, Chambertin Grand Cru',
        2010,
        99.82,
        'A+',
        4,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        20,
        'Domaine Jean Grivot, Richebourg Grand Cru',
        2015,
        99.76,
        'B+',
        4,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        21,
        'Domaine Leroy, Chambertin Grand Cru',
        2015,
        99.75,
        'A',
        6,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        22,
        'Domaine De La Romanee Conti, Romanee Conti Grand Cru',
        2009,
        99.71,
        'A+',
        5,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        23,
        'Paul Jaboulet Aine, La Chapelle, Hermitage',
        1961,
        99.7,
        'A+',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        24,
        'Domaine De La Romanee Conti, La Tache Grand Cru',
        1990,
        99.7,
        'A',
        5,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        25,
        'Domaine De La Romanee Conti, La Tache Grand Cru',
        2015,
        99.66,
        'A+',
        6,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        26,
        'Domaine De La Romanee Conti, Blanc, Montrachet Grand Cru',
        2014,
        99.65,
        'C+',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        27,
        'Chateau Haut Brion, Pessac Leognan',
        1989,
        99.64,
        'A+',
        11,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        28,
        'Domaine Leroy, Romanee Saint Vivant Grand Cru',
        2012,
        99.63,
        'A+',
        5,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        29,
        'Domaine Leroy, Chambertin Grand Cru',
        2008,
        99.63,
        'B+',
        4,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        30,
        'Krug, Clos Du Mesnil Blanc De Blancs Brut, Blanc, Champagne',
        1996,
        99.62,
        'B',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (31, 'Chateau Margaux, Margaux', 2015, 99.62, 'A+', 20);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        32,
        'Domaine Leroy, Musigny Grand Cru',
        2012,
        99.59,
        'A+',
        5,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        33,
        'Leroy Domaine D''Auvenay, Blanc, Chevalier Montrachet Grand Cru',
        2012,
        99.59,
        'A+',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        34,
        'Chateau De Beaucastel, Grand Cuvee Hommage A Jacques Perrin, Chateauneuf Du Pape',
        2016,
        99.57,
        'A+',
        5,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        35,
        'Domaine Jean-Louis Chave, Hermitage',
        2015,
        99.55,
        'A+',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        36,
        'Domaine De La Romanee Conti, Romanee Conti Grand Cru',
        2016,
        99.52,
        'A+',
        6,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        37,
        'Domaine Leroy, Romanee Saint Vivant Grand Cru',
        2010,
        99.52,
        'B+',
        4,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (38, 'Chateau Latour, Pauillac', 2010, 99.49, 'A+', 17);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        39,
        'Chateau Mouton Rothschild, Pauillac',
        1945,
        99.49,
        'B',
        6,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        40,
        'Domaine Leroy, Musigny Grand Cru',
        2015,
        99.48,
        'A',
        6,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        41,
        'Domaine Leroy, Chambertin Grand Cru',
        2002,
        99.45,
        'B+',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        42,
        'Domaine Leroy, Chambertin Grand Cru',
        2009,
        99.45,
        'A',
        4,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        43,
        'Domaine De La Romanee Conti, Romanee Conti Grand Cru',
        2006,
        99.41,
        'A+',
        4,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        44,
        'F E Trimbach, Riesling Clos Sainte Hune, Blanc, Alsace',
        1990,
        99.41,
        'B',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (45, 'Chateau Latour, Pauillac', 2016, 99.4, 'A+', 18);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (46, 'Chateau Margaux, Margaux', 2000, 99.39, 'A+', 12);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        47,
        'Domaine Leroy, Chambertin Grand Cru',
        2005,
        99.38,
        'A',
        3,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        48,
        'Leroy Domaine D''Auvenay, Blanc, Chevalier Montrachet Grand Cru',
        2010,
        99.38,
        'B',
        5,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        49,
        'Domaine De La Romanee Conti, Romanee Conti Grand Cru',
        2008,
        99.38,
        'A',
        5,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        50,
        'Chateau La Mission Haut Brion, Pessac Leognan',
        1955,
        99.37,
        'A+',
        4,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        51,
        'Domaine Leroy, Musigny Grand Cru',
        2008,
        99.35,
        'B',
        5,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        52,
        'Chateau La Mission Haut Brion, Pessac Leognan',
        1959,
        99.33,
        'A',
        4,
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        53,
        'E. Guigal, La Mouline, Cote Rotie',
        1988,
        99.32,
        'B+',
        4
    );
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        54,
        'Chateau Mouton Rothschild, Pauillac',
        2016,
        99.32,
        'A+',
        20
    );
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        55,
        'Domaine Des Comtes Lafon, Blanc, Montrachet Grand Cru',
        2002,
        99.27,
        'A',
        4
    );
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        56,
        'Domaine Auguste Clape, Cornas',
        2010,
        99.26,
        'B+',
        4
    );
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        57,
        'Domaine Leroy, Musigny Grand Cru',
        2014,
        99.25,
        'B+',
        5
    );
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        58,
        'E. Guigal, La Mouline, Cote Rotie',
        1985,
        99.24,
        'A',
        6
    );
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (59, 'Chateau Latour, Pauillac', 1961, 99.23, 'A+', 7);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        60,
        'E. Guigal, La Mouline, Cote Rotie',
        2015,
        99.23,
        'A',
        4
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (61, 'Petrus, Pomerol', 2018, 99.19, 'A+', 14);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        62,
        'Chateau Rayas, Reserve, Chateauneuf Du Pape',
        1990,
        99.17,
        'A',
        5
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        63,
        'Domaine Leroy, Latricieres Chambertin Grand Cru',
        2015,
        99.16,
        'A+',
        6
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        64,
        'Domaine Leroy, Musigny Grand Cru',
        2002,
        99.16,
        'A',
        3
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        65,
        'Leroy Domaine D''Auvenay, Blanc, Criots-Batard-Montrachet',
        2012,
        99.14,
        'B+',
        3
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        66,
        'Domaine De La Janasse, Vieilles Vignes, Chateauneuf Du Pape',
        2007,
        99.13,
        'A',
        3
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        67,
        'M. Chapoutier, L''Ermite Blanc, Blanc, Hermitage',
        2004,
        99.12,
        'A',
        3
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        68,
        'Chateau Haut Brion, Pessac Leognan',
        2016,
        99.08,
        'A+',
        20
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        69,
        'E. Guigal, La Landonne, Cote Rotie',
        2003,
        99.08,
        'A',
        9
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        70,
        'M. Chapoutier, L''Ermite Blanc, Blanc, Hermitage',
        2003,
        99.06,
        'B',
        3
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        71,
        'Domaine Armand Rousseau Pere Et Fils, Chambertin Grand Cru',
        2005,
        99.05,
        'B',
        4
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        72,
        'Petrus, Pomerol',
        2009,
        99.04,
        'A+',
        19;
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        73,
        'Michel Stephane Ogier, La Belle Helene, Cote Rotie',
        1999,
        99.04,
        'B+',
        3
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        74,
        'Domaine Georges & Christophe Roumier, Musigny Grand Cru',
        2015,
        99.04,
        'B+',
        6
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        75,
        'E. Guigal, La Turque, Cote Rotie',
        2015,
        99.04,
        'A+',
        4
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        76,
        'Domaine Leroy, Romanee Saint Vivant Grand Cru',
        2011,
        99.03,
        'B+',
        4
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        77,
        'Chateau De Beaucastel, Grand Cuvee Hommage A Jacques Perrin, Chateauneuf Du Pape',
        2007,
        99.02,
        'A',
        9
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        78,
        'Domaine Leroy, Chambertin Grand Cru',
        2014,
        99.01,
        'B',
        5
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (79, 'Chateau Lafleur, Pomerol', 1982, 99, 'B', 9);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (80, 'Chateau Lafleur, Pomerol', 2020, 98.99, 'A+', 6);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        81,
        'Domaine Leroy, Chambertin Grand Cru',
        2012,
        98.98,
        'B+',
        6
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        82,
        'Domaine De La Romanee Conti, Richebourg Grand Cru',
        2015,
        98.96,
        'A',
        6
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        83,
        'Chateau Ausone, Saint Emilion Grand Cru',
        2020,
        98.96,
        'A+',
        6
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        84,
        'Chateau D''Yquem, Blanc, Sauternes',
        1945,
        98.96,
        'B',
        5
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (85, 'Petrus, Pomerol', 2015, 98.94, 'A+', 19);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        86,
        'Chateau Leoville Las Cases, Grand Vin De Leoville, Saint Julien',
        2016,
        98.94,
        'A+',
        20
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (87, 'Petrus, Pomerol', 2016, 98.93, 'A+', 20);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        88,
        'Paul Jaboulet Aine, La Chapelle, Hermitage',
        2015,
        98.92,
        'B+',
        5
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        89,
        'Domaine Leroy, Chambertin Grand Cru',
        2011,
        98.92,
        'B+',
        4
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (90, 'Chateau Latour, Pauillac', 1982, 98.92, 'B+', 10);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        91,
        'Domaine Du Pegau, Cuvee Da Capo, Chateauneuf Du Pape',
        2007,
        98.91,
        'A',
        4
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        92,
        'Domaine Leroy, Musigny Grand Cru',
        2011,
        98.9,
        'B',
        4
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (93, 'Chateau Lafleur, Pomerol', 2016, 98.88, 'A+', 18);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        94,
        'Domaine Georges & Christophe Roumier, Musigny Grand Cru',
        1995,
        98.88,
        'B+',
        4
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        95,
        'Domaine Leroy, Romanee Saint Vivant Grand Cru',
        2009,
        98.87,
        'B',
        3
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        96,
        'Domaine De La Romanee Conti, Romanee Conti Grand Cru',
        2001,
        98.85,
        'A+',
        4
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (97, 'Chateau Margaux, Margaux', 2009, 98.85, 'A', 18);
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        98,
        'Chateau Lafite Rothschild, Pauillac',
        1959,
        98.84,
        'A+',
        7
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        99,
        'Chateau De Beaucastel, Grand Cuvee Hommage A Jacques Perrin, Chateauneuf Du Pape',
        1989,
        98.84,
        'A',
        7
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);
INSERT INTO wine_scores(
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        date_created
    )
VALUES (
        100,
        'Clos Saint Jean, Sanctus Sanctorum, Chateauneuf Du Pape',
        2010,
        98.84,
        'A',
        4
    );
(
    select id
    from lk_countries
    where name = 'France'
),
current_timestamp
);