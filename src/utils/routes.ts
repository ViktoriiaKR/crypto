import AuthPage from "containers/AuthPage";
import WeatherPage from "containers/CryptoPage";

export const AUTHORIZATION = '/auth';
export const CHARTS = '/charts';

export const publicRoutes = [
    {
        path: AUTHORIZATION,
        Component: AuthPage
    }
]

export const privateRoutes = [
    {
        path: CHARTS,
        Component: WeatherPage
    }
]
