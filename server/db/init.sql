-- lk_countries look up table, will display on the select tag.
create table lk_countries 
(
	id SERIAL PRIMARY KEY,
  	name VARCHAR(20) unique,
  	date_created TIMESTAMP null,
  	date_updated TIMESTAMP null,
  	deleted_ind boolean
);

-- lk_wine_entry_status look up table, will display on the filter via admin page(This is not required).
create table lk_wine_entry_statuses
(
	id SERIAL PRIMARY KEY,
  	name VARCHAR(20) unique,
  	date_created TIMESTAMP null,
  	date_updated TIMESTAMP null,
  	deleted_ind boolean
);

CREATE TABLE IF NOT EXISTS wine_scores(
  id      SERIAL  NOT NULL PRIMARY KEY, -- id of wine_scores, it will be used as a foreign key when referencing it on other tables.
  wine    VARCHAR(200) NOT NULL, -- name of wine
  vintage INTEGER  NOT NULL, -- year it was grown???
  gws     NUMERIC(10,2) NOT NULL, -- idk
  ci      VARCHAR(3) NOT NULL, -- idk
  nbj     INTEGER  NOT NULL, -- idk
  country_id INTEGER REFERENCES lk_countries (id) not null, -- Country id that references the lk_countries table.
  date_created TIMESTAMP null, -- The date the score was created.
  date_updated TIMESTAMP null, -- The date the score was updated.
  deleted_ind boolean -- The date the score was soft-deleted, still exists in database.
  color   VARCHAR(200) NOT NULL, -- color of wine
);



CREATE TABLE IF NOT EXISTS wine_entries(
  id      SERIAL  NOT NULL PRIMARY KEY, -- id of wine_scores
  wine    VARCHAR(200) NOT NULL, -- name of wine
  vintage INTEGER  NOT NULL, -- year it was grown???
  gws     NUMERIC(10,2) NOT NULL, -- idk
  ci      VARCHAR(3) NOT NULL, -- idk
  nbj     INTEGER  NOT NULL, -- idk
  color VARCHAR(200) NOT NULL, -- color of wine
  country_id INTEGER REFERENCES lk_countries (id) not null, -- Country id that references the lk_countries table.
  entry_status_id INTEGER REFERENCES lk_wine_entry_statuses (id) not null, -- Wine entry status id that references the lk_wine_entry_statuses table.
  approved_by_expert VARCHAR(200),
  date_created TIMESTAMP null, -- The date the score was created.
  date_updated TIMESTAMP null, -- The date the score was updated.
  deleted_ind boolean -- The date the score was soft-deleted, still exists in database.
);


