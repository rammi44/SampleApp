import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ConstColorsArray from '../Constants/ConstColors';


class PickColor extends Component {

    render() {

        return (

            <View key={this.props.keyval}>
                <TouchableOpacity onPress={this.props.SelectColor} style={[styles.addButton, this.props.val.style]}>
                    <Text style={styles.addButtonText}>
                        {this.props.IsSelected && <Icon name="check" style={styles.actionButtonIcon} />}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


class _ColorPicker extends Component {

    constructor(props) {
        super(props);
    }

    SelectOwnIcon() {
        alert('select your own Image');
    }

    render() {

        // alert(JSON.stringify(this.props.selectedArray));

        let colors = ConstColorsArray.map((val, key) => {

            // return <PickColor key={key} keyval={key} val={val} SelectColor={() => this.SelectColor(key, val)} IsSelected={this.state.selectedArray.includes(key) ? true : false} />

            return <PickColor key={key} keyval={key} val={val} SelectColor={() => this.props.SelectColorPicker(key, val)} IsSelected={this.props.selectedArray.includes(key) ? true : false} />

        });

        return (

            <View>

                {this.props.IsPickerVisible && <ScrollView keyboardShouldPersistTaps={'handled'} horizontal>
                    {colors}
                    <TouchableOpacity onPress={this.SelectOwnIcon} style={[styles.addButton]}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </ScrollView>}

            </View>
        );
    }

};


const styles = StyleSheet.create({

    addButton: {
        backgroundColor: '#dd2c00',
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        margin: 10,
        zIndex: 10,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
    }
});

export default _ColorPicker;