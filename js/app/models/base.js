define([],function() {
    var BaseModel = function () {
        this.load = function (url,callbackFn) {
            $.ajax({
                crossDomain: true,
                dataType: 'json',
                url: url,
                success: function (msg) {
                    callbackFn(msg);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Error: " + errorThrown);
                    callbackFn(null);
                }
            });

        };
    };

    return new BaseModel();
});