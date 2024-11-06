import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

const ClassTabScreen = ({ navigation }) => {

  const handlePressEnglish = () => {
    navigation.navigate('PageEnglish');
  };
  const handlePressSpanish = () => {
    navigation.navigate('PageSpanish');
  };
  const handlePressTi = () => {
    navigation.navigate('PageTi');
  };
  const handlePressMediation = () => {
    navigation.navigate('PageMediation');
  };
  const handlePressMarketing = () => {
    navigation.navigate('PageMarketing');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.subTitle}>Suas aulas</Text>
        </View>
        <View style={styles.buttonsContainer}>
          {/* Primeira linha com dois botões */}
          <View style={styles.row}>
            <View style={styles.courses}>
              <TouchableOpacity style={styles.button} onPress={handlePressEnglish}>
                <Image
                  source={require('../../images/Onboarding.png')} 
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.buttonTextCourses}>Inglês</Text>
            </View>

            <View style={styles.courses}>
              <TouchableOpacity style={styles.button} onPress={handlePressTi}>
                <Image
                  source={require('../../images/Onboarding.png')} 
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.buttonTextCourses}>Tecnologia e Programação</Text>
            </View>
          </View>

          {/* Segunda linha com dois botões */}
          <View style={styles.row}>
            <View style={styles.courses}>
              <TouchableOpacity style={styles.button} onPress={handlePressMediation}>
                <Image
                  source={require('../../images/Onboarding.png')} 
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.buttonTextCourses}>Mediação de Conflitos</Text>
            </View>

            <View style={styles.courses}>
              <TouchableOpacity style={styles.button} onPress={handlePressSpanish}>
                <Image
                  source={require('../../images/Onboarding.png')} 
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.buttonTextCourses}>Espanhol</Text>
            </View>
          </View>

          {/* Terceira linha com um botão */}
          <View style={styles.rowSingle}>
            <TouchableOpacity style={styles.buttonCourses} onPress={handlePressMarketing}>
              <Image
                source={require('../../images/Onboarding.png')} 
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.buttonTextCourses}>Design e Marketing Digital</Text>
          </View>
        </View>
      </SafeAreaView>
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
  subTitle: {
    fontSize: 20, // Aumentei o tamanho da fonte para maior visibilidade
    color: '#717171',
    textAlign: 'center', // Centraliza o texto horizontalmente
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 10,
  },
  rowSingle: {
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  courses: {
    width: '48%',
    alignItems: 'center',
  },
  image: {
    width: 121,
    height: 128,
  },
  button: {
    width: '100%', 
    height: 200,
    backgroundColor: '#7B4921',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonCourses: {
    width: '100%',
    height: 130,
    backgroundColor: '#7B4921',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonTextCourses: {
    color: '#7B4921', 
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, 
    textAlign: 'center',
  },
});

export default ClassTabScreen;
