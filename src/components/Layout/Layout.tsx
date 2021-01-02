import { Box } from '@material-ui/core';
import React, { FC, ReactNode, useContext, useEffect } from 'react';
import Header from '../Header/Header';
import { auth } from '../../services/firebase';
import {ActionContext} from '../../context/GlobalState';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const {dispatch } = useContext(ActionContext);

    useEffect(() => {
        let unsubscribe = false;
        const checkUser = async () => {
            await auth().onAuthStateChanged((user) => {
                if (!unsubscribe && user) {
                    dispatch({
                        type: "LOGIN",
                        payload : {
                            user : user
                        }
                    })
                }
            })
        }
        
        checkUser();
        
        return () => {
            unsubscribe = true;
        }
    }, [])
  return (
    <div>
      <Header />
      <div>
        <Box>
          <main> {children} </main>
        </Box>
      </div>
      
    </div>
  );
};

export default Layout;