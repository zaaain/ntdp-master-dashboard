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
              backgroundColor: "#00d4ff", // Original color from your code
              borderWidth: 1,
            },
          ],
        },
        Option2: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: { beginAtZero: true },
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
            y: { beginAtZero: true },
          },
        },
      };
      


    return (
        <Fragment>
            <Seo title={"Analytics"} />
            <h3 className="fw-semibold" style={{ display: "flex", justifyContent: "center",marginBottom:"60px"  }}>Master Dashboard</h3>
            <Row>

                <Col xxl={4} xl={12} className="">

                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="top-left"></div>
                                <div className="top-right"></div>
                                <div className="bottom-left"></div>
                                <div className="bottom-right"></div>
                                <Card.Body>
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Products Launched</span>
                                            <h3 className="fw-semibold">19</h3>
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
                                <Card.Body className=" p-0 pe-3">
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
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">GDP Contribution</span>
                                            <h3 className="fw-semibold">10 B SAR</h3>
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
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Job creation</span>
                                            <h3 className="fw-semibold">10</h3>
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
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Tech Unicorns</span>
                                            <h3 className="fw-semibold">10K</h3>
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
                                    <div className="d-flex flex-column align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">GDP Contribution</span>
                                            <h3 className="fw-semibold">10 B SAR</h3>
                                        </div>
                                        <div id="popTrades" className="text-center">
                                            <PopTrades />
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
                                    <div className="d-flex flex-column align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Job creation</span>
                                            <h3 className="fw-semibold">10</h3>
                                            {/* <span className="d-block">Increased By <span className="text-success">4.15%</span> this month</span> */}
                                        </div>
                                        <div id="popTrades" className="text-center">
                                            <PopTrades value={75} />
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
                                    <div className="d-flex flex-column align-items-start justify-content-between">
                                        <div>
                                            <span className="d-block text-muted mb-3">Tech Unicorns</span>
                                            <h3 className="fw-semibold">10K</h3>
                                            {/* <span className="d-block">Decreased By <span className="text-danger">0.45%</span> this month</span> */}
                                        </div>
                                        <div id="popTrades" className="text-center">
                                            <PopTrades value={80} />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <Row className="gy-4">
                {[
                    "Growth Support",
                    "Access to market",
                    "Talent Support",
                    "Innovation Support",
                    "Financing Support",
                ].map((title, index) => (
                    <Col
                        key={index}
                        xxl={index < 3 ? 4 : 6}  // First 3 cards = 4 cols each, Last 2 = 6 cols each
                        xl={index < 3 ? 4 : 6}
                        lg={index < 3 ? 4 : 6}
                        md={index < 3 ? 4 : 6}
                        sm={12}
                        xs={12}
                    >
                        <Card className="custom-card">
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <Card.Body>
                                <div className="d-flex align-items-start justify-content-between">
                                    <div>
                                        <span className="d-block text-muted mb-3">{title}</span>
                                        <h3 className="fw-semibold">10K</h3>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
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
                                details: ["797 Startups Created", "2,197 Entrepreneurs supported", "154"],
                            },
                            {
                                title: "IMPACT",
                                highlights: ["17K", "Jobs Created"],
                                details: ["SAR 4.8 Bn Investment enabled"],
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
                                    <Card.Header>
                                        <div className="card-title">{item.title}</div>
                                    </Card.Header>
                                    <Card.Body>
                                        {item.highlights.map((highlight, i) => (
                                            <h6 key={i} className="card-title fw-medium mb-2">
                                                {highlight}
                                            </h6>
                                        ))}
                                        {item.details.map((detail, i) => (
                                            <p key={i} className="card-text mb-2">{detail}</p>
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
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div>
                                                <span className="d-block text-muted mb-3">{item.title}</span>
                                                <h3 className="fw-semibold">{item.value}</h3>
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
                            <Bar options={chartjsdata.Option2} data={chartjsdata.Data2} height='300px' />
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
                            <Line options={chartjsdata.Option1} data={chartjsdata.Data1} height='300px' />
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
                                Distribution of Global and LocalBeneficiaries
                            </div>
                        </div>
                        <Card.Body>
                            <div id="sessions-device">
                                <SessionSource />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
             <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/logosss.png`} alt="logo" className="desktop-logo" />
            </Row>
        </Fragment>
    );
};

export default Analytics;
