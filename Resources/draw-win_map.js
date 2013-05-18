win_map = Titanium.UI.createWindow({  
    title:'Map',
    backgroundColor:'#fff'
});

function isLocationAuthorized(_args) {
    //check that we are allowed to use
    var retVal = true;
    if (!Ti.Geolocation.locationServicesEnabled) return false;
    
    if (Ti.Platform.name === 'iPhone OS') {
      // Explain to the user why we are going to use the location services.
    
      Ti.Geolocation.purpose = _args.purpose;
      var authorization = Titanium.Geolocation.locationServicesAuthorization;
      
      if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
        // user has decided to not allow this use of location
        retVal = false;
      }
      else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
        // a device restriction prevents us from using location services
        retVal = false;
      } else retVal = true;
    }
    return retVal;
    
};

function getLocation(_args) {
    // we dont ned to be any more accurate than this
    // ACCURACY_LOW is one of the few settings that work with both Android and iOS
    // see the Ti API documentation
    Ti.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;

    Ti.Geolocation.getCurrentPosition(function(e)
    {
       if (!e.success || e.error)
       {
          alert('error ' + JSON.stringify(e.error));
       }
       if (_args.success) _args.success(e.coords)

    });
     
};

function updateMap(_args) {
    theMap.setLocation({latitude : _args.latitude
                       ,longitude : _args.longitude});
}
var theMap = Titanium.Map.createView({
            mapType: Ti.Map.SATELLITE_TYPE,
            region: {latitude:40.76406177105147, longitude:-111.90228044986725, 
                      latitudeDelta:0.01, longitudeDelta:0.01},
            animate:true,
            regionFit:true,
        });

var coffee1 = Titanium.Map.createAnnotation({
    latitude:40.76406177105147,
    longitude:-111.90228044986725,
    title:"The Rose Establishment",
    subtitle:'Coffee',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true
});

var coffee2 = Titanium.Map.createAnnotation({
    latitude:40.763121171621314,
    longitude:-111.9003975391388,
    title:"Cupputos Market & Deli",
    subtitle:'Coffee',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true
});

var coffee3 = Titanium.Map.createAnnotation({
    latitude:40.76353560584009,
    longitude:-111.89680337905884,
    title:"Capo Gelateria",
    subtitle:'Coffee',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true
});

var coffee4 = Titanium.Map.createAnnotation({
    latitude:40.76269132384165,
    longitude:-111.89015686511993,
    title:"Toasters",
    subtitle:'Coffee',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true
});

var coffee5 = Titanium.Map.createAnnotation({
    latitude:40.77157186825386,
    longitude:-111.87738418579102,
    title:"Jack Mormon Coffee",
    subtitle:'Coffee',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true
});


if (isLocationAuthorized({purpose:'To show your location on the map'})) {
    getLocation({success : updateMap});
};

theMap.addAnnotation(coffee1);
theMap.addAnnotation(coffee2);
theMap.addAnnotation(coffee3);
theMap.addAnnotation(coffee4);
theMap.addAnnotation(coffee5);
win_map.add(theMap);


function distanceinM(_args) {
    // ---- extend Number object with methods for converting degrees/radians
    /** Converts numeric degrees to radians */
    if (typeof(Number.prototype.toRad) === "undefined") {
      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      }
    }
    var R = 3960; // m    --- if you want it in KM then use 6371
    var dLat = (_args.toLat-_args.fromLat).toRad();
    var dLon = (_args.toLon-_args.fromLon).toRad();
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(_args.fromLat.toRad()) * Math.cos(_args.toLat.toRad()) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
};


function distanceFromTo(_args) {
    return distanceinM({
       fromLon : _args.lonF,
       fromLat : _args.latF,
       toLon   : _args.lonT,
       toLat   : _args.latT});
};

function distanceFromMe(_args){
  tempLat = _args.longitude;
  tempLon = _args.latitude;
  return distanceinM({
          fromLon : tempLon,
          fromLat : tempLat,
          toLon   : curLongitude,
          toLat   : curLatitude
        });
}

function convertMetersToFeet(input){
    return input/0.3048;
}

function convertMetersToMiles(input){
    return input*0.000621371192;
}
