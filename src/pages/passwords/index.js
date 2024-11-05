
import { useState, useEffect } from 'react'
import { View, Text, StyleShet, Flatlist } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-content'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../useStorage'

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { getItem } = useStorage();

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords);
        }

        loadPasswords();
    }, [focused])

    return(
        <SafeAreaView style={{flwx:1, }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <Flatlist
                    style={{ flex: 1, paddingTop: 14, }}
                    data={listPassword}
                    keyExtractor={ (item) => String(item) }
                    rendeItem={ ({ item }) => <Text>{item}</Text> }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    },
    content:{
        flex:1,
        paddingLeft: 14,
        paddingRigth: 14,
    }
    
})