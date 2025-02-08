"use client";
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Badge, Button, Card, Col, Collapse, Container, Dropdown, Form, Navbar, Pagination, Row } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Seo from '@/shared/layout-components/seo/seo';
import LabeledTwoThumbs1 from '@/shared/data/apps/jobs/searchcandidatedata';
import { Productsdata } from '@/shared/data/apps/ecommerce/productsdata';

const Products = ({ local_varaiable }) => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const AirbnbSlider = styled(Slider)(({ theme }) => ({
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
        '& .MuiSlider-thumb': {
            height: 27,
            width: 27,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            '&:hover': {
                boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
            },
            '& .airbnb-bar': {
                height: 9,
                width: 1,
                backgroundColor: 'currentColor',

                marginLeft: 1,
                marginRight: 1,
            },
        },
        '& .MuiSlider-track': {
            height: 3,
        },
        '& .MuiSlider-rail': {
            color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
            opacity: theme.palette.mode === 'dark' ? undefined : 1,
            height: 3,
        },
    }));
    function AirbnbThumbComponent(props) {
        const { children, ...other } = props;
    }
    return (
        <Fragment>
            <Seo title={"Products"} />
            <div className="my-4">
                <Row>
                    <Col xl={12}>
                        <Card className=" custom-card">
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <Card.Body className=" p-0">
                                <Navbar expand="xxl" className="navbar navbar-expand-xxl">
                                    <Container fluid>
                                        <Navbar.Brand href="#!">
                                            <img src="../../../assets/images/brand-logos/toggle-dark.png" alt="" className="d-inline-block align-text-top" />
                                        </Navbar.Brand>
                                        <Navbar.Toggle data-bs-target="#navbarSupportedContent">
                                            <span className="navbar-toggler-icon"></span>
                                        </Navbar.Toggle>
                                        <Navbar.Collapse className="collapse navbar-collapse navbar-justified flex-wrap gap-2" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-xxl-center">
                                                <li className="nav-item">
                                                    <Link className="nav-link active" aria-current="page" href="#!" scroll={false}>Men</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" href="#!" scroll={false}>Women</Link>
                                                </li>
                                                <Dropdown className="nav-item dropdown">
                                                    <Dropdown.Toggle variant='' className="nav-link dropdown-toggle-drop" id="navbarDropdown"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        Kids
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <Dropdown.Item className="dropdown-item" href="#!">Action</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item" href="#!">Another action</Dropdown.Item>
                                                        <Dropdown.Divider>
                                                        </Dropdown.Divider>
                                                        <Dropdown.Item className="dropdown-item" href="#!">Something else
                                                            here</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <li className="nav-item">
                                                    <Link href="#!" scroll={false} className="nav-link">Today Deals</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="#!" scroll={false} className="nav-link">Electronics</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="#!" scroll={false} className="nav-link">Fashion</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="#!" scroll={false} className="nav-link"><i className="ri-customer-service-line me-2 align-middle d-inline-block"></i>Customer Service</Link>
                                                </li>
                                                <li className="nav-item mb-xxl-0 mb-2 ms-xxl-0 ms-3">
                                                    <div className="btn-group d-xxl-flex d-block">
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant='' className="btn btn-sm btn-primary-light dropdown-toggle-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Sort By
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul" className="dropdown-menu">
                                                                <Dropdown.Item href="#!">Featured</Dropdown.Item>
                                                                <Dropdown.Item href="#!">Price: High to Low</Dropdown.Item>
                                                                <Dropdown.Item active href="#!">Price: Low to High</Dropdown.Item>
                                                                <Dropdown.Item href="#!">Newest</Dropdown.Item>
                                                                <Dropdown.Item href="#!">Ratings</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </li>
                                                <li className="nav-item mb-xxl-0 mb-2 ms-xxl-3 ms-3">
                                                    <div className="btn-group">
                                                        <Button variant='' className="btn btn-sm btn-primary">IV</Button>
                                                        <Button variant='' className="btn btn-sm btn-primary">III</Button>
                                                        <Button variant='' className="btn btn-sm btn-primary">II</Button>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="d-flex" role="search">
                                                <input className="form-control me-2" type="search" placeholder="Search"
                                                    aria-label="Search" />
                                                <Button variant='' className="btn btn-light"
                                                    type="submit">Search</Button>
                                            </div>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={4} lg={4} md={12}>
                        <Card className=" custom-card products-navigation-card">
                            <div className="top-left"></div>
                            <div className="top-right"></div>
                            <div className="bottom-left"></div>
                            <div className="bottom-right"></div>
                            <Card.Body className=" p-0">
                                <div className="p-4 border-bottom">
                                    <p className="fw-semibold mb-0 text-muted">BRANDS</p>
                                    <div className="py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="Jimmy-Lolfiger" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="Jimmy-Lolfiger">
                                                TrendFlex Pro
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">512</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="dapzem1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="dapzem1">
                                                LuxeBlend
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">2,186</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="denim-winjo1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="denim-winjo1">
                                                SwiftGlow
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">734</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="Louie-Phillippe" />
                                            <Form.Label className="form-check-label" htmlFor="Louie-Phillippe">
                                                PinnacleStyle
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">16</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="garage-clothing" />
                                            <Form.Label className="form-check-label" htmlFor="garage-clothing">
                                                EliteTech
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">1,432</span>
                                        </div>
                                        <Collapse in={open1}>
                                            <div className="" id="brands-more">
                                                <div className="form-check mb-2">
                                                    <Form.Check className="" type="checkbox" defaultValue="" id="blueberry" defaultChecked />
                                                    <Form.Label className="form-check-label" htmlFor="blueberry">
                                                        UrbanEra
                                                    </Form.Label>
                                                    <span className="badge bg-primary-transparent float-end">257</span>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="" type="checkbox" defaultValue="" id="aus-polo-assn" defaultChecked />
                                                    <Form.Label className="form-check-label" htmlFor="aus-polo-assn">
                                                        HarmonyLife
                                                    </Form.Label>
                                                    <span className="badge bg-primary-transparent float-end">1,845</span>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="" type="checkbox" defaultValue="" id="denim-corp" defaultChecked />
                                                    <Form.Label className="form-check-label" htmlFor="denim-corp">
                                                        QuantumSelect
                                                    </Form.Label>
                                                    <span className="badge bg-primary-transparent float-end">5,893</span>
                                                </div>
                                            </div>
                                        </Collapse>
                                        <Link className="ecommerce-more-link" data-bs-toggle="collapse" onClick={() => setOpen1(!open1)} aria-expanded={open1}
                                            href="#!" scroll={false} role="button" aria-controls="brands-more">MORE</Link>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <p className="fw-semibold mb-0 text-muted">CATEGORIES</p>
                                    <div className="py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="electronics" />
                                            <Form.Label className="form-check-label" htmlFor="electronics">
                                                Electronics
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">2,712</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="Accesories" />
                                            <Form.Label className="form-check-label" htmlFor="Accesories">
                                                Home Decor
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">536</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="clothing" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="clothing">
                                                Clothing
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">18,289</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="clothing" />
                                            <Form.Label className="form-check-label" htmlFor="clothing">
                                                Accesories
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">536</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="fashion" />
                                            <Form.Label className="form-check-label" htmlFor="fashion">
                                                Fashion
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">3,453</span>
                                        </div>
                                        <Collapse in={open}>
                                            <div id="category-more">
                                                <div className="form-check mb-2">
                                                    <Form.Check className="" type="checkbox" defaultValue="" id="furniture" />
                                                    <Form.Label className="form-check-label" htmlFor="furniture">
                                                        Furniture
                                                    </Form.Label>
                                                    <span className="badge bg-primary-transparent float-end">7,165</span>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="" type="checkbox" defaultValue="" id="footwear" />
                                                    <Form.Label className="form-check-label" htmlFor="footwear">
                                                        Footwear
                                                    </Form.Label>
                                                    <span className="badge bg-primary-transparent float-end">5,964</span>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <Form.Check className="" type="checkbox" defaultValue="" id="mobiles" />
                                                    <Form.Label className="form-check-label" htmlFor="mobiles">
                                                        Mobiles
                                                    </Form.Label>
                                                    <span className="badge bg-primary-transparent float-end">2,123</span>
                                                </div>
                                            </div>
                                        </Collapse>
                                        <Link className="ecommerce-more-link" data-bs-toggle="collapse" href="#!" scroll={false} onClick={() => setOpen(!open)} aria-expanded={open}
                                            role="button" aria-controls="category-more">MORE</Link>
                                    </div>
                                </div>

                                <div className="p-4 border-bottom">
                                    <p className="fw-semibold mb-0 text-muted">PRICE</p>
                                    <div className="py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="low" />
                                            <label className="form-check-label" htmlFor="low">
                                                $0 - $599
                                            </label>
                                            <Badge bg=" bg-primary-transparent float-end">22,873</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="low1" defaultChecked />
                                            <label className="form-check-label" htmlFor="low1">
                                                $599 - $1299
                                            </label>
                                            <Badge bg=" bg-primary-transparent float-end">11,345</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="medium" />
                                            <label className="form-check-label" htmlFor="medium">
                                                $1,299 - $2,199
                                            </label>
                                            <Badge bg=" bg-primary-transparent float-end">6,987</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="high" />
                                            <label className="form-check-label" htmlFor="high">
                                                $2,199 - $3,499
                                            </label>
                                            <Badge bg=" bg-primary-transparent float-end">5,236</Badge>
                                        </div>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="high1" />
                                            <label className="form-check-label" htmlFor="high1">
                                                $3,499 & Above
                                            </label>
                                            <Badge bg=" bg-primary-transparent float-end">3,735</Badge>
                                        </div>
                                    </div>
                                    <div className="p-4 border-b dark:border-defaultborder/10">
                                        <p className="fw-semibold mb-2 text-muted">PRICE RANGE</p>
                                        <div className="py-3 pb-0">
                                            <LabeledTwoThumbs1 rtl={local_varaiable == 'rtl'} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <p className="fw-semibold mb-0 text-muted">DISCOUNT</p>
                                    <div className="py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="Jimmy-Lolfiger1" />
                                            <Form.Label className="form-check-label" htmlFor="Jimmy-Lolfiger1">
                                                0% - 20%
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">16,563</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="dapzem2" />
                                            <Form.Label className="form-check-label" htmlFor="dapzem2">
                                                20% - 40%
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">15,234</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="denim-winjo" />
                                            <Form.Label className="form-check-label" htmlFor="denim-winjo">
                                                40% - 60%
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">6,278</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="Louie-Phillippe1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="Louie-Phillippe1">
                                                60% - 80%
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">4,531</span>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="garage-clothing1" />
                                            <Form.Label className="form-check-label" htmlFor="garage-clothing1">
                                                80% - 90%
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent float-end">2,405</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="fw-semibold mb-0 text-muted">SIZES</p>
                                    <div className="py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="extra-small" />
                                            <Form.Label className="form-check-label" htmlFor="extra-small">
                                                Extra Small (XS)
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent text-muted float-end">23,156</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="small" />
                                            <Form.Label className="form-check-label" htmlFor="small">
                                                Small (SM)
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent text-muted float-end">15,632</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="medium1" />
                                            <Form.Label className="form-check-label" htmlFor="medium1">
                                                Medium (MD)
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent text-muted float-end">15,032</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="large" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="large">
                                                Large (L)
                                            </Form.Label>
                                            <span className="badge bg-primary-transparent text-muted float-end">7,154</span>
                                        </div>
                                        <Collapse in={open2}>
                                            <div className="" id="sizes-more">
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="extra-large" />
                                                    <label className="form-check-label" htmlFor="extra-large">
                                                        Extra Large (XL)
                                                    </label>
                                                    <span className="badge bg-primary-transparent text-muted float-end">5,946</span>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="double-extralarge" />
                                                    <label className="form-check-label" htmlFor="double-extralarge">
                                                        XXL
                                                    </label>
                                                    <span className="badge bg-primary-transparent text-muted float-end">3,267</span>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="triple-extralarge" />
                                                    <label className="form-check-label" htmlFor="triple-extralarge">
                                                        XXL
                                                    </label>
                                                    <span className="badge bg-primary-transparent text-muted float-end">578</span>
                                                </div>
                                            </div>
                                        </Collapse>
                                        <Link className="ecommerce-more-link" data-bs-toggle="collapse" onClick={() => setOpen2(!open2)} aria-expanded={open2}
                                            href="#!" scroll={false} role="button" aria-controls="sizes-more">MORE</Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={9} xl={8} lg={8} md={12}>
                        <Row>
                            {Productsdata.map((idx) => (
                        <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="" key={Math.random()}>
                                    <Card className="custom-card product-card">
                                        <div className="top-left"></div>
                                        <div className="top-right"></div>
                                        <div className="bottom-left"></div>
                                        <div className="bottom-right"></div>
                                        <Card.Body className="text-center">
                                            <Link href="/apps/ecommerce/product-details" className="product-image">
                                                <img src={idx.preview} className="card-img rounded-0 mb-3" alt="..."/>
                                                <span className="badge bg-secondary top-left-badge">60% Off</span>
                                            </Link>
                                            <div className="product-icons">
                                                <Link href="/apps/ecommerce/wishlist" className="wishlist"><i className="ri-heart-line"></i></Link>
                                                <Link href="/apps/ecommerce/cart" className="cart"><i className="ri-shopping-cart-line"></i></Link>
                                                <Link href="/apps/ecommerce/product-details" className="view"><i className="ri-eye-line"></i></Link>
                                            </div>
                                            <p className="product-name fw-medium mb-0">{idx.title}</p>
                                            <p className="product-description fs-11 text-muted mb-2">{idx.description}</p>
                                            <p className="fs-12 mb-2">
                                                <i className="bx bxs-star text-warning align-center"></i>
                                                <i className="bx bxs-star text-warning align-center"></i>
                                                <i className="bx bxs-star text-warning align-center"></i>
                                                <i className="bx bxs-star text-warning align-center"></i>
                                                <i className="bx bxs-star-half text-warning align-center"></i>
                                                <span className="fw-600 text-muted ms-1">4.3<Link scroll={false} className="text-info" href="#!"> (2.4k)</Link></span>
                                            </p>
                                            <p className="mb-0 fw-medium fs-18"><span>{idx.newpr}<span className="text-muted text-decoration-line-through ms-1 d-inline-block op-6">{idx.oldpr}</span></span></p>
                                            <span className="fs-11 text-success fw-medium"> Offer Price {idx.newpr} </span>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <Pagination className="pagination justify-content-end">
                    <Pagination.Item disabled href="#!">Previous
                    </Pagination.Item>
                    <Pagination.Item href="#!">1</Pagination.Item>
                    <Pagination.Item href="#!">2</Pagination.Item>
                    <Pagination.Item href="#!">3</Pagination.Item>
                    <Pagination.Item href="#!">Next
                    </Pagination.Item>
                </Pagination>

            </div>
        </Fragment>
    );
};

export default Products;
