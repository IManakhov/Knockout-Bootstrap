/**
 * Created by ilshatmanakhov on 12.06.16.
 */
define(['app/main', 'app/userwidget', 'libs/tamplateUtil','text!../templates/container.html'],function(main, userwidget,tamplateUtil,containerTmpl) {
    var ViewModel = function () {
        var self = this;
        this.userName = ko.observable('');

        this.userSearchContent =  ko.observableArray([]);

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
            self.userSearchContent([]);
            $.ajax({
                crossDomain: true,
                dataType: 'json',
                url: "https://api.github.com/users/" + self.userName(),
                success: function (msg) {
                    userwidget.init(self, msg);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Error: " + errorThrown);
                }
            });
        };

        tamplateUtil.init('ContainerTemplate',containerTmpl);
    };

    ko.applyBindings(new ViewModel());
});