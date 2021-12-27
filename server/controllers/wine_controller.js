module.exports = {
  getWines: (req, res) => {
    const dbInstance = req.app.get("db");
    return dbInstance
      .get_all_wines()
      .then((wines) => {
        res.status(200).json({ wines: wines });
      })
      .catch((err) => console.log(err));
  },
  createWineEntry: (req, res) => {
    const dbInstance = req.app.get("db");

    const { wine, vintage, gws, ci, nbj, country_id, entry_status_id } =
      req.body;
    return dbInstance
      .create_wine_entry({
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        entry_status_id,
      })
      .then((createdWineEntry) => {
        res.status(201).json({ success: true }); //Success is not required, return a 201 status code indicating a record has been created.
      })
      .catch((err) => console.log(err));
  },
  updateWineEntry: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    const { wine, vintage, gws, ci, nbj, country_id, entry_status_id } =
      req.body;

    /*
     ** Success is not required, return a 204 status code indicating a record has been updated, therefore return no content.
     ***** DELETE THIS COOMMENT *********
     ** Instead refresh the screen with updated data.
     ** In a professional situation you would refresh a grid, or refresh the modal with updated data.
     */
    return dbInstance
      .update_wine_entry({
        id,
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country_id,
        entry_status_id,
      })
      .then((updatedWineEntry) => {
        res.status(204).json({ success: true });
      })
      .catch((err) => console.log(err));
  },
  deleteWineEntry: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    /*
     ** Success is not required, return a 204 status code indicating a record has been deleted, therefore return no content.
     */
    return dbInstance
      .delete_wine_entry({ id })
      .then((deletedWineEntry) => {
        res.status(204).json({ success: true });
      })
      .catch((err) => console.log(err));
  },

  getRandomWines: (req, res) => {
    const dbInstance = req.app.get("db");
    let randomWines = [];
    return dbInstance
      .get_all_wines()
      .then((wines) => {
        for (let i = 0; i < 5; i++) {
          const RandomIndex = Math.floor(Math.random() * 10);
          const Randomwine = wines[RandomIndex];
          randomWines.push(Randomwine);
        }

        return res.status(200).json({ randomWines });
      })
      .catch((err) => console.log(err));
  },
  filterWines: (req, res) => {
    const dbInstance = req.app.get("db");
    const { filters, typeOfComparison } = req.body;
    console.log("FILTERS:", filters);
    const filtersToUse = Object.keys(filters).filter(
      (filtKey) => filters[filtKey].active === true
    );
    console.log("FUCK MY BROTHER:", filtersToUse);
    return dbInstance
      .get_all_wines()
      .then((wines) => {
        //Case sensitive filter.
        const filteredWines = wines.filter((wine) => {
          if (typeOfComparison === "and") {
            return filtersToUse.every((filtKey) =>
              `${wine[filtKey]}`.includes(filters[filtKey].value)
            );
          }
          console.log("hit some filter");
          return filtersToUse.some((filtKey) =>
            `${wine[filtKey]}`.includes(filters[filtKey].value)
          );
        });
        return res.status(200).json({ filteredWines });
      })
      .catch((err) => console.log(err));
  },
  getLkCountries: (req, res) => {
    const dbInstance = req.app.get("db");
    return dbInstance
      .get_lk_countries()
      .then((lkCountries) => {
        return res.status(200).json({ lkCountries });
      })
      .catch((error) => {
        return console.log(error);
      });
  },

  createWine: (req, res) => {
    const dbInstance = req.app.get("db");
    const { wine, vintage, gws, ci, nbj, country, isFavoriteWine } = req.body;
    console.log(req.body);
    return dbInstance
      .create_wine({
        wine,
        vintage,
        gws,
        ci,
        nbj,
        country,
        isFavoriteWine: isFavoriteWine,
      })
      .then((_) => res.json({ success: true }))
      .catch((err) => console.log(err));
  },

  getfavoriteWines: (req, res) => {
    const dbInstance = req.app.get("db");
    return dbInstance
      .get_favorite_wines()
      .then((wines) => {
        res.status(200).json({ wines: wines });
      })
      .catch((err) => console.log(err));
  },
};

// in the for loop create a random index from 1 to ten implententing math.floor and math.random, assign that result to a variable called random index have it camelcase
//Using the random index get the specific wines from the wines retrieved using bracket notation [] to select a random wine
//after item retrieved assign it to variable called random wine
//then add random wine to the empty array using push or unshift
//AFTER for loop pass the array that i just added to the .json and this will return my random wines
