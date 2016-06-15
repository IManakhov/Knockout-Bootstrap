define(['text!templates/reposwidget.html','app/viewmodels/repos','app/views/stargazerswidget'], function(viewTmpl,viewModel) {
    ko.components.register('repos-widget', {
        viewModel: viewModel,
        template: viewTmpl
    });
});