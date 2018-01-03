import React, { Children } from 'react';
import {
    View, Text, Alert,
    StyleSheet, Image
} from 'react-native';

import Create from '../Screens/Create';


class DynamicActivity extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        // title: 'Home',	
        header: null,
    });

    render() {

        return (

            <Create Title='Todo' />
        );
    }
}

export default DynamicActivity;
