import React from "react";
import {
    Image, StyleSheet, Text, View, TextInput, TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import MapView, { MapEvent, Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Icon from "react-native-vector-icons/Feather";

const latitudeDelta = 0.025;
const longitudeDelta = 0.025;


export  class LocationPickerDemo extends React.Component<any, any> {


    searchText: any;
    mapView: any;
    state = {
        region: {
            latitudeDelta,
            longitudeDelta,
            latitude: -22.28076033603674,
            longitude: -42.53227621542615,
        },
        marker:{
            key: 1,
            coordinate: {
                latitude: -22.28076033603674,
                longitude: -42.53227621542615,
            },
            color: '#ff0000'

        },
        listViewDisplayed: 'auto',
        address: "",
        showAddress: false,
        search: "",
        currentLat: "",
        currentLng: "",
        forceRefresh: 0,
    };
    goToInitialLocation = (region: any) => {
        let initialRegion = Object.assign({}, region);
        initialRegion["latitudeDelta"] = 0.005;
        initialRegion["longitudeDelta"] = 0.005;
        this.mapView.animateToRegion(initialRegion, 2000);
    };
    onRegionChange = (region: any) => {
        this.setState({
            region: region,
            forceRefresh: Math.floor(Math.random() * 100),
        },


            this.getCurrentAddress
        );
    };

    onPoiClick = (event: MapEvent) => {
        this.setState({
            region: event.nativeEvent.coordinate,
            forceRefresh: Math.floor(Math.random() * 100),
            marker:  {
                coordinate: event.nativeEvent.coordinate,
                key: 1,
                color: "#ff0000",
              },
        },


            this.getCurrentAddress
        );
      


    }

    getCurrentAddress() {
        fetch('https:\/\/maps.googleapis.com/maps/api/geocode/json?address=' + this.state.region.latitude +
            "," + this.state.region.longitude + "&key=" + 'AIzaSyCV1xfl8LMea8OKFNdAlPnh6OOqKBh4xsA')
            .then((response) => response.json()).then((responseJson) => {
                this.setState(
                    {
                        address: JSON.stringify(responseJson.results[0].formatted_address)
                            .replace(/"/g, "")
                    });
            });
    }
    render() {
        const { region } = this.state;

        return (
            <View style={styles.map}>
                <MapView
                    ref={(ref) => (this.mapView = ref)}
                    onMapReady={() =>
                        this.goToInitialLocation(this.state.region)}
                    style={styles.map}
                    onPress={this.onPoiClick}
                    
                > 
                  <Marker 
              key={this.state.marker.key}
              coordinate={this.state.marker?.coordinate}
              pinColor={this.state.marker?.color}
            />
                
            </MapView>

                <View style={styles.panel}>
                    <View style={[styles.panelHeader,
                    this.state.listViewDisplayed ? styles.panelFill : styles.panel,]}>  
                      <GooglePlacesAutocomplete
                            currentLocation={false}
                            enableHighAccuracyLocation={true}
                            ref={(c) => (this.searchText = c)}
                            placeholder="Digite seu endereço"
                            minLength={2} // minimum length of text to search
                            fetchDetails={true}
                            renderDescription={(row) => row.description}
                            enablePoweredByContainer={false}
                            listUnderlayColor="lightgrey"
                            onPress={(data, details) => {
                                this.setState({
                                    listViewDisplayed: false,
                                    address: data.description,
                                    currentLat: details?.geometry.location.lat,
                                    currentLng: details?.geometry.location.lng,
                                    region: {
                                        latitudeDelta,
                                        longitudeDelta,
                                        latitude: details?.geometry.location.lat,
                                        longitude: details?.geometry.location.lng,
                                    },
                                });
                                this.searchText.setAddressText("");
                                this.goToInitialLocation(this.state.region);
                            }}
                            textInputProps={{
                                onChangeText: (text) => {
                                    this.setState({ listViewDisplayed: true });
                                },
                            }}

                            query={{
                                key: 'AIzaSyCV1xfl8LMea8OKFNdAlPnh6OOqKBh4xsA',
                                language: "pt-br", // language of the results
                                components: "country:br",
                            }}
                            styles={{
                                description: {
                                    fontFamily: "Calibri",
                                    color: "black",
                                    fontSize: 12,
                                },
                                predefinedPlacesDescription: {
                                    color: "black",
                                },
                                listView: {
                                    position: "absolute",
                                    marginTop: 44,
                                    backgroundColor: "white",
                                    borderBottomEndRadius: 15,
                                    elevation: 2,
                                },
                            }}
                            nearbyPlacesAPI="GooglePlacesSearch"
                            GooglePlacesSearchQuery={{
                                rankby: "distance",
                            }}
                            filterReverseGeocodingByTypes={[
                                "locality", "administrative_area_level_3",]}
                            debounce={200} />
                    </View>
                </View>
              
                <KeyboardAvoidingView style={styles.footer}>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Icon name="home"
                            size={24}
                            color="#c53030"
                            style={{
                                padding: 0,
                            }}
                        />
                        <Text style={styles.addressText}>Seu endereço</Text>
                    </View>
                    <TextInput
                        multiline={true}
                        clearButtonMode="while-editing"
                        style={{
                            marginBottom: 5,
                            width: "90%",
                            minHeight: 70,
                            alignSelf: "center",
                            borderColor: "lightgrey",
                            borderWidth: 1.5,
                            fontSize: 12,
                            borderRadius: 5,
                            flex: 0.5,
                            alignContent: "flex-start",
                            textAlignVertical: "top",
                            fontFamily: "Calibri",
                        }}
                        onChangeText={(text) => this.setState({ address: text })}
                        value={this.state.address}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('InsertInformation')}
                        style={{
                            width: "50%",
                            alignSelf: "center",
                            alignItems: "center",
                            backgroundColor: "#28a745",
                            shadowColor: "rgba(0,0,0, .4)", // IOS
                            shadowOffset: { height: 1, width: 1 }, // IOS
                            shadowOpacity: 1, // IOS
                            shadowRadius: 1, //IOS
                            elevation: 2, // Android 
                        }}>
                        <Text
                            style={{
                                color: "white",
                                fontFamily: "Calibri",
                                fontSize: 12,
                                paddingVertical: 4,
                            }}>
                            Salvar Endereço
       </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    markerFixed: {
        left: "50%",
        marginLeft: -24,
        marginTop: -48,
        position: "absolute",
        top: "50%",
    },
    addressText: {
        color: "black",
        margin: 3,
        fontFamily: "Calibri",
        fontSize: 17,
    },
    footer: {
        backgroundColor: "white",
        bottom: 0,
        position: "absolute",
        width: "100%",
        height: "30%",
    },
    panelFill: {
        position: "absolute",
        top: 0,
        alignSelf: "stretch",
        right: 0,
        left: 0,
    },
    panel: {
        position: "absolute",
        top: 0,
        alignSelf: "stretch",
        right: 0,
        left: 0,
        flex: 1,
    },
    panelHeader: {
        //add custom header
    },
});

    export default function(props: any) {
    const navigation = useNavigation();
    return <LocationPickerDemo {...props} navigation={navigation} />;

    }
//const navigation = useNavigation();

//onPress={() => navigation.navigate('InsertAppointment')}
