import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "./StorageConfig";
import { GetAll } from "./GetAll";

export async function CreateGroup(newGroup: string){
    try {
        const storedGroup = await GetAll();
        const storage = JSON.stringify([...storedGroup, newGroup]); 

        await AsyncStorage.setItem(GROUP_COLLECTION, storage)

    } catch (e) {
        throw e;
    }
}