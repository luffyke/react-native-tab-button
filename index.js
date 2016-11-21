'use strict';

import React, { Component, PropTypes } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './style';

class TabButton extends Component {
    render() {
        const { leftLabel, onPress, rightLabel } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity underlayColor="rgba(0,0,0, .1)" disabled={onPress ? false : true } onPress={onPress}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.leftLabel}>{leftLabel}</Text>
                        <Text style={styles.rightLabel}>
                            {rightLabel}
                            {onPress ? <Image source={require('./img/arrow-link.png')} style={styles.arrow}/> : null}
                        </Text>
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
