import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Hello from './hello';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      tip: 0.2,
    };
  }

  updateCustomTip(customTip) {
    if(customTip) {
      this.setState({
        tip: parseFloat(customTip) / 100})
    } else {
      this.setState({tip: 0})
    }
  }

  render() {
    let tip = 0.00;
    if(this.state.inputValue) {
      tip = parseFloat(this.state.inputValue) * this.state.tip;
      tip = Math.round(tip * 100 / 100).toFixed(2);
    }

    return (
      <View style={styles.container}>
        <Text>
          ${tip}
        </Text>
        <TextInput 
          placeholder= "Enter bill total"
          value={this.state.inputValue} 
          style={styles.input}
          keyboardType= "numeric"
          onChangeText={text => this.setState({inputValue: text})} 
        />
        <View style={styles.buttonGroup}>
          <Button 
            title="10%"
            onPress={() => this.setState({ tip: 0.1})}
          />
          <Button 
            title="20%"
            onPress={() => this.setState({ tip: 0.2})}

          />
          <Button 
            title="25%"
            onPress={() => this.setState({ tip: 0.25})}
          />
          <TextInput
            style={styles.customInput}
            value={(this.state.tip * 100).toString()} 
            style={styles.customInput}
            keyboardType= "numeric"
            placeholder="20%"
            onChangeText={customTip => this.updateCustomTip(customTip)}
          />
        </View>
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
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  customInput: {
    height: 40,
    width: 60,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
  }
});
