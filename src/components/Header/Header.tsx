import React, { useContext } from 'react';
import { navigate } from "gatsby";
import { ActionContext } from '../../context/GlobalState';
import { auth } from '../../services/firebase';
import Modal from '../Modal/Modal'
import {
    AppBar,
    Button,
    IconButton,
    Box,
    Toolbar,
    makeStyles,
    createStyles,
    Typography,
    } from '@material-ui/core';

  const useStyles: any = makeStyles((theme) =>
  createStyles({
    
    header: {
      marginTop: '25px',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      width: '100%',
    },
    menu: {
      color: 'white',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      color: '#11171A',
      fontWeight: 700,
      [theme.breakpoints.down("xs")]: {
        width: '80%',
        flexDirection: 'column',
        
      }
    },
    iconText: {
      fontSize: '20px',
      fontWeight: 'bold',
      letterSpacing:'0.3px',
      [theme.breakpoints.down("sm")]: {
       
      },
    },
    
    buttonArea : {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      marginRight: '40px',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        justifyContent: 'center',
        marginRight: '0px'
      },
    },
    buttontext : {
      fontSize: '14px',
      marginRight: '10px',
      textTransform: 'initial',
      [theme.breakpoints.down('xs')]: {
       
      },
    }
  })
);
  

interface Props {
    
}

const Header = (props: Props) => {
    const {dispatch, loginModal, authenticated, user} = useContext(ActionContext);
    const classes = useStyles();

    const handleClose = () => {
      dispatch({
        type: "CLOSE_MODAL"
      })
    }

    const handleOpen = () => {
      dispatch({
        type: "OPEN_MODAL"
      })
    }

    const logout = () => {
      auth().signOut().then(function() {
        dispatch({
          type: "LOGOUT"
        })
      }).catch(function(error) {
        console.log(error)
      });
    }

    return (
      <>
        <div className={classes.root}>
        <AppBar position='absolute' className={classes.header}>
                  <Toolbar className={classes.toolbar}>
                    <IconButton style={{paddingLeft:'50px', backgroundColor:'transparent'}}
                      onClick={() => navigate('/')}
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                    >
                        <Typography variant='h5' className={classes.iconText}>
                          Developers Blogger
                        </Typography>
                    </IconButton>
                    {
                    !authenticated ?
                    <Box className={classes.buttonArea} >
                    <Button variant='outlined' className="homeBtn" onClick={()=> navigate('/blog')}>Blogs</Button>
                    <Button variant='contained' className="homeBtn" onClick={handleOpen}>SIGN IN</Button>
                    </Box>
                    :
                    <div className={classes.buttonArea}>
                      <Button variant='outlined' className="homeBtn" onClick={()=> navigate('/blog')}>Blogs</Button>
                      <Button color="inherit" className="homeBtn" variant='contained' onClick={logout} classes={{root: classes.buttontext}}>LOGOUT</Button>
                      <div className="picture__round">
                        <div className="picture__round_circle">
                          <button className="button__circle_user">
                            <img src={user.photoURL} alt={user.displayName} className="image__user" width="32" height="32" />
                          </button>
                        </div>
                      </div>
                    </div>
                    }
                  </Toolbar>
              </AppBar>
          </div>
          {loginModal && <Modal handleClose={handleClose}/>}
      </>
    )
}

export default Header;