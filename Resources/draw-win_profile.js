//To start using this generated code .. simply include this file in your app.js

//Ti.include("your generated window file.js goes here");

//To create your generated window and get a reference to it do: 

//var module = new FUI.window1(); This line instantiates the module 

//module.createAttachChWindow1(); This line instantiates the window and attaches all child components to it

//module.window1; this line returns the actual window instance

//If a window has large views. Remember to destroy these views if they are no longer needed. FUI.windowModule.view=null

if(typeof FUI === "undefined"){FUI={};}

(function(){

	FUI.Profile = function(){};

	FUI.Profile.prototype.imageView_1 = null ;

	FUI.Profile.prototype.label_name = null ;

	FUI.Profile.prototype.label_location = null ;

	FUI.Profile.prototype.label_level = null ;

	FUI.Profile.prototype.label_points = null ;

	FUI.Profile.prototype.label_notoriety = null ;

	FUI.Profile.prototype.label_1 = null ;

	FUI.Profile.prototype.imageView_2 = null ;

	FUI.Profile.prototype.view_1 = null ;

	FUI.Profile.prototype.profile = null ;

	FUI.Profile.prototype.createProfile = function(){

		this.profile = Titanium.UI.createWindow({});

	};

	 FUI.Profile.prototype.createAttachChProfile = function(){

		this.createProfile();

		this.createAttachChView_1();

		this.profile.add(this.view_1);

	};

	FUI.Profile.prototype.createView_1 = function(){

		this.view_1 = Titanium.UI.createView({backgroundColor:"#000000"});

	};

	 FUI.Profile.prototype.createAttachChView_1 = function(){

		this.createView_1();

		this.createImageView_1();

		this.view_1.add(this.imageView_1);

		this.createLabel_name();

		this.view_1.add(this.label_name);

		this.createLabel_location();

		this.view_1.add(this.label_location);

		this.createLabel_level();

		this.view_1.add(this.label_level);

		this.createLabel_points();

		this.view_1.add(this.label_points);

		this.createLabel_notoriety();

		this.view_1.add(this.label_notoriety);

		this.createLabel_1();

		this.view_1.add(this.label_1);

		this.createImageView_2();

		this.view_1.add(this.imageView_2);

	};

	FUI.Profile.prototype.createImageView_2 = function(){

		this.imageView_2 = Titanium.UI.createImageView({image:"images/Logo-StartUpWeekend",height:"13%",left:"52%",top:"18%",width:"47%"});

	};

	FUI.Profile.prototype.createLabel_1 = function(){

		this.label_1 = Titanium.UI.createLabel({text:"Startup Weekend",color:"#686868",textAlign:"center",font:{fontFamily:"Helvetica Neue",fontSize:16},height:"5%",left:"53%",top:"13%",width:"44%"});

	};

	FUI.Profile.prototype.createLabel_notoriety = function(){

		this.label_notoriety = Titanium.UI.createLabel({text:"notoriety",color:"#FFFFFF",font:{fontFamily:"Helvetica Neue",fontSize:10},height:"5%",left:"86%",top:"6%",width:"19%"});

	};

	FUI.Profile.prototype.createLabel_points = function(){

		this.label_points = Titanium.UI.createLabel({text:"points",color:"#FFFFFF",font:{fontFamily:"Helvetica Neue",fontSize:10},height:"5%",left:"69%",top:"6%",width:"18%"});

	};

	FUI.Profile.prototype.createLabel_level = function(){

		this.label_level = Titanium.UI.createLabel({text:"level",color:"#FFFFFF",font:{fontFamily:"Helvetica Neue",fontSize:10},height:"5%",left:"53%",top:"6%",width:"17%"});

	};

	FUI.Profile.prototype.createLabel_location = function(){

		this.label_location = Titanium.UI.createLabel({text:"Location",color:"#FFFFFF",textAlign:"center",font:{fontFamily:"Helvetica Neue",fontSize:12},height:"4%",left:"52%",top:"3%",width:"43%"});

	};

	FUI.Profile.prototype.createLabel_name = function(){

		this.label_name = Titanium.UI.createLabel({text:"Tim Daley",color:"#FFFFFF",textAlign:"center",font:{fontFamily:"Helvetica Neue",fontWeight:"Bold",fontSize:18},height:"5%",left:"51%",top:"0%",width:"46%"});

	};

	FUI.Profile.prototype.createImageView_1 = function(){

		this.imageView_1 = Titanium.UI.createImageView({backgroundColor:"#FFFFFF",backgroundImage:"images/avatar_mabuti_twitter.jpg",borderColor:"#FFFFFF",borderWidth:5,height:"31%",left:"0%",top:"0%",width:"49%"});

	};

})();

