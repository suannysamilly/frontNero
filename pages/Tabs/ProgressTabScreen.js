import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const ProgressTabScreen = ({ navigation }) => {

 const handlePressEnglish = () => {
    navigation.navigate('PageProgressOne');
  };
  const handlePressSpanish = () => {
    navigation.navigate('PageProgressTwo');
  };
  const handlePressTi = () => {
    navigation.navigate('PageProgressThree');
  };
  const handlePressMediation = () => {
    navigation.navigate('PageProgressFour');
  };
  const handlePressMarketing = () => {
    navigation.navigate('PageProgressFive');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>

        <View style={styles.buttons}>
<Text style={styles.text}>Cursos Online</Text>

          <TouchableOpacity style={styles.button} onPress={handlePressEnglish} >
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Curso De
 Inglês</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Onboarding.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlePressSpanish}>
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Curso De
Espanhol</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Onboarding.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

       <Text style={styles.text}>Cursos Presenciais</Text>

          <TouchableOpacity style={styles.button} onPress={handlePressTi}>
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Curso De Tecnologia e Programação</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Onboarding.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlePressMediation}>
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Curso De Comunicação e Mediação de Conflitos</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Onboarding.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlePressMarketing}>
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Curso De Design e Marketing Digital</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Onboarding.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  buttons: {
    alignItems: 'stretch', // Ajusta para esticar os botões para toda a largura
    flexDirection: 'column',
    width: '100%',
  },
  button: {
    flex: 1, // Preenche toda a largura
    height: 126,
    flexDirection: 'row',
    backgroundColor: '#7B4921',
    borderRadius: 20, 
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
   buttonLeft: {
    justifyContent: 'flex-end', 
    width: '47%',
  },
  buttonRight: {
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    width: '53%', 
  },
  image: {
    width: 121,
    height: 128,
  },
  buttonTextTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#482E1A',
    marginBottom: 20,
  },
});

export default ProgressTabScreen;
