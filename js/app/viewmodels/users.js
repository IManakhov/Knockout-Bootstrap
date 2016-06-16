define(['app/models/users'],function (usermodel) {
    function UsersViewModel() {
        this.userData = usermodel.getFindedUser();
    };
    return UsersViewModel;
});