import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from './AuthContext';

const GoogleAuth = () => {
  const { login } = useAuth();

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        login(credentialResponse.credential);
      }}
      onError={() => console.log('Login Failed')}
    />
  );
};