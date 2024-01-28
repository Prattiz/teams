import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/appError";
import { PLAYER_COLLECTION } from "@storage/StorageConfig";
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { PlayersGetByGroup } from "./PLayersGetByGroup";

export async function AddPlayer(newPlayer: PlayerStorageDTO, group: string){

    try {
        const storedPlayers = await PlayersGetByGroup(group);
        const playerExists = storedPlayers.filter(player => player.name === newPlayer.name);

        if(playerExists.length > 0){
            throw new AppError('This person has already been added to the team...')
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer])

        await AsyncStorage.setItem(`${PLAYER_COLLECTION} - ${group}`, storage)
        
    } catch (error) {

        throw(error)
    }
}