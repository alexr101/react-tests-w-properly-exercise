export const propOrderChanged = (prevProps, newProps) => {
    let key1 = '';
    let key2 = '';
    prevProps.properties.map((p)=> key1 += p.id);
    newProps.properties.map((p)=> key2 += p.id);
    return key1 !== key2;
}

export const getPropertyAddress = (property) => {
    const streetAddress = property.attributes['display-address'] 
    const city = property.attributes.city;
    const state = property.attributes.state;
    return streetAddress + ', ' + city + ', ' + state;
}