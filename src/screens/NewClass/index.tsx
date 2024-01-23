import { Button } from '@components/Button';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { HighLights } from '@components/HighLights';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

export function NewTeam(){

    const navigation = useNavigation();

    function handleCreateClass(){
        navigation.navigate('class', {groups: 'test'})
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

                <Input placeholder='Class name'/>
                
            </Content>
            <Button text='Create' onPress={handleCreateClass}/>
        </Container>
    )
}