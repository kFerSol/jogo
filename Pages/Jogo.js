import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, TextInput, Vibration, Alert} from "react-native";

export default function Jogo({route}){
  const { dica } = route.params;
  const { palavraChave } = route.params;
  const [ resposta, setResposta ] = useState();
  
  function responder(){
    if (resposta != palavraChave){
      Vibration.vibrate();
      Alert.alert('erro fi');
    }else{
      Alert.alert('Acerto fi');
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.texto}>{dica}</Text>
      <Text style={styles.texto}>Resposta:</Text>
      <TextInput style={styles.input}
      onChangeText={(Text)=>setResposta(Text)}
      />

      <View style={styles.bloco}>
        <TouchableOpacity style={styles.btn}
        onPress={responder}
        >
          <Text style={styles.txtBtn}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 100,
  },
  texto:{
    fontSize: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10
  },
  bloco:{
    width: '60%',
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btn:{
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 35,
  },
  txtBtn:{
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },

  input:{
    fontSize: 15,
    borderWidth: 2,
    marginBottom: 20,
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 3
  }
})