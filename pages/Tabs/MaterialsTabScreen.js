import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const MaterialsTabScreen = ({ navigation }) => {
 
  const handlePressPDF = () => {
      navigation.navigate('PagePDF');
  };
  const handlePressExercise = () => {
      navigation.navigate('PageExercise');
  };
  const handlePressReading = () => {
      navigation.navigate('PageReadingOne');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handlePressPDF} >
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>PDF’S</Text>
              <Text style={styles.buttonText}>Baixe aqui o conteúdo das matérias e organize seus estudos.</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/PDF.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress ={handlePressExercise}>
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Exercícios</Text>
              <Text style={styles.buttonText}>Pratique seus conhecimentos e fortaleça seu aprendizado.</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Exercise.png')} 
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlePressReading}>
            <View style={styles.buttonLeft} >
              <Text style={styles.buttonTextTitle}>Recomendação de Leitura</Text>
              <Text style={styles.buttonText}>Amplie seus horizontes e aprofunde seu conhecimento.</Text>
            </View>
            <View style={styles.buttonRight} >
              <Image
                source={require('../../images/Reading.png')} 
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
    borderWidth: 1, 
    borderColor: '#7B4921', 
    borderRadius: 20, 
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  buttonLeft: {
    flexDirection: 'column', 
    width: '60%', 
  },
  buttonRight: {
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    width: '40%', 
  },
  image: {
    width: 121,
    height: 128,
  },
  buttonTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#482E1A',
  },
  buttonText: {
    fontSize: 14,
    color: '#482E1A',
  },
});

export default MaterialsTabScreen;
