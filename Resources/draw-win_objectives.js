Ti.UI.backgroundColor = '#dddddd';
 
//var url = "http://pointfinish.herokuapp.com/objectives?lat="+curLatitude+"&long="+curLongitude+"&miles=1";
var url = "http://pointfinish.herokuapp.com/objectives?lat=40.763097&long=-111.888467&miles=1";
var win_objectives = Ti.UI.createWindow();
var table = Ti.UI.createTableView();
var tableData = [];
var json, name, start_coordinates, nameLabel, nickLabel;

var messy_as_hell_lock_thing = 0;
 
var xhr = Ti.Network.createHTTPClient({
    timeout:5000,
    onerror: function(e) {
        Ti.API.info("xhr erorr: " + e.error);
    },
    onload: function() {
        //Ti.API.error(this.responseText);
        var objectives = JSON.parse(this.responseText); //to consume, objectives[0].name <-- like this
    
        var tableview = Ti.UI.createTableView();
        var rowData = [];
        var addClickHandler = function(btn, objective) {
            btn.addEventListener('click',function(evt) {
              m_TabGroup1.tabGroup_1.setActiveTab(2); //go to map/my location (to present mission)

              Ti.API.error("Showwing mission controller");
							var mission_controller = new MissionController(objective, win_map, theMap);

							mission_controller.render();
            });
        };
        for (var i=0; i < objectives.length; i++) {
              var row = Ti.UI.createTableViewRow();
              var btn1 = Ti.UI.createButton({
                  top:5,
                  left:10,
                  height:40,
                  width:"90%",
                  title:objectives[i].name
              });
              var btnLabel = Ti.UI.createLabel({
                  text: objectives[i].description,
                  font: { fontSize:12 },
                  top:25
              });
              btn1.add(btnLabel);
              row.add(btn1);
              rowData.push(row);
              addClickHandler(btn1, objectives[i]);
        }
        tableview.setData(rowData);
        win_objectives.add(tableview);
        win_objectives.open();
    }
});
    
xhr.open("GET", url);
xhr.setRequestHeader('Accept','application/json');
xhr.send();
 
win_objectives.add(table);