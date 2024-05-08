import { SIGN_IN, SIGN_OUT } from '@/app/lib/constants';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

export const useGoogleAuth = () => {
  const { data, status } = useSession();
  const [loginButtonText, setLoginButtonText] = useState('');

  useEffect(() => {
    status === 'authenticated'
      ? setLoginButtonText(SIGN_OUT)
      : setLoginButtonText(SIGN_IN);
  }, [status]);

  const handleGoogleAuth = useCallback(() => {
    status === 'authenticated' ? signOut() : signIn();
  }, [status]);

  return {
    data,
    status,
    loginButtonText,
    handleGoogleAuth,
  };
};
