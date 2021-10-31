import * as ajaxCallCreators from './ajaxCallCreators';

export default class WineApi {
    static getWines() {
        return ajaxCallCreators.get('/wines')
            .then(result => result)
            .catch(err => err);
    }

    static createWineEntry(form) {
        return ajaxCallCreators.post('/wine_entries', form)
            .then(result => result)
            .catch(err => err);
    }


    static updateWineEntry(form, id) {
        return ajaxCallCreators.put(`/wine_entries/${id}`, form)
            .then(result => result)
            .catch(err => err);
    }

    static deleteWineEntry(id) {
        return ajaxCallCreators.deleteCall(`/wine_entries/${id}`)
            .then(result => result)
            .catch(err => err);
    }
    static getRandomWines() {
        return ajaxCallCreators.get('/random_wines')
            .then(result => result)
            .catch(err => err);
    }

}