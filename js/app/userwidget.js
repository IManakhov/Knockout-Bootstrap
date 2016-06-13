define(['libs/tamplateUtil','text!../templates/userwidget.html','app/reposwidget'], function(tamplateUtil,widgetTmpl, reposwidget) {
    var UserWidget = function() {

        this.init = function(viewModel, data){
            if(data){
                tamplateUtil.init("userwidget",widgetTmpl);
                data.data = ko.observableArray([]);
                viewModel.userSearchContent.push({
                    contentTemplate: 'userwidget',
                    contentData: data
                });
                reposwidget.init(data);
            }
        }
    };
    return new UserWidget();
});