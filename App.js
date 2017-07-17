import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Hello from './hello';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "Hi"
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.inputValue}
        </Text>
        <TextInput 
          placeholder='Enter bill total'
          value={this.state.inputValue} 
          style={styles.input}
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
