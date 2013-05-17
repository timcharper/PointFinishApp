//To start using this generated code .. simply include this file in your app.js

//Ti.include("your generated window file.js goes here");

//To create your generated window and get a reference to it do: 

//var module = new FUI.window1(); This line instantiates the module 

//module.createAttachChWindow1(); This line instantiates the window and attaches all child components to it

//module.window1; this line returns the actual window instance

//If a window has large views. Remember to destroy these views if they are no longer needed. FUI.windowModule.view=null

if(typeof FUI === "undefined"){FUI={};}

(function(){

	FUI.Window5 = function(){};

	FUI.Window5.prototype.button_1 = null ;

	FUI.Window5.prototype.view_1 = null ;

	FUI.Window5.prototype.window5 = null ;

	FUI.Window5.prototype.createWindow5 = function(){

		this.window5 = Titanium.UI.createWindow({});

	};

	 FUI.Window5.prototype.createAttachChWindow5 = function(){

		this.createWindow5();

		this.createAttachChView_1();

		this.window5.add(this.view_1);

	};

	FUI.Window5.prototype.createView_1 = function(){

		this.view_1 = Titanium.UI.createView({});

	};

	 FUI.Window5.prototype.createAttachChView_1 = function(){

		this.createView_1();

		this.createButton_1();

		this.view_1.add(this.button_1);

	};

	FUI.Window5.prototype.createButton_1 = function(){

		this.button_1 = Titanium.UI.createButton({title:"Button_1",height:"7%",left:"38%",top:"34%",width:"35%"});

	};

})();

