import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Utilisez la variable d'environnement pour l'URL de base
  headers: {
    'Content-Type': 'application/json'
  }
});

// Ajouter un intercepteur pour attacher le token aux requêtes
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Récupérer le token stocké
  if (token) {
    config.headers['Authorization'] = token; // Attacher le token aux en-têtes
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
