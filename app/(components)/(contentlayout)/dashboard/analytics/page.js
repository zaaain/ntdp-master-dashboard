"use client";
import { Analyticswebsite } from "@/shared/data/dashboard/chartdata";
import { RealtimeChart, Revenue, SessionSource, Userreport, Viewbysource, Visitors, Visitorsource } from "@/shared/data/dashboard/analyticdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Bitcoin, Conversationratio, Cryptoprice, Data1, DataPrice, Ethereum, IotaPrice, NeoPrice, PopTrades, RipplePrice, Totalcustomaers, Totaldeals, Totalrevenue1, Trading } from '@/shared/data/dashboard/cryptodata';
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from "react-chartjs-2";
import * as chartjsdata from "../../../../../shared/data/charts/chartjsdata/chartjsdata";
import { basePath } from '@/next.config';

const Analytics = () => {

    const chartjsdata = {
        // Bar Chart Data (Left Side)
        Data2: {
            labels: ["Pre Seed", "Seed", "Pre-Series A", "Series A", "Pre-Series B", "Series B", "Series C", "IPO/Unicorn"],
            datasets: [
                {
                    label: "Count",
                    data: [126, 53, 5, 21, 2, 7, 3, 5], // Values from the image
                    backgroundColor: "#00d4ff",
                    borderWidth: 1,
                    backgroundColor: "#00d4ff",
                },
            ],
        },
        Option2: {
            responsive: true,
            plugins: {
                legend: { display: false },
            },
            scales: {
                y: { ticks: { color: "#ffffff" }, beginAtZero: true },
                x: { ticks: { color: "#ffffff" } }
            },
        },

        // Line Chart Data (Right Side)
        Data1: {
            labels: ["Pre Seed", "Seed", "Pre-Series A", "Series A", "Pre-Series B", "Series B", "Series C", "IPO/Unicorn"],
            datasets: [
                {
                    label: "Volume (Mn SAR)",
                    data: [150, 320, 200, 450, 120, 800, 1000, 1400], // Approx values matching the trend
                    borderColor: "#a855f7", // Original color from your code
                    backgroundColor: "rgba(168, 85, 247, 0.5)", // Keeping transparency as in image
                    fill: true,
                    tension: 0.4, // Smooth curve
                },
            ],
        },
        Option1: {
            responsive: true,
            plugins: {
                legend: { display: true, position: "top" },
            },
            scales: {
                y: { ticks: { color: "#ffffff" }, beginAtZero: true },
                x: { ticks: { color: "#ffffff" } } // Change x-axis label color to white
            },
        },
    };



    return (
        <Fragment>
            <Seo title={"Analytics"} />
            <h1 className="fw-bold border py-2" style={{ display: "flex", textSize: "48px", justifyContent: "center", marginBottom: "30px" }}>NTDP Main DashBoard</h1>
            <Row>

                <Col xxl={4} xl={12} className="" style={{ marginTop: "40px" }}>

                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex flex-column">
                                        {/* Text Section */}
                                        <div style={{}}>
                                            <span className="d-block text-muted mb-3 text-center">Products Launched</span>
                                            <h3 className="fw-semibold text-center">18</h3>
                                        </div>

                                        {/* Graph Right Aligned */}
                                        {/* <div id="popTrades" className="d-flex justify-content-end mt-auto">
                                            <PopTrades value={18}/>
                                        </div> */}
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <div className="card-header">
                                    <div className="card-title">
                                        Top 5 Industries
                                    </div>
                                </div>
                                <Card.Body className="mt-2 p-0">
                                    <div id="website-traffic">
                                        <Analyticswebsite />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={8} xl={12} className="">
                    <Row>
                        <h3 className="fw-semibold" style={{ display: "flex", justifyContent: "center" }}>Goal</h3>
                        <Col xxl={4} xl={4} lg={4} md={4} className="col-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div>
                                            <span className="d-block text-muted mb-3">GDP Contribution</span>
                                            <h3 className="fw-semibold" style={{ textAlign: "center" }}>10 B SAR</h3>
                                            {/* <span className="d-block">Increased By <span className="text-success">0.2%</span> this month</span> */}
                                        </div>
                                        {/* <div>
                                            <span className="avatar bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><circle cx="12" cy="8" opacity=".3" r="2.1" /><path d="M12 14.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1z" opacity=".3" /><path d="M12 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6.1 5.1H5.9V17c0-.64 3.13-2.1 6.1-2.1s6.1 1.46 6.1 2.1v1.1zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6.1c1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1S9.9 9.16 9.9 8c0-1.16.94-2.1 2.1-2.1z" /></svg>
                                            </span>
                                        </div> */}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} className="col-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex  align-items-center justify-content-center">
                                        <div>
                                            <span className="d-block text-muted mb-3">Job creation</span>
                                            <h3 className="fw-semibold" style={{ textAlign: "center" }}>10K</h3>
                                            {/* <span className="d-block">Increased By <span className="text-success">4.15%</span> this month</span> */}
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} className="col-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div>
                                            <span className="d-block text-muted mb-3">Tech Unicorns</span>
                                            <h3 className="fw-semibold" style={{ textAlign: "center" }}>10</h3>
                                            {/* <span className="d-block">Decreased By <span className="text-danger">0.45%</span> this month</span> */}
                                        </div>
                                        {/* <div>
                                            <span className="avatar bg-primary-transparent svg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z" opacity=".3" /><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z" /></svg>
                                            </span>
                                        </div> */}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <h3 className="fw-semibold" style={{ display: "flex", justifyContent: "center" }}>Achieved</h3>
                        <Col xxl={4} xl={4} lg={4} md={4} className="col-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex flex-column align-items-center justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">GDP Contribution</span>
                                            <h3 className="fw-semibold" style={{ textAlign: "center" }}>11.2 B SAR</h3>
                                        </div>
                                        <div id="popTrades" className="text-center">
                                            <PopTrades value={110} />
                                        </div>
                                        <p style={{ color: "white" }}>of goal achieved</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} className="col-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex flex-column align-items-center justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Job creation</span>
                                            <h3 className="fw-semibold" style={{ textAlign: "center" }}>17K</h3>
                                            {/* <span className="d-block">Increased By <span className="text-success">4.15%</span> this month</span> */}
                                        </div>
                                        <div id="popTrades" className="text-center">
                                            <PopTrades value={170} />
                                        </div>
                                        <p style={{ color: "white" }}>of goal achieved</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={4} className="col-12">
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex flex-column align-items-center justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Tech Unicorns</span>
                                            <h3 className="fw-semibold text-center">7</h3>
                                            {/* <span className="d-block">Decreased By <span className="text-danger">0.45%</span> this month</span> */}
                                        </div>
                                        <div id="popTrades" className="text-center">
                                            <PopTrades value={70} />
                                        </div>
                                        <p style={{ color: "white" }}>of goal achieved</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <Row>
                <Col
                    xxl={2}
                    xl={2}
                    lg={2}
                    md={2}
                    sm={12}
                    className="d-flex flex-column align-items-center"
                >
                    <h6 className="fw-semibold border p-5 text-center py-2 mb-2">{`Growth Support`}</h6>
                    <Card className="custom-card border rounded-2 shadow-sm p-3 mt-4">
                        <img
                            src={`/assets/images/brand-logos/growthSupport1.png`}
                        />
                        <img
                            src={`/assets/images/brand-logos/growthSupport2.png`}
                            className="mt-n10"

                        />
                    </Card>
                </Col>
                <Col
                    xxl={2}
                    xl={2}
                    lg={2}
                    md={2}
                    sm={12}
                    className="d-flex flex-column align-items-center"
                >
                    <h6 className="fw-semibold border p-5 text-center py-2 mb-2">{`Access to market`}</h6>
                    <Card className="custom-card border rounded-2 shadow-sm p-3 mt-4">
                        <img
                            src={`/assets/images/brand-logos/access1.png`}
                        />
                        <img
                            src={`/assets/images/brand-logos/access1.png`}
                            className="mt-n10"

                        />
                    </Card>
                </Col>
                <Col
                    xxl={2}
                    xl={2}
                    lg={2}
                    md={2}
                    sm={12}
                    className="d-flex flex-column align-items-center"
                >
                    <h6 className="fw-semibold border p-5 text-center py-2 mb-2">{`Talent Support`}</h6>
                    <Card className="custom-card border rounded-2 shadow-sm p-3 mt-4">
                        <img
                            src={`/assets/images/brand-logos/talent.png`}
                        />
                        <img
                            src={`/assets/images/brand-logos/talent.png`}
                            className="mt-n10"

                        />
                    </Card>
                </Col>
                <Col
                    xxl={3}
                    xl={3}
                    lg={3}
                    md={3}
                    sm={12}
                    className="d-flex flex-column align-items-center"
                >
                    <h6 className="fw-semibold border p-5 text-center py-2 mb-2">{`Invotion Support`}</h6>
                    <Card style={{height:"405px", display:"flex", justifyContent:"center", alignItems:"center"}} className="custom-card border rounded-2 shadow-sm p-3 mt-4">
                 
                            <h4 className="fw-semibold text-center py-2 mb-2">{`• AIM`}</h4>
                            <h4 className="fw-semibold text-center py-2 mb-2">{`• NEXTEra`}</h4>
                    </Card>
                </Col>
                <Col
                    xxl={3}
                    xl={3}
                    lg={3}
                    md={3}
                    sm={12}
                    className="d-flex flex-column align-items-center"
                >
                    <h6 className="fw-semibold border p-5 text-center py-2 mb-2">{`Financing Support`}</h6>
                    <Card style={{height:"405px", display:"flex", justifyContent:"center", alignItems:"center"}} className="custom-card border rounded-2 shadow-sm p-3 mt-4">
                 
                            <h4 className="fw-semibold text-center py-2 mb-2">{`• Loan Guarantee`}</h4>
                            <h4 className="fw-semibold text-center py-2 mb-2">{`• LendTech`}</h4>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginBottom: "10px" }}>
                {/* Growth Support Section */}
                <Col xxl={6} xl={12}>
                    <Col xl={12}>
                        <div className="container py-2 border">
                            {/* Heading */}
                            <h3 className="text-center bg-transparent border fw-semibold py-2 mb-4">
                                Growth Support
                            </h3>

                            <div className="d-flex justify-content-center w-100 gap-4">
                                {/* Bridge Section */}
                                <Card className="custom-card p-4 border rounded shadow-lg text-white bg-transparent flex-fill h-100">
                                    <div className="border p-2 text-center fw-bold fs-5 rounded">
                                        Bridge
                                    </div>

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-4">SAR 56 Mn</p>
                                        <p className="small">Total commitment for companies</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center my-3">
                                        <p className="fw-bold fs-3">13</p>
                                        <p className="small">Companies</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-4">SAR XX Mn</p>
                                        <p className="small">Global Sales</p>
                                    </div>
                                </Card>

                                {/* Empowering Accelerators Section */}
                                <Card className="custom-card p-4 border rounded shadow-lg text-white bg-transparent flex-fill h-100">
                                    <div className="border p-2 text-center fw-bold fs-5 rounded">
                                        Empowering Accelerators
                                    </div>

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-4">SAR 1.04 Bn</p>
                                        <p className="small">Entrepreneurial Investment</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center my-3">
                                        <p className="fw-bold fs-3">103</p>
                                        <p className="small">Startups Supported</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-4">281</p>
                                        <p className="small">Jobs Created</p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Col>

                {/* Access to Market Section */}
                <Col xxl={3} xl={12}>
                    <div className="container py-2 border">
                        <h3 className="text-center border fw-semibold py-2 mb-4">
                            Access to Market
                        </h3>

                        <div className="d-flex justify-content-center w-100">
                            <Card className="custom-card p-4 border rounded shadow-lg text-white bg-transparent position-relative flex-fill h-100">
                                <div className="border p-2 text-center fw-bold fs-5 rounded">
                                    Relocate
                                </div>

                                <div className="text-center mt-3">
                                    <p className="fw-bold fs-4">SAR 400 Mn</p>
                                    <p className="small">Cumulative investment after relocation</p>
                                </div>

                                <hr className="border-white opacity-50" />

                                <div className="text-center my-3">
                                    <p className="fw-bold fs-3">32</p>
                                    <p className="small">Founders and Co-Founders relocated</p>
                                </div>

                                <hr className="border-white opacity-50" />

                                <div className="text-center mt-3">
                                    <p className="fw-bold fs-4">SAR 400 Mn</p>
                                    <p className="small">Sales after relocation</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Col>

                {/* Financing Support Section */}
                <Col xxl={3} xl={12}>
                    <div className="container py-2 border">
                        <h3 className="text-center border fw-semibold py-2 mb-4">
                            Financing Support
                        </h3>

                        <div className="d-flex justify-content-center w-100">
                            <Card className="custom-card p-4 border rounded shadow-lg text-white bg-transparent position-relative flex-fill h-100">
                                <div className="border p-2 text-center fw-bold fs-5 rounded">
                                    Loan Guarantee
                                </div>

                                <div className="text-center mt-3">
                                    <p className="fw-bold fs-4">SAR 425 Mn</p>
                                    <p className="small">Cumulative Loan Guarantees Issued</p>
                                </div>

                                <hr className="border-white opacity-50" />

                                <div className="text-center my-3">
                                    <p className="fw-bold fs-3">150+</p>
                                    <p className="small">Companies Supported via Loan Guarantees</p>
                                </div>

                                <hr className="border-white opacity-50" />

                                <div className="text-center mt-3">
                                    <p className="fw-bold fs-4">SAR 300 Mn</p>
                                    <p className="small">Disbursed Loans Facilitated</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xxl={6} xl={12}>
                    <Col xl={12}>
                        <div className="container py-2 border rounded shadow-lg">
                            {/* Heading */}
                            <h3 className="text-center bg-transparent fw-semibold py-2 mb-4 rounded border">
                                Innovation Support
                            </h3>

                            <div className="d-flex justify-content-center w-100 gap-4">
                                {/* MVPLAB Section */}
                                <Card className="custom-card p-4 border rounded shadow-lg text-white bg-transparent flex-fill h-100">


                                    <div className="border p-2 text-center fw-bold fs-5 rounded">
                                        MVPLAB
                                    </div>

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-4">SAR 400 Mn</p>
                                        <p className="small">Cumulative Investment</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center my-3">
                                        <p className="fw-bold fs-3">32</p>
                                        <p className="small">Founders, Co-Founders, and C-Level relocated</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-4">SAR 400 Mn</p>
                                        <p className="small">Sales after relocation</p>
                                    </div>
                                </Card>

                                {/* NextERA Section */}
                                <Card className="custom-card p-4 border rounded shadow-lg text-white bg-transparent flex-fill h-100">


                                    <div className="border p-2 text-center fw-bold fs-5 rounded">
                                        NextERA
                                    </div>

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-4">SAR 400 Mn</p>
                                        <p className="small">Cumulative Investment</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center my-3">
                                        <p className="fw-bold fs-3">32</p>
                                        <p className="small">Founders, Co-Founders, and C-Level relocated</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-4">SAR 400 Mn</p>
                                        <p className="small">Sales after relocation</p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Col>
                <Col xxl={6} xl={12}>
                    <Col xl={12}>
                        <div className="container py-2 border rounded shadow-lg">
                            {/* Heading */}
                            <h3 className="text-center bg-transparent fw-semibold py-2 mb-4 rounded border">
                                Talent Support
                            </h3>

                            <div className="d-flex justify-content-center w-100 gap-4">
                                {/* Boost Section */}
                                <Card className="custom-card p-4 border rounded shadow-lg text-white bg-transparent flex-fill h-100">
                                    <div className="border p-2 text-center fw-bold fs-5 rounded">
                                        Boost
                                    </div>

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-4">10.33%</p>
                                        <p className="small">Employment Growth</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center my-3">
                                        <p className="fw-bold fs-3">26,134,138 SAR</p>
                                        <p className="small">Revenue</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-3">107</p>
                                        <p className="small">Number of startups</p>
                                    </div>
                                </Card>

                                {/* TechCrew Section */}
                                <Card className="custom-card p-4 border rounded shadow-lg text-white bg-transparent flex-fill h-100">
                                    <div className="border p-2 text-center fw-bold fs-5 rounded">
                                        TechCrew
                                    </div>

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-4">1,400,000 SAR</p>
                                        <p className="small">Revenue Raised</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center my-3">
                                        <p className="fw-bold fs-3">1.39%</p>
                                        <p className="small">Employment Growth</p>
                                    </div>

                                    <hr className="border-white opacity-50" />

                                    <div className="text-center mt-3">
                                        <p className="fw-bold fs-3">24</p>
                                        <p className="small">Supported companies</p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Col>



            </Row>
            <Row className="gy-4">
                {/* Impact Table Section */}
                <Col xxl={9} xl={12}>
                    <Row>
                        <h3 className="fw-semibold text-center">Impact Table</h3>
                        {[
                            {
                                title: "INPUT",
                                highlights: ["SAR 1 Bn", "Deployed Amount"],
                                details: ["(841 Mn debt instruments to startups)", "18 Products launched", "50+ Partners"],
                            },
                            {
                                title: "OUTPUT",
                                highlights: ["1,902", "Companies supported"],
                                details: ["797 Startups Created", "2,197 Entrepreneurs supported"],
                            },
                            {
                                title: "IMPACT",
                                details: ["SAR 4.8 Bn Investment enabled"],
                                highlights: ["17K", "Jobs Created"]

                            },
                            {
                                title: "INSIGHTS",
                                highlights: ["For every 1 Mn SAR deployed"],
                                details: [
                                    "17 Jobs created (compared to 15 US benchmark)",
                                    "4.8x Investment enabled (compared to 4x SVC benchmark)",
                                ],
                            },
                        ].map((item, index) => (
                            <Col key={index} xxl={3} xl={3} lg={6} md={6} sm={12} className="mb-4 d-flex">
                                <Card className="custom-card text-center flex-grow-1">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Header className=" text-center justify-content-center border rounded-1 bg-grey pb-2 mb-4">
                                        <div className="card-title">{item.title}</div>
                                    </Card.Header>
                                    <Card.Body>
                                        {item.highlights.map((highlight, i) => (
                                            <h6 key={i} className="card-title fw-medium mb-2" dangerouslySetInnerHTML={{ __html: highlight.replace(/(\d+[,.\d]*\s*[A-Za-z]*)/g, '<span class="fw-bold text-primary fs-5">$1</span>') }} />
                                        ))}
                                        {item.details.map((detail, i) => (
                                            <p key={i} className="card-text mb-2" dangerouslySetInnerHTML={{ __html: detail.replace(/(\d+[,.\d]*\s*[A-Za-z]*)/g, '<span class="fw-bold text-primary fs-5">$1</span>') }} />
                                        ))}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                {/* Revenue and Fund Size Section */}
                <Col xxl={3} xl={12}>

                    <Row className="gx-4">
                        <h3 className="fw-semibold text-center" style={{ display: "" }}>{`GDP Impact`}</h3>
                        {[
                            { title: "Total Revenue", value: "355 B SAR" },
                            { title: "Total Fund size established", value: "234,234 SAR" },
                        ].map((item, index) => (
                            <Col key={index} xxl={12} xl={6} lg={6} md={12} sm={12} className="mb-4 d-flex">
                                <Card className="custom-card flex-grow-1">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <Card.Body>
                                        <div className="d-flex align-items-center justify-content-center mb-0.1 pt-0.1">
                                            <div>
                                                <span className="d-block text-muted text-center mb-3">{item.title}</span>
                                                <Card.Header className="fw-bold text-center border rounded-3  bg-gray">
                                                    <h3 className="fw-semibold">{item.value}</h3>
                                                </Card.Header>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">No of Investment per stage</div>
                        </Card.Header>
                        <Card.Body>
                            <Bar options={chartjsdata.Option2} data={chartjsdata.Data2} height='200px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header>
                            <div className="card-title">Volume of Investment</div>
                        </Card.Header>
                        <Card.Body>
                            <Bar options={chartjsdata.Option1} data={chartjsdata.Data1} height='200px' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Product Spending
                            </div>
                        </div>
                        <Card.Body>
                            <div id="users-report">
                                <Userreport />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header">
                            <div className="card-title">
                                Distribution of Global and Local Beneficiaries
                            </div>
                        </div>
                        <Card.Body>
                            <div id="sessions-device">
                                <SessionSource />
                            </div>
                            <div style={{ height: "24px" }} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="border p-2">
                <Col xs={12}>
                    <h3 className="fw-semibold text-center py-2 mb-2">Partners</h3>
                </Col>
                <Col xs={12}>
                    <Card className="bg-transparent flex-grow-1 border rounded-2 shadow-sm p-3 mt-4">
                        <Row className="g-4 py-3">
                            {[
                                {
                                    title: "Government",
                                    images: [
                                        "government/1.png",
                                        "government/2.png",
                                        "government/3.png",
                                        "government/4.png",
                                        "government/5.png",
                                        "government/6.png",
                                        "government/7.png",
                                        "government/8.png",
                                        "government/9.png",
                                        "government/10.png",
                                        "government/11.png",
                                        "government/12.png",
                                        "government/13.png",
                                        "government/14.png",
                                        "government/15.png",
                                        "government/16.png",
                                        "government/17.png",
                                    ],
                                },
                                {
                                    title: "Investors",
                                    images: [
                                        "investor/1.png",
                                        "investor/2.png",
                                        "investor/3.png",
                                        "investor/4.png",
                                        "investor/5.png",
                                        "investor/6.png",
                                        "investor/7.png",
                                        "investor/8.png",
                                        "investor/9.png",
                                        "investor/10.png",
                                        "investor/11.png",
                                        "investor/12.png",
                                    ],
                                },
                                {
                                    title: "Startups",
                                    images:
                                        [
                                            "Incubating startups/1.png",
                                            "Incubating startups/2.png",
                                            "Incubating startups/3.png",
                                            "Incubating startups/4.png",
                                            "Incubating startups/5.png",
                                            "Incubating startups/6.png",
                                            "Incubating startups/7.png",
                                            "Incubating startups/8.png",
                                            "Incubating startups/9.png",
                                            "Incubating startups/10.png",
                                            "Incubating startups/11.png",
                                            "Incubating startups/12.png",
                                            "Incubating startups/13.png",
                                            "Incubating startups/14.png",

                                        ]
                                },
                                {
                                    title: "Accelerators",
                                    images: [
                                        "Accelerators/1.png",
                                        "Accelerators/2.png",
                                        "Accelerators/3.png",
                                        "Accelerators/4.png",
                                        "Accelerators/5.png",
                                        "Accelerators/6.png",
                                        "Accelerators/7.png",
                                        "Accelerators/8.png",
                                        "Accelerators/9.png",
                                        "Accelerators/10.png",
                                    ]
                                },

                                {
                                    title: "Universities",
                                    images: [
                                        "Universities/1.png",
                                        "Universities/2.png",
                                        "Universities/3.png",
                                    ]
                                },
                                {
                                    title: "Financial",
                                    images:
                                        ["Financial Institutes/1.png",
                                            "Financial Institutes/2.png",
                                            "Financial Institutes/3.png",

                                        ]
                                }
                            ].map((item, index) => (
                                <Col
                                    key={index}
                                    xxl={4}
                                    xl={4}
                                    lg={4}
                                    md={6}
                                    sm={12}
                                    className="d-flex flex-column align-items-center"
                                >
                                    <h3 className="fw-semibold border p-5 text-center py-2 mb-2">{item.title}</h3>
                                    <Card className="custom-card flex-grow-1 border rounded-2 shadow-sm p-3 mt-4">

                                        {item.images ? (
                                            <Row className="g-2">
                                                {item.images.map((img, i) => (
                                                    <Col key={i} xs={4} className="d-flex justify-content-center">
                                                        <img
                                                            src={`/assets/images/brand-logos/${img}`}
                                                            alt={`${item.title} ${i + 1}`}
                                                            className="img-fluid rounded shadow"
                                                            style={{ maxHeight: "100px", objectFit: "contain" }}
                                                        />
                                                    </Col>
                                                ))}
                                            </Row>
                                        ) : (
                                            <img
                                                src={`/assets/images/brand-logos/${item.image}`}
                                                alt={item.title}
                                                className="img-fluid w-100 rounded shadow"
                                                style={{ maxHeight: "200px", objectFit: "contain" }}
                                            />

                                        )}
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </Col>

            </Row>
        </Fragment>
    );
};

export default Analytics;
