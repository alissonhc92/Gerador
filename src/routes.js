import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Passwords } from './pages/passwords';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#392de9',
                tabBarInactiveTintColor: '#8e8e93',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <Ionicons
                            size={size}
                            color={color}
                            name={focused ? 'home' : 'home-outline'}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Passwords"
                component={Passwords}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <Ionicons
                            size={size}
                            color={color}
                            name={focused ? 'lock-closed' : 'lock-closed-outline'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}