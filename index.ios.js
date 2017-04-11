import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AboutScene from './scenes/aboutScene';
import VisitorsScene from './scenes/visitorsScene';
import ServicesScene from './scenes/servicesScene';
import GameScene from './scenes/gameScene';

export default class zobro2 extends Component {
  render() {
    return (
      <GameScene />
    );
  }
}

AppRegistry.registerComponent('zobro2', () => zobro2);
