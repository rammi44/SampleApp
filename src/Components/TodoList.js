import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, Platform, Easing } from 'react-native';
import AddTodoItem from '../Components/AddTodoItem';
import TodoItems from '../Components/TodoItems';
import Row from '../Components/Row';

import SortableList from 'react-native-sortable-list'; // 0.0.16

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const window = Dimensions.get('window');

class _TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoItemArray: [{ 'Item': 'Enter To-do Item 1', 'TodoItemstyle': { 'backgroundColor': 'rgba(231,76,60,1)' } }],
            noteText: '',
            basicOkCancelVisible: false,
            TodoItemstyle: { 'backgroundColor': 'rgba(231,76,60,1)' },
            isDeleteDefaultItem: false
        }
    }

    static navigationOptions = ({ navigation }) => ({
        // title: 'Home',	
        header: null,
    });

    render() {

        let notes = this.state.todoItemArray.map((val, key) => {

            return <TodoItems key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteNote(key)} isDeleteVisible={key == 0 ? true : false} />
        });

        return (

            <View style={styles.mainCnt}>

              <Text style={[styles.btnView, { color: this.props.bgColor }]}>Add Action Items</Text>

                  <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.scrollContainer}>
                    {notes}
                    <AddTodoItem basicOkCancelVisible={this.props.basicOkCancelVisible} addTodoItem={(item, todoItembgStyle) => this.addNote(item, todoItembgStyle)} bgColor={this.props.bgColor} />
                </ScrollView>

                {/* <AddTodoItem basicOkCancelVisible={this.props.basicOkCancelVisible} addTodoItem={(item, todoItembgStyle) => this.addNote(item, todoItembgStyle)} bgColor={this.props.bgColor} />
                <SortableList
                    style={styles.list}
                    contentContainerStyle={styles.contentContainer}
                    data={this.state.todoItemArray}
                    renderRow={this._renderRow} /> */}
                
            </View>

        );
    }


    _renderRow = ({ key, data, active }) => {

        // alert(JSON.stringify(data));

        return <Row data={data} active={active} key={key} keyval={key} val={data} deleteMethod={() => this.deleteNote(key)} isDeleteVisible={key == 0 ? true : false} TodoItemstyle />
    }

    addNote(item, todoItembgStyle) {

        // alert(JSON.stringify(item));

        if (item) {

            // this.state.todoItemArray.push({ 'Item': item, 'TodoItemstyle': todoItembgStyle });

            this.state.todoItemArray = this.state.todoItemArray.concat({ 'Item': item, 'TodoItemstyle': todoItembgStyle });

            this.setState({
                todoItemArray: this.state.todoItemArray,
                isDeleteDefaultItem: true
            });

            if (!this.state.isDeleteDefaultItem) {

                this.deleteNote(0);
            }
        }
        else {
            alert('Action Can not be empty');
        }
    }

    deleteNote(key) {

        this.state.todoItemArray.splice(key, 1);// This will remove the element at index, and update this.state.todoItemArray with new array
        this.setState({ todoItemArray: this.state.todoItemArray });
        this.setState({ noteText: '' });
    }
};

const styles = StyleSheet.create({

    mainCnt: {
        flex: 4,
    },
    scrollContainer: {
        flex: 1,
    },
    btnView: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        padding: 5, fontWeight: '100'
    },

    list: {
        flex: 1,
    },

    contentContainer: {
        width: window.width,

        ...Platform.select({
            ios: {
                paddingHorizontal: 30,
            },

            android: {
                paddingHorizontal: 0,
            }
        })
    },

    

});

export default _TodoList;