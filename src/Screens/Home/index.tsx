import { Fragment } from "react";
import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";


export function Home() {
  const participants = ['Alisson', 'José', 'Ferreira', 'Machado', 'A', 'B', 'C', 'D', 'E', 'F', 'G',]


  function handleParticipantAdd(name: string) {
    // console.log(`vc clicou em adicionar participante ${name}`); //
    if (participants.includes('Alisson')) {
      return Alert.alert('Já existe')
    }
  }
  function handleParticipantRemove(name: string) {
    Alert.alert('Remver', `Remover o participante ${name} ?`, [{
      text: 'Sim',
      onPress: () => { Alert.alert('Deletado') }
    },
    {
      text: 'Não',
      style: 'cancel'
    }
    ]); //
    // console.log(`vc clicou em remover participante ${name}`); //
  }
  return (
    <View style={styles.container}>

      <Text style={styles.eventName}

      >Nome do evento!! </Text>

      <Text style={styles.eventDate}
      >Sexta, 22 de Dezembro de 2023.</Text>

      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6b6b6b'}

        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd('Alisson')}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>

      </View>
      {/* 
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant) => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)} />

          ))
        }
      </ScrollView> */}

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}