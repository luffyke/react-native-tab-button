/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabButton from 'react-native-tab-button';
import mystyle from './mystyle';

class AwesomeProject extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TabButton leftLabel="Update Version" onPress={this._doUpgrade} rightLabel="1.0" />
            <TabButton leftLabel="About us" customStyle={mystyle} />
        </View>
    );
  }
  _doUpgrade() {
      console.log("do upgrade");
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
