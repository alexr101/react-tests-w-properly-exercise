import axios from 'axios';
import BaseApi from './baseApi';

class PropertyApi extends BaseApi {

    constructor(){
        super();
        this.baseUrl = 'https://properly-api-production.herokuapp.com/api/wolfnet/';
    }

    getAll(params = {}){
        console.log(params);
        console.log(this.baseUrl);
        
        const query = this.buildUrlParams(params);
        return axios.get(this.baseUrl + 'properties/?' + query);
    }
    getAttributes(id){
        return axios.get(this.baseUrl + 'properties/' + id + '/property-attribute');
    }
    getPhotos(id){
        return axios.get(this.baseUrl + 'properties/' + id + '/photos');
    }
}

export default new PropertyApi();

