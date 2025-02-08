"use client";
import React, { Fragment, useRef, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, Modal, Pagination, Row, Table } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { Data1, Data2, Datas, Loopingdata1 } from '@/shared/data/apps/crm/leadsdata';
import Seo from '@/shared/layout-components/seo/seo';
const Select = dynamic(() => import('react-select'), { ssr: false });

const Leads = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Delete Function
    const [Data, setData] = useState(Loopingdata1);
    function handleDelete(id) {
        const updatedInvoiceData = Data.filter((idx) => idx.id !== id);
        setData(updatedInvoiceData);
    }
    const [selectedImage, setSelectedImage] = useState("../../../assets/images/faces/9.jpg");
    const fileInputRef = useRef(null);
    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleImageChange = (e) => {
        const selectedFile = e.target.files && e.target.files[0];

        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <Fragment>
            <Seo title={"Leads"} />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <Card.Title>
                                Leads<span className="badge bg-light text-default rounded ms-1 fs-12 align-middle">30</span>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant='' onClick={handleShow} className="btn btn-primary btn-sm" data-bs-target="#create-contact">
                                    <i className="ri-add-line me-1 fw-semibold align-middle"></i>Create Lead</Button>
                                <Button variant='' className="btn btn-success-light btn-sm">Export As CSV</Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant='' className="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item href="#!">Newest</Dropdown.Item>
                                        <Dropdown.Item href="#!">Date Added</Dropdown.Item>
                                        <Dropdown.Item href="#!">A - Z</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-0">
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                            </th>
                                            <th scope="col">Contact Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Lead Status</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Lead Source</th>
                                            <th scope="col">Tags</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr className="crm-contact" key={Math.random()}>
                                                <td>
                                                    <Form.Check id={idx.id} className="" type="checkbox" value="" aria-label="..." />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-rounded avatar-sm">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">{idx.name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted"></i>
                                                            {idx.mail}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>

                                                            {idx.cell}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light text-default">{idx.badge}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>{idx.text1}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.text2}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-wrap gap-1">
                                                        <span className={`badge bg-${idx.color1} ${idx.class1}`}>{idx.text3}</span>
                                                        <span className={`badge bg-${idx.color2} ${idx.class2}`}>{idx.text4}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant='' className="btn btn-sm btn-warning-light btn-icon"><i className="ri-eye-line"></i></Button>
                                                        <Button variant='' className="btn btn-sm btn-info-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                        <Button variant='' className="btn btn-sm btn-danger-light btn-icon contact-delete" onClick={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0">
                                            <Pagination.Item disabled href="#!">Prev </Pagination.Item>
                                            <Pagination.Item active href="#!">1</Pagination.Item>
                                            <Pagination.Item href="#!">2</Pagination.Item>
                                            <Pagination.Item className="pagination-next" href="#!">
                                                next
                                            </Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true">

                <Modal.Header closeButton>
                    <h6 className="modal-title">Create Lead</h6>
                </Modal.Header>
                <Modal.Body className="modal-body px-4">
                    <div className="row gy-3">
                        <Col xl={12}>
                            <div className="mb-0 text-center">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <img src={selectedImage || ''} alt="" id="profile-img" />
                                    <span className="badge rounded-pill bg-primary avatar-badge" onClick={openFileInput}>
                                        <input
                                            type="file"
                                            name="photo"
                                            className="position-absolute w-100 h-100 op-0"
                                            id="profile-change"
                                            ref={fileInputRef}
                                            onChange={handleImageChange}
                                            style={{ display: 'none' }}
                                        />
                                        <i className="fe fe-camera"></i>
                                    </span>
                                </span>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-name">Contact Name</Form.Label>
                            <Form.Control type="text" id="contact-name" placeholder="Contact Name" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-mail">Email</Form.Label>
                            <Form.Control type="email" id="contact-mail" placeholder="Enter Email" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-phone">Phone No</Form.Label>
                            <Form.Control type="tel" id="contact-phone" placeholder="Enter Phone Number" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="company-name">Company Name</Form.Label>
                            <Form.Control type="text" id="company-name" placeholder="Company Name" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label>Lead Status</Form.Label>
                            <Select name="colors" options={Data2} className="basic-multi-select" placeholder="Select Status"
                                menuPlacement='auto' classNamePrefix="Select2"
                            />
                        </Col>
                        <Col xl={12}>
                            <Form.Label>Lead Source</Form.Label>
                            <Select name="colors" options={Data1} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data1[0]]}
                            />
                        </Col>
                        <Col xl={12}>
                            <Form.Label>Tags</Form.Label>
                            <Select isMulti name="colors" options={Datas} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2" placeholder=""
                            />
                        </Col>
                    </div>
                </Modal.Body>
                <Modal.Footer className="">
                    <Button variant='light' type="button" className="btn btn-light" onClick={handleClose}
                    >Cancel</Button>
                    <Button variant='primary' type="button" className="btn btn-primary">Create Contact</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default Leads;
