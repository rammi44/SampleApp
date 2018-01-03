import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Alert, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TextInput from '../Components/TextInput';

import Icon from 'react-native-vector-icons/MaterialIcons';

class _DateTimePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDateTimePickerVisible: false,
            text: ''
        };
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (datetime) => {

        // It return datetime in utc format

        // Alert.alert(datetime);

        this.setState({ text: datetime.toString() });

        // console.log('A date has been picked: ', datetime);

        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.row}>

                    {/* Try setting `flexDirection` to `column`. */}

                    <View style={[styles.thumbnailContainer, this.props.style]}>
                        <View style={[styles.thumbnailBackground]} >
                            {<Icon name="access-time" size={25} onPress={this._showDateTimePicker} style={styles.thumbnail} >
                            </Icon>}
                        </View>
                    </View>
                    <View style={[styles.datetime, this.props.style]}>
                        <TextInput ref="content"
                            placeholder={'Set Date and Time'}
                            style={styles.input}  underlineColorAndroid={'rgba(0,0,0,0)'}
                        >
                            {this.state.text}
                        </TextInput>
                    </View>

                </View>

                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode='datetime'  //mode will date, time and datatime
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
        marginTop: 15,
    },
    row: {
        flexDirection: 'row',

    },
    datetime: {
        flex: 10,
        backgroundColor: 'rgba(231,76,60,1)',
        borderRadius: 4,
        height: 30,
        opacity: 0.2
    },
    thumbnailContainer:
        {
            flex: 2,
            backgroundColor: 'rgba(231,76,60,1)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            height: 30
        },
    thumbnailBackground: {
        alignItems: 'center',
        borderRadius: 4,
        height: 60,
        justifyContent: 'center',
        width: 60,
    },
    thumbnail: {
        color: '#fff',
        fontSize: 20,
    },
    input:{
        fontSize: 15,
    }
    
});



export default _DateTimePicker;


