import React from 'react';
import { Box, createStyles, makeStyles, } from '@material-ui/core';
import Layout from '../components/Layout/Layout';

const useStyle = makeStyles((theme) => createStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '25vh',
    marginRight: '50px',
    marginLeft: '50px'
  },
  front: {
    // padding: '110px',
    backgroundColor: 'linear-gradient(rgba(218, 243, 159, 0.4), rgba(223, 111, 98, 0.4))',
    maxWidth: '100%',
    fontSize: '50px',
    fontWeight: 1000,
    textAlign: 'center',

    [theme.breakpoints.down("sm")]: {
      width: '100%',
      fontSize: '55px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
      width: '500px',
      // height: '200px'
    }
  },
  Head : {

  },
  line: {
    marginTop: '10px',
    marginBottom: '25px',
    height: '2px',
    backgroundColor: 'rgb(101, 200, 245)'
},
para: {
  fontFamily: 'Courier',
  fontSize: '20px',
  fontWeight: 'bold',
  letterSpacing: '3px',
  textAlign: 'center',
  lineHeight: '25px'
},
  img: {
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      width: '100%'
    }
  },
  
}))


const indexPage = () => {
  const classes = useStyle()

  return (
   
      <Layout>
        <div style={{ width: '100%' }}>
          <div style={{ overflow: 'hidden' }}>
            <div className={classes.main}>
              <Box className={classes.front}>
                <p className={classes.Head}>Developers Blogger</p>
              </Box>
            
            <div className={classes.line}></div>
              <Box display='flex' justifyContent='center'>
                 <p className={classes.para}>Here You Can Find Different types of Blogs related to 
                   developers and specially for JavaScript developer..!!!
                 </p>
              </Box>
              </div>
          </div>
        </div>
    </Layout>
  );
};

export default indexPage;