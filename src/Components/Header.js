import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = { headerText: '' };

    }

    // const Header = (props) => {
    //   const {textStyles,viewStyles} = styles;

    render() {

        return (
            <View style={[styles.viewStyles, this.props.style]}>

                {/* <CancelButton /> */}

                {this.props.CancelIcon}

                <Text style={styles.textStyles}>

                    {this.props.headerText}

                </Text>

                {this.props.ColorPickerIcon}


            </View>
        );
    }
};


var styles = StyleSheet.create({

    textStyles: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFF',
        marginBottom: 4
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // flex: 1
    },
    viewStyles: {
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 80, //minWidth, maxWidth, maxHeight rnv.29
        padding: 8,
    }

});

export default Header;
