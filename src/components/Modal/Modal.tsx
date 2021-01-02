import React, {useContext} from 'react';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { auth } from '../../services/firebase';
import {ActionContext} from "../../context/GlobalState";
import {FcGoogle} from 'react-icons/fc';

const Modal = ({handleClose}) => {
    const {dispatch} = useContext(ActionContext);

    const loginWithGoogle = () => {
        const provider = new auth.GoogleAuthProvider();
        
        auth().signInWithPopup(provider).then(function(result) {
            dispatch({
                type: "LOGIN",
                payload : {
                    user : result.user
                }
            })

            dispatch({
                type: "CLOSE_MODAL"
              })
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
       
    }

    return (
        <div className="modal_Bg">
            <div className="modal_box">
                <div className="modal_box__iner">
                    <div className="modal_box_close_box" onClick={handleClose}>
                        <button className="close_box_button">
                            <CloseOutlinedIcon />
                        </button>
                    </div>
                    <div className="modal_main_part">
                        <div className="modal__inner_portion">
                            <h2 className="medium_login_text">SIGN IN FREE<hr /> AND SEE ALL BLOGS</h2>
                            <div className="SignIn_button_area">
                                <button className="login__button" onClick={loginWithGoogle}>
                                    {console.log(loginWithGoogle)}
                                    <FcGoogle className="modal_google"/>
                                    <span className="modal_google_text"> Sign in with Google</span> 
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;