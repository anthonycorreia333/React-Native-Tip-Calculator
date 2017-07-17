import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Hello from './hello';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }
  render() {
    let tip = "";
    if(this.state.inputValue) {
      tip = parseFloat(this.state.inputValue) * 0.2;
      tip = Math.round(tip * 100 / 100).toFixed(2);
    }
    return (
      <View style={styles.container}>
        <Text>
          {tip}
        </Text>
        <TextInput 
          placeholder= "Enter bill total"
          value={this.state.inputValue} 
          style={styles.input}
          keyboardType= "numeric"
          onChangeText={(text) => this.setState({inputValue: text})} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
  }
});
