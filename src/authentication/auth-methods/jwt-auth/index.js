import { useEffect, useState } from 'react';
import {httpClient} from "../../../util/Api";

export const useProvideAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [error, setError] = useState('');
  const [isLoadingUser, setLoadingUser] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const fetchStart = () => {
    setLoading(true);
    setError('');
  };

  const fetchSuccess = () => {
    setLoading(false);
    setError('');
  };

  const fetchError = (error) => {
    setLoading(false);
    setError(error);
  };

  const userLogin = (user, callbackFun) => {
    fetchStart();
    httpClient
      .post('users/login/', user)
      .then(({ data }) => {
        console.log(data.access);
        if (data.access) {
          fetchSuccess();
          httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.access;
          localStorage.setItem('token', data.access);
          getAuthUser();
          if (callbackFun) callbackFun();
        } else {
          fetchError(data.error);
        }
      })
      .catch(function (error) {
        fetchError(error.message);
      });
  };

  const userSignup = (user, callbackFun) => {
    fetchStart();
    httpClient
      .post('users/register/', user)
      .then(({ data }) => {
        console.log(data);
        if (data.access) {
          fetchSuccess();
          localStorage.setItem('token', data.access);
          httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.access;
          getAuthUser();
          if (callbackFun) callbackFun();
        } else {
          fetchError(data.error);
        }
      })
      .catch(function (error) {
        fetchError(error.message);
      });
  };

  const sendPasswordResetEmail = (email, callbackFun) => {
    fetchStart();

    setTimeout(() => {
      fetchSuccess();
      if (callbackFun) callbackFun();
    }, 300);
  };

  const confirmPasswordReset = (code, password, callbackFun) => {
    fetchStart();

    setTimeout(() => {
      fetchSuccess();
      if (callbackFun) callbackFun();
    }, 300);
  };

  const renderSocialMediaLogin = () => null;

  const userSignOut = (callbackFun) => {
    // fetchStart();
    localStorage.removeItem('token');
    setAuthUser(false);
    // httpClient
    //   .post('auth/logout')
    //   .then(({ data }) => {
    //     if (data.result) {
    //       fetchSuccess();
    //       httpClient.defaults.headers.common['Authorization'] = '';
    //       localStorage.removeItem('token');
    //       setAuthUser(false);
    //       if (callbackFun) callbackFun();
    //     } else {
    //       fetchError(data.error);
    //     }
    //   })
    //   .catch(function (error) {
    //     fetchError(error.message);
    //   });
  };

  const getAuthUser = () => {
    fetchStart();
    httpClient
      .get('users/profile/')
      .then(({ data }) => {
        console.log(data);
        if (data.profile) {
          console.log(data.profile);
          fetchSuccess();
          setAuthUser(data.profile);
        } else {
          fetchError(data.error);
        }
      })
      .catch(function (error) {
        httpClient.defaults.headers.common['Authorization'] = '';
        fetchError(error.message);
      });
  };

  const getPosts = () => {
    fetchStart();
    httpClient
      .get('feed/')
      .then(({ data }) => {
        console.log(data);
        if (data.profile) {
          console.log(data.profile);
          fetchSuccess();
          setAuthUser(data.profile);
        } else {
          fetchError(data.error);
        }
      })
      .catch(function (error) {
        httpClient.defaults.headers.common['Authorization'] = '';
        fetchError(error.message);
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }

    httpClient
      .get('users/profile/')
      .then(({ data }) => {
        if (data.profile) {
          setAuthUser(data.profile);
        }
        setLoadingUser(false);
      })
      .catch(function () {
        localStorage.removeItem('token');
        httpClient.defaults.headers.common['Authorization'] = '';
        setLoadingUser(false);
      });
  }, []);

  // Return the user object and auth methods
  return {
    isLoadingUser,
    isLoading,
    authUser,
    error,
    setError,
    setAuthUser,
    getAuthUser,
    userLogin,
    userSignup,
    userSignOut,
    renderSocialMediaLogin,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
};
