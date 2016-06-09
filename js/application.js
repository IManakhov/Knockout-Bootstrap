/**
 * Created by manahov on 08.06.2016.
 */


var ViewModel = function () {
    var self = this;
    this.userName = ko.observable('');

    this.githubUser = ko.pureComputed({
        read: function () {
            return self.userName();
        },
        write: function (value) {
            self.userName(value);
        },
        owner: self
    });

    this.searchUser = function(){
        $.ajax({
            crossDomain: true,
            dataType: 'json',
            url: "https://api.github.com/users/" + self.userName(),
            success: function(msg){
                alert( "Data: " + msg );
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert( "Error: " + errorThrown );
            }
        });
    };

};

ko.applyBindings(new ViewModel());
