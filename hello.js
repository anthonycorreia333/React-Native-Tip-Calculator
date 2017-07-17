import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Hello extends React.Component {
    render() {
        return (
            <Text style={styles.hello}> Hello from JS </Text>
        )
    }
}
const styles = StyleSheet.create ({
    hello: {
        color: '#00FF00'
    }
})