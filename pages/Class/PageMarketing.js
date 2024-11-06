import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const PageMarketing = ({ navigation }) => {

  const handlePressGoBack = () => {
    navigation.navigate('Tabs', { screen: 'Class' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePressGoBack}>
          <Image source={require('../../images/GoBack.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.goBackText}>Progresso</Text>
      </View>

      <View style={styles.content}>
        <Image source={require('../../images/Onboarding.png')} style={styles.image} />
        <Text style={styles.textTitle}>Design e Marketing Digital</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Fundamentos do Design e Marketing Digital</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Ferramentas de Design Gráfico e Criação de Conteúdo</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Branding e Identidade Visual</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Marketing Digital: Estratégias e Canais</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Mídias Sociais e Design para Redes</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Design de Interfaces e Experiência do Usuário (UX/UI)</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>E-mail Marketing e Automação</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>SEO e Design para Otimização de Conteúdos</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonLeft}>
            <Text style={styles.buttonTextTitle}>Projeto Final: Criação de Campanha Completa</Text>
          </View>
          <View style={styles.buttonRight}>
            <Image
              source={require('../../images/Onboarding.png')}
              style={styles.buttonImage}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 50,
  },
  backIcon: {
    marginRight: 15,
    width: 24,
    height: 24,
  },
  goBackText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7B4921',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle:{
    color: "#482E1A",
    fontSize: 16,
    marginBottom: 15,
  },
  image: {
    width: 182,
    height: 192,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#7B4921',
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonImage:{
   width: 100,
   height: 100,
  },
  buttonLeft: {
    flex: 1,
  },
  buttonTextTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRight: {
    paddingLeft: 10,
  },
});

export default PageMarketing;
