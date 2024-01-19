import { Header } from "@components/Header";
import { Container, Title } from "./styles"
import { HighLights } from "@components/HighLights";

export function Groups() {
  return (
    <Container>
      <Header/>
      <HighLights title="Teams" subtitle="Play with your team"/>
    </Container>
  );
}