import React, { Component } from 'react';
import {
    TouchableOpacity,
    Animated,
    Easing,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    Platform,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const window = Dimensions.get('window');


export default class Row extends Component {

    constructor(props) {
        super(props);

        this._active = new Animated.Value(0);

        this._style = {
            ...Platform.select({
                ios: {
                    transform: [{
                        scale: this._active.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.1],
                        }),
                    }],
                    shadowRadius: this._active.interpolate({
                        inputRange: [0, 1],
                        outputRange: [2, 10],
                    }),
                },

                android: {
                    transform: [{
                        scale: this._active.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.07],
                        }),
                    }],
                    elevation: this._active.interpolate({

                        inputRange: [0, 1],
                        outputRange: [2, 6],
                    }),
                },
            })
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.active) {
            Animated.timing(this._active, {
                duration: 300,
                easing: Easing.bounce,
                toValue: Number(nextProps.active),
            }).start();
        }
    }

    render() {
        const { data } = this.props;

        // alert(JSON.stringify(this.props.val));

        return (

            // <Animated.View style={[
            //     styles.row,
            //     this._style,
            // ]}>

            //     <Text style={styles.text}>{data.Item}</Text>
            // </Animated.View>


            <Animated.View key={this.props.keyval} style={styles.columnContent}>

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
            </Animated.View>


        );
    }
}

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