define([],function() {
    var Stargazers = function () {
        var self = this;

        this.load = function (stargazersUrl, callbackFn) {
            $.ajax({
                crossDomain: true,
                dataType: 'json',
                url: stargazersUrl,
                success: function (msg) {
                    callbackFn(msg);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Error: " + errorThrown);
                    callbackFn(null);
                }
            });
        }
    };

    return new Stargazers();
});