define(['text!templates/main.html', 'app/viewmodels/main', 'app/views/userinfowidget'],function(viewTmpl,viewModel) {
    ko.components.register('mainview', {
        viewModel:  viewModel,
        template: viewTmpl
    });

    ko.applyBindings();
});