import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/StorageConfig";

import { GetAll } from "./GetAll";

export async function GroupRemoveByName(groupDeleted: string) {
    try {
        const storedGroups = await GetAll();

        const groups = storedGroups.filter(group => group !== groupDeleted);

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION} - ${groupDeleted}`);
        
    } catch (error) {
        throw error
    }
}