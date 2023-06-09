import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0,0,0.8)' : 'rgba(0,0,0.3)' ;

    return (
        <View
            style={{
                width:5,
                height:5,
                marginHorizontal:3,
                backgroundColor
            }}
        />
    )
}

const Skip = ({...props}) => (
    <Button
    title = 'Skip'
    color="#000000"
    {...props}
    />
);

const Next = ({...props}) => (
    <Button
    title = 'Next'
    color="#000000"
    {...props}
    />
    
);

const Done = ({...props}) => (
    <TouchableOpacity 
        style={{marginHorizontal:10}}
        {...props}
     >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);


const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}

        pages={[
            {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/onboarding-img1.png')} />,
            title: 'Connect with the world',
            subtitle: 'A new way to connect with the world',
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Share Your Thoughts',
                subtitle: 'Share your thoughts with like-minded people',
            },
            {
                backgroundColor: '#e9bcbe',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Heal your mind',
                subtitle: 'Heal your mind with the support of the community',
            }, 
        ]}
/>
    )
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: "center"
    }
})