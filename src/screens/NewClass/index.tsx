import { Button } from '@components/Button';
import { Container, Content, Icon } from './styled';
import { Header } from '@components/Header';
import { HighLights } from '@components/HighLights';

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

                <Button text='Create'/>
            </Content>
        </Container>
    )
}