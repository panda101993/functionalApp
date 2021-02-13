import React, { Component } from 'react';
import { View, Text, Dimensions, Platform, PermissionsAndroid, Linking } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import {
  location_icon
} from "@Image/Icon"

import {
  LIGHT_GREEN,
  BLUE_LIGHT,
  BLUE_DARK,
  SKY_BLUE
} from '../global/Colors';
import { AppView, AppText, AppImage, Touchable, List } from '../components/Atoms/index';
const { height, width } = Dimensions.get('window');
export default class Maplist extends Component {
  constructor(props) {
    super(props);
    this.state = {

      region: {
        latitude: 28,
        longitude: 77,
        latitudeDelta: 0.30,
        longitudeDelta: 0.30,
      }
    };
  }
  async componentDidMount() {

    this.LocationPermission()
  }
  repeat_Location = async () => {
    try {
      if (Platform.OS === 'android') {
        Linking.openSettings();
      }
      else {
        Linking.openURL('app-settings:');
      }
    } catch (err) {

    }
  }
  RequestCoordinates = async () => {
    try {
      if (Platform.OS === 'ios') {
        Geolocation.getCurrentPosition(
          (async (success) => {
            await this.setState({
              region: {
                latitude: success.coords.latitude,
                longitude: success.coords.longitude,
                latitudeDelta: 0.30,
                longitudeDelta: 0.30,
              },
            });
          }),
          (error) => {
            this.setState({ location: error, loading: false });

          },
          { timeout: 20000 }
        );
      }
      else {

        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            'title': 'Alafiame App',
            'message': 'Alafiame App access to your location '
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {

          RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ interval: 10000, fastInterval: 5000 })
            .then(async data => {

              if (data == "enabled" || data == "already-enabled") {

                Geolocation.getCurrentPosition(
                  (async (success) => {
                    console.log("console.log(", success)
                    await this.setState({
                      region: {
                        latitude: success.coords.latitude,
                        longitude: success.coords.longitude,
                        latitudeDelta: 0.30,
                        longitudeDelta: 0.30,
                      },
                    });
                  }),
                  (error) => {
                    this.setState({ location: error, loading: false });

                  },
                  { timeout: 20000 }
                );
              }
            })
            .catch(err => {

            });

        } else {
          this.repeat_Location()
        }
      }


    } catch (error) {

    }
  }
  LocationPermission = async () => {
    if (Platform.OS === 'ios' || (Platform.OS === 'android' && Platform.Version < 23)) {

      return this.RequestCoordinates()
    }

    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (hasPermission) return this.RequestCoordinates()
    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (status === PermissionsAndroid.RESULTS.GRANTED) return this.RequestCoordinates()
    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ShowErrorToast(appConstants['LOCATION_PERMISSION_DENIED_BY_USER']);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ShowErrorToast(appConstants['LOCATION_PERMISSION_REVOKED_BY_USER']);
    }

    return false;
  }


  getDragCoords = (e) => {

  }
  render() {


    return (
      <View>
        <MapView
          followsUserLocation={true}
          showsMyLocationButton={true}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={[{ width: width, height: height * 0.80, alignSelf: "center" },
          this.props.mapstyle]}
          region={this.state.region}>
          <MapView.Marker
            onDragEnd={(e) => this.getDragCoords(e)}
            getDragCoords
            draggable
            coordinate={this.state.region}
          >
            {this.props.toggleNavigation===false ||this.props.onwaytrack ?
              <AppView style={{
                height: 25, width: 25,
                borderRadius: 25 / 2,
                backgroundColor: SKY_BLUE,
              }} />
              :

              <AppImage
                resizeMode="contain"
                source={location_icon} style={{ height: 35, width: 35 }} />
            }
          </MapView.Marker>
          {this.props.toggleNavigation===false ||this.props.onwaytrack ?
          <AppView>
               <MapView.Polyline
            coordinates={[
              { latitude: 28, longitude: 77 },
              { latitude: 28.02, longitude: 77 },
              { latitude: 28.026, longitude: 77.04 },
              { latitude: 28.035, longitude: 77.04 },
              { latitude: 28.07, longitude: 77.06 },
              { latitude: 28.08, longitude: 77.09 },
              { latitude: 28.12, longitude: 77.08 },
              { latitude: 28.15, longitude: 77.1 },
            ]}
            strokeWidth={3}
            strokeColor={SKY_BLUE}
          />

          <MapView.Marker
            onDragEnd={(e) => this.getDragCoords(e)}
            getDragCoords
            draggable
            coordinate={{ latitude: 28.15, longitude: 77.1 }}
          >
            <AppImage
              resizeMode="contain"
              source={location_icon} style={{ height: 35, width: 35 }} />
          </MapView.Marker> 
          </AppView>
       
:
null
          }



        
        </MapView>
      </View>
    );
  }
}