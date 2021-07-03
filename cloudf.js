$(document).load(function () {
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
