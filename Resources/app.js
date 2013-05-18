curLatitude = 35.76; // global
curLongitude = -111.90; // global
objectives = 0; //global

Ti.include("TabGroup1.js"); //generated by ForgeUI
Ti.include("draw-win_map.js");
Ti.include("draw-win_profile.js"); //generated by ForgeUI
Ti.include("draw-win_objectives.js");

current_objective_objectId = "";
objective_active = false;

//Turn on GPS location event (This should eventually only be turned on when the app has focus.)
if (Ti.Geolocation.locationServicesEnabled) {
    Ti.Geolocation.purpose = 'Get Current Location';
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.distanceFilter = 2;
    Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;

    Ti.Geolocation.addEventListener('location', function(e) {
        if (e.error) {
            //alert('Error: ' + e.error);
        } else {
            curLatitude = e.coords.latitude; //global
            curLongitude = e.coords.longitude; //global
        }
    });
} else {
    alert('Please enable location services');
}

Ti.UI.backgroundColor = 'white';

var m_TabGroup1 = new FUI.TabGroup_1(); //generated by ForgeUI
var m_profile = new FUI.Profile(); //generated by ForgeUI

m_TabGroup1.createAttachChTabGroup_1(); //generated by ForgeUI
m_profile.createAttachChProfile(); //generated by ForgeUI

var win1 = Ti.UI.createWindow();
win1.add(m_profile.view_1);

var win_friends = Ti.UI.createWindow({
    backgroundColor:'black'
});
var image_friends = Ti.UI.createImageView({
    image:'images/Friends_nophoneborder.png',
    top:0,
    left:0
});
win_friends.add(image_friends);

var win_profile2 = Ti.UI.createWindow({
    backgroundColor:'black'
});
var image_profile2 = Ti.UI.createImageView({
    image:'images/Profile-mockup.png',
    top:0,
    left:0
});
win_profile2.add(image_profile2);


//m_TabGroup1.tab_1.window = win_profile;
//m_TabGroup1.tab_1.window = win1;
m_TabGroup1.tab_1.window = win_profile2;
m_TabGroup1.tab_2.window = win_objectives;
m_TabGroup1.tab_3.window = win_map;
m_TabGroup1.tab_4.window = win_friends;


m_TabGroup1.tab_1.icon = "images/profile.png";
m_TabGroup1.tab_2.icon = "images/createobjective.png"; 
m_TabGroup1.tab_3.icon = "images/mylocation.png"; 
m_TabGroup1.tab_4.icon = "images/friends.png";
m_TabGroup1.tab_5.icon = "images/settings.png";


m_TabGroup1.tabGroup_1.open();
m_TabGroup1.tabGroup_1.setActiveTab(2); //Default tab on open will be My Location. (zero indexed)


//Create Objective
//Launch Mission

win_map.open(); //weird bug, after adding this, now GPS works...

var label1 = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:12 },
  shadowColor: 'black',
  shadowOffset: {x:3, y:3},
  text: "",
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 30,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});

win_map.add(label1); //trying to get distance working

/*
setInterval(fourTimesPerMinute, 15000);
function fourTimesPerMinute(){
    //label1.text = curLatitude + "\n" + curLongitude;
    var dist = distanceFromMe({
        longitude:40.76406177105147,
        latitude:-111.90228044986725
    });
    label1.text = "You are " + convertMetersToMiles(dist) + " miles away.\n" + "(in meters: "+ dist + ")"+"\nGPS coords:\n"+curLongitude+"\n"+curLatitude;
}
fourTimesPerMinute();
*/

function convertMilesToFeet(input){
    return input*5280;
}

/*

tableview = Ti.UI.createTableView();
rowData = [];
for (i=0; i < objectives.length; i++) {
     row = Ti.UI.createTableViewRow();
     btn1 = Ti.UI.createButton({left:10,height:30,title:objectives[i].name});
     row.add(btn1);
     rowData.push(row);
}
tableview.setData(rowData);
tableview.addEventListener('click',function(evt){
Ti.API.error(objectives[i].start_coordinates)
            //distanceFromMe({latitude:objectives[i].start_coordinates[0],
            //                longitude:objectives[i].start_coordinates[1]}); //must consume in this function because of async/time wait for GPS
        })

win_objectives = Ti.UI.createWindow();
win_objectives.add(tableview);
*/