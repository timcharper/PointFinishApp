Ti.UI.backgroundColor = '#dddddd';
 
var url = "http://pointfinish.herokuapp.com/objectives?lat=40.763097&long=-111.888467&radius=25";
var win = Ti.UI.createWindow();
var table = Ti.UI.createTableView();
var tableData = [];
var json, name, start_coordinates, i, row, nameLabel, nickLabel;
 
var xhr = Ti.Network.createHTTPClient({
    onload: function() {
    //Ti.API.debug(this.responseText);
        objectives = JSON.parse(this.responseText); //to consume, objectives[0].name <-- like this
    
        
        
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

        win = Ti.UI.createWindow();
        win.add(tableview);
        win.open();
    }
});
    
 

 
xhr.open("GET", url);
xhr.setRequestHeader('Accept','application/json');
xhr.send();
 
win.add(table);
win.open();