"use client";
import { FemaleUsers, MaleUsers, RecentOrders, Recentinvoice, SalesStatistics, Salesdata, Trafficsource, Visitors } from "@/shared/data/dashboard/salesdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, ProgressBar, Row } from "react-bootstrap";

const Sales = () => {

    return (
        <Fragment>
            <Seo title={"Sales"} />
            <div className="mb-4 page-header-breadcrumb d-flex align-items-center justify-content-between flex-wrap gap-2 position-relative">
                <div className="top-left"></div>
                <div className="top-right"></div>
                <div className="bottom-left"></div>
                <div className="bottom-right"></div>
                <div>
                    <h1 className="page-title fw-medium fs-18 mb-0">Sales</h1>
                    <div className="">
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><Link href="#!" scroll={false} >Dashboards</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Sales</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="btn-list">
                    <Button variant="" className="btn btn-primary-light btn-wave">Update Now</Button>
                </div>
            </div>
            <Row>
                <Col xxl={9} xl={12} className="">
                    <Row>
                        <Col xxl={3} xl={6} lg={12} className="">
                            <Row>
                                {Salesdata.map((idx) => (
                                    <Col xxl={12} xl={12} md={6} sm={12} className="" key={Math.random()}>
                                        <Card className="custom-card">
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <Card.Body>
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="mb-3">
                                                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent svg-primary">
                                                            {idx.icon1}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h5 className="fw-semibold">{idx.data}</h5>
                                                        <span className="d-block mb-1">{idx.content}</span>
                                                        <span className={`d-block fs-12 text-${idx.color}`}><i className={`ti ${idx.icon}`}></i>{idx.percentage} This Month</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}

                            </Row>
                        </Col>
                        <Col xxl={9} xl={6} lg={12} className="">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        SALES STATISTICS
                                    </div>
                                    <Dropdown className="">
                                        <Dropdown.Toggle as="a" href="#!" className="btn btn-sm btn-primary-light btn-wave no-caret" data-bs-toggle="dropdown" aria-expanded="false">Sort By
                                            <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul" className="" role="menu">
                                            <li><Dropdown.Item className="" href="#!">2023</Dropdown.Item></li>
                                            <li><Dropdown.Item className="" href="#!">2022</Dropdown.Item></li>
                                            <li><Dropdown.Item className="" href="#!">2021</Dropdown.Item></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <Card.Body className="p-0">
                                    <div className="sales-stats d-flex pb-3 pt-2 border-bottom border-block-end-dashed">
                                        <div className="row sales-stats-row">
                                            <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="">
                                                <div className="mb-1">Sales</div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <span className="mt-1 fs-16 fw-semibold text-primary">166</span>
                                                    <span className="text-success"><i className="ti ti-arrow-narrow-up align-middle ms-1"></i>
                                                        <span className="badge bg-success-transparent text-success ms-1">+0.9%</span></span>
                                                </div>
                                                <div className="fs-12">More Sales are yet to start</div>
                                            </Col>
                                            <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="">
                                                <div className="mb-">Profit</div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <span className="mt-1 fs-16 fw-semibold text-primary">538</span>
                                                    <span className="text-success"><i className="ti ti-arrow-narrow-up align-middle ms-1"></i>
                                                        <span className="badge bg-success-transparent text-success  ms-1">+0.39%</span></span>
                                                </div>
                                                <div className="fs-12">32 Completed this year</div>
                                            </Col>
                                            <Col xxl={4} xl={4} lg={4} md={4} sm={4} className="">
                                                <div className="mb-1 ">Growth</div>
                                                <div className="d-flex align-items-center mb-1">
                                                    <span className="mt-1 fs-16 fw-semibold text-secondary">$32,124</span>
                                                    <span className="text-danger"><i className="ti ti-arrow-narrow-up align-middle ms-1"></i>
                                                        <span className="badge bg-danger-transparent text-danger  ms-1">-0.15%</span></span>
                                                </div>
                                                <div className="fs-12">Reached yearly target</div>
                                            </Col>
                                        </div>
                                    </div>
                                    <div id="sales-statistics" className="p-3">
                                        <SalesStatistics />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header">
                                    <div className="card-title">
                                        RECENT ACTIVITY
                                    </div>
                                </div>
                                <Card.Body>
                                    <ul className="list-unstyled recent-activity-list">
                                        <li>
                                            <div>
                                                <h6 className="mb-1 fs-14">John Doe<span className="fs-11 float-end">12:47PM</span></h6>
                                                <span className="d-block fs-13 fw-normal">Updated profile picture</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h6 className="mb-1 fs-14">Jane Smith<span className="fs-11 float-end">10:22AM</span></h6>
                                                <span className="d-block fs-13 mb-1 fw-normal">Posted a <span className="text-warning fw-semibold">new status</span></span>
                                                <div className="p-2 rounded-1 bg-primary-transparent fs-13">
                                                    Enjoying the weekend vibes &#127774;
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h6 className="mb-1 fs-14">Lauren Johnson<span className="fs-11 float-end">11:45AM</span></h6>
                                                <span className="d-block fs-13 fw-normal">Commented on a photo - <span className="fw-semibold text-success">"Beautiful"</span></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h6 className="mb-1 fs-14">Charlie Brown<span className="fs-11 float-end">04:15PM</span></h6>
                                                <span className="d-block fs-13 fw-normal">Shared an article</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <h6 className="mb-1 fs-14">Bob Anderson<span className="fs-11 float-end">10:54AM</span></h6>
                                                <span className="d-block fs-13 fw-normal">Liked a post from <span className="badge bg-secondary-transparent">John Doe</span></span>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header">
                                    <div className="card-title">VISITORS REPORT</div>
                                </div>
                                <Card.Body className=" pb-0">
                                    <div className="row mb-2">
                                        <Col md={12}>
                                            <div className="d-flex flex-xl-nowrap flex-wrap">
                                                <div className="avatar rounded-circle bg-primary-transparent text-primary flex-shrink-0 ">
                                                    <i className="ti ti-trending-up fs-5"></i>
                                                </div>
                                                <div className="ms-3 flex-fill">
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                        <h4 className="fw-semibold mb-2 text-primary">34%<span
                                                            className="fw-semibold fs-11 ms-2 d-inline-flex">last week :
                                                            25%</span></h4>
                                                        <Link href="#!" scroll={false} className="text-primary fs-11">Full
                                                            Statictics</Link>
                                                    </div>
                                                    <p className="mb-0 fs-12">Time Spent On Site <span className="text-primary"><i
                                                        className="ti ti-clock ms-2 me-1 fs-11"></i>12hr 30min
                                                        26s</span></p>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                    <div className="chart-wrapper">
                                        <div id="visitors">
                                            <Visitors />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header">
                                    <div className="card-title">
                                        TODO LIST
                                    </div>
                                </div>
                                <Card.Body>
                                    <ul className="list-unstyled mb-0 todo-list-list">
                                        <li>
                                            <div className="d-flex">
                                                <div
                                                    className="avatar avatar-rounded me-3 bg-primary flex-shrink-0">
                                                    <i className="ri-survey-line fs-5"></i>
                                                </div>
                                                <div className="flex-fill">
                                                    <p
                                                        className="fs-14 fw-semibold d-flex align-items-center justify-content-between mb-2">
                                                        Research Phase<Link href="#!" scroll={false}
                                                            className="btn btn-sm btn-icon btn-outline-light btn-sm"><i
                                                                className="fe fe-trash-2 align-middle"></i></Link></p>
                                                    <ul className="list-unstyled todo-sublist">
                                                        <li className="mb-2">
                                                            <div className="form-check">
                                                                <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked" />
                                                                <label className="form-check-label" htmlFor="primaryChecked">
                                                                    Gather relevant articles
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li className="mb-2">
                                                            <div className="form-check">
                                                                <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked1" defaultChecked />
                                                                <label className="form-check-label" htmlFor="primaryChecked1">
                                                                    Summarize key findings
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div
                                                    className="avatar avatar-rounded me-3 bg-secondary flex-shrink-0">
                                                    <i className="ri-lightbulb-flash-line fs-5"></i>
                                                </div>
                                                <div className="flex-fill">
                                                    <p
                                                        className="fs-14 fw-semibold d-flex align-items-center justify-content-between mb-2">
                                                        Planning <Link href="#!" scroll={false}
                                                            className="btn btn-sm btn-icon btn-outline-light btn-sm"><i
                                                                className="fe fe-trash-2 align-middle"></i></Link></p>
                                                    <ul className="list-unstyled todo-sublist">
                                                        <li className="mb-2">
                                                            <div className="form-check">
                                                                <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked3" defaultChecked />
                                                                <label className="form-check-label" htmlFor="primaryChecked3">
                                                                    List major milestones
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li className="mb-2">
                                                            <div className="form-check">
                                                                <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked4" />
                                                                <label className="form-check-label" htmlFor="primaryChecked4">
                                                                    Allocate time for each task
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li className="mb-0 responsive-item">
                                                            <div className="form-check">
                                                                <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked5" />
                                                                <label className="form-check-label" htmlFor="primaryChecked5">
                                                                    Include buffer time
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mb-0">
                                            <div className="d-flex">
                                                <div
                                                    className="avatar avatar-rounded me-3 bg-primary flex-shrink-0">
                                                    <i className="ri-settings-5-line fs-5"></i>
                                                </div>
                                                <div className="flex-fill">
                                                    <p
                                                        className="fs-14 fw-semibold d-flex align-items-center justify-content-between mb-2">
                                                        Execution <Link href="#!" scroll={false}
                                                            className="btn btn-sm btn-icon btn-outline-light btn-sm"><i
                                                                className="fe fe-trash-2 align-middle"></i></Link></p>
                                                    <ul className="list-unstyled todo-sublist">
                                                        <li className="mb-2">
                                                            <div className="form-check">
                                                                <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked6" />
                                                                <label className="form-check-label" htmlFor="primaryChecked6">
                                                                    Create an outline
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li className="mb-0">
                                                            <div className="form-check">
                                                                <input className="form-check-input form-checked-gray" type="checkbox" value="" id="primaryChecked7" defaultChecked />
                                                                <label className="form-check-label" htmlFor="primaryChecked7">
                                                                    Write content
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={12} className="">
                    <Row>
                        <Col xxl={6} xl={6} className="">
                            <Card className="custom-card bg-primary-transparent border-0 overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className=" pb-0">
                                    <span className="d-block mb-1 fs-12">Male Users</span>
                                    <h4 className="fw-semibold">13,278</h4>
                                    <div id="male-users">
                                        <MaleUsers />
                                    </div>
                                    <div className="svg-male">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="var(--primary-color)" data-name="Layer 1" viewBox="0 0 24 24" id="male-symbol"><path d="M20.42,4.12a1,1,0,0,0-.54-.54,1,1,0,0,0-.38-.08h-4a1,1,0,0,0,0,2h1.59l-2.4,2.4A7,7,0,1,0,16.1,9.31l2.4-2.4V8.5a1,1,0,0,0,2,0v-4A1,1,0,0,0,20.42,4.12ZM14,17A5,5,0,1,1,14,10h0A5,5,0,0,1,14,17Z"></path></svg>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} className="">
                            <Card className="custom-card bg-secondary-transparent border-0 overflow-hidden">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body className=" pb-0">
                                    <span className="d-block mb-1 fs-12">Female Users</span>
                                    <h4 className="fw-semibold">10,754</h4>
                                    <div id="female-users">
                                        <FemaleUsers />
                                    </div>
                                    <div className="svg-female">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(var(--secondary-rgb))" data-name="Layer 1" viewBox="0 0 24 24" id="female-symbol"><path d="M19,9a7,7,0,1,0-8,6.92V18H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V20h1a1,1,0,0,0,0-2H13V15.92A7,7,0,0,0,19,9Zm-7,5a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z"></path></svg>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header">
                                    <div className="card-title">
                                        RECENT ORDERS
                                    </div>
                                </div>
                                <Card.Body className=" px-0">
                                    <div id="recent-orders">
                                        <RecentOrders />
                                    </div>
                                </Card.Body>
                                <div className="card-footer">
                                    <div className="row gy-4">
                                        <Col xl={6}>
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div>
                                                    <span className="avatar avatar-rounded bg-primary-transparent">
                                                        <i className="ri-truck-line fs-15"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block fs-13">Delivered</span>
                                                    <span className="d-block fw-semibold fs-16">1,754</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div>
                                                    <span className="avatar avatar-rounded bg-secondary-transparent">
                                                        <i className="ri-close-fill fs-15"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block fs-13">Cancelled</span>
                                                    <span className="d-block fw-semibold fs-16">634</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={6}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header">
                                    <div className="card-title">
                                        TRAFFIC SOURCES
                                    </div>
                                </div>
                                <Card.Body>
                                    <ul className="list-unstyled traffic-sources-list mb-0">
                                        {Trafficsource.map((idx) => (
                                            <li key={Math.random()}>
                                                <div className="d-flex align-items-center justify-content-between mb-2">
                                                    <h6 className="fs-13 mb-0">{idx.data}</h6>
                                                    <span className="d-block fw-semibold">{idx.percentage}</span>
                                                </div>
                                                <ProgressBar now={idx.now} className="progress progress-xs progress-animate" role="progressbar" aria-valuenow={38} aria-valuemin={0} aria-valuemax={100} />
                                                <div className="progress-bar bg-primary"></div>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card overflow-hidden">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">RECENT INVOICES</div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-borderless table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <span>
                                                    <input className="form-check-input" type="checkbox" id="order_All" value="" aria-label="..." />
                                                </span>
                                            </th>
                                            <th scope="col">Order Id </th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Ordered Date</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Recentinvoice.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <span>
                                                        <input className="form-check-input" type="checkbox" id="order_1" value="" aria-label="..." />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-primary fw-semibold">{idx.orderid}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">{idx.customer}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.quantity}
                                                </td>
                                                <td>
                                                    <span className="fw-semibold fs-14">{idx.price}</span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-primary-transparent">{idx.status}</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">{idx.date}</span>
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon btn-sm btn-success-light btn-wave"><i className="ri-download-2-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!" scroll={false} className="btn btn-icon btn-sm btn-info-light btn-wave"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Sales;
