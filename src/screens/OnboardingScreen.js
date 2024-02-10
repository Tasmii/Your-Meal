import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../../utils/asyncStorage';
import Animated, { FadeInDown, FadeIn, FadeInUp } from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Login');
        setItem('onboarded', '1');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
        
    }
    const skipButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Skip</Text>
            </TouchableOpacity>
        )
        
    }
    const nextButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Next</Text>
            </TouchableOpacity>
        )
        
    }

  return (
    <View style={styles.container}>
      <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            bottomBarHighlight={false}
            bottomBarHeight={80}
            DoneButtonComponent={doneButton}
            SkipButtonComponent={skipButton}
            NextButtonComponent={nextButton}
            containerStyles={{paddingHorizontal: 15}}
            imageContainerStyles={{ paddingVertical: 160 }}
            pages={[
                {
                    backgroundColor: '#FEF9F3',
                    image:<Animated.Image entering={FadeInUp.delay(200).duration(1000)} style={styles.image} source={require('../../assets/images/on1.jpg')}/>,
                    title: 'Cook Like a Pro',
                    subtitle: 'Easy recipes for every taste and skill level',
                },
                {
                    backgroundColor: '#FEF9F3',
                    image:<Animated.Image entering={FadeInUp.delay(200).duration(1000)} style={styles.image} source={require('../../assets/images/on2.jpg')}/>,
                    title: 'Your Kitchen Companion',
                    subtitle: 'Save time and money with our meal planning tools',
                },
                {
                    backgroundColor: '#FEF9F3',
                    image:<Animated.Image entering={FadeInUp.delay(200).duration(1000)} style={styles.image} source={require('../../assets/images/on3.jpg')}/>,
                    title:'Get Cooking with Your Meal',
                    subtitle: 'Find inspiration for your next meal',
                },
            ]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        resizeMode: 'contain',
        width: '100%',
        height: '70%',
    },
    doneButton: {
        padding: 20,
        backgroundColor: '#FFC107',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
    },
    skipButton: {
        padding: 20,
        backgroundColor: '#FFC107',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
    },
    nextButton: {
        padding: 20,
        backgroundColor: '#FFC107',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
    },
})