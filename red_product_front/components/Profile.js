import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Composants stylisés
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ProfileName = styled.h3`
  margin-left: 10px;
`;

// Composant de profil
const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Récupérer les informations de l'utilisateur connecté depuis le localStorage
        const userData = JSON.parse(localStorage.getItem('user'));
        setUser(userData);
    }, []);

    if (!user) {
        return null; // Ou un indicateur de chargement
    }

    return (
        <ProfileContainer>
            <ProfileImage src={user.profileImage || "/images/default.png"} alt="User Profile" />
            <ProfileName>{user.username}</ProfileName>
        </ProfileContainer>
    );
};

export default Profile;
