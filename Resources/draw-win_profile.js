var win_profile = Ti.UI.createWindow({
    backgroundColor:'black'
});
var view1 = Ti.UI.createView({
    top:0,
    left:0,
    width:'50%',
    borderWidth:5,
    borderColor:'white'
    });
var view2 = Ti.UI.createView({
    width:'50%'
});
var image_profile = Ti.UI.createImageView({
  image:'images/avatar_mabuti_twitter.jpg',
  top:0,
  left:0
});
var name_profile = Ti.UI.createLabel({
    color:'white',
    font: { fontSize:12 },
    text: 'Tim Daley',
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top:30
})
view1.add(image_profile);

win_profile.add(view1);
win_profile.add(view2);
