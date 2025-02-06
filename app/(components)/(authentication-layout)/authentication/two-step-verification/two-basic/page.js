"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useCallback, useEffect, useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const TwoBasic = () => {

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

    useEffect(() => {
        document.body.classList.add('authentication-background');
        return () => {
            document.body.classList.remove('authentication-background');
        };
    }, []);

    return (
        <Fragment>
            <Seo title={"Twostepverification-Basic"} />
            <div className="container-lg">
                <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={5} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <div className="card custom-card my-4">
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <Card.Body className="p-5">
                                <div className="mb-3 d-flex justify-content-center">
                                    <Link href="/dashboard/gaming">
                                        <img src="../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                        <img src="../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
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
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default TwoBasic;
