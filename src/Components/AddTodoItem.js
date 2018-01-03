import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {
  MaterialDialog
} from 'react-native-material-dialog';


import { material } from 'react-native-typography';

import ColorPicker from '../Components/ColorPicker';

class AddTodoItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      basicOkCancelVisible: false,
      IsPickerVisible: true,
      selectedArray: [],
      bgstyle: { backgroundColor: "rgba(231,76,60,1)" },
      bgColor: "rgba(231,76,60,1)",
      todoItem: ''

    }
  }

  static navigationOptions = ({ navigation }) => ({
    // title: 'Home',	
    header: null,
  });


  UpdateColor(key, val) {

    // alert(JSON.stringify(val.style));

    this.state.selectedArray.length = 0;
    this.state.selectedArray.push(key);
    this.setState({ selectedArray: this.state.selectedArray, IsPickerVisible: true, bgstyle: val.style, bgColor: val.color });
  }

  render() {

    return (

      <View>

        <View style={[styles.btnView]}>
          <TouchableOpacity onPress={() => this.setState({ basicOkCancelVisible: true })}>
            <Text style={[styles.addButtonText, { color: this.props.bgColor }]}>Click to Add Item</Text>
          </TouchableOpacity>
        </View>

        <MaterialDialog
          visible={this.state.basicOkCancelVisible}
          onOk={() => {

            this.props.addTodoItem(this.state.todoItem, this.state.bgstyle)

            this.setState({ basicOkCancelVisible: false, todoItem: '' });
          }}
          onCancel={() => {
            this.setState({ basicOkCancelVisible: false });
          }}
        >

          <View>

            {<ColorPicker IsPickerVisible={this.state.IsPickerVisible} SelectColorPicker={(key, val) => this.UpdateColor(key, val)} selectedArray={this.state.selectedArray} />}

            <View style={[styles.note]}>
              <View style={[styles.noteText, { borderLeftColor: this.state.bgColor }]}>
                <TextInput style={styles.inputTextStyle} underlineColorAndroid={'rgba(0,0,0,0)'}
                  onChangeText={(todoItem) => this.setState({ todoItem })}
                >
                </TextInput>
              </View>

            </View>

          </View>
        </MaterialDialog>

      </View>

    );
  }

};


const styles = StyleSheet.create({

  btnView: {
    height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF',
    borderColor: '#ddd',
    borderWidth: 0.9,
  },
  addButtonText: {
    color: 'red',
    fontSize: 14,
  },
  note: {
    position: 'relative',
    padding: 0,
    // paddingRight: 100,
    borderWidth: 1,
    borderColor: '#ededed',
    height: 70
  },
  noteText: {
    paddingLeft: 10,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
    height: 70,
    justifyContent: 'center',
  },
  inputTextStyle: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ededed',
    marginRight: 15
  }


});

export default AddTodoItem;