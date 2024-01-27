import { Header } from "@components/Header";
import { Container } from "./styles"
import { HighLights } from "@components/HighLights";
import { Card } from "./Card";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";

import { GetAll } from "@storage/group/GetAll";

import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";



export function Groups() {

  const [ groups, setGroups ] = useState<string[]>([]);

  const navigation = useNavigation();

  async function fetchNewGroup(){
    try {
      const data = await GetAll();

      setGroups(data)
    } catch (e) {
      console.error(e);
    }
  }

  function handleNewGroup(){
    navigation.navigate('create')
  }

  useFocusEffect(useCallback(() => {
    fetchNewGroup(); 
  }, []));

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