define(['libs/tamplateUtil','text!../templates/startgazerswidget.html'], function(tamplateUtil,widgetTmpl) {

    var StartGazersWidget = function(){
        this.init = function(repos) {
            tamplateUtil.init("startgazerswidget", widgetTmpl);
            document.getElementById("userRepos").addEventListener("click", function (e) {
                var repoId = +e.target.id.replace('stargazersbtn_', '');
                var repoData = repos()[repoId].contentData;
                $.ajax({
                    crossDomain: true,
                    dataType: 'json',
                    url: repoData.stargazers_url,
                    success: function (msg) {
                        for (var i = 0; i < msg.length; i++) {
                            repoData.startGazers.push({
                                contentTemplate: 'startgazerswidget',
                                contentData: msg[i]
                            });
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("Error: " + errorThrown);
                    }
                });

            });
        }
    };

    return new StartGazersWidget();
});