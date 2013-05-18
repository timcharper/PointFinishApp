var fb = require('facebook');
fb.appid = 154522041392807;
fb.permissions = ['publish_stream']; // Permissions your app needs
fb.forceDialogAuth = true;
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged In');
    } else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        alert("Canceled");
    }
});
fb.authorize();

// First make sure this permission exists
fb.permissions = ['publish_stream'];
fb.authorize();

// Now create the status message after you've confirmed that authorize() succeeded
fb.requestWithGraphPath('me/feed', {message: "Team 'Point Finish' rules!"}, 
         "POST", function(e) {
    if (e.success) {
        alert("Success!  From FB: " + e.result);
    } else {
        if (e.error) {
            alert(e.error);
        } else {
            alert("Unkown result");
        }
    }
});