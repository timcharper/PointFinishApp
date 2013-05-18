function MissionController(objective, container_view_element, map) {
  this.step_idx = -1; // show the description
  this.objective = objective;
  this.container_view_element = container_view_element;
  this.map = map;
  
  this.addElements();
}

MissionController.prototype = {
  render: function() {
    // Remove elements
    this.setButtonVisibility();
    this.hideActionButtons();
    if (this.step_idx == -1)
      this.showInitial();
    else if ((this.step_idx >= 0) && (this.step_idx < this.objective.waypoints.length))
      this.showStep();
    else
  	  this.showCongratulations();
  },
	
	hideActionButtons: function() {
    for (k in this.action_buttons)
  	  this.action_buttons[k].visible = false;
	},

  // point - { latitude, longitude }
  setLocation: function(point, delta) {
    this.map.setLocation({latitudeDelta   : delta,
                          longitudeDelta  : delta,
                          latitude        : point.latitude - 0.0005, // HACK
                          longitude       : point.longitude,

                          // vv - I can haz comment? - vv
                          region: {latitude   : point.latitude,
                                   longitude  :  point.longitude, 
                                   latitudeDelta  : delta,
                                   longitudeDelta : delta}});
  },

  showInitial: function() {
    this.nav_label.text = this.objective.name + "\n\n" + this.objective.description;
    this.btn_right.visible = true;
    this.setLocation(this.objective.location, 0.001);
  },

	showCongratulations: function() {
    this.nav_label.text = "Congratulations! You've completed this mission and have won a major award!";
	},

  currentStep: function() {
    return this.objective.waypoints[this.step_idx];
  },

  showStep: function() {
    var step = this.currentStep();
    this.btn_right.visible = true;
    this.nav_label.text = step.name + "\n\n" + step.description;
    this.setLocation(step, 0.001);
    for (action in step.action) {
  	  if (this.action_buttons[action])
        this.action_buttons[action].visible = true;
    }
  },
	
  atEnd: function () {
    // -1 = objective overview, after end of array = congrats screen
    return this.step_idx >= this.objective.waypoints.length;
  },

  setButtonVisibility: function() {
    if (this.atEnd())
      this.btn_right.visible = false;
    else
  	  this.btn_right.visible = true;
  },

  addElements: function() {
    var that = this;
    this.view = Ti.UI.createView({
      top:248,
      left:5,
      width:310,
      height:200,
      backgroundColor:'white',
  	  borderRadius: 5,
      color:'black',
      font: { fontSize:14 }
    });

    this.nav_label = Ti.UI.createLabel({
      top:0,
      left:5,
      width:300,
      height:200,
      verticalAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP,
      color:'black',
      text: '',
      font: { fontSize:14 }
    });

    this.btn_right = Ti.UI.createButton({
      //text:'Right Arrow',
      top:145,
      left:245,
      width:59,
      height:58,
      backgroundImage:'images/arrow_right.png',
      zIndex: 1000
    });
    
    // TODO - dynamically generate these buttons
    this.action_buttons = {
  	  yelp: Ti.UI.createButton({
        top:150,
        left:195,
        width:43,
        height:43,
        backgroundImage:'images/yelp.jpg',
        zIndex: 1000
  	  }),
  	  photo: Ti.UI.createButton({
        top:150,
        left:150,
        width:43,
        height:43,
        backgroundImage:'images/iphone4s_camera.jpg',
        zIndex: 1000
  	  })
    };
    this.action_buttons.yelp.addEventListener('click', function() { that.action('yelp'); });
    this.action_buttons.photo.addEventListener('click', function() { that.action('photo'); });
    
    //var btn_left = Ti.UI.createLabel({
    //    text:'Left Arrow',
    //    top:100,
    //    left:5,
    //})
    this.container_view_element.add(this.view);
    this.view.add(this.nav_label);
    this.nav_label.add(this.btn_right);
    this.nav_label.add(this.action_buttons.yelp);
    this.nav_label.add(this.action_buttons.photo);

    //had to turn this on - bug fix, maybe allowing click event to propogate to children?
    this.nav_label.addEventListener('click', function() { });
    this.btn_right.addEventListener('click', function() { that.nav(1); });
  },

	// Actions should be a sub-controller... too much being done in Mission.
	action: function(which) {
    Handlers[which].action(this.currentStep().action[which]);
	},
  nav: function(direction) {
    this.step_idx += direction;
    this.render();
  }
};


var Handlers = {
	yelp: {
    image: "yelp.jpg",
    action: function(arg) {
  	  Ti.API.error("Open yelp to " + arg);
      Titanium.Platform.openURL(arg);
    }
	},
	photo: { 
    image: "iphone4s_camera.jpg",
    action: function(arg) {
  	  Ti.API.error("Trying to open camera. " + arg);
      Ti.Media.showCamera({
        animated: true,
        autoHide: true,
        saveToPhotoGallery: true,
        showControls: true,
        mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
        success: function() { Ti.API.debug("Took a picture"); },
        error: function() { Ti.API.debug("Didn't take a picture"); }
      });
    }
	}
};
