define(['text!templates/userinfowidget.html','app/viewmodels/users', 'app/views/reposwidget'], function(viewTmpl,viewModel) {
    ko.components.register('userinfo-widget', {
        viewModel: viewModel,
        template: viewTmpl
    });
});