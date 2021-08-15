import {Box,makeStyles,Typography} from '@material-ui/core';

const useStyles = makeStyles({
    image:{
        background:`url(${'https://source.unsplash.com/user/erondu/1600x900'})center/100%`,
        width:"100%",
        height:"60vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        '& :first-child':{
            fontSize:70,
            fontWeight:900 ,
            color:"white"
        },
        '& :last-child':{
            fontSize:40,
            color:"white"
        }

    }
})

const Banner = function () {
    const classes = useStyles();
    return (
        <>
        <Box className={classes.image}>
            <Typography>Lorem</Typography>
            <Typography>Lorem ipsum dolor siT.</Typography>
        </Box>

        </>

    )

};

export default Banner;