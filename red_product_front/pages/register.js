import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance'; 

const logoUrl = '/images/logo.jpg';

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState(''); 
  const [success, setSuccess] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    setSuccess(''); 

    if (!acceptTerms) {
      setError('Veuillez accepter les termes et conditions.');
      return;
    }

    try {
      const response = await axiosInstance.post('/auth/register', {
        username: name,
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess('Account created!');
        setError('');
        router.push('/login');
      }
    } catch (error) {
      setError('Erreur lors de l’inscription, veuillez réessayer.');
    }
  };

  return (
    <Container>
      <Logo src={logoUrl} alt="Logo" />
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}  {/* Affiche les erreurs */}
        {success && <SuccessMessage>{success}</SuccessMessage>}  {/* Affiche le succès */}
        <Input 
          type="text" 
          placeholder="Nom" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        />
        <Input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <Input 
          type="password" 
          placeholder="Mot de passe" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <CheckboxContainer>
          <Checkbox 
            type="checkbox" 
            checked={acceptTerms} 
            onChange={() => setAcceptTerms(!acceptTerms)} 
            required 
          />
          <Label>Accepter les termes et la politique</Label>
        </CheckboxContainer>
        <Button type="submit">S'inscrire</Button>
      </Form>
      <LinksContainer>
        <LoginLink>
          Déjà un compte ? <a onClick={() => router.push('/login')}>Se connecter</a>
        </LoginLink>
      </LinksContainer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #474646FF;
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  margin: 20px 0;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #474646FF;
  outline: none;

  &:focus {
    border-bottom: 1px solid #474646FF;
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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const LinksContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const LoginLink = styled.p`
  font-size: 14px;
  color: white;

  a {
    color: #D3AD03FF;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
`;

export default Register;
