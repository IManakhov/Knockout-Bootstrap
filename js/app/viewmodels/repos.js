define(['app/models/repos'],function (repomodel) {
    function ReposViewModel(reposUrl) {
        var self = this;
        this.repos = ko.observableArray([]);
        repomodel.load(reposUrl, function (repos) {
            for(var i=0; i< repos.length; i++){
                var item = repos[i];
                var stargazersCount = item.stargazers_count;
                item.starSize = stargazersCount <= 5 ? 'small' : (stargazersCount > 5 && stargazersCount < 11 ? 'medium' : 'large');
                item.showStargazers = ko.observable(false);
                self.repos.push(item);
            }
        });

        this.onShowStargazers = function(viewModel,event){
            var repoIdAttr = event.target.attributes.repoid;
            if(repoIdAttr){
                var repoId = +repoIdAttr.value;
                self.repos()[repoId].showStargazers(true);
            }
        };
    };
    return ReposViewModel;
});