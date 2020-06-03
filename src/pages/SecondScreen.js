import React from 'react';
import { View, TextInput, Button } from 'react-native'; 
import firebase from '../database/FireBase'

export default class SecondScreen extends React.Component {

  constructor(){
    super();
    this.state = {
      name:'',
      desc:'',
      img:'',
    }
  }

  onChangeTextInput(value, field) {
    const state = this.state;
    state[field] = value;
    this.setState(state);
  }

  saveContent() {
    firebase.firestore().collection('contents').add( 
      {
        name:this.state.name,
        desc:this.state.desc,
        img:this.state.img,
      }
    )
    .then(()=>{console.log("Salvou!")})
    .catch(()=>{console.log("Erro ao salvar conteudo...")})
  }


  render(){
    return (
      <View>
        <TextInput placeholder="Nome"
          value={this.state.name}
          onChangeText={(value)=>this.onChangeTextInput(value, 'name')}
        />

        <TextInput placeholder="Descrição"
          multiline={true}
          numberOfLines={4}
          value={this.state.desc}
          onChangeText={(value)=>this.onChangeTextInput(value, 'desc')}
        />

        <TextInput placeholder="Imagem"
          value={this.state.img}
          onChangeText={(value)=>this.onChangeTextInput(value, 'img')}
        />               

        <Button 
          color="#4473ba" 
          title="SALVAR" 
          onPress={()=>this.saveContent()}
        />
      </View>    
    );
  }  
}