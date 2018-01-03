import React from 'react';

import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class _ActivityIcon extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
 
        return (

            <View style={styles.thumbnailContainer} >
                <View style={[styles.thumbnailBackground, this.props.style]} >
                    <Icon name='forum' style={styles.thumbnail} />
                </View>
            </View >

        );
    }
}

const styles = StyleSheet.create({

    thumbnail: {
        color: '#fff',
        fontSize: 24,
    },
    thumbnailBackground: {
        alignItems: 'center',
        borderRadius: 8,
        height: 50,
        justifyContent: 'center',
        width: 50,
        backgroundColor:'rgba(231,76,60,1)'
    },
    thumbnailContainer: {
        flex: 1,
        // alignItems: 'center',
        // width: 100,
        // height: 100,
    },
});

export default _ActivityIcon;
