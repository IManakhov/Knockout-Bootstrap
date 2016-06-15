define(['text!templates/reposwidget.html','app/viewmodels/repo','app/views/stargazerswidget'], function(viewTmpl,viewModel) {
    ko.components.register('repos-widget', {
        viewModel: viewModel,
        template: viewTmpl
    });
});