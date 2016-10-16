import _ from 'lodash'
import fetch from 'isomorphic-fetch';
import Promise from 'es6-promise';

class Api {

    static xhr(route, params, verb, parseJson = true) {
        return fetch(`${route}`, _.merge({
            method: verb
        }, {body: JSON.stringify(params)})).then( (response) => {
            if(response.ok) {
                return parseJson ? response.json() : response;
            }
            if(response.status === 401){
                document.location.reload();
                return;
            }
            return response;
        });
    }

    static head(route, params) {
        return this.xhr(route, params, 'head', false);
    }

    static get(route, params) {
        return this.xhr(route, params, 'get');
    }

    static getRaw(route, params) {
        return this.xhr(route, params, 'get', false);
    }

    static post(route, params) {
       return this.xhr(route, params, 'post');
    }

    static postRaw(route, params) {
       return this.xhr(route, params, 'post', false);
    }

    static put(route, params) {
        return this.xhr(route, params, 'put');
    }
}

export default Api;
