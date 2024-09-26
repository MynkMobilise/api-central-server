import React from "react";
import { Link } from "react-router-dom";
import "../../../src/assets/scss/Login.scss";

export default function Login() {
  console.log(process.env.REACT_APP_API_URL);
  const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
  return (
    <>
      <div className="wrapper">
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-md-7 col-lg-7 px-0">
                    <div className="right_sec position-relative">
                        <div className="img_sec">
                        <div className="text_sec position-absolute ">
                            <h1>API Central</h1>
                            <p className="mt-3 text-pera">Get full access to all Mobilise APIs with industry leading TAT and accuracy.</p>
                            <p className="mb- text-pera">Lorem ipsum dolor sit amet consectetur. Vel ultricies molestie massa molestie adipiscing cras dictumst. Tincidunt turpis dictum lacus lectus</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-5 px-0">
                    <div className="left_sec">
                        <div className="row">
                            <div className="col-md-8 mx-auto my-auto">
                                <div className="login_sec text-center">
                                    <div className="logo_path">
                                        <img src="assets/img/logo.svg"/>
                                        <h2 className="login-text mt-3">Login to Continue</h2>
                                    </div>
                                    <div className="">
                                        <form>
                                            <div className="form-group FoRm_part text-left mt-5 text-dark">
                                                <label for="exampleFormControlFile1">Email</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text px-3 bg-white">
                                                            <span className=""><img src="assets/img/mail.svg"/></span>
                                                        </span>                    
                                                    </div>
                                                    <input type="text" className="form-control py-4 form_input" placeholder="Enter your email address"/>
                                                </div>
                                            </div>
                                            <div className="form-group FoRm_part text-left text-dark mt-3">
                                                <label for="exampleFormControlFile1">Password</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text px-3 bg-white">
                                                            <span className=""><img src="assets/img/password.svg"/></span>
                                                        </span>                    
                                                    </div>
                                                    <input type="text" className="form-control py-4 form_input" placeholder="**************"/>
                                                </div>
                                            </div>
                                            <div className="form-group FoRm_part text-left form-check mt-3">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label" for="exampleCheck1">Remember Password?</label>
                                            </div>
                                            <div className="form-group FoRm_part mt-3">
                                            <Link
                                              className="btn btn-primary login_btn btn-block w-100"
                                              to={"/document-studio"}
                                            >
                                              Login
                                            </Link>
                                            <button type="button" className="btn btn-primary login_btn btn-block w-100" onClick={googleAuth}>
                                            <i class="fab fa-google-plus-g text-primary"></i> Login With Google
                                            </button>
                                            </div>
                                            <div className="forgot mt-4">
                                                <p className="mb-0 font_forgot">Don’t have an account? <span className="color_blue">Sign Up</span></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
