import { Header } from "@components/Header";
import { Container, Form, HeaderList, Players } from "./styles";
import { HighLights } from "@components/HighLights";
import { Input } from "@components/Input";
import { IconButton } from "@components/IconButton";
import { Filter } from "@components/Filter";
import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { PlayerCard } from "./PlayerCard";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/appError";
import { AddPlayer } from "@storage/player/Addplayer";
import { PlayersGetByGroup } from "@storage/player/PLayersGetByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroup&Team";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";


type RouteParams = {
    groups: string
}

export function ClassGroup(){

    const [ team, setTeam ] = useState('TEAM A');
    const [ players, setPlayers ] = useState<PlayerStorageDTO[]>([]);
    const [ newPLayerName, setNewPLayerName ] = useState('');

    const route = useRoute();
    const { groups } = route.params as RouteParams;


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
            fetchPlayersByTeam()
            
        } catch (error) {

            if(error instanceof AppError){
                Alert.alert('New Player', error.message)
            }else{
                Alert.alert('New Player', 'An error occurred, try again later...')
            }
        }
        

    }

    function handleRemovePlayer(){

    }

    function handleRemoveClass(){

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
                    onChangeText={setNewPLayerName}
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
                        onRemove={handleRemovePlayer}
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