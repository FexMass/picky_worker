/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { FC, useState, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';

const loginSchema = object({
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

type LoginInput = TypeOf<typeof loginSchema>;

const LoginPage: FC = () => {
  const defaultValues: LoginInput = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();

  const [loading] = useState(false);

  const {
    register,
    formState: { errors, isSubmitSuccessful, touchedFields },
    reset,
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    mode: 'all',
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<LoginInput> = (values, event) => {
    console.log(values);
    event?.preventDefault();
    reset();
    navigate('/home');
  };
  console.log(errors);

  return (
    <Box sx={{ maxWidth: '30rem', margin: 'auto' }}>
      <Typography variant="h4" component="h1" sx={{ mb: '2rem' }}>
        Login
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <TextField
          sx={{ mb: 2 }}
          label="Email"
          fullWidth
          required
          type="email"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
          {...register('email')}
        />
        <TextField
          sx={{ mb: 2 }}
          label="Password"
          fullWidth
          required
          type="password"
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
          {...register('password')}
        />
        <LoadingButton
          variant="contained"
          fullWidth
          type="submit"
          loading={loading}
          sx={{ py: '0.8rem', mt: '1rem' }}
        >
          Login
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default LoginPage;
