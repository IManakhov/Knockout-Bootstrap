define(['libs/tamplateUtil','text!../templates/reposwidget.html','app/startgazerswidget'], function(tamplateUtil,widgetTmpl,startgazerswidget) {
    var ReposWidget = function(){
        var self = this;

        this.init = function(userInfo){
            if(userInfo) {
                $.ajax({
                    crossDomain: true,
                    dataType: 'json',
                    url: userInfo.repos_url,
                    success: function (msg) {
                        if (msg) {
                            tamplateUtil.init("reposwidget", widgetTmpl);
                            for (var i = 0; i < msg.length; i++) {
                                msg[i].startGazers = ko.observableArray([]);
                                userInfo.data.push({
                                    contentTemplate: 'reposwidget',
                                    contentData: msg[i]
                                });
                            }
                            startgazerswidget.init(userInfo.data);
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("Error: " + errorThrown);
                    }
                });
            }
        }
    };

    return new ReposWidget();
});