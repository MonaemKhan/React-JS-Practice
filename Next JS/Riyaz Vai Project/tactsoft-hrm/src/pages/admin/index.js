import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Icon } from '@mui/material';
import SideNavbar from '../../component/layout/admin/adminLayout';
import BarChart from './barchart';
import AdminChart from '@/Component/Charts/Admin';


const Admin = () => {
    const data = [
        { label: "A", value: 10 },
        { label: "B", value: 25 },
        { label: "C", value: 15 },
        { label: "D", value: 30 },
        { label: "E", value: 20 },
    ];
    return (
        <div>
            <Row>
                <Col xs={12} md={6} lg={3}>
                    <Card>
                        <Card.Body>
                            <div>
                                <span>
                                    weekend
                                </span>
                            </div>
                            <div>
                                <span>Bookings</span>
                                <h4>281</h4>
                            </div>
                        </Card.Body>
                        <hr />
                        <Card.Footer>
                            <p>
                                <span>+55%</span>&nbsp;than last week
                            </p>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={3}>
                    <Card>
                        <Card.Body>
                            <div>
                                <span>
                                    weekend
                                </span>
                            </div>
                            <div>
                                <span>Bookings</span>
                                <h4>281</h4>
                            </div>
                        </Card.Body>
                        <hr />
                        <Card.Footer>
                            <p>
                                <span>+55%</span>&nbsp;than last week
                            </p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Card>
                        <Card.Body>
                            <div>
                                <span>
                                    weekend
                                </span>
                            </div>
                            <div>
                                <span>Bookings</span>
                                <h4>281</h4>
                            </div>
                        </Card.Body>
                        <hr />
                        <Card.Footer>
                            <p>
                                <span>+55%</span>&nbsp;than last week
                            </p>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} md={6} lg={3}>
                    <Card>
                        <Card.Body>
                            <div>
                                <span>
                                    weekend
                                </span>
                            </div>
                            <div>
                                <span>Bookings</span>
                                <h4>281</h4>
                            </div>
                        </Card.Body>
                        <hr />
                        <Card.Footer>
                            <p>
                                <span>+55%</span>&nbsp;than last week
                            </p>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <AdminChart />
        </div>
    );
};

export default Admin;