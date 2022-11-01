import React from 'react'

import { Box, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText, 
    useMediaQuery } from '@mui/material'

import { useTheme } from '@mui/material/styles';

import Image from 'mui-image'

import Image_Product_Type1 from './../assets/products_type_1.png'
import Image_Product_Type2 from './../assets/products_type_2.png'
import Image_Product_Type3 from './../assets/products_type_3.png'
import Image_ENV3 from './../assets/emv_sarà un disastro.jpg'
import Image_Roadmap from './../assets/roadmap.png'
import Image_Red from './../assets/red_team.jpg'
import Image_Finneyhub from './../assets/finneyhub.png'
import Image_InternetComputer from './../assets/internet_computer.png'
import Image_333Builders from './../assets/333builders.png'

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Products = () => {

    const theme = useTheme();
    const isMobile = !useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} align={'center'} mt={10}>
                    <Image src={Image_Product_Type1} width={'40%'} height={'100%'} />
                </Grid>

                <Grid item xs={12}>
                    <Typography fontSize={isMobile?36:48} fontWeight={'bold'} pl={3}>
                        A wallet that represents the future of banking
                    </Typography>

                    <Typography fontSize={isMobile?18:28} fontWeight={'bold'} pl={3}>
                        Everything you need in the app. It's there. Carbon neutral payment solution, start the revolution.
                    </Typography>
                </Grid>

                <Grid item md={6} xs={6} ml={isMobile?0:3}>
                    <Button
                        style={{textTransform: 'none'}} 
                        size='large'
                        sx={{
                        '&.MuiButton-root': {
                            color: 'white'
                        },
                        bgcolor: '#25F522', minWidth: '200px', minHeight: '50px'
                    }}>User</Button>
                </Grid>
                <Grid item md={3} xs={6}>
                    <Typography fontSize={24} fontWeight={'bold'} p={1}>
                        Business
                    </Typography>
                </Grid>

                <Grid item md={6} xs={12} align={'center'}>
                    <Image src={Image_Product_Type2} width={'40%'} height={'100%'} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <List>
                        <ListItem> 
                            <ListItemIcon><ArrowRightIcon/></ListItemIcon>
                            <ListItemText
                                primary="Carbon footprint calculator"
                            />
                        </ListItem>
                        <ListItem> 
                            <ListItemIcon><ArrowRightIcon/></ListItemIcon>
                            <ListItemText
                                primary="Green investments and cryptocurrencies"
                            />
                        </ListItem>
                        <ListItem> 
                            <ListItemIcon><ArrowRightIcon/></ListItemIcon>
                            <ListItemText
                                primary="Spending"
                            />
                        </ListItem>
                        <ListItem> 
                            <ListItemIcon><ArrowRightIcon/></ListItemIcon>
                            <ListItemText
                                primary="Energy"
                            />
                        </ListItem>
                        <ListItem> 
                            <ListItemIcon><ArrowRightIcon/></ListItemIcon>
                            <ListItemText
                                primary="Insurance"
                            />
                        </ListItem>
                        <ListItem> 
                            <ListItemIcon><ArrowRightIcon/></ListItemIcon>
                            <ListItemText
                                primary="Documents and receipts"
                            />
                        </ListItem>
                    </List>

                    <Button mt={1}
                        style={{textTransform: 'none'}} 
                        size='large'
                        sx={{
                        '&.MuiButton-root': {
                            color: 'white'
                        },
                        bgcolor: '#25F522', maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'
                    }}>Sign up</Button>
                </Grid>

                <Grid item xs={12} mt={2}>
                    <Image src={Image_ENV3} width={'100%'} height={'100%'} />
                </Grid>

                <Grid item xs={12} align={'center'}>
                    <Typography fontSize={isMobile?36:48} fontWeight={'bold'} p={1}>
                        Send invoices and receipts to your customers
                    </Typography>
                    <Typography fontSize={isMobile?20:28} fontWeight={'bold'} p={1}>
                        From your wallet you can send the documents you need to be compliant
                    </Typography>
                </Grid>

                <Grid item md={6} xs={12} align={'center'}>
                    <Image src={Image_Product_Type3} width={'40%'} height={'100%'} />
                </Grid>
                <Grid item md={6} xs={12} ml={isMobile?4:0}>
                    <Typography fontSize={isMobile?24:28} fontWeight={'bold'}>
                        Receiving payments is
                    </Typography>
                    <Typography fontSize={isMobile?24:28} fontWeight={'bold'} color={'#25F522'}>
                        0.001 cents
                    </Typography>
                    <Typography fontSize={isMobile?24:28}>
                        Start accepting crypto.
                    </Typography>

                    <Button
                        style={{textTransform: 'none'}} 
                        size='large'
                        sx={{
                        '&.MuiButton-root': {
                            color: 'white'
                        },
                        bgcolor: '#25F522', maxWidth: '200px', maxHeight: '50px', minWidth: '200px', minHeight: '50px'
                    }}>Sign up</Button>
                </Grid>

                <Grid item xs={12} ml={isMobile?4:6}>
                    <Typography fontSize={isMobile?36:48} fontWeight={'bold'}>
                        Roadmap
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Image src={Image_Roadmap} width={'100%'} height={'100%'} />
                </Grid>

                <Grid item xs={12} ml={isMobile?4:6} mt={2}>
                    <Typography fontSize={isMobile?36:48} fontWeight={'bold'}>
                        Team
                    </Typography>
                </Grid>

                <Grid item xs={12} ml={isMobile?4:6}>
                    <Grid xs={4}>
                        <Image src={Image_Red} width={'80%'} height={'80%'} />
                    </Grid>
                </Grid>

                <Grid item xs={12} ml={isMobile?4:6}>
                    <Typography fontSize={isMobile?36:48} fontWeight={'bold'}>
                        Partners
                    </Typography>
                </Grid>
                <Grid container justify="space-around" ml={isMobile?4:6}>
                    <Grid item md={7}>
                        <Image src={Image_Finneyhub} width={'100%'} height={'100%'} />
                    </Grid>
                    <Grid Item md={7} my={2}>
                        <Image src={Image_InternetComputer} width={'100%'} height={'100%'} />
                    </Grid>
                    <Grid Item md={7} mb={2}>
                        <Image src={Image_333Builders} width={'100%'} height={'100%'} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Products;