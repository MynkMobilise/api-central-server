import React from "react";
import { Link } from "react-router-dom";
import "../../../src/assets/scss/Login.scss";

export default function Login() {
  return (
    <>
      {/* <!-- Page Wrapper --> */}
      {/* <div
        classNameName="p-3 p-lg-0"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div className="row h-100">
          <div className="col-md-6 order-lg-0 pr-0 d-lg-block d-none">
            <div className="card bg-info pl-5 ml-auto h-100 rounded-0 loginCardRadius">
              <div classNameName="card pl-5 border-0 bg-transparent my-auto">
                <img
                  width={200}
                  classNameName="img-fluid mb-4"
                  src="https://s3-alpha-sig.figma.com/img/fdd3/6b15/921a4e3e23779db13fa4852fbc33d833?Expires=1701043200&Signature=NLbnp-k3ljSF4rxwevh3S4geGhpMaQRLkVNG1wJjTyFN2JLQ03QFxqe4VrtgKsryJ86juXySyCenC~pd5N9Pxmb93BkYQ0MSrvtZhavJeJ7WRVJcqDvm4qXJfUZmlR9D8ock3ycOIdfWT-frkKlyn0cGy5bqNZ0WXNxlAyvvLCH37AvIv5n7cMLLKC5qDQvmVqMZUQ7newndqGAkTsgwHrQFfnVpwEwiKtMWpNYjgOVy3q3DRvsHchaMK6ipORskO9JqKl4gVs0-ROBdtHT-QAgOUGILoCbKDvTazSgccIoTf8Zy6zsvwbxDIeXHWU5fWSUI-tmqvpsjmYdHajYl4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
                <h2 classNameName="font-weight-bold text-white">
                  140+ APIs with 100% uptime
                </h2>
                <div classNameName="row">
                  <div classNameName="col-md-1 my-auto">
                    <h3>
                      <i classNameName="fa fa-rocket text-danger"></i>
                    </h3>
                  </div>
                  <div classNameName="col-md-9">
                    <h6 classNameName="text-light">
                      Get full access to all IDfy APIs with industry leading TAT
                      and accuracy.
                    </h6>
                    <h6 classNameName="text-light">
                      No credit card required for trial.
                    </h6>
                  </div>
                </div>
                <img
                  width={400}
                  classNameName="img-fluid"
                  src="https://s3-alpha-sig.figma.com/img/8f16/6ed7/e3ffa7f23d7845a01a824418fab5956a?Expires=1701043200&Signature=LUz2CsbAvyT~CyoQ65QFsTDl0LXVhN6TpyQtCtb5rUzi2hskGWzPdT-YOJNZgcnvbt7XDFeeskZe6cwld0jBFS7H~VPK7z63y7LRsaMdJz05waBNHwWkmO1LPs9Y7S4Q9bBNYt04ycImyG~WLwed8cI~MsjBsWEwtIePyq8f2K9hQATUVw7~7L5BF2brDNNBswCqT2aRhLB~HetGclKc2me0jrVtbHMlgqBkbh60jujn1N0AfB1IqtElhZQISeIFwUrbjRgbvFdUyTLID5nK46IbDhM21juDB1HOzayKREolH9aNRg8RUqGJCG5r3i6GxKOLcykYFw7SY6pou10~uw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 order-lg-1 my-auto px-lg-5">
            <div classNameName=" p-3 ">
              <div classNameName="mb-4">
                <img src="" alt="" />
                <h2 classNameName="text-gray font-weight-thick mb-0">
                  Login to Continue
                </h2>
              </div>
              <div classNameName="form-group">
                <label classNameName="form-label text-gray ">Email</label>
                <input
                  classNameName="form-control"
                  placeholder="Eg. myemail@mobilise.co.in"
                />
              </div>
              <div classNameName="form-group">
                <label classNameName="form-label text-gray ">Password</label>
                <input classNameName="form-control" placeholder="Enter Password" />
              </div>

              <div classNameName="form-check">
                <input
                  classNameName="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label classNameName="form-check-label" for="flexCheckDefault">
                  Remember Password ?
                </label>
              </div>
              <Link
                classNameName="btn btn-primary"
                to={"/dashboard"}
              >
                Proceed
              </Link>

              <div classNameName="d-flex align-items-center">
                <p classNameName="mb-0">Don’t have an account?</p>
                <a href="">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- End of Page Wrapper --> */}


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
                                              Proceed
                                            </Link>
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
