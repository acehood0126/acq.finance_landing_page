import React, {ChangeEvent, useState} from 'react'

import Button from '@mui/material/Button'

import Image_EMV1 from './../assets/emv_sara_un_disastro_2.jpg'
import Image_EMV2 from './../assets/emv_sara_un_disastro_3.jpg'
import {
    Typography, Box, Grid, TextField, FormControl, FormLabel, FormGroup, FormControlLabel
    , Checkbox, Autocomplete, useMediaQuery
} from '@mui/material'
import Image from 'mui-image'

import SmartphoneIcon from '@mui/icons-material/Smartphone'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf'

import { useTheme } from '@mui/material/styles';

const Products = () => {

    const [f_run_business, set_f_run_business] = useState(0);

    const theme = useTheme();
    const isMobile = !useMediaQuery(theme.breakpoints.up('sm'));

    const roleList = ['Architect', 
        'Lawyer',
        'Surveyor',
        'Business consultant',
        'Marketing and communication agency',
        'Artist',
        'Laundries',
        'Auto mechaninc',
        'Tailors',
        'Parking and car washes',
        'Accommodation',
        'Bathing establishments and campsites',
        'Beauty salons and beauticians',
        'Gyms and sports centers',
        'Grooming for animals',
        'Gastronomies',
        'Wine shops',
        'Grocery stores',
        'Shops',
        'Electronics',
        'Household and DIY',
        'Florists',
        'Bookstores and stationers',
        'Restaurants and pizzerias',
        'Bars and patisseries',
        'Ice cream shops',
        'Take away catering',
        'Popular celebrations and festivals',
        'Hydraulic',
        'Electrician',
        'Cleaning',
        'Gardener',
        'Painter',
        'Furniture assembly',
        'Removals and clearing',
        'Blacksmith and window maker',
        'Personal trainer',
        'Massages at home',
        'Other']

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const runbusiness_handlechange = (event) => {
        set_f_run_business(!event.target.checked);
    }

    return (
        <Box>
            <Grid container spacing={2} mt={isMobile?5:0}>
                <Grid item md={4} xs={12} align="center" mt={isMobile?0:10}>
                    <Typography fontSize={isMobile?44:48} fontWeight={'bold'} p={1}>
                        A revolution is happening.
                    </Typography>
                    <Typography p={1}>
                        Stay updated with our products
                    </Typography>
                    <Button 
                        style={{textTransform: 'none'}}
                        size='large'
                        sx={{ 
                        '&.MuiButton-root': {
                            color: 'white'
                        },
                        bgcolor: '#25F522', maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }}>Subscribe</Button>
                </Grid>
                <Grid item md={8} xs={12} mt={isMobile?0:5}>
                    <Image src={Image_EMV1} width={'100%'} height={'100%'} />
                </Grid>

                <Grid item xs={6} align="center" mt={isMobile?2:6}>
                    <SmartphoneIcon sx={{ width: '80px', height: '80px' }} />
                    <Typography fontSize={20}>Easy to use</Typography>
                    <Typography fontSize={15}>Like Instagram but better</Typography>
                </Grid>
                <Grid item xs={6} align="center" mt={isMobile?2:6}>
                    <EnergySavingsLeafIcon sx={{ width: '80px', height: '80px' }} />
                    <Typography fontSize={20}>Green</Typography>
                    <Typography fontSize={15}>A sustainable payment method</Typography>
                </Grid>

                <Grid item md={6} xs={12} align="center" p={2} mt={isMobile?2:10}>
                    <Image src={Image_EMV2} />
                </Grid>
                <Grid item md={6} xs={12} align="left" mt={isMobile?0:10}>
                    <Box display={'flex'} flexDirection={'column'} height={'96%'}>
                        <Box px={isMobile?1:0}>
                            <Typography fontSize={40} fontWeight={'bold'}>Cheap.</Typography>
                            <Typography fontSize={25} mt={2}>Aren't you fed up sharing your revenues with Visa and Mastercard?</Typography>
                        </Box>
                        <Box flexGrow={1}></Box>
                        <Box>
                            <Button mt={1} 
                                style={{textTransform: 'none'}} 
                                size='large'
                                sx={{
                                '&.MuiButton-root': {
                                    color: 'white'
                                },
                                bgcolor: '#25F522', maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'
                            }}>Explore more</Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={6} align="left">
                    <Box px={isMobile?1:5}>
                        <Box>
                            <Typography fontSize={20}>Name</Typography>
                            <TextField id="b_name" label="Your name" sx={{ width: '100%' }} />
                        </Box>
                        <Box mt={2}>
                            <Typography fontSize={20}>Role</Typography>
                            <FormControlLabel
                                label="I am a Business"
                                control={
                                    <Checkbox
                                        defaultChecked={true}
                                        onChange={runbusiness_handlechange}
                                    />
                                }
                            />
                            <Autocomplete
                                disablePortalid="b_role"
                                disabled={f_run_business}
                                options={roleList}
                                sx={{ width: '100%'}}
                                renderInput={(params) => <TextField {...params} label="Your Role" /> }
                                />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} align="left">
                    <Box px={isMobile?1:5}>
                        <Typography fontSize={20}>Email</Typography>
                        <TextField id="b_mail" label="test@gmail.cog" sx={{ width: '100%' }} />
                    </Box>
                </Grid>

                <Grid item xs={12} align="left">
                    <Box px={isMobile?1:5}>
                        <Typography fontSize={20}>What is your business about, we will help you!</Typography>
                        <TextField id="b_msg" label="Your message"
                            multiline={true}
                            rows={5}
                            sx={{ width: '100%' }} />
                    </Box>
                </Grid>

                <Grid item xs={12} align="left">
                    <Box px={isMobile?0:2}>
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                            <FormLabel component="legend">Opt-in</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Marketing Emails"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="News & Updates Emails"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Production Process Emails"
                                />
                            </FormGroup>
                            <Button 
                                style={{textTransform: 'none'}} 
                                size='large'
                                sx={{ 
                                '&.MuiButton-root': {
                                    color: 'white'
                                },
                                bgcolor: '#25F522', maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px' }}>Submit</Button>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Products;