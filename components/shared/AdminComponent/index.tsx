import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AdminHeader from '../shared/Header/AdminHeader';

const AdminComponent: React.FC = ({ children }) => {
  return (
    <Row className="mr-lg-4">
        <Col lg={3}>
            Menu Lateral
        </Col>

        <Col lg={9}>
            <div className="d-flex flex-column sticky-footer-wrapper container">
                <AdminHeader name="Nome do user"/>
                <div className="flex-fill text-center">
                    { children }
                </div>
            </div>
        </Col>
    </Row>
  )
}

export default AdminComponent;