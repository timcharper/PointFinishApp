//To start using this generated code .. simply include this file in your app.js
 
//Ti.include("your generated window file.js goes here");
 
//To create your generated window and get a reference to it do:
 
//var module = new FUI.window1(); This line instantiates the module
 
//module.createAttachChWindow1(); This line instantiates the window and attaches all child components to it
 
//module.window1; this line returns the actual window instance
 
//If a window has large views. Remember to destroy these views if they are no longer needed. FUI.windowModule.view=null
 
if(typeof FUI === "undefined"){FUI={};}
 
(function(){
 
    FUI.Window10 = function(){};
 
    FUI.Window10.prototype.button_4 = null ;
 
    FUI.Window10.prototype.button_3 = null ;
 
    FUI.Window10.prototype.buttonBar_1_labels = null ;
 
    FUI.Window10.prototype.buttonBar_1 = null ;
 
    FUI.Window10.prototype.button_1 = null ;
 
    FUI.Window10.prototype.tableViewRow_1 = null ;
 
    FUI.Window10.prototype.label_1 = null ;
 
    FUI.Window10.prototype.label_1 = null ;
 
    FUI.Window10.prototype.tableViewRow_2 = null ;
 
    FUI.Window10.prototype.tableViewSection_1 = null ;
 
    FUI.Window10.prototype.tableView_1_data = null ;
 
    FUI.Window10.prototype.tableView_1 = null ;
 
    FUI.Window10.prototype.button_2 = null ;
 
    FUI.Window10.prototype.button_2 = null ;
 
    FUI.Window10.prototype.view_1 = null ;
 
    FUI.Window10.prototype.view_1 = null ;
 
    FUI.Window10.prototype.tableView_1 = null ;
 
    FUI.Window10.prototype.button_1 = null ;
 
    FUI.Window10.prototype.buttonBar_1 = null ;
 
    FUI.Window10.prototype.button_3 = null ;
 
    FUI.Window10.prototype.button_4 = null ;
 
    FUI.Window10.prototype.window10 = null ;
 
    FUI.Window10.prototype.createWindow10 = function(){
 
        this.createButton_4();
 
        this.createButton_3();
 
        this.window10 = Titanium.UI.createWindow({title:"TitleBar_1",rightNavButton:this.button_4,leftNavButton:this.button_3});
 
    };
 
    FUI.Window10.prototype.createAttachChWindow10 = function(){
 
        this.createWindow10();
 
        this.createButtonBar_1();
 
        this.window10.add(this.buttonBar_1);
 
        this.createButton_1();
 
        this.window10.add(this.button_1);
 
        this.createTableView_1();
 
        this.window10.add(this.tableView_1);
 
        this.createAttachChView_1();
 
        this.window10.add(this.view_1);
 
    };
 
    FUI.Window10.prototype.createView_1 = function(){
 
        this.view_1 = Titanium.UI.createView({height:177,left:0,top:283,width:318});
 
    };
 
    FUI.Window10.prototype.createAttachChView_1 = function(){
 
        this.createView_1();
 
        this.createButton_2();
 
        this.view_1.add(this.button_2);
 
    };
 
    FUI.Window10.prototype.createButton_2 = function(){
 
        this.button_2 = Titanium.UI.createButton({title:"Button_2",height:36,left:54,top:61,width:110});
 
    };
 
    FUI.Window10.prototype.createTableView_1 = function(){
 
// Note: This is an extension point. To override the static table data define FUI.Window10.getTableView_1_data function.
 
        if(this.getTableView_1_data){
 
            this.tableView_1_data = this.getTableView_1_data();
 
        }else{
 
           this.tableView_1_data = [3];
 
            this.createAttachChTableViewRow_1();
 
            this.tableView_1_data[0] = this.tableViewRow_1;
 
           this.createAttachChTableViewRow_2();
 
            this.tableView_1_data[1] = this.tableViewRow_2;
 
            this.createAttachChTableViewSection_1();
 
            this.tableView_1_data[2] = this.tableViewSection_1;
 
        }
 
        this.tableView_1 = Titanium.UI.createTableView({height:114,left:1,top:161,width:318,data:this.tableView_1_data});
 
    };
 
    FUI.Window10.prototype.createTableViewSection_1 = function(){
 
        this.tableViewSection_1 = Titanium.UI.createTableViewSection({headerTitle:"Section",height:32,left:61,top:89,width:320});
 
    };
 
    FUI.Window10.prototype.createAttachChTableViewSection_1 = function(){
 
        this.createTableViewSection_1();
 
    };
 
    FUI.Window10.prototype.createTableViewRow_2 = function(){
 
        this.tableViewRow_2 = Titanium.UI.createTableViewRow({title:"Row",height:45,left:26,top:94,width:320});
 
    };
 
    FUI.Window10.prototype.createAttachChTableViewRow_2 = function(){
 
        this.createTableViewRow_2();
 
        this.createLabel_1();
 
        this.tableViewRow_2.add(this.label_1);
 
    };
 
    FUI.Window10.prototype.createLabel_1 = function(){
 
        this.label_1 = Titanium.UI.createLabel({text:"Label_1",height:28,left:113,top:23,width:80});
 
    };
 
    FUI.Window10.prototype.createTableViewRow_1 = function(){
 
        this.tableViewRow_1 = Titanium.UI.createTableViewRow({title:"Row",height:45,left:50,top:34,width:320});
 
    };
 
    FUI.Window10.prototype.createAttachChTableViewRow_1 = function(){
 
        this.createTableViewRow_1();
 
    };
 
    FUI.Window10.prototype.createButton_1 = function(){
 
        this.button_1 = Titanium.UI.createButton({title:"Button_1",height:36,left:10,top:78,width:110});
 
    };
 
    FUI.Window10.prototype.createButtonBar_1 = function(){
 
//Note: This is an extension point. To override the Buttons you will need to define the function FUI.Window10.getButtonBar_1_labels
 
        if(this.getButtonBar_1_labels){
 
            this.buttonBar_1_labels = this.getButtonBar_1_labels();
 
        }else{
 
           this.buttonBar_1_labels = [{width:323,title:"X_1"},{title:"X_2"},{title:"X_3"}];
 
        }
 
        this.buttonBar_1 = Titanium.UI.createButtonBar({height:49,left:-2,top:113,width:320,labels:this.buttonBar_1_labels});
 
    };
 
    FUI.Window10.prototype.createButton_3 = function(){
 
        this.button_3 = Titanium.UI.createButton({title:"Button_3",height:28,left:6,top:6,width:84});
 
    };
 
    FUI.Window10.prototype.createButton_4 = function(){
 
        this.button_4 = Titanium.UI.createButton({title:"Button_4",height:28,left:230,top:6,width:84});
 
    };
 
})();