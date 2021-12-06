export default {
    profilePage: (userId = '') => `/profile/${userId}`,
    dialogsPage: () => '/dialogs',
    usersPage: () => '/users',
    loginPage: () => '/login',
    errorPage: (statusCode = '') => `/error/${statusCode}`
}
