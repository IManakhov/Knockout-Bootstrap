define([],function() {
    var User = function () {
        var self = this;

        this.load = function(userName, callbackFn){
            $.ajax({
                crossDomain: true,
                dataType: 'json',
                url: "https://api.github.com/users/" + userName,
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

    return new User();
});