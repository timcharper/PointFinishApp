//To start using this generated code .. simply include this file in your app.js

//Ti.include("your generated window file.js goes here");

//To create your generated window and get a reference to it do: 

//var module = new FUI.Window1(); This line instantiates the module 

//module.createAttachChWindow1(); This line instantiates the window and attaches all child components to it

//module.Window1; this line returns the actual window instance

//If a window has large views. Remember to destroy these views if they are no longer needed. FUI.windowModule.view=null

if(typeof FUI === "undefined"){FUI={};}

(function(){

	FUI.Window10 = function(){};

	FUI.Window10.prototype.button_1 = null ;

	FUI.Window10.prototype.button_2 = null ;

	FUI.Window10.prototype.progressBar_1 = null ;

	FUI.Window10.prototype.Window10 = null ;

	FUI.Window10.prototype.createWindow10 = function(){

		this.Window10 = Titanium.UI.createWindow({backgroundColor:"#FEFFF5"});

	};

	 FUI.Window10.prototype.createAttachChWindow10 = function(){

		this.createWindow10();

		this.createButton_1();

		this.Window10.add(this.button_1);

		this.createButton_2();

		this.Window10.add(this.button_2);

		this.createProgressBar_1();

		this.Window10.add(this.progressBar_1);

	};

	FUI.Window10.prototype.createProgressBar_1 = function(){

		this.progressBar_1 = Titanium.UI.createProgressBar({max:100,min:0,value:0,height:12,left:15,top:132,width:290});

	};

	FUI.Window10.prototype.createButton_2 = function(){

		this.button_2 = Titanium.UI.createButton({title:"Press me",height:36,left:15,top:42,width:110});

	};

	FUI.Window10.prototype.createButton_1 = function(){

		this.button_1 = Titanium.UI.createButton({title:"No press me",height:36,left:195,top:42,width:110});

	};

})();

