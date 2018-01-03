import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


class _ColorPickerIcon extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <View>
                <TouchableOpacity onPress={this.props.ShowPicker}>
                    <Text style={styles.addButtonText}>
                        {<Icon name="color-lens" style={styles.actionButtonIcon} />}
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }

};


const styles = StyleSheet.create({
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
    actionButtonIcon: {
        fontSize: 25,
        height: 22,
    }
});

export default _ColorPickerIcon;