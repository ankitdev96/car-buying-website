import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <Box  sx={{ width: '100%'}} >
                <Container maxWidth="lg"  sx={{mt:5, bgcolor: 'text.secondary',color:'white',maxwidth: '100%' }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Help
                            </Box>
                            <Box borderBottom={1}>
                                Contact
                            </Box>
                            <Box borderBottom={1}>
                                About Us
                            </Box>

                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Help
                            </Box>
                            <Box borderBottom={1}>
                                Contact
                            </Box>
                            <Box borderBottom={1}>
                                About Us
                            </Box>

                        </Grid>

                    </Grid>

                </Container>
            </Box>
        </footer>
    );
};

export default Footer;