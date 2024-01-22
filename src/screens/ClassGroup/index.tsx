import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { HighLights } from "@components/HighLights";
import { Input } from "@components/Input";
import { IconButton } from "@components/IconButton";


export function ClassGroup(){
    return(
        <Container>
            <Header showBackButton/>

            <HighLights title="Name Group" subtitle="add your peaple"/>
            <Form>
                <Input placeholder="Participant's name" autoCorrect={false}/>
                <IconButton icon="add"/>
            </Form>
            
        </Container>
    )
}