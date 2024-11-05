import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
    const gatItem = async (key) => {
        try{
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        }catch(error){
            console.log("Erro ao buscar", error)
            return[];
        }
    }

    const saveItem = async (key, value) => {
        try{
            let passwords = await getItem(key);

            passwords.push(value)

            await AsyncStorage.steItem(key, JSON.stringfy(passwords))

        }catch(error){
            console.log("ERRO AO SALVAR", error)
        }

    }

    const removeItem = async () => {
        try{
            let passwords = await getItem(key);

            let myPasswords = passwords.filter( (password) => {
                return (password !== item)
            })

            await AsincStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;

        }catch(error){
            console.log("ERROR AO DELETAR", error)
        }
    }

    return{
        gatItem,
        saveItem,
        removeItem,
    }
}


export default useStorage;