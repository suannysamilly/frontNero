import axios from 'axios';

// Configuração da instância axios com URL base para o emulador Android
const api = axios.create({
  baseURL: 'http://10.0.2.2:3000', // Substitua pelo seu IP/porta de backend, se necessário
});

// Interceptadores para tratar erros e respostas globalmente
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro no Axios:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

export default api;
