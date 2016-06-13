/**
 * Created by ilshatmanakhov on 12.06.16.
 */
define(['app/main', 'app/userwidget'],function(main, userwidget) {
    var ViewModel = function () {
        var self = this;
        this.userName = ko.observable('');

        //this.userModel = ko.observable({});
        //this.userReposModel = ko.observableArray([]);
        //this.userReposStargazersModel = ko.observable({});

        this.myContents =  ko.observableArray([]);

        this.githubUser = ko.pureComputed({
            read: function () {
                return self.userName();
            },
            write: function (value) {
                self.userName(value);
            },
            owner: self
        });

        this.searchUser = function () {
            $.ajax({
                crossDomain: true,
                dataType: 'json',
                url: "https://api.github.com/users/" + self.userName(),
                success: function (msg) {
                    userwidget.init(self, msg);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    self.myContents([]);
                    alert("Error: " + errorThrown);
                }
            });
        };

    };

    ko.applyBindings(new ViewModel());
});