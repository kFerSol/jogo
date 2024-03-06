import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, TextInput} from "react-native";

export default function Home({navigation}){
  let [palavraChave, setPalavraChave] = useState();
  let [dica, setDica] = useState();

  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Palavra chave</Text>
      <TextInput style={styles.input}
      onChangeText={(Text)=>setPalavraChave(Text)}
      />
      
      <Text style={styles.texto}>Dica</Text>
      <TextInput style={styles.input}
      onChangeText={(Text)=>setDica(Text)}
      />

      <View style={styles.bloco}>
        <TouchableOpacity style={styles.btn}
        onPress={() => navigation.navigate('Jogo', { dica, palavraChave })}
        >
          <Text style={styles.txtBtn}>Pronto</Text>
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
    marginRight: "auto"
  }
})