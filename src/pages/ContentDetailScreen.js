import React from 'react';
import { View, Text, Button } from 'react-native'; 
import firebase from '../database/FireBase'

import { useRoute } from '@react-navigation/native';
import ContentItem from '../components/ContentIem';

class ContentDetailScreen extends React.Component {

    constructor(){
        super();
    }

    render(){
        return (
            <View>
                <Text>{this.props.route.params.desc}</Text>
                <Text>{this.props.route.params.name}</Text>
                <Text>{this.props.route.params.id}</Text>
            </View>
        )
    }
}

export default function(propos) {
    const route = useRoute();
    
    return <ContentDetailScreen {...propos} route={route}/>;

}