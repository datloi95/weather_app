const request = require('request');

const geocode = (address, callback) =>{
    
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) 
                + '.json?access_token=pk.eyJ1IjoiZGF0bG9pOTUiLCJhIjoiY2p5ODFmczRxMDVsMDNwbXFlZzJ1dXZ3cSJ9.mXpLHQG1MdIjH--fzGKvtQ&limit=1';
    request({url: url, json: true}, (error, response)=>{
    if (error){
        callback('Unable to connect to location url')
    }
    else if (response.body.features.length === 0){
        callback(undefined,"Invalid location provided")
    }
    else {
        callback(undefined, {
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location: response.body.features[0].place_name
        })
    }
})
}

module.exports = geocode;