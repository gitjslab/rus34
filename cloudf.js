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
    var regobject = {};
    new FormData(document.getElementById('formprofileupdate')).forEach((value, key) => regobject[key] = value);
    var regjson = JSON.stringify(regobject);
    $.ajax({
        url: 'https://herbtest.free.beeceptor.com/',
        data: regjson,
        processData: false,
        type: 'GET',
        success: function ( data ) {
            console.log( data );
        }
    });
});
