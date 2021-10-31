import * as ajaxCallCreators from './ajaxCallCreators';

export default class InputApi {
    static getCreateWineEntryInputData() {
        return ajaxCallCreators.get('/create_wine_entries/input_data')
            .then(result => result)
            .catch(err => err);
    }

    static getUpdateWineEntryInputData(form) {
        return ajaxCallCreators.get('/update_wine_entries/input_data')
            .then(result => result)
            .catch(err => err);
    }


}