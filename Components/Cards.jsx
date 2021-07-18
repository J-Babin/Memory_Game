import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function card () {

    const touch = () => {
        console.warn("toucher")
    }
    return(
        <View>
            <TouchableHighlight onPress={() => { touch() }}>
                <View>
                    <FontAwesome5
                        name="question"
                        size={35}
                        color="black"
                    />
                </View>
            </TouchableHighlight>
        </View>
    )
}