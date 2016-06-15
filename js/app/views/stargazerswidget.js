define(['text!templates/stargazerswidget.html','app/viewmodels/stargazers'], function(viewTmpl,viewModel) {
    ko.components.register('stargazers-widget', {
        viewModel: viewModel,
        template: viewTmpl
    });
});