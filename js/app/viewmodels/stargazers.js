define(['app/models/stargazers'],function (stargazersmodel) {
    function StargazersViewModel(stargazersUrl) {
        var self = this;
        this.stargazers = ko.observableArray([]);
        stargazersmodel.load(stargazersUrl, function (success, stargazers) {
            if(success) {
                self.stargazers(stargazers);
            }
        });
    };
    return StargazersViewModel;
});