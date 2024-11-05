import { View } from 'react-native'
import { Routes } from './src/routes'
import { NavigationContainerRefContext } from '@react-navigation/native'


export default function App(){
    return(
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
    )
}