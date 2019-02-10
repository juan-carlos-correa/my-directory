import React from 'react';
import { Link, Route } from 'react-router-dom';
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
} from 'reactstrap';
import SubsidiaryForm from '../Components/SubsidiaryForm';

const SubsidiaryContainer = ({ history }) => {
  const handleSubmit = ({ name, address, tel }) => {
    console.log({ name, address, tel });
  }

  return (
    <section className="mt-2">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/main">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Sucursales</BreadcrumbItem>
      </Breadcrumb>

      <div className="d-flex  justify-content-end">
        <Button onClick={() => history.push('/main/subsidiaries/create')} color="primary">AGREGAR</Button>
      </div>

      <Route
        path="/main/subsidiaries/create"
        render={() => <SubsidiaryForm handleSubmit={handleSubmit} />}
      />
    </section>
  )
};

export default SubsidiaryContainer;
