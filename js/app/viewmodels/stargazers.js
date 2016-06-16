define(['app/models/stargazers'],function (stargazersmodel) {
    function StargazersViewModel(stargazersUrl) {
        var self = this;
        this.stargazers = ko.observableArray([]);
        stargazersmodel.load(stargazersUrl, function (stargazers) {
            self.stargazers(stargazers);
        });
    };
    return StargazersViewModel;
});