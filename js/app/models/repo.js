define([],function() {
    var Repo = function () {
        var self = this;

        this.load = function (reposUrl,callbackFn) {
                $.ajax({
                    crossDomain: true,
                    dataType: 'json',
                    url: reposUrl,
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

    return new Repo();
});