import React, { Component } from 'react'
import { Text, View } from 'react-native';

import { Button, Header } from 'react-native-elements';
 
class _MainHeader extends React.Component {

    render() {

        return (

            <View>

                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'XAMPR', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'search', color: '#fff' }}
                />

                <Text>Welcome to REact native</Text>

            </View>
        );
    }
}




export default _MainHeader;
