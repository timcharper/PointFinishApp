//To start using this generated code .. simply include this file in your app.js

//Ti.include("your generated window file.js goes here");

//To create your generated window and get a reference to it do: 

//var module = new FUI.window1(); This line instantiates the module 

//module.createAttachChWindow1(); This line instantiates the window and attaches all child components to it

//module.window1; this line returns the actual window instance

//If a window has large views. Remember to destroy these views if they are no longer needed. FUI.windowModule.view=null

if(typeof FUI === "undefined"){FUI={};}

(function(){

	FUI.TabGroup_1 = function(){};

	FUI.TabGroup_1.prototype.tab_1 = null ;

	FUI.TabGroup_1.prototype.tab_2 = null ;

	FUI.TabGroup_1.prototype.tab_3 = null ;

	FUI.TabGroup_1.prototype.tab_4 = null ;

	FUI.TabGroup_1.prototype.tab_5 = null ;

	FUI.TabGroup_1.prototype.tabGroup_1 = null ;

	FUI.TabGroup_1.prototype.createTabGroup_1 = function(){

		this.tabGroup_1 = Titanium.UI.createTabGroup({});

	};

	 FUI.TabGroup_1.prototype.createAttachChTabGroup_1 = function(){

		this.createTabGroup_1();

		this.createTab_1();

		this.tabGroup_1.addTab(this.tab_1);

		this.createTab_2();

		this.tabGroup_1.addTab(this.tab_2);

		this.createTab_3();

		this.tabGroup_1.addTab(this.tab_3);

		this.createTab_4();

		this.tabGroup_1.addTab(this.tab_4);

		this.createTab_5();

		this.tabGroup_1.addTab(this.tab_5);

	};

	FUI.TabGroup_1.prototype.createTab_5 = function(){

		this.tab_5 = Titanium.UI.createTab({icon:Ti.UI.iPhone.SystemIcon.BOOKMARKS,title:"Tab_5"});

	};

	FUI.TabGroup_1.prototype.createTab_4 = function(){

		this.tab_4 = Titanium.UI.createTab({icon:"tab4.png",title:"Tab_4"});

	};

	FUI.TabGroup_1.prototype.createTab_3 = function(){

		this.tab_3 = Titanium.UI.createTab({icon:"tab3.png",title:"Tab_3"});

	};

	FUI.TabGroup_1.prototype.createTab_2 = function(){

		this.tab_2 = Titanium.UI.createTab({icon:"tab2.png",title:"Tab_2"});

	};

	FUI.TabGroup_1.prototype.createTab_1 = function(){

		this.tab_1 = Titanium.UI.createTab({icon:"tab1.png",title:"Tab_1"});

	};

})();

