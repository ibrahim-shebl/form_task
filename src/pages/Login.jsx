import React from 'react';
import './login.css';
import Lottie from "lottie-react";
import loginAnimation from "../../src/animation/Animation - 1737373684909.json";
export default function Login() {
    return (
        <>
            <section id="login">
                <div className="container">
                    <div className="login_wrapper">
                        <div className="login_col">
                            <div className="animation">
                                <Lottie
                                    className="login-animation"
                                    style={{ height: 355 }}
                                    animationData={loginAnimation}
                                />
                            </div>
                        </div>
                        <div className="login_col">
                            <h2>Login</h2>
                            <form>
                                <div className="input_wrapper">
                                    <input type="text" className="form-control" placeholder="Your Name..." autocomplete="off" />
                                </div>
                                <div className="input_wrapper">
                                    <input type="email" className="form-control" placeholder="Your Email..." autocomplete="off" />
                                </div>
                                <div className="btn_wrapper">
                                    <button type="submit" className="btn">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
