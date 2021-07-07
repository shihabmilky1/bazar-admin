import React from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleGoogleSignIn = () => {

    }
    return (
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
    );
};

export default Login;