import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

// import App from './App';
// import App from './Components/Create';
import CreateActivity from './src/Screens/DynamicActivity';
// import App from './App/Components/DateTimePicker';

// import App from './App/Components/MainHeader';

import TodoItems from  './src/Components/TodoList';
// import TodoItems from  './src/Components/Popup';


import SortableList from  './src/Components/SortableList';

// const myDrawer = DrawerNavigator({
// 	Home: { screen: HomeScreen },
// 	CreateActivity: { screen: CreateActivity },	
// },
// {
// 	contentComponent: props => <Menu {...props} />
// });

const Xampr = StackNavigator({

  // HomeScreen: { screen: HomeScreen },
  CreateActivity: { screen: CreateActivity },
  // TodoItems: { screen: TodoItems },
  SortableList: { screen: SortableList }

});

export default Xampr;
