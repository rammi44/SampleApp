import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from '../Components/TextInput';

// import RNGooglePlacePicker from 'react-native-google-place-picker';

import Icon from 'react-native-vector-icons/MaterialIcons';

class _Location extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLocationVisible: false
        };
    }

    openSearchModal() {
        // RNGooglePlacesNative.openPlacePickerModal()
        //     .then((place) => {
        //         console.log(place);
        //         // place represents user's selection from the
        //         // suggestions and it is a simplified Google Place object.
        //     })
        //     .catch(error => console.log(error.message));  // error is a Javascript Error object
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.row}>

                    {/* Try setting `flexDirection` to `column`. */}

                    <View style={[styles.thumbnailContainer, this.props.style]}>
                        <View style={[styles.thumbnailBackground]} >
                            {<Icon name="location-on" size={25} onPress={this.openSearchModal}  style={styles.thumbnail} >
                            </Icon>}
                        </View>
                    </View>
                    <View style={[styles.datetime, this.props.style]}>
                        <TextInput ref="content"
                            placeholder={'Enter Location'}  underlineColorAndroid={'rgba(0,0,0,0)'}
                            style={styles.input}
                            >
                            {this.state.text} 
                        </TextInput>
                    </View>

                </View>

            </View>
        );
    }
};




// export default class TestLocation extends Component {

//     render() {

//         return (

//             <_Location />

//         );
//     }
// };



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
        color:'#000'
    }

});


// class RNGooglePlaces extends Component{

// 	static filterDefaults = {
// 		type: 'noFilter',
// 		country: '',
// 		useOverlay: false
// 	}

// 	static boundsDefaults = {
// 		latitude: 0,
// 		longitude: 0,
// 		radius: 0.1
// 	}

// 	openAutocompleteModal(filterOptions = {}) {
// 		return RNGooglePlacesNative.openAutocompleteModal({
// 			...RNGooglePlaces.filterDefaults,
//             ...RNGooglePlaces.boundsDefaults,
// 			...filterOptions
// 		})
// 	}

// 	openPlacePickerModal(latLngBounds = {}) {
// 		return RNGooglePlacesNative.openPlacePickerModal({
//             ...RNGooglePlaces.boundsDefaults,
// 		    ...latLngBounds
//         })
// 	}

// 	getAutocompletePredictions(query, filterOptions = {}) {
// 		return RNGooglePlacesNative.getAutocompletePredictions(query, {
//             ...RNGooglePlaces.filterDefaults,
//             ...RNGooglePlaces.boundsDefaults,
// 			...filterOptions
// 		})
// 	}

// 	lookUpPlaceByID(placeID) {
// 		return RNGooglePlacesNative.lookUpPlaceByID(placeID)
// 	}

// 	getCurrentPlace() {
// 		return RNGooglePlacesNative.getCurrentPlace()
// 	}
// }

export default _Location