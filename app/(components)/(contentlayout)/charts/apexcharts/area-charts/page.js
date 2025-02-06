"use client";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basicarea, Datetimexaxis, Github, Negative, Nullarea, Spiline, Stacked } from "../../../../../../shared/data/charts/apexchartdata/areachartdata";
import Seo from "@/shared/layout-components/seo/seo";

const AreaCharts = () => {
	return (
		<Fragment>
			<Seo title={"Area-Charts"} />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">Basic Area Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="area-basic">
								<Basicarea />
							</div>
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
							<div className="card-title">Spline Area Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="area-spline">
								<Spiline />
							</div>
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
							<div className="card-title">Area Chart With Negative Values</div>
						</Card.Header>
						<Card.Body>
							<div id="area-negative">
								<Negative />
							</div>
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
							<div className="card-title">Selection-Github Style Chart</div>
						</Card.Header>
						<Card.Body>
							<Github />
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
							<div className="card-title">Stacked Area Chart</div>
						</Card.Header>
						<Card.Body>
							<div id="area-stacked">
								<Stacked />
							</div>
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
							<div className="card-title">Area Chart With Null Values</div>
						</Card.Header>
						<Card.Body>
							<div id="area-null">
								<Nullarea />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Datetimexaxis />
					</Card>
				</Col>

			</Row>
		</Fragment>
	);
};

export default AreaCharts;
