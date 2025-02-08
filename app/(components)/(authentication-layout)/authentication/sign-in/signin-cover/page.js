"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const SigninCover = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);

    const SigninCover = () => {
        document.querySelector("body")?.classList.add("bg-white");
        document.querySelector("body")?.classList.remove("authentication-background");
    };
    useEffect(() => {
        SigninCover();
    });

    return (
        <Fragment>
            <Seo title={"Signin-Cover"} />
            <Row className="authentication mx-0">
                <Col xxl={6} xl={6} lg={7} className="d-xl-block d-none px-0">
                    <div className="authentication-cover bg-primary">
                        <div className="authentication-cover-image">
                            <div className="text-start">
                                <h1 className="text-fixed-white mb-1 fw-medium">Welcome!</h1>
                                <p className="text-fixed-white mb-1">Let's get Started with our product just sign up with simple process and make your requirements .There are many variations of passages of Lorem Ipsum available.</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={12} className="">
                    <Row className="justify-content-center align-items-center h-100">
                        <Col xxl={6} xl={9} lg={6} md={6} sm={8} className="col-12">
                            <Card className="custom-card shadow-none my-4">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className="p-5">
                                    <div className="mb-3 d-flex justify-content-center">
                                        <Link href="/dashboard/gaming">
                                            <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                                        </Link>
                                    </div>
                                    <p className="h5 mb-2 text-center">Sign In</p>
                                    <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Anthony !</p>
                                    <div className="d-flex mb-3 justify-content-between gap-2 flex-wrap">
                                        <Button variant="" className="btn btn-lg btn-light-ghost border d-flex align-items-center justify-content-center flex-fill">
                                            <span className="avatar avatar-xs flex-shrink-0">
                                                <img src="../../../assets/images/media/apps/google.png" alt="" />
                                            </span>
                                            <span className="lh-1 ms-2 fs-13 text-default">Signup with Google</span>
                                        </Button>
                                        <Button variant="" className="btn btn-lg btn-light-ghost border d-flex align-items-center justify-content-center flex-fill">
                                            <span className="avatar avatar-xs flex-shrink-0 invert-1">
                                                <img src="../../../assets/images/media/apps/apple.png" alt="" />
                                            </span>
                                            <span className="lh-1 ms-2 fs-13 text-default">Signup with Apple</span>
                                        </Button>
                                    </div>
                                    <div className="text-center my-3 authentication-barrier">
                                        <span>OR</span>
                                    </div>
                                    <div className="row gy-3">
                                        <Col xl={12}>
                                            <Form.Label htmlFor="signin-username" className="text-default">User Name</Form.Label>
                                            <Form.Control type="text" className="" id="signin-username" placeholder="user name" />
                                        </Col>
                                        <Col xl={12} className="mb-2">
                                            <Form.Label htmlFor="signin-password" className="text-default d-block">Password<Link href="/authentication/reset-password/reset-basic" className="float-end text-danger">Forget password ?</Link></Form.Label>
                                            <div className="position-relative">
                                                <Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control create-password-input" id="create-password" placeholder="Password" />
                                                <Link href="#!" scroll={false} aria-label="button" type="button" className="show-password-button text-muted"
                                                    onClick={() => setpasswordshow1(!passwordshow1)}>
                                                    <i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`} aria-hidden="true"></i></Link>
                                            </div>
                                            <div className="mt-2">
                                                <div className="form-check">
                                                    <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                    <Form.Label className="text-muted fw-normal" htmlFor="defaultCheck1">
                                                        Remember password ?
                                                    </Form.Label>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <Link href="/dashboard/gaming" className="btn btn-primary">Sign In</Link>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-muted mt-3 mb-0">Dont have an account? <Link href="/authentication/sign-up/signup-cover" className="text-primary">Sign Up</Link></p>
                                    </div>
                                    <div className="btn-list text-center mt-3">
                                        <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                            <i className="ri-facebook-line fw-bold"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                            <i className="ri-twitter-x-line fw-bold"></i>
                                        </Button>
                                        <Button variant="" className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                            <i className="ri-instagram-line fw-bold"></i>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default SigninCover;
