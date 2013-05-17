// Augment adding a new property / variable
FUI.Window5.prototype.newImageView=null;
 
// Augment adding a new function
FUI.Window5.prototype.addNewImageView=function(){
 
// Lets do something interesting here
 
this.newImageView = Titanium.UI.createImageView({});
 
// add this to the window NOW
 
this.window5.add(this.newImageView);
 
};