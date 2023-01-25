import { Box, Input, Paper, FormLabel, Button, TextField } from '@mui/material';
import { useState } from 'react';

const SignIn = () => {
    const [user] = useState();



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
                    <h1 className='title'>Sign In Form</h1>
                    <form>
                        <div className='user'>
                            <div className='item-style'>
                            <FormLabel> Username :</FormLabel>
                            <TextField
                                type="text"
                                autoComplete="current-password"
                                variant="standard"
                                value={user}
                            />
                            </div>
                            {console.log(user)}
                        </div>
                        <div className='pwd'>
                            <div className='item-style'>
                            <FormLabel> Password :</FormLabel>
                            <TextField
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            </div>
                        </div>
                        <Input type='password' placeholder="Type in here…" error defaultValue="Oh no, error found!" sx={{ display: 'none' }} />
                        <Button variant='contained' type='submit'>Sign In</Button>
                    </form>
                </Paper>
            </Box>
        </>


    )
}

export default SignIn