import { Header } from "@components/Header";
import { Container } from "./styles"
import { HighLights } from "@components/HighLights";
import { Card } from "./Card";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";

import { useState } from "react";
import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

export function Groups() {

  const [ groups, setGroups ] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('create')
  }

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
            ListEmptyComponent={() => <EmptyList message="No registered teams..."/>}
          />

        <Button 
          text="Create new class"
          onPress={handleNewGroup}

        />
    </Container>
  );
}