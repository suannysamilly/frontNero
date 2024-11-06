import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import api from '../../services/api'; // Certifique-se de ter a instância do axios configurada

const PageLoginThree = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, setSignUp] = useState(false);

  const handleSubmit = async () => {
    setSignUp(true); // Inicia o carregamento
  
    console.log('Enviando dados para o servidor...');  // Debug para ver se o envio acontece
    try {
      const response = await api.post('/cadastro', {
        name: name,
        email: email,
        password: password,
      });
  
      console.log('Resposta do servidor:', response);  // Verifique o que o servidor retorna
  
      if (response.status === 201) { // Ajuste para 201 se o cadastro for bem-sucedido
        alert('Conta criada com sucesso!');
        navigation.navigate('Tabs');
      }
    } catch (err) {
      console.error('Erro ao criar conta:', err.response || err.message || err);
      alert('Erro ao criar conta. Tente novamente mais tarde.');
    } finally {
      setSignUp(false); // Finaliza o carregamento
    }
  };  

  const handlePressCreateAccount = () => {
    navigation.navigate('PageLoginTwo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Bem-vindo(a) ao</Text>
        <Text style={styles.title}>Nero Transforma</Text>

        <Image source={require('../../images/Onboarding.png')} style={styles.image} />
      </View>

      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Seu nome"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <View style={styles.textInputs}>
            <TouchableOpacity>
              <Text style={styles.textInput}>Lembrar senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressCreateAccount}>
              <Text style={styles.textInput}>Já tenho uma conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonSignUp} onPress={handleSubmit} disabled={signUp}>
          {signUp ? (
            <ActivityIndicator size={24} color="#fff" />
          ) : (
            <Text style={styles.buttonTextSignUp}>Criar conta</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCreateAccount} onPress={handlePressCreateAccount}>
          <Text style={styles.buttonTextCreateAccount}>Já tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  subContainer: {
    maxWidth: '80%',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
  },
  image: {
    width: 201,
    height: 221,
    marginVertical: 20,
  },
  title: {
    color: '#151313',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 400,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AF6528',
    padding: 12,
    fontSize: 14,
  },
  textInputs: {
    flexDirection: 'row',
    color: '#808080',
  },
  textInput: {
    color: '#808080',
    textAlign: 'center',
    paddingLeft: 20,
  },
  buttons: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  buttonSignUp: {
    width: '80%',
    padding: 15,
    backgroundColor: '#7B4921',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextSignUp: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonCreateAccount: {
    width: '80%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonTextCreateAccount: {
    color: '#482E1A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PageLoginThree;
