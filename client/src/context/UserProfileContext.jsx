import React from 'react';

import {
  getUserData,
  getFollowedDetails,
  // getSavedTracks,
  money,
} from '../spotify';

export const ProfileContext = React.createContext();

const UserProfileContext = ({ children }) => {
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    const fetchAll = async () => {
      await fetchData();
      await fetchFollowing();
      await fetchSavedTracks();
    };
    fetchAll();
  }, []);

  async function fetchData() {
    const {
      data: { country, display_name: name, email, product: plan, images },
    } = await getUserData();
    setProfile((prevState) => {
      return {
        ...prevState,
        country,
        name,
        email,
        plan,
        images,
      };
    });
  }

  async function fetchFollowing() {
    const {
      data: {
        artists: { total: following },
      },
    } = await getFollowedDetails();
    setProfile((prevState) => {
      return { ...prevState, following };
    });
  }

  async function fetchSavedTracks() {
    try {
      const {
        data: { total: savedTracks },
      } = await money();

      setProfile((prevState) => {
        return {
          ...prevState,
          savedTracks,
        };
      });
      // console.log(savedTracks);/
    } catch (error) {
      console.error('Failed to fetch tracks:', error);
    }
  }

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export default UserProfileContext;
