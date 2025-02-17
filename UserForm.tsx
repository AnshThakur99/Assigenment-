import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

type UserData = {
  name: string;
  email: string;
  address: string;
  phone: string;
};

const UserForm = () => {
  const { register, handleSubmit, formState, watch } = useForm<UserData>();
  const formData = watch();

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (formState.isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [formState.isDirty]);

  const onSubmit = (data: UserData) => {
    const user = { ...data, id: uuidv4() };
    localStorage.setItem('userData', JSON.stringify(user));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 4 }}>
      <TextField
        label="Name"
        fullWidth
        {...register('name', { required: true })}
      />
      {/* Add other form fields similarly */}
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
};