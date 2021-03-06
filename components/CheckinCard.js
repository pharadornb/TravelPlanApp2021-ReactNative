import React, {useEffect, useState} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

import firestore from "../Firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
import Constants from "expo-constants";

import MyTrip from '../screens/MyTrip';

export default function App(props, { navigation }){

    function Detail(){
        props.navigation.navigate('CheckinDetail', {
            PlaceName: props.PlaceName,
            PlacePicture: props.PlacePicture,
            PlaceDesc: props.PlaceDesc,
            PlaceLat: props.PlaceLat,
            PlaceLong: props.PlaceLong,
            PlaceID: props.PlaceID,
            PlaceDate: props.date,
            id: props.id,
        });
    }

    return(
        <TouchableOpacity style={styles.card} onPress={Detail}>
            <View>
                <Image source={{uri: props.PlacePicture}} style={styles.img} />
            </View>
            <View style={styles.desc}>
                <Text style={styles.place_name}>{props.PlaceName}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} >
                    <Text style={styles.place_province}>Checkin date : {props.date}</Text>
                    {/*<TouchableOpacity onPress={RemoveTrip}>*/}
                    {/*    <Text><FontAwesome5 name='trash' size={15} color='white' /></Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#186A3B',
        borderRadius: 7,
        overflow: "hidden",
        marginBottom: 15,
        width: '100%',
    },
    img: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        height: 100,
        resizeMode: 'cover',
    },
    desc: {
        padding: 10,
    },
    place_name: {
        fontFamily: 'KanitMedium',
        fontSize: 14,
        color: '#FDFEFE',
    },
    place_province: {
        fontFamily: 'KanitLight',
        fontSize: 14,
        color: '#FDFEFE',
    },
    place_desc: {
        fontFamily: 'KanitLight',
        color: '#FDFEFE',
        paddingTop: 5,
        fontSize: 12,
    }
})