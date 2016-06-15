define(['app/models/stargazers'],function (stargazersmodel) {
    function viewModel(repos_url) {
        var self = this;
        this.repos = ko.observableArray([]);
        repomodel.load(repos_url, function (repos) {
            for(var i=0; i< repos.length; i++){
                var item = repos[i];
                var stargazersCount = item.stargazers_count;
                item.starSize = stargazersCount <= 5 ? 'small' : (stargazersCount > 5 && stargazersCount < 11 ? 'medium' : 'large');
                self.repos.push(item);
            }
        });
    };
    return viewModel;
});