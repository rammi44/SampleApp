import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class _SearchIcon extends Component {

    render() {

        return (

            <View>

                <Icon name="md-search" style={styles.actionButtonIcon} />

            </View>

        );
    }
};



var styles = StyleSheet.create({
    
        actionButtonIcon: {
            fontSize: 20,
            height: 22,
            color: 'green',
        }
    });


export default _SearchIcon;