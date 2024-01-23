import { Header } from "@components/Header";
import { Container, Form, HeaderList, Players } from "./styles";
import { HighLights } from "@components/HighLights";
import { Input } from "@components/Input";
import { IconButton } from "@components/IconButton";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "./PlayerCard";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";


type RouteParams = {
    groups: string
}

export function ClassGroup(){

    const [ selectTeam, setSelectTeam ] = useState('TEAM A');
    const [ players, setPlayers ] = useState(['player 1']);

    const route = useRoute();
    const { groups } = route.params as RouteParams;
    

    function handleRemovePlayer(){

    }

    function handleRemoveClass(){

    }

    return(
        <Container>
            <Header showBackButton/>

            <HighLights title={ groups } subtitle="add your peaple"/>
            <Form>
                <Input placeholder="Participant's name" autoCorrect={false}/>
                <IconButton icon="add" type="primary"/>
            </Form>
            <HeaderList>
                <FlatList
                    data={['TEAM A', 'TEAM B']}
                    keyExtractor={item => item}
                    horizontal

                    renderItem={({ item }) => (
                        <Filter 
                            title= { item }
                            isActive= {item === selectTeam}
                            onPress={() => setSelectTeam(item)}
                        />
                    )}   
                />
                <Players> {players.length} </Players>
            </HeaderList>
            
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <PlayerCard
                        name={item}
                        onRemove={handleRemovePlayer}
                    />
                )}

                showsVerticalScrollIndicator={false}

                contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && { flex: 1 }]}

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