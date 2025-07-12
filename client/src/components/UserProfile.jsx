import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ProfileContext } from '../context/UserProfileContext';

import { heading4_regular, body_Regular } from '../styles/font-styles';

import UserStats from './UserStats';

import { MapPin } from '@phosphor-icons/react';

import user_avatar_default from '/user_avatar_default.png';

const UserProfile = () => {
  const profile = React.useContext(ProfileContext);

  return (
    <Wrapper>
      {profile && (
        <>
          <UserImage>
            {profile.images[0] ? (
              <Image
                src={profile.images[0].url}
                alt="user photo"
              />
            ) : (
              <Image
                src={'/user_avatar_default.png'}
                alt="default user photo"
              />
            )}
          </UserImage>
          <UserDetails>
            <UserName>{profile.name}</UserName>
            <UserEmail>{profile.email}</UserEmail>
            <UserCountry>
              <MapPin size={16} />
              {profile.country}
            </UserCountry>
            {profile.plan === 'free' ? (
              <UserPremiumTag>Premium User</UserPremiumTag>
            ) : (
              <TagContainer>Free User</TagContainer>
            )}
            <UserStats profile={profile} />
          </UserDetails>
        </>
      )}
    </Wrapper>
  );
};

const bgRotate = keyframes`
    100% {
    transform: rotate(1turn);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  padding: 1rem 1.5rem;
`;

const UserImage = styled.div`
  border-radius: 1rem;
`;

const Image = styled.img`
  height: 220px;
  width: 220px;
  border-radius: 1.5rem;
`;

const UserDetails = styled.div`
  padding-top: 0.5rem;
`;

const UserName = styled.p`
  ${heading4_regular};
  margin-bottom: 0.3rem;
`;

const UserEmail = styled.p`
  ${body_Regular};
  opacity: 0.7;
`;

const UserCountry = styled.span`
  margin-top: 0.3rem;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  & > svg {
    display: block;
  }
`;

const TagContainer = styled.div`
  border: 2px solid var(--neutral-600);
  max-width: 150px;
  padding: 2px;
  padding-left: 8px;
  margin-top: 4px;
  border-radius: 6px;
`;

const UserPremiumTag = styled.div`
  ${body_Regular}

  position: relative;
  z-index: 0;
  border-radius: 8px;
  overflow: hidden;

  border: 2px solid transparent;
  max-width: 150px;
  padding: 2px;
  padding-left: 8px;
  margin-top: 4px;

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200px;
    height: 300px;
    background-color: var(--foreground);
    background-repeat: no-repeat;
    background-size: 100%100%, 50%50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: var(--color-gradient-primary);
    animation: ${bgRotate} 9s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 2px;
    top: 2px;
    right: 2px;
    bottom: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: hsl(231, 36%, 10%);
    border-radius: 4px;
  }
`;

export default UserProfile;
