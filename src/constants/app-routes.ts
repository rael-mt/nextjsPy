export const APP_ROUTER = {
    private: {
        dashboard: {
            name: '/home'
        },
        unauthorized: {
            name: '/unauthorized'
        }
    },
    public: {
        login: '/login',
        forget_password: '/auth/reset-password'
    }
}