import { Box, Paper, FormLabel, Button, TextField } from '@mui/material';
import clsx from 'clsx';
import { useFormValidate } from '../hooks/useFormValidate';
import { useState } from 'react';

const SignUp = () => {
    const [form, setForm] = useState({ fnm: '', lnm: '', email: '', mobile: '', pwd: '' });

    const { validateForm, onBlurField, errors, } = useFormValidate(form);

    const onUpdateData = (e) => {
        const field = e.target.name;
        const nextState = {
            ...form,
            [field]: e.target.value,
        };
        setForm(nextState);
        if (errors[field].dirty) {
            validateForm({
                form: nextState,
                errors,
                field,
            });
        }

    }

    const onSubmitForm = e => {
        e.preventDefault();
        const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
        if (!isValid) return;
        alert(JSON.stringify(form, null, 2));
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: 500,
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                    },
                }}
            >
                <Paper elevation={0} variant='outlined' sx={{ paddingTop: 2 }}>
                    <h1 className='title'>Sign Up</h1>
                    <form onSubmit={onSubmitForm}>
                        <div className='fnm user'>
                            <div className='item-style'>
                                <FormLabel> First Name :</FormLabel>
                                <TextField
                                    type="text"
                                    variant="standard"
                                    name='fnm'
                                    onChange={onUpdateData}
                                    onBlur={onBlurField}
                                    value={form.fnm}
                                />
                                {errors.fnm.dirty && errors.fnm.error ? (
                                    <p className='errorMessage'>{errors.fnm.message}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className='lnm user'>
                            <div className='item-style'>
                                <FormLabel> Last Name :</FormLabel>
                                <TextField
                                    type="text"
                                    variant="standard"
                                    name='lnm'
                                    onChange={onUpdateData}
                                    onBlur={onBlurField}
                                    value={form.lnm}
                                />
                                {errors.lnm.dirty && errors.lnm.error ? (
                                    <p className='errorMessage'>{errors.lnm.message}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className='email user'>
                            <div className='item-style'>
                                <FormLabel> Email :</FormLabel>
                                <TextField
                                    type="email"
                                    autoComplete="current-mail"
                                    variant="standard"
                                    name='email'
                                    value={form.email}
                                    onBlur={onBlurField}
                                    onChange={onUpdateData}
                                />
                                {errors.email.dirty && errors.email.error ? (
                                    <p className='errorMessage'>{errors.email.message}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className='mobile user'>
                            <div className='item-style'>
                                <FormLabel> Mobile :</FormLabel>
                                <TextField
                                    type="tel"
                                    variant="standard"
                                    name='mobile'
                                    value={form.mobile}
                                    onBlur={onBlurField}
                                    onChange={onUpdateData}
                                />
                                {errors.mobile.dirty && errors.mobile.error ? (
                                    <p className='errorMessage'>{errors.mobile.message}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className='pwd user'>
                            <div className='item-style'>
                                <FormLabel> Password :</FormLabel>
                                <TextField
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                    name='pwd'
                                    value={form.pwd}
                                    onBlur={onBlurField}
                                    onChange={onUpdateData}
                                />
                                {errors.pwd.dirty && errors.pwd.error ? (
                                    <p className='errorMessage'>{errors.pwd.message}</p>
                                ) : null}
                            </div>

                        </div>
                        <Button variant='contained' type='submit' onClick={onSubmitForm}>Sign Up</Button>
                    </form>
                </Paper>
            </Box>
        </>

    )
}

export default SignUp