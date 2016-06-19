define(['app/models/base'],function(basemodel) {
    var User = function () {
        var self = this;

        this.findedUser = {};

        this.find = function(userName, callbackFn){
            this.prototype.load("https://api.github.com/users/" + userName, function(success, result){
                self.findedUser = result;
                callbackFn(success, result);
            });
        };

        this.getFindedUser = function(){
            return this.findedUser;
        };

        this.prototype = basemodel;
    };

    return new User();
});