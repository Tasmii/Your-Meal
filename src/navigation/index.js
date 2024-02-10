import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen.js';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SplashScreen from '../screens/SplashScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { getItem } from '../../utils/asyncStorage';


const Stack = createNativeStackNavigator();
function AppNavigation(){

    const [showOnboarding, setShowOnboarding] = useState(null);
    useEffect(()=>{
      checkIfAlreadyOnboarded();
    },[])
  
    const checkIfAlreadyOnboarded = async ()=>{
      let onboarded = await getItem('onboarded');
      if(onboarded==1){
        // hide onboarding
        setShowOnboarding(false);
      }else{
        // show onboarding
        setShowOnboarding(true);
      }
    }
  
    if(showOnboarding==null){
      return null;
    }
  
  
    if(showOnboarding){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Welcome' component={WelcomeScreen}/>
            <Stack.Screen name="OnboardingScreen" options={{headerShown: false}} component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name="RecipeDetail" options={{presentation: 'fullScreenModal'}} component={RecipeDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }else{
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Welcome' component={WelcomeScreen}/>
                <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
                <Stack.Screen name='SplashScreen' component={SplashScreen}/>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name="RecipeDetail" options={{presentation: 'fullScreenModal'}} component={RecipeDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
      )
    }
}
export default AppNavigation;