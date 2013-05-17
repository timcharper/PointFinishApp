// Augment adding a new property / variable
FUI.Window10.prototype.newImageView=null;
 
// Augment adding a new function
FUI.Window10.prototype.addNewImageView=function(){
 
// Lets do something interesting here
 
this.newImageView = Titanium.UI.createImageView({});
 
// add this to the window NOW
 
this.window10.add(this.newImageView);
 
};