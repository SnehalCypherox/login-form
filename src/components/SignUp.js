import { Box, Input, Paper, FormLabel, Button, TextField } from '@mui/material';
import { useState } from 'react';

const SignUp = () => {
    const [form, setForm] = useState({fnm: '', lnm: '', email: '', mobile: '', pwd: '' });

    const onUpdateData = (e) => {
        const nextState = {
            ...form,
            [e.target.name]: e.target.value, 
        };
        setForm(nextState);
    }

    const onSubmitForm = e => {
        e.preventDefault();
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
                                value={form.fnm}
                            />
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
                                value={form.lnm}
                            />
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
                                onChange={onUpdateData}
                            />
                            </div>
                        </div>
                        <div className='mobile user'>
                            <div className='item-style'>
                            <FormLabel> Mobile :</FormLabel>
                            <TextField
                                type="tel"
                                variant="standard"
                                name='mobile'
                                // value={form.tel}
                                onChange={onUpdateData}
                            />
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
                                    onChange={onUpdateData}
                                />
                            </div>

                        </div>
                        <Input type='password' placeholder="Type in here…" error defaultValue="Oh no, error found!" sx={{ display: 'none' }} />
                        <Button variant='contained' type='submit'>Sign Up</Button>
                    </form>
                </Paper>
            </Box>
        </>

    )
}

export default SignUp