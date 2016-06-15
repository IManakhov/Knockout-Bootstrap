/**
 * Created by manahov on 15.06.2016.
 */
define(['app/models/user'],function (usermodel) {
   function viewModel() {
       var self = this;
       this.userName = ko.observable('');

       this.userData = ko.observable('');
       this.userFinded = ko.observable(false);

       this.githubUser = ko.pureComputed({
           read: function () {
               return self.userName();
           },
           write: function (value) {
               self.userName(value);
           },
           owner: self
       });

       this.searchUser = function () {
           usermodel.load(this.userName(), function (userData) {
               if (userData) {
                   self.userData(userData);
                   self.userFinded(true);
               }
           });
       };
   };
    return viewModel;
});