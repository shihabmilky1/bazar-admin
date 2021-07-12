import React, { useContext, useEffect } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { AdminInfo } from '../../App'
import { useHistory, useLocation } from 'react-router-dom'
import swal from 'sweetalert';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [admin, setAdmin, isAdmin, setIsAdmin] = useContext(AdminInfo)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    useEffect(() => {
        admin.email && fetch(`http://localhost:3001/isAdmin?email=${admin.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
                if (data.isAdmin === true) {
                    history.replace(from)
                }
            })
    }, [])
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAdmin({ email: user.email })
                console.log(user.email)
            } else {
                setAdmin({ email: '' })
            }
        });
    }, [])
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                return firebase.auth()
                    .signInWithPopup(provider)
                    .then((result) => {
                        setAdmin({ email: result.user.email })
                        history.replace(from);
                    }).catch((error) => {
                        const errorMessage = error.message;
                    });
            })

    }
    if (isAdmin.permission === true) {
        swal(isAdmin.message, "You clicked the button!", "success");
    }
    if (isAdmin.permission === false) {
        swal(isAdmin.message, "You clicked the button!", "error");
    }
    return (
        <>
            <section className="login-section">
                <div className="container login-container">
                    <div className="login-boxed ">
                        <div className="row">
                            <div className="col-md-8 m-auto ">
                                <div className="login-box shadow">
                                    <div className="info text-center pb-4">
                                        <h5>Bazar</h5>
                                        <span>Log in to admin</span>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor="">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="example@gmail.com"
                                            {...register("email", { required: true })}
                                        />
                                        {errors.email && <p>This field is required</p>}
                                        <label htmlFor="">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="*********"
                                            name="password"
                                            {...register("password", { required: true })}
                                        />
                                        {errors.password && <p>This field is required</p>}
                                        <input
                                            type="text"
                                            className="btn btn-danger w-100"
                                            type="submit"
                                            value="Login" />
                                    </form>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <hr className="w-25" />
                                        <span className="mx-1">or</span>
                                        <hr className="w-25" />
                                    </div>
                                    <div className="login-another-away text-center">
                                        <button onClick={handleGoogleSignIn} className="btn  my-2 google-login"><i className="me-2 fab fa-google"></i> Continue with Google</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Login;