define(['app/models/user'],function () {
   function viewModel(userData) {
       var self = this;
       this.userData = ko.observable(userData);
   };
    return viewModel;
});