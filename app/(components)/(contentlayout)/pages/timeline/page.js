"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

const Timeline = () => {
    return (
        <Fragment>
            <Seo title={"Timeline"} />
            <div className="timeline mb-5">
                <div className="container">
                    <ul className="timeline list-unstyled">
                        <li>
                            <div className="timeline-time text-end">
                                <span className="time d-inline-block">05:23</span>
                                <span className="date">Thursday</span>
                            </div>
                            <div className="timeline-icon">
                                <Link href="#!" scroll={false}><i className="ri-attachment-2"></i></Link>
                            </div>
                            <div className="timeline-body">
                                <div className="text-muted fw-medium mb-2">
                                    19,Oct 2023
                                </div>
                                <Card className="custom-card mt-0 primary">
                                    <Card.Body>
                                        <div className="d-flex align-items-top timeline-main-content flex-wrap flex-xl-nowrap mt-0">
                                            <div className="avatar avatar-md online me-3 mt-sm-0 mt-4 flex-shrink-0">
                                                <img alt="avatar" src="../../assets/images/faces/4.jpg" />
                                            </div>
                                            <div className="flex-fill">
                                                <div className="d-flex align-items-center">
                                                    <div className="mt-sm-0 mt-2">
                                                        <p className="mb-0 fs-14 fw-semibold"> Isabella Joe</p>
                                                        <p className="mb-0 text-muted fs-14">Submitted complete project and attached some<span className="badge bg-primary fw-semibold mx-1">files </span> to get aware of issues in the further implementation.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-time text-end">
                                <span className="time d-inline-block">13:02</span>
                                <span className="date">Saturday</span>
                            </div>
                            <div className="timeline-icon">
                                <Link href="#!" scroll={false}><i className="ri-edit-2-line"></i></Link>
                            </div>
                            <div className="timeline-body">
                                <div className="text-muted fw-medium mb-2">
                                    30,Oct 2023
                                </div>
                                <Card className="custom-card mt-0 secondary">
                                    <Card.Body>
                                        <div className="d-flex align-items-top timeline-main-content flex-wrap flex-xl-nowrap mt-0">
                                            <div className="avatar avatar-md online me-3 mt-sm-0 mt-4 flex-shrink-0">
                                                <img alt="avatar" src="../../assets/images/faces/15.jpg" />
                                            </div>
                                            <div className="flex-fill">
                                                <div className="d-flex align-items-center">
                                                    <div className="mt-sm-0 mt-2">
                                                        <p className="mb-0 fs-14 fw-semibold">Henrik Roy</p>
                                                        <p className="mb-0 text-muted fs-14">New Message is posted <span className="text-success fw-medium">#415001</span>, Alloted Team to collect the information</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-time text-end">
                                <span className="time d-inline-block">15:09</span>
                                <span className="date">YESTERDAY</span>
                            </div>
                            <div className="timeline-icon">
                                <Link href="#!" scroll={false}><i className="ri-chat-1-line"></i></Link>
                            </div>
                            <div className="timeline-body">
                                <div className="text-muted fw-medium mb-2">
                                    21,Nov 2023
                                </div>
                                <Card className="custom-card mt-0 warning">
                                    <Card.Body>
                                        <div className="d-flex align-items-top timeline-main-content flex-wrap flex-xxl-nowrap mt-0">
                                            <div className="avatar avatar-md online me-3 mt-sm-0 mt-4 flex-shrink-0">
                                                <img alt="avatar" src="../../assets/images/faces/11.jpg" />
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center">
                                                    <div className="mt-sm-0 mt-2">
                                                        <p className="mb-0 fs-14 fw-semibold">Jakob Stone</p>
                                                        <p className="mb-0 text-muted fs-14">Task Number: <span className="badge bg-danger-transparent fw-medium">A102H</span> Need to be complete by the Next week , because of added some additional improvements, corrections and more is required </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-time text-end">
                                <span className="time d-inline-block">04:12</span>
                                <span className="date">YESTERDAY</span>
                            </div>
                            <div className="timeline-icon">
                                <Link href="#!" scroll={false}><i className="ri-checkbox-circle-line"></i></Link>
                            </div>
                            <div className="timeline-body">
                                <div className="text-muted fw-medium mb-2">
                                    06,Dec 2023
                                </div>
                                <Card className="custom-card mt-0 primary">
                                    <Card.Body>
                                        <div className="d-flex align-items-top timeline-main-content flex-wrap flex-xl-nowrap mt-0">
                                            <div className="avatar avatar-md online me-3 mt-sm-0 mt-4 flex-shrink-0">
                                                <img alt="avatar" src="../../assets/images/faces/5.jpg" />
                                            </div>
                                            <div className="flex-fill">
                                                <div className="d-flex align-items-center">
                                                    <div className="mt-sm-0 mt-2">
                                                        <p className="mb-0 fs-14 fw-semibold">Stella Ivy</p>
                                                        <p className="mb-0 text-muted fs-14">Verification has done ! Go through the documention that has been dropped in the mail <i className="ri-checkbox-circle-line text-success ms-1 fs-16 align-middle"></i></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 d-flex flex-wrap">
                                            <Link href="#!" scroll={false} className="border">
                                                <div className="d-flex p-2 align-items-center gap-2 flex-wrap">
                                                    <div className="avatar avatar-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 512 512"><path fill="#FFF" d="M422.3 477.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z"></path><path fill="#2B669F" d="M333.6 6H103.5C88 6 75.4 18.6 75.4 34.1v443.8c0 15.5 12.6 28.1 28.1 28.1h305c15.5 0 28.1-12.6 28.1-28.1V109.1L333.6 6zm88.7 471.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z"></path><path fill="#084272" d="M333.6 6v103.1h103z"></path><g><path fill="#084272" d="M465.9 450.8H46.1V308c0-9.8 7.9-17.7 17.7-17.7h384.3c9.8 0 17.7 7.9 17.7 17.7v142.8z"></path><path fill="#1A252D" d="M436.6 450.8v19.5l29.3-19.5zM75.4 450.8v19.5l-29.3-19.5z"></path><path fill="#2B669F" d="M64.1 308.4h383.7v124.5H64.1z"></path></g><g fill="#2B669F"><path d="M298.3 78.6h-177a6.7 6.7 0 010-13.4h177a6.7 6.7 0 010 13.4zM298.3 110.6h-177a6.7 6.7 0 010-13.4h177a6.7 6.7 0 010 13.4zM391.8 142.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 174.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 206.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 238.4H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 270.4H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4z"></path></g><g fill="#FFF"><path d="M229.3 373.3c0 6.9-1.6 12.5-4.7 16.7-3.1 4.2-7.5 6.3-13.2 6.3-2.2 0-4.2-.4-5.9-1.3-1.7-.9-3.2-2.1-4.5-3.7v21.8h-14.4v-63.8h13.6l.4 5c1.3-1.9 2.8-3.3 4.6-4.3 1.8-1 3.8-1.5 6.1-1.5 5.7 0 10.1 2.2 13.3 6.6 3.1 4.4 4.7 10.2 4.7 17.4v.8zm-14.3-.9c0-3.9-.6-7-1.7-9.4-1.1-2.4-3-3.5-5.4-3.5-1.6 0-3 .3-4.1.9-1.1.6-2 1.5-2.7 2.6v19.2c.7 1 1.6 1.7 2.7 2.2 1.1.5 2.5.7 4.1.7 2.5 0 4.3-1 5.4-3.1 1.1-2.1 1.6-5 1.6-8.7v-.9zM239.8 372.4c0-7.2 1.6-13 4.7-17.4 3.1-4.4 7.6-6.6 13.3-6.6 2.1 0 4 .5 5.8 1.5 1.7 1 3.3 2.4 4.6 4.2V329h14.4v66.4H270l-1-5.6c-1.4 2.1-3 3.7-4.9 4.8-1.9 1.1-4 1.7-6.4 1.7-5.7 0-10.1-2.1-13.2-6.3-3.1-4.2-4.7-9.7-4.7-16.6v-1zm14.4.9c0 3.7.5 6.7 1.6 8.7 1.1 2.1 2.9 3.1 5.5 3.1 1.5 0 2.8-.3 4-.8 1.1-.6 2.1-1.4 2.8-2.4v-18.6c-.7-1.2-1.7-2.2-2.8-2.8-1.1-.7-2.4-1-3.9-1-2.6 0-4.4 1.2-5.5 3.5-1.1 2.4-1.7 5.5-1.7 9.4v.9zM300 395.4v-36.1h-6.6v-10h6.6v-4.8c0-5.3 1.6-9.3 4.8-12.2 3.2-2.9 7.7-4.3 13.5-4.3 1.1 0 2.2.1 3.3.2 1.1.2 2.4.4 3.8.7l-1.1 10.6c-.8-.1-1.5-.2-2.1-.3-.6-.1-1.3-.1-2.2-.1-1.8 0-3.2.5-4.2 1.4-1 .9-1.4 2.3-1.4 4v4.8h9.1v10h-9.1v36.1H300z"></path></g></svg>
                                                    </div>
                                                    <div className="">
                                                        <p className="mb-0 text-truncate text-primary">
                                                            Documentation__File__8.pdf
                                                        </p>
                                                    </div>
                                                    <p className="ms-auto mb-0 fs-11 text-muted">
                                                        0.85MB
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-time text-end">
                                <span className="time d-inline-block">08:33</span>
                                <span className="date">TODAY</span>
                            </div>
                            <div className="timeline-icon">
                                <Link href="#!" scroll={false}><i className="ri-file-zip-line"></i></Link>
                            </div>
                            <div className="timeline-body">
                                <div className="text-muted fw-medium mb-2">
                                    12,Dec 2023
                                </div>
                                <Card className="custom-card mt-0 secondary">
                                    <Card.Body>
                                        <div className="d-flex align-items-top timeline-main-content flex-wrap flex-xl-nowrap mt-0">
                                            <div className="avatar avatar-md online me-3 mt-sm-0 mt-4 flex-shrink-0">
                                                <img alt="avatar" src="../../assets/images/faces/10.jpg" />
                                            </div>
                                            <div className="flex-fill">
                                                <div className="d-flex align-items-center">
                                                    <div className="mt-sm-0 mt-2">
                                                        <p className="mb-0 fs-14 fw-semibold">Braden Meir</p>
                                                        <p className="mb-0 text-muted fs-14">Uploaded 3 New Projects <span className="badge bg-success"> Get details</span> by Checking the online links.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-time text-end">
                                <span className="time d-inline-block">14:40</span>
                                <span className="date">TODAY</span>
                            </div>
                            <div className="timeline-icon">
                                <Link href="#!" scroll={false}><i className="ri-image-circle-line"></i></Link>
                            </div>
                            <div className="timeline-body">
                                <div className="text-muted fw-medium mb-2">
                                    12, Dec 2023
                                </div>
                                <Card className="custom-card mt-0 warning">
                                    <Card.Body>
                                        <div className="d-flex align-items-top timeline-main-content flex-wrap flex-xl-nowrap mt-0">
                                            <div className="avatar avatar-md online me-3 mt-sm-0 mt-4 flex-shrink-0">
                                                <img alt="avatar" src="../../assets/images/faces/2.jpg" />
                                            </div>
                                            <div className="flex-fill">
                                                <div className="d-flex align-items-center">
                                                    <div className="mt-sm-0 mt-2">
                                                        <p className="mb-0 fs-14 fw-semibold"> Aurora Ellie </p>
                                                        <p className="mb-0 text-muted fs-14">Details on how to change the profile credentials. Follow the provided <Link href="#!" scroll={false} className="text-secondary text-decoration-underline">Instructions</Link> here.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Timeline;
