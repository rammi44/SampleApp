import React, { Children } from 'react';
import { View, Text, Alert, StyleSheet, Image } from 'react-native';

import Header from '../Components/Header';
import TextInput from '../Components/TextInput';
import ActivityIcon from '../Components/ActivityIcon';
import CancelButton from '../Components/CancelButton';
import NextButton from '../Components/NextButton';
import ColorPicker from '../Components/ColorPicker';
import ColorPickerIcon from '../Components/ColorPickerIcon';
import DateTimePicker from '../Components/DateTimePicker';
import Location from '../Components/Location';
import TodoList from '../Components/TodoList';


import { StackNavigator } from 'react-navigation';


class CreateActivity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            IsPickerVisible: false,
            selectedArray: [],
            bgstyle: { backgroundColor: "rgba(231,76,60,1)" },
            bgColor: "rgba(231,76,60,1)"

        };
    }

    ShowColorPicker = () => this.setState(
        {
            IsPickerVisible: !this.state.IsPickerVisible
        });

    UpdateColor(key, val) {

        // alert(JSON.stringify(val.style));

        this.state.selectedArray.length = 0;
        this.state.selectedArray.push(key);
        this.setState({ selectedArray: this.state.selectedArray, IsPickerVisible: false, bgstyle: val.style, bgColor: val.color });
    }

    onSubmitButton() {

        // Alert.alert('You tapped the button!')

        alert(JSON.stringify(this.state.content));

        // this.props['AddSpinnerLoader'].start();

        //     PostActions.createPost(this.state.content, function(error) {
        //       this.props['AddSpinnerLoader'].stop();
        //       if (error) {
        //         // TODO: better error handling
        //         alert(error.message);
        //       }
        //       else {
        //         this.props.navigation.back();
        //       }
        //     }.bind(this));

    }


    static navigationOptions = ({ navigation }) => ({
        // title: 'Home',	
        header: null,
    });


    render() {

        return (

            <View style={styles.mainCnt}>

                <Header headerText={"New " + this.props.Title} style={this.state.bgstyle} CancelIcon={<CancelButton />} ColorPickerIcon={<ColorPickerIcon ShowPicker={() => this.ShowColorPicker()} />} />

                {<ColorPicker IsPickerVisible={this.state.IsPickerVisible} SelectColorPicker={(key, val) => this.UpdateColor(key, val)} selectedArray={this.state.selectedArray} />}

                <View style={styles.container} >

                    <ActivityIcon style={this.state.bgstyle} />
                    <Text style={{color:'red'}}>*</Text>
                    <View style={styles.center} >
                       
                        <TextInput ref="content"
                            placeholder={this.props.Title + ' Title(max:75 characters)'}
                            keyboardType="default"
                            multiline={false}
                            autoFocus={true}
                            style={styles.input}
                            enablesReturnKeyAutomatically={true}
                            returnKeyType='done' underlineColorAndroid={'rgba(0,0,0,0)'}
                        />
                    </View>
                </View>

                <TextInput ref="content"
                    placeholder={'Write description about your ' + this.props.Title + ' ...'}
                    keyboardType="default"
                    multiline={false}
                    autoFocus={true}
                    style={styles.input}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='done' underlineColorAndroid={'rgba(0,0,0,0)'}
                />

                <View style={styles.cntrow} >

                    <Location style={this.state.bgstyle} />
                    <DateTimePicker style={this.state.bgstyle} />

                </View>

               { this.props.Title=='Todo' && <TodoList bgColor={this.state.bgColor} />}

                <NextButton NextIcon buttonColor={this.state.bgColor} onSubmitButton={() => this.onSubmitButton()} />

            </View>
        );
    }


}


// var i18n = Locale.key('CreateActivity', {
//   placeholder: 'What do you have to say for yourself?',
//   submit: 'Submit',
// });


const styles = StyleSheet.create({
    center: {
        flex: 5,
    },

    container: {

        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    },

    cntrow: {
        flexDirection: 'row'
    },
    mainCnt: {
        flex: 1,
        backgroundColor: '#fff',
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    input: {


    },
    controlBaackground: {
        backgroundColor: 'green'
    }

});

// CreatePost = AddSpinnerLoader(CreatePost);

export default CreateActivity;
