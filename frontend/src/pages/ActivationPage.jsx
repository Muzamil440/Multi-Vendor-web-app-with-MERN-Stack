import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../server';

const ActivationPage = () => {
  const { activationToken } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activationToken) {
      const activateAccount = async () => {
        await axios
          .post(`${server}/user/activation`, { activationToken })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            setError(true);
          });
      };

      activateAccount();
    }
  }, [activationToken]);
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default ActivationPage;
