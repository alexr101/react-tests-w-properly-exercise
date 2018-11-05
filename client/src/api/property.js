import axios from 'axios';

class PropertyApi  {

    constructor(){
        this.baseUrl = 'https://properly-api-production.herokuapp.com/api/wolfnet/';
    }

    getAll(){
        return axios.get(this.baseUrl + 'properties/');
    }
    getAttributes(id){
        return axios.get(this.baseUrl + 'properties/' + id + '/property-attribute');
    }
    getPhotos(id){
        return axios.get(this.baseUrl + 'properties/' + id + '/photos');
    }
}

export default new PropertyApi();

