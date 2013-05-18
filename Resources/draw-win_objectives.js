Ti.UI.backgroundColor = '#dddddd';
 
 
//var url = "http://pointfinish.herokuapp.com/objectives?lat="+curLatitude+"&long="+curLongitude+"&miles=1";
var url = "http://pointfinish.herokuapp.com/objectives?lat=40.763097&long=-111.888467&miles=1";
var win_objectives = Ti.UI.createWindow();
var table = Ti.UI.createTableView();
var tableData = [];
var json, name, start_coordinates, i, row, nameLabel, nickLabel;
 
var xhr = Ti.Network.createHTTPClient({
    onload: function() {
        //Ti.API.error(this.responseText);
        objectives = JSON.parse(this.responseText); //to consume, objectives[0].name <-- like this
    
        tableview = Ti.UI.createTableView();
        rowData = [];
        addClickHandler = function(btn, objective) {
            btn.addEventListener('click',function(evt){
              current_objective_objectId = objective.objectId;
              Ti.API.error("Just set variable current_objective_objectId to: " + current_objective_objectId);

              m_TabGroup1.tabGroup_1.setActiveTab(2); //go to map/my location (to present mission)
              var nav_label = Ti.UI.createLabel({
                  top:300,
                  left:5,
                  width:320,
                  height:160,
                  backgroundColor:'white',
                  color:'black',
                  text:objective.description
                  
              });
              var btn_right = Ti.UI.createLabel({
                  text:'Right Arrow', 
                  top:100,
                  left:250,
              });
              //var btn_left = Ti.UI.createLabel({
              //    text:'Left Arrow',
              //    top:100,
              //    left:5,
              //})
              nav_label.add(btn_right);
              //nav_label.add(btn_left);
              win_map.add(nav_label);
              win_map.open();
              theMap.setLocation({latitude : objective.geoPointStart.latitude,
                                  longitude : objective.geoPointStart.longitude,
                                  region: {latitude:objective.geoPointStart.latitude, longitude:objective.geoPointStart.longitude, 
                                           latitudeDelta:0.01, longitudeDelta:0.01},
                                  });
                                  Ti.API.error(objective.geoPointStart.latitude,objective.geoPointStart.longitude);
              btn_right.addEventListener('click', function(){
              theMap.setLocation({latitude : objective.geoPointEnd.latitude,
                                  longitude : objective.geoPointEnd.longitude,
                                  region: {latitude:objective.geoPointEnd.latitude, longitude:objective.geoPointEnd.longitude, 
                                           latitudeDelta:0.01, longitudeDelta:0.01},
                                  });
                                  Ti.API.error(objective.geoPointEnd.latitude,objective.geoPointEnd.longitude);
              });

            });
        };
        for (i=0; i < objectives.length; i++) {
              row = Ti.UI.createTableViewRow();
              btn1 = Ti.UI.createButton({
                  top:5,
                  left:10,
                  height:40,
                  width:"90%",
                  title:objectives[i].name
              });
              var btnLabel = Ti.UI.createLabel({
                  text: objectives[i].description,
                  font: { fontSize:8 },
                  top:25
              })
              btn1.add(btnLabel);
              row.add(btn1);
              rowData.push(row);
              addClickHandler(btn1, objectives[i]);
        }
        tableview.setData(rowData);


               // Ti.API.error(objectives[i].start_coordinates)
            //distanceFromMe({latitude:objectives[i].start_coordinates[0],
            //                longitude:objectives[i].start_coordinates[1]}); //must consume in this function because of async/time wait for GPS
         // })

        win_objectives.add(tableview);
        win_objectives.open();
    }
});
    
 

 
xhr.open("GET", url);
xhr.setRequestHeader('Accept','application/json');
xhr.send();
 
win_objectives.add(table);