"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useCallback, useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const TwoCover = () => {

    const inputRefs = {
        one: useRef(null),
        two: useRef(null),
        three: useRef(null),
        four: useRef(null),
    };

    const handleInputChange = useCallback((currentId, nextId) => {
        const currentInput = inputRefs[currentId].current;

        if (currentInput && currentInput.value.length === 1) {
            const nextInput = inputRefs[nextId] ? inputRefs[nextId].current : null;

            if (nextInput) {
                nextInput.focus();
            }
        }
    }, [inputRefs]);

    return (
        <Fragment>
            <Seo title={"Twostepverification-Cover"} />
            <div className="row authentication mx-0">
                <Col xxl={6} xl={7} lg={7} className="d-xl-block d-none px-0">
                    <div className="authentication-cover bg-primary">
                        <div className="authentication-cover-image">
                            <div className="text-start">
                                <h1 className="text-fixed-white mb-1 fw-medium">Welcome!</h1>
                                <p className="text-fixed-white mb-1">Let's get Started with our product just sign up with simple process and make your requirements .There are many variations of passages of Lorem Ipsum available.</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xxl={6} xl={5} lg={12} className="">
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
                                            <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="authentication-brand desktop-logo" />
                                            <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="authentication-brand desktop-dark" />
                                        </Link>
                                    </div>
                                    <p className="h5 mb-2 text-center">Verification Code</p>
                                    <p className="mb-4 text-muted op-7 fw-normal text-center fs-14">Enter the 4 digit code sent to the moble number ******850.</p>
                                    <div className="row gy-3">
                                        <div className="col-xl-12 mb-2">
                                            <Row>
                                                <div className="col-3">
                                                    <Form.Control type="text" className="form-control-lg text-center" id="one"
                                                        maxLength={1}
                                                        onChange={() => handleInputChange("one", "two")}
                                                        ref={inputRefs.one} />
                                                </div>
                                                <div className="col-3">
                                                    <Form.Control type="text" className="form-control-lg text-center" id="two"
                                                        maxLength={1}
                                                        onChange={() => handleInputChange("two", "three")}
                                                        ref={inputRefs.two} />
                                                </div>
                                                <div className="col-3">
                                                    <Form.Control type="text" className="form-control-lg text-center" id="three"
                                                        maxLength={1}
                                                        onChange={() => handleInputChange("three", "four")}
                                                        ref={inputRefs.three} />
                                                </div>
                                                <div className="col-3">
                                                    <Form.Control type="text" className="form-control-lg text-center" id="four"
                                                        maxLength={1}
                                                        onChange={() => handleInputChange("four", "nextInputId")}
                                                        ref={inputRefs.four} />
                                                </div>
                                            </Row>
                                            <div className="form-check mt-2">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label fs-14" htmlFor="defaultCheck1">
                                                    Didn't recieve a code ?<Link href="/pages/email/mail-app" className="text-primary ms-2 d-inline-block">Resend</Link>
                                                </label>
                                            </div>
                                        </div>
                                        <Col xl={12} className="d-grid mt-2">
                                            <Link href="/dashboard/gaming" className="btn btn-primary">Verify</Link>
                                        </Col>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </div>
        </Fragment>
    );
};

export default TwoCover;
