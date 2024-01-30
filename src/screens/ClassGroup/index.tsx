import 
{ 
    Container, Form, 
    HeaderList, Players 
} from "./styles";

import { PlayerCard } from "./PlayerCard";

import { Header } from "@components/Header";
import { HighLights } from "@components/HighLights";
import { Input } from "@components/Input";
import { IconButton } from "@components/IconButton";
import { Filter } from "@components/Filter";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";

import { Alert, FlatList, TextInput } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { useEffect, useState, useRef } from "react";

import { AddPlayer } from "@storage/player/Addplayer";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroup&Team";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

import { AppError } from "@utils/appError";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { GroupRemoveByName } from "@storage/group/groupRemoveByName";


type RouteParams = {
    groups: string
}

export function ClassGroup(){

    const [ team, setTeam ] = useState('TEAM A');
    const [ players, setPlayers ] = useState<PlayerStorageDTO[]>([]);
    const [ newPLayerName, setNewPLayerName ] = useState('');

    const route = useRoute();
    const { groups } = route.params as RouteParams;
    const navigation = useNavigation();

    const newPlayerRef = useRef<TextInput>(null);


    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await playersGetByGroupAndTeam(groups, team);
            setPlayers(playersByTeam)
        } catch (error) {
            Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
        }
    }


     async function handleAddPlayer(){

        if(newPLayerName.trim().length === 0){
            return Alert.alert('New Player', "Enter the new player's name below")
        }

        const NewPlayer = {
            name: newPLayerName,
            team,
        }

        try {

            await AddPlayer(NewPlayer, groups);

            newPlayerRef.current?.blur

            setNewPLayerName('');

            fetchPlayersByTeam()
            
        } catch (error) {

            if(error instanceof AppError){
                Alert.alert('New Player', error.message)
            }else{
                Alert.alert('New Player', 'An error occurred, try again later...')
            }
        }
        

    }

    async function handleRemovePlayer(playerName: string){
        try {
            await playerRemoveByGroup(playerName, groups); 

            fetchPlayersByTeam()

        } catch (error) {
            Alert.alert('Remove Player', "It was not possible to remove this person")
            console.error(error)
        }
    }

    async function groupRemove(){
        try {
            
            await GroupRemoveByName(groups);

            navigation.navigate('groups');
            
        } catch (error) {
            Alert.alert('Remove Group', 'It was not possible to remove this group')
            console.error(error)
        }
    }

    async function handleRemoveClass(){
        Alert.alert(
            'Remove?'
            ,
            'Do you want to remove this group?',
            [
                { text: 'No', style: 'cancel' },
                { text: 'Yes', onPress: () => groupRemove() }
            ]
            )
    }

    useEffect(() => {
        fetchPlayersByTeam()
    }, [team])

    return(
        <Container>
            <Header showBackButton/>

            <HighLights title={ groups } subtitle="add your peaple"/>
            <Form>
                
                <Input 
                    placeholder="Participant's name" 
                    autoCorrect={false} 
                    inputRef={newPlayerRef}
                    onChangeText={setNewPLayerName}
                    value={newPLayerName}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />

                <IconButton 
                    icon="add" 
                    type="primary" 
                    onPress={handleAddPlayer}
                />

            </Form>
            <HeaderList>
                <FlatList
                    data={['TEAM A', 'TEAM B']}
                    keyExtractor={item => item}
                    horizontal

                    renderItem={({ item }) => (
                        <Filter 
                            title= { item }
                            isActive= {item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}   
                />
                <Players> { players.length } </Players>
            </HeaderList>
            
            <FlatList
                data={players}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <PlayerCard
                        name={item.name}
                        onRemove={() => handleRemovePlayer(item.name)}
                    />
                )}

                showsVerticalScrollIndicator={false}

                contentContainerStyle={[ {paddingBottom: 100}, players.length === 0 && { flex: 1 } ]}

                ListEmptyComponent={() => (
                    <EmptyList message="Add your players..."/>
                )}
            />

            <Button
                text="Remove Class"
                type="secondary"
                onPress={handleRemoveClass}
            />
            
        </Container>
    )
}