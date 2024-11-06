import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Dimensions, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PageOnboardingOne from './pages/Onboarding/PageOnboardingOne';
import PageOnboardingTwo from './pages/Onboarding/PageOnboardingTwo';
import PageOnboardingThree from './pages/Onboarding/PageOnboardingThree';
import PageOnboardingFour from './pages/Onboarding/PageOnboardingFour';
import PageOnboardingFive from './pages/Onboarding/PageOnboardingFive';

import PageLoginOne from './pages/Login/PageLoginOne';
import PageLoginTwo from './pages/Login/PageLoginTwo';
import PageLoginThree from './pages/Login/PageLoginThree';
import PageLoginFour from './pages/Login/PageLoginFour';

import ClassTabScreen from './pages/Tabs/ClassTabScreen';
import PageEnglish from './pages/Class/PageEnglish';
import PageMarketing from './pages/Class/PageMarketing';
import PageMediation from './pages/Class/PageMediation';
import PageSpanish from './pages/Class/PageSpanish';
import PageTi from './pages/Class/PageTi';

import ProgressTabScreen from './pages/Tabs/ProgressTabScreen';
import PageProgressOne from './pages/Progress/PageProgressOne';
import PageProgressTwo from './pages/Progress/PageProgressTwo';
import PageProgressThree from './pages/Progress/PageProgressThree';
import PageProgressFour from './pages/Progress/PageProgressFour';
import PageProgressFive from './pages/Progress/PageProgressFive';

import MaterialsTabScreen from './pages/Tabs/MaterialsTabScreen';
import PagePDF from './pages/Materials/PagePDF';
import PageExercise from './pages/Materials/PageExercise';
import PageReadingOne from './pages/Materials/PageReadingOne';
import PageReadingTwo from './pages/Materials/PageReadingTwo';
import PageReadingThree from './pages/Materials/PageReadingThree';
import PageReadingFour from './pages/Materials/PageReadingFour';
import PageReadingFive from './pages/Materials/PageReadingFive';
import PageReadingSix from './pages/Materials/PageReadingSix';
import PageReadingSeven from './pages/Materials/PageReadingSeven';

const { height: maxHeight } = Dimensions.get('window');

export default function App() {

  const Stack = createStackNavigator();
  const Tab = createMaterialTopTabNavigator();

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Bom dia';
    } else if (currentHour < 18) {
      return 'Boa tarde';
    } else {
      return 'Boa noite';
    }
  };


  const [userName, setUserName] = useState('');

  // Função para buscar o nome do usuário, falta ajustar pois tem que fazer o node.js
  useEffect(() => {
    const fetchUserName = async () => {
      const name = await AsyncStorage.getItem('userName');
      setUserName(name || 'Usuário'); // Default 'Usuário' 
    };
    fetchUserName();
  }, []);


  const Tabs = () => {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ padding: 10, marginTop: 5 }}>
          <Text style={{ fontSize: 18 }}>
            {getGreeting()}, {userName}!
          </Text>
        </View>



        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#5C5353',
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: {
              backgroundColor: '#fff',
              paddingTop: maxHeight * 0.02,
              justifyContent: 'space-between',
              borderTopWidth: 0,
            },
            tabBarIndicatorStyle: { backgroundColor: '#AF6528' },
          }}>
          <Tab.Screen name="Class" component={ClassTabScreen} options={{ tabBarLabel: 'Aulas' }} />
          <Tab.Screen name="Materials" component={MaterialsTabScreen} options={{ tabBarLabel: 'Materiais' }} />
          <Tab.Screen name="Progress" component={ProgressTabScreen} options={{ tabBarLabel: 'Progresso' }} />
        </Tab.Navigator>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="PageOnboardingOne" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PageOnboardingOne" component={PageOnboardingOne} />
          <Stack.Screen name="PageOnboardingTwo" component={PageOnboardingTwo} />
          <Stack.Screen name="PageOnboardingThree" component={PageOnboardingThree} />
          <Stack.Screen name="PageOnboardingFour" component={PageOnboardingFour} />
          <Stack.Screen name="PageOnboardingFive" component={PageOnboardingFive} />
          <Stack.Screen name="PageLoginOne" component={PageLoginOne} />
          <Stack.Screen name="PageLoginTwo" component={PageLoginTwo} />
          <Stack.Screen name="PageLoginThree" component={PageLoginThree} />
          <Stack.Screen name="PageLoginFour" component={PageLoginFour} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="MaterialsTabScreen" component={MaterialsTabScreen} />
          <Stack.Screen name="PagePDF" component={PagePDF} />
          <Stack.Screen name="PageExercise" component={PageExercise} />
          <Stack.Screen name="PageReadingOne" component={PageReadingOne} />
          <Stack.Screen name="PageReadingTwo" component={PageReadingTwo} />
          <Stack.Screen name="PageReadingThree" component={PageReadingThree} />
          <Stack.Screen name="PageReadingFour" component={PageReadingFour} />
          <Stack.Screen name="PageReadingFive" component={PageReadingFive} />
          <Stack.Screen name="PageReadingSix" component={PageReadingSix} />
          <Stack.Screen name="PageReadingSeven" component={PageReadingSeven} />
          <Stack.Screen name="PageProgressOne" component={PageProgressOne} />
          <Stack.Screen name="PageProgressTwo" component={PageProgressTwo} />
          <Stack.Screen name="PageProgressThree" component={PageProgressThree} />
          <Stack.Screen name="PageProgressFour" component={PageProgressFour} />
          <Stack.Screen name="PageProgressFive" component={PageProgressFive} />
          <Stack.Screen name="PageEnglish" component={PageEnglish} />
          <Stack.Screen name="PageTi" component={PageTi} />
          <Stack.Screen name="PageMarketing" component={PageMarketing} />
          <Stack.Screen name="PageMediation" component={PageMediation} />
          <Stack.Screen name="PageSpanish" component={PageSpanish} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
});