class AppConfig {
    public vacationsUrl = 'http://localhost:8082/api/vacations';
    public signupUrl = 'http://localhost:8082/api/register';
    public loginUrl = 'http://localhost:8082/api/login';
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;