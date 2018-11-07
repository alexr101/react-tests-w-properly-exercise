// This can be extended for a more robust API manager
class BaseApi {
    buildUrlParams(params){
        return Object.keys(params).map(key => key + '=' + params[key]).join('&');
    }
}

export default BaseApi;