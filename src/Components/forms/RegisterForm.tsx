/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  TextField,
  Typography
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  literal, object, string, TypeOf
} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import Checkbox from '@mui/material/Checkbox';

const registerSchema = object({
  name: string()
    .min(1, 'Name is required')
    .max(32, 'Name must be less than 100 characters'),
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: string().min(1, 'Please confirm your password'),
  terms: literal(true, {
    invalid_type_error: 'Accept Terms is required',
  }),
}).refine(data => { return data.password === data.passwordConfirm; }, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});

type RegisterInput = TypeOf<typeof registerSchema>;

// eslint-disable-next-line complexity
const RegisterPage = () => {
  const [loading] = useState(false);

  const {
    register,
    formState: { errors, isSubmitSuccessful, touchedFields },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = values => {
    console.log(values);
    reset();
  };
  console.log(errors);

  return (
    <Box sx={{ maxWidth: '30rem', margin: 'auto' }}>
      <Typography variant="h4" component="h1" sx={{ mb: '2rem' }}>
        Register
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <TextField
          sx={{ mb: 2 }}
          label="Name"
          fullWidth
          required
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ''}
          {...register('name')}
        />
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
        <TextField
          sx={{ mb: 2 }}
          label="Confirm Password"
          fullWidth
          required
          type="password"
          error={!!touchedFields.passwordConfirm && !!errors.passwordConfirm}
          helperText={
            errors.passwordConfirm ? errors.passwordConfirm.message : ''
          }
          {...register('passwordConfirm')}
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox required />}
            {...register('terms')}
            label={(
              <Typography color={errors.terms ? 'error' : 'inherit'}>
                Accept Terms and Conditions
              </Typography>
            )}
          />
          <FormHelperText error={!!errors.terms}>
            {errors.terms ? errors.terms.message : ''}
          </FormHelperText>
        </FormGroup>

        <LoadingButton
          variant="contained"
          fullWidth
          type="submit"
          loading={loading}
          sx={{ py: '0.8rem', mt: '1rem' }}
        >
          Register
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default RegisterPage;
