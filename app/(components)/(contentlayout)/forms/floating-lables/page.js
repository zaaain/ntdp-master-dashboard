"use client";
import { floating1, floating2, floating3, floating4, floating5, floating6, floating7 } from "@/shared/data/prismdata/forms-prism";
import Seo from "@/shared/layout-components/seo/seo";
import ShowCode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const FloatingLables = () => {
	return (
		<Fragment>
			<Seo title={"Floating- Labels"} />
			<Row>
				<Col xl={6}>
					<ShowCode title="Basic Examples" customCardClass="custom-card" customCardBodyClass="" code={floating1}>
						<FloatingLabel
							controlId="floatingInput"
							label="Email address"
							className="mb-3"
						>
							<Form.Control type="email" placeholder="name@example.com" />
						</FloatingLabel>
						<FloatingLabel controlId="floatingPassword" label="Password">
							<Form.Control type="password" placeholder="Password" />
						</FloatingLabel>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Textareas" customCardClass="custom-card" customCardBodyClass="" code={floating4}>
						<Form.Floating className=" mb-4">
							<Form.Control as="textarea" className="" placeholder="Leave a comment here"
								id="floatingTextarea"></Form.Control>
							<label htmlFor="floatingTextarea">Description</label>
						</Form.Floating>
						<Form.Floating className="">
							<Form.Control as="textarea" className="form-control" placeholder="Leave a comment here"
								id="floatingTextarea2" rows={1} disabled></Form.Control>
							<Form.Label htmlFor="floatingTextarea2">Disabled</Form.Label>
						</Form.Floating>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Readonly plain text" customCardClass="custom-card" customCardBodyClass="" code={floating2}>
						<Form.Floating className="mb-3">
							<Form.Control type="email" readOnly
								className="form-control-plaintext border-0"
								id="floatingEmptyPlaintextInput" placeholder="name@example.com" />
							<Form.Label htmlFor="floatingEmptyPlaintextInput">Empty input</Form.Label>
						</Form.Floating>
						<Form.Floating className="">
							<Form.Control type="email" readOnly
								className="form-control-plaintext  border-0"
								id="floatingPlaintextInput" placeholder="name@example.com"
								defaultValue="name@example.com" />
							<Form.Label htmlFor="floatingPlaintextInput">Input with value</Form.Label>
						</Form.Floating>
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<ShowCode title="Floating Labels With Pre Defined Values" customCardClass="custom-card" customCardBodyClass="" code={floating3}>
						<Form.Floating className="mb-3">
							<Form.Control type="email" className="" id="floatingInputValue"
								placeholder="name@example.com" defaultValue="test@example.com" />
							<Form.Label htmlFor="floatingInputValue">Input with value</Form.Label>
						</Form.Floating>
						<form className="form-flotin">
							<Form.Control type="email" className="is-invalid"
								id="floatingInputInvalid" placeholder="name@example.com"
								defaultValue="test@example.com" />
							<Form.Label htmlFor="floatingInputInvalid" className="mb-0">Invalid input</Form.Label>
						</form>
					</ShowCode>
				</Col>

			</Row>
			<Row>
				<Col xl={12}>
					<ShowCode title="Floating Label Colors" customCardClass="custom-card" customCardBodyClass="" code={floating7}>
						<Row className="gy-4">
							<Col xl={4} className="">
								<Form.Floating className="mb-4 floating-primary">
									<Form.Control type="email" className="form-control" id="floatingInputprimary" placeholder="name@example.com" />
									<Form.Label htmlFor="floatingInputprimary">primary</Form.Label>
								</Form.Floating>
							</Col>
							<Col xl={4} className="">
								<Form.Floating className="mb-4 floating-secondary">
									<Form.Control type="email" className="form-control" id="floatingInputsecondary" placeholder="name@example.com" />
									<Form.Label htmlFor="floatingInputsecondary">secondary</Form.Label>
								</Form.Floating>
							</Col>
							<Col xl={4} className="">
								<Form.Floating className="mb-4 floating-warning">
									<Form.Control type="email" className="form-control" id="floatingInputwarning" placeholder="name@example.com" />
									<Form.Label htmlFor="floatingInputwarning">warning</Form.Label>
								</Form.Floating>
							</Col>
							<Col xl={4} className="">
								<Form.Floating className="mb-4 floating-info">
									<Form.Control type="email" className="form-control" id="floatingInputinfo" placeholder="name@example.com" />
									<Form.Label htmlFor="floatingInputinfo">info</Form.Label>
								</Form.Floating>
							</Col>
							<Col xl={4} className="">
								<Form.Floating className="mb-4 floating-success">
									<Form.Control type="email" className="form-control" id="floatingInputsuccess" placeholder="name@example.com" />
									<Form.Label htmlFor="floatingInputsuccess">success</Form.Label>
								</Form.Floating>
							</Col>
							<Col xl={4} className="">
								<Form.Floating className="mb-4 floating-danger">
									<Form.Control type="email" className="form-control" id="floatingInputdanger" placeholder="name@example.com" />
									<Form.Label htmlFor="floatingInputdanger">danger</Form.Label>
								</Form.Floating>
							</Col>
						</Row>
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<ShowCode title="Floating Labels In Select" customCardClass="custom-card" customCardBodyClass="" code={floating5}>
						<FloatingLabel controlId="floatingSelect" label="Works with selects">
							<Form.Select aria-label="Floating label select example">
								<option>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</FloatingLabel>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Floating Labels With Layouts" customCardClass="custom-card" customCardBodyClass="" code={floating6}>
						<div className="row g-2">
							<div className="col-md">
								<Form.Floating className="">
									<Form.Control type="email" className="form-control" id="floatingInputGrid"
										placeholder="name@example.com" defaultValue="mdo@example.com" />
									<Form.Label htmlFor="floatingInputGrid">Email address</Form.Label>
								</Form.Floating>
							</div>
							<div className="col-md">
								<FloatingLabel controlId="floatingSelect" label="Works with selects">
									<Form.Select aria-label="Floating label select example" className='form-select'>
										<option>Open this select menu</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</Form.Select>
								</FloatingLabel>
							</div>
						</div>
					</ShowCode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default FloatingLables;
