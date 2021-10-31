module.exports = {
    getCreateWineEntryInputData: (req, res) => {
        const dbInstance = req.app.get('db');
        return dbInstance.get_lk_countries()
        .then(lkCountries => {
            const inputArr = [
                { value: '', name: "wine", id: "wine-input", type: "text" },
                { value: '', name: "vintage", id: "vintage-input", type: "number" },
                { value: '', name: "gws", id: "gws-input", type: "text" },
                { value: '', name: "ci", id: "ci-input", type: "text" },
                { value: '', name: "nbj", id: "nbj-input", type: "number" },
                { value: '', name: "country_id", id: "country_id-select", type: "select", options: lkCountries },
            ];
            console.log("INPUTS:", inputArr);
            res.status(200).json({ inputs: inputArr });
        })
        .catch(err => console.log(err));
    },
    getUpdateWineEntryInputData: async (req, res) => {
        const dbInstance = req.app.get('db');
        const lkCountries = await dbInstance.get_lk_countries();
        const lkWineEntryStatuses = await dbInstance.get_wine_entry_statuses();
        const inputArr = [
            { value: '', name: "wine", id: "wine-input", type: "text" },
            { value: '', name: "vintage", id: "vintage-input", type: "number" },
            { value: '', name: "gws", id: "gws-input", type: "text" },
            { value: '', name: "ci", id: "ci-input", type: "text" },
            { value: '', name: "nbj", id: "nbj-input", type: "number" },
            { value: '', name: "country_id", id: "country_id-select", type: "select", options: lkCountries },
            { value: '', name: "entry_status_id", id: "entry_status_id-select", type: "select", options: lkWineEntryStatuses },
        ];
        return res.status(200).json({inputs: inputArr}); //Success is not required, return a 201 status code indicating a record has been created.
    },
};