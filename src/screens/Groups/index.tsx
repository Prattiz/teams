import { Header } from "@components/Header";
import { Container } from "./styles"
import { HighLights } from "@components/HighLights";
import { Card } from "./Card";
import { useState } from "react";
import { FlatList } from "react-native";
import { EmptyList } from "@components/EmptyList";

export function Groups() {

  const [ groups, setGroups ] = useState<string[]>([]);

  return (
    <Container>
      <Header/>
      <HighLights title="Teams" subtitle="Play with your team"/>

      
          <FlatList
          data={groups}
          keyExtractor={item => item}

          renderItem={({item}) => (
            <Card 
              title={item}
            />
          )}

          contentContainerStyle={groups.length === 0 && { flex: 1 } }
          ListEmptyComponent={() => <EmptyList message="Sem turmas cadastradas..."/>}
        />

    </Container>
  );
}