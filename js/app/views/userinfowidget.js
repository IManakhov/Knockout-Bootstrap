define(['text!templates/userinfowidget.html','app/viewmodels/user', 'app/views/reposwidget'], function(viewTmpl,viewModel) {
    ko.components.register('userinfo-widget', {
        viewModel: viewModel,
        template: viewTmpl
    });
});