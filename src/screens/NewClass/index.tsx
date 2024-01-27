import { Button } from '@components/Button';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { HighLights } from '@components/HighLights';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { CreateGroup } from '@storage/group/CreateGroupt';
import { AppError } from '@utils/appError';
import { Alert } from 'react-native';

export function NewTeam(){

    const [ groups, setGroups ] = useState('')

    const navigation = useNavigation();

    async function handleCreateClass(){
        try {

            if(groups.trim().length === 0){
                return Alert.alert('New Class', 'Enter the name of the class')
            }


            await CreateGroup(groups);

            navigation.navigate('class', { groups });

        } catch (e){

           if(e instanceof AppError){
                Alert.alert('New Class', e.message);
           }else{
                Alert.alert('New Class', 'An error occurred, try again later...');
           }
        }
    }

    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>
                
                <HighLights
                title='New Class'
                subtitle='Create a team to add new people'
                />

                <Input placeholder='Class name' onChangeText={setGroups}/>
                
            </Content>
            <Button text='Create' onPress={handleCreateClass}/>
        </Container>
    )
}