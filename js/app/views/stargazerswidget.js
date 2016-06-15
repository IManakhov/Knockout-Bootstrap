define(['text!templates/stargazerswidget.html','app/viewmodels/stargazers','app/views/stargazerswidget'], function(viewTmpl,viewModel) {
    ko.components.register('stargazers-widget', {
        viewModel: viewModel,
        template: viewTmpl
    });
});