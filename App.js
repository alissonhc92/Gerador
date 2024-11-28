import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://ba20ab600e71213758c7011b8995d809@o4508377215270912.ingest.us.sentry.io/4508377217302528',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

function App() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}

export default Sentry.wrap(App);
