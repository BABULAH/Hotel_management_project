import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';

// Remplacez cette URL par le chemin réel de votre logo
const logoUrl = '/images/logo.jpg'; 

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de réinitialisation de mot de passe simulée
    alert(`Un lien de réinitialisation de mot de passe a été envoyé à ${email}`);
    router.push('/login'); // Redirection vers la page de connexion après soumission
  };

  return (
    <Container>
        <Logo src={logoUrl} alt="Logo" />
      <Form onSubmit={handleSubmit}>
        <Title>Mot de passe oublié</Title>
        <Description>
          Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.
        </Description>
        <Input 
          type="email" 
          placeholder="Entrez votre adresse e-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <Button type="submit">Envoyer</Button>
      </Form>
      <BackToLogin>
      Revenir à la <a onClick={() => router.push('/login')}>connexion</a>
      </BackToLogin>
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column; /* Changer la direction en colonne pour le logo et le formulaire */
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #474646FF; /* Couleur de fond gris foncé */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white; /* Fond blanc pour le formulaire */
  padding: 20px;
  border-radius: 8px; /* Coins arrondis */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; /* Ajout d'un espace en bas pour le lien */
`;

const Logo = styled.img`
  width: 200px; /* Ajustez la taille selon votre logo */
  height: auto;
  margin-bottom: 20px; /* Espace entre le logo et le titre */
  display: block; /* Centrer le logo */
  align-self: center; /* Centrer horizontalement */
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px; /* Espace entre le titre et le paragraphe */
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 20px; /* Espace entre le paragraphe et le champ d'entrée */
  font-size: 14px;
  color: #333; /* Couleur du texte du paragraphe */
`;

const Input = styled.input`
  margin: 20px 0; /* Augmentation de l'espace vertical entre les champs */
  padding: 10px;
  font-size: 16px;
  border: none; /* Supprime la bordure */
  border-bottom: 1px solid #474646FF; /* Ligne de soulignement */
  outline: none; /* Supprime le contour par défaut lors de la sélection */
  
  &:focus {
    border-bottom: 1px solid #474646FF; /* Couleur de la ligne lors de la sélection */
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #474646FF;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const BackToLogin = styled.p`
  margin-top: 10px; /* Espace entre le formulaire et le lien */
  font-size: 14px;
  color: white;
    a {
    color: #D3AD03FF;
    cursor: pointer;
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default ForgotPassword;
