
function distanceinM(_args) {  //M = MILES
    // ---- extend Number object with methods for converting degrees/radians
    /** Converts numeric degrees to radians */
   
    if (typeof(Number.prototype.toRad) === "undefined") {
      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      };
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
