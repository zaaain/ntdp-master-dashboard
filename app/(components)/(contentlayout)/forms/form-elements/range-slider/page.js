"use client";
import React, { Fragment} from "react";
import { connect } from "react-redux";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import RangeSlider from "react-range-slider-input";
import { Card, Col, Form, Row } from "react-bootstrap";
import LabeledTwoThumbs, { Marks } from "@/shared/data/forms/form-elements/rangedata";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import { rangeslider1, rangeslider2, rangeslider3, rangeslider4 } from "@/shared/data/prismdata/forms-prism";
import Seo from "@/shared/layout-components/seo/seo";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
	color: "#3a8589",
	height: 3,
	padding: "13px 0",
	"& .MuiSlider-thumb": {
		height: 27,
		width: 27,
		backgroundColor: "#fff",
		border: "1px solid currentColor",
		"&:hover": {
			boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
		},
		"& .airbnb-bar": {
			height: 9,
			width: 1,
			backgroundColor: "currentColor",
			marginLeft: 1,
			marginRight: 1,
		},
	},
	"& .MuiSlider-track": {
		height: 3,
	},
	"& .MuiSlider-rail": {
		color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
		opacity: theme.palette.mode === "dark" ? undefined : 1,
		height: 3,
	},
}));

function AirbnbThumbComponent(props) {
	const { children, ...other } = props;
	return (
		<SliderThumb {...other}>
			{children}
			<span className="airbnb-bar" />
			<span className="airbnb-bar" />
			<span className="airbnb-bar" />
		</SliderThumb>
	);
}
const RangeSliders = ({ local_varaiable }) => {

	function valuetext(value) {
		return `${value}°C`;
	}
	return (
		<Fragment>
			<Seo title={"Range-Slider"} />
			<Row>
				<Col xl={6}>
					<ShowCode title="Default Range" customCardClass="custom-card" customCardBodyClass="" code={rangeslider1}>
						<Form.Range className="" id="customRange1" />
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Disabled Range" customCardClass="custom-card" customCardBodyClass="" code={rangeslider2}>
						<Form.Range className="" id="disabledRange" disabled />
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Range With Min and Max Values" customCardClass="custom-card" customCardBodyClass="" code={rangeslider3}>
						<Form.Range className="" min="0" max="5" id="customRange2" />
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Range With Steps" customCardClass="custom-card" customCardBodyClass="" code={rangeslider4}>
						<Form.Range className="" min="0" max="5" step="0.5" id="customRange3" />
					</ShowCode>
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
							<div className="card-title">
								Default-Styling
							</div>
						</Card.Header>
						<Card.Body>
							<div id="slider">
								<Box sx={{ m: 3 }} />
								<AirbnbSlider
									slots={{ thumb: AirbnbThumbComponent }}
									getAriaLabel={(index) => (index === 0 ? "Minimum price" : "Maximum price")}
									defaultValue={[10, 90]}
								/>
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
							<div className="card-title">
								Fit Handles
							</div>
						</Card.Header>
						<Card.Body>
							<div id="slider-fit">
								<AirbnbSlider
									slots={{ thumb: AirbnbThumbComponent }}
									getAriaLabel={(index) => (index === 0 ? "Minimum price" : "Maximum price")}
									defaultValue={[10, 90]}
								/>
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
							<div className="card-title">
								Rounded Styling
							</div>
						</Card.Header>
						<Card.Body>
							<div id="slider-round">
								<RangeSlider
									className="single-thumb"
									defaultValue={[0, 50]}
									thumbsDisabled={[true, false]}
									rangeSlideDisabled={true}
								/>
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
							<div className="card-title">
								Square Styling
							</div>
						</Card.Header>
						<Card.Body >
							<div id="slider-square">
								<RangeSlider
									className="square-thumb"
									defaultValue={[0, 50]}
									thumbsDisabled={[true, false]}
									rangeSlideDisabled={true}
								/>
							</div>
						</Card.Body>
					</Card>
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
							<div className="card-title">Toggle Movement By Clicking Pips</div>
						</Card.Header>
						<Card.Body className="p-5">
							<div id="slider-pips">
								<LabeledTwoThumbs rtl={local_varaiable.dir == "rtl"} />
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
							<div className="card-title">Soft Limits</div>
						</Card.Header>
						<Card.Body className="p-5">
							<div id="soft">
								<Marks rtl={local_varaiable.dir == "rtl"} />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<h6 className="mb-3">noUiSlider Colors:</h6>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<div className="top-left"></div>
						<div className="top-right"></div>
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
						<Card.Header>
							<div className="card-title">
								Primary
							</div>
						</Card.Header>
						<Card.Body>
							<div id="primary-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
									color="primary"
									className=''
								/>
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
						<Card.Header>
							<div className="card-title">
								Secondary
							</div>
						</Card.Header>
						<Card.Body>
							<div id="secondary-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
									color="secondary"
								/>
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
						<Card.Header>
							<div className="card-title">
								Warning
							</div>
						</Card.Header>
						<Card.Body>
							<div id="warning-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								/>
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
						<Card.Header>
							<div className="card-title">
								Info
							</div>
						</Card.Header>
						<Card.Body>
							<div id="info-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								/>
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
						<Card.Header>
							<div className="card-title">
								Success
							</div>
						</Card.Header>
						<Card.Body>
							<div id="success-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								/>
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
						<Card.Header>
							<div className="card-title">
								Danger
							</div>
						</Card.Header>
						<Card.Body>
							<div id="danger-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, {})(RangeSliders);
