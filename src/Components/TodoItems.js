import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { relativeTimeRounding } from 'moment';
import { Date } from 'core-js/library/web/timers';

class _TodoItems extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    };

    render() {

        // alert(this.props.val.date);

        return (

            <View key={this.props.keyval} style={styles.columnContent}>

                <View style={[styles.rowContent, styles.border]}>

                    <View style={[styles.rectangleBox, this.props.val.TodoItemstyle]}>
                        <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle1]} />
                        <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle2]} />
                    </View>

                    <View style={styles.panel2}>

                        <Text style={[styles.noteText]}>{this.props.val.Item}</Text>

                        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                            <Text> <MaterialCommunityIcons name="delete" style={[styles.deleteButton]} /></Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        );
    }
};



const styles = StyleSheet.create({

    columnContent: {
        flexDirection: 'column',
        // paddingTop:10
    },
    rowContent: {
        flexDirection: 'row'
    },
    border: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        // paddingBottom: 8,
    },
    rectangleBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 40,
        flexDirection: 'row',
    },

    iconStyle: {
        fontSize: 20,
        color: 'white',
    },
    dotsStyle1: {
        marginLeft: -5,
        marginTop: 5

    },
    dotsStyle2: {
        marginLeft: -15,
        marginTop: 5
    },
    panel2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    noteText: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10

    },
    deleteButton: {
        color: '#ddd', fontSize: 15,
    }

});

export default _TodoItems;