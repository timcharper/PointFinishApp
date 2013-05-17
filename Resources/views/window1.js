//To start using this generated code .. simply include this file in your app.js

//Ti.include("your generated window file.js goes here");

//To create your generated window and get a reference to it do: 

//var module = new FUI.window1(); This line instantiates the module 

//module.createAttachChWindow1(); This line instantiates the window and attaches all child components to it

//module.window1; this line returns the actual window instance

//If a window has large views. Remember to destroy these views if they are no longer needed. FUI.windowModule.view=null

if(typeof FUI === "undefined"){FUI={};}

(function(){

	FUI.Window1 = function(){};

	FUI.Window1.prototype.view_1 = null ;

	FUI.Window1.prototype.window1 = null ;

	FUI.Window1.prototype.createWindow1 = function(){

		this.window1 = Titanium.UI.createWindow({});

	};

	 FUI.Window1.prototype.createAttachChWindow1 = function(){

		this.createWindow1();

		this.createAttachChView_1();

		this.window1.add(this.view_1);

	};

	FUI.Window1.prototype.createView_1 = function(){

		this.view_1 = Titanium.UI.createView({});

	};

	 FUI.Window1.prototype.createAttachChView_1 = function(){

		this.createView_1();

	};

})();

