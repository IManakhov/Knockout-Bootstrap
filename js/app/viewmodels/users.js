define(['app/models/users'],function (usermodel) {
    function viewModel() {
        this.userData = usermodel.getFindedUser();
    };
    return viewModel;
});