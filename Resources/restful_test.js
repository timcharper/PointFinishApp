Ti.UI.backgroundColor = '#dddddd';
 
//var url = "http://pointfinish.herokuapp.com/objectives?lat="+curLatitude+"&long="+curLongitude+"&miles=1";
var url = "http://pointfinish.herokuapp.com/objectives?lat=40.763097&long=-111.888467&miles=1";
var win_objectives = Ti.UI.createWindow();
var table = Ti.UI.createTableView();
var tableData = [];
var json, name, start_coordinates, i, row, nameLabel, nickLabel;
 
var xhr = Ti.Network.createHTTPClient({
    onload: function() {
        Ti.API.error(this.responseText);
        objectives = JSON.parse(this.responseText); //to consume, objectives[0].name <-- like this
    
        
        
        tableview = Ti.UI.createTableView();
        rowData = [];
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
                  text:objectives[i].description,
                  font: { fontSize:8 },
                  top:25
              })
              btn1.add(btnLabel);
              row.add(btn1);
              rowData.push(row);
        }
        tableview.setData(rowData);

        tableview.addEventListener('click',function(evt){

               // Ti.API.error(objectives[i].start_coordinates)
            //distanceFromMe({latitude:objectives[i].start_coordinates[0],
            //                longitude:objectives[i].start_coordinates[1]}); //must consume in this function because of async/time wait for GPS
        })

        win_objectives.add(tableview);
    }
});
    
 

 
xhr.open("GET", url);
xhr.setRequestHeader('Accept','application/json');
xhr.send();
 
win_objectives.add(table);