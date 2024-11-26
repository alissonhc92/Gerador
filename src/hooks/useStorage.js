import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
    // Recupera itens do AsyncStorage
    const getItem = async (key) => {
        try {
            const storedData = await AsyncStorage.getItem(key);
            return JSON.parse(storedData) || [];
        } catch (error) {
            console.error("Erro ao buscar itens:", error);
            return [];
        }
    };

    // Salva um item no AsyncStorage
    const saveItem = async (key, value) => {
        try {
            if (!key || !value) throw new Error("Chave ou valor inválido!");

            // Recupera itens já salvos
            let items = await getItem(key);

            // Adiciona o novo valor
            items.push(value);

            // Salva os itens atualizados
            await AsyncStorage.setItem(key, JSON.stringify(items));
        } catch (error) {
            console.error("Erro ao salvar item:", error);
        }
    };

    // Remove um item do AsyncStorage
    const removeItem = async (key, item) => {
        try {
            if (!key || !item) throw new Error("Chave ou item inválido!");

            // Recupera itens já salvos
            let items = await getItem(key);

            // Filtra itens diferentes do que será removido
            let filteredItems = items.filter((storedItem) => storedItem !== item);

            // Salva os itens atualizados
            await AsyncStorage.setItem(key, JSON.stringify(filteredItems));

            return filteredItems;
        } catch (error) {
            console.error("Erro ao remover item:", error);
        }
    };

    return {
        getItem,
        saveItem,
        removeItem,
    };
};

export default useStorage;
