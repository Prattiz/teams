import { Button } from '@components/Button';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { HighLights } from '@components/HighLights';
import { Input } from '@components/Input';

export function NewTeam(){
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
            <Button text='Create'/>
        </Container>
    )
}