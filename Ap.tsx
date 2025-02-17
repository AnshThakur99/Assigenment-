import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from './auth/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={
            <PrivateRoute>
              <TextEditor />
            </PrivateRoute>
          }/>
          <Route path="/login" element={<GoogleAuth />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}