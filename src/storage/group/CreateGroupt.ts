import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../StorageConfig";
import { GetAll } from "./GetAll";
import { AppError } from "@utils/appError";

export async function CreateGroup(newGroup: string){
    try {
        const storedGroup = await GetAll();
        const groupAlreadyExists = storedGroup.includes(newGroup);
        
        if(groupAlreadyExists){
            throw new AppError('A group with that name is already in use.')
        }
        const storage = JSON.stringify([...storedGroup, newGroup]); 

        await AsyncStorage.setItem(GROUP_COLLECTION, storage)

    } catch (e) {
        throw e;
    }
}