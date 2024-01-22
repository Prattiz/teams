import { Header } from "@components/Header";
import { Container, Form, HeaderList, Players } from "./styles";
import { HighLights } from "@components/HighLights";
import { Input } from "@components/Input";
import { IconButton } from "@components/IconButton";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";


export function ClassGroup(){

    const [ selectTeam, setSelectTeam ] = useState('TEAM A');
    const [ numberPlayers, setNumberPlayers ] = useState([])
    return(
        <Container>
            <Header showBackButton/>

            <HighLights title="Name Group" subtitle="add your peaple"/>
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
                <Players> {numberPlayers.length} </Players>
            </HeaderList>
            
        </Container>
    )
}