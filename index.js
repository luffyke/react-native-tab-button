'use strict';

import React, { Component, PropTypes } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './style';

class TabButton extends Component {
    render() {
        const { leftLabel, onPress, rightLabel } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity disabled={onPress ? false : true } onPress={onPress}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.leftLabel}>{leftLabel}</Text>
                        {rightLabel ? <Text style={styles.rightLabel}>{rightLabel}</Text>: null}
                        {onPress ? <View style={styles.arrow}><Image source={require('./img/arrow.png')}/></View> : null}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

TabButton.properties = {
    leftLabel: PropTypes.string.isRequired,
    onPress: PropTypes.string,
    rightLabel: PropTypes.string,
};

export default TabButton;
