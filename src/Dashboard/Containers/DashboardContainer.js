import React from 'react';
import {
  Row,
  Col,
  Button,
  Input,
  Table,
} from 'reactstrap';

const fakeData = [
  {
    id: 1,
    name: 'john doe',
    job: 'web developer',
    email: 'john.doe@mail.com',
    phone: 1234567890,
    subsidiary: 'gdl',
  },
  {
    id: 2,
    name: 'john doe',
    job: 'web developer',
    email: 'john.doe@mail.com',
    phone: 1234567890,
    subsidiary: 'gdl',
  },
  {
    id: 3,
    name: 'john doe',
    job: 'web developer',
    email: 'john.doe@mail.com',
    phone: 1234567890,
    subsidiary: 'gdl',
  },
  {
    id: 4,
    name: 'john doe',
    job: 'web developer',
    email: 'john.doe@mail.com',
    phone: 1234567890,
    subsidiary: 'gdl',
  },
  {
    id: 5,
    name: 'john doe',
    job: 'web developer',
    email: 'john.doe@mail.com',
    phone: 1234567890,
    subsidiary: 'gdl',
  },
  {
    id: 6,
    name: 'john doe',
    job: 'web developer',
    email: 'john.doe@mail.com',
    phone: 1234567890,
    subsidiary: 'gdl',
  },
];

const DashboardContainer = () => {
  return (
    <section>
      <Row className="mt-2">
        <Col sm="6">
          <Input
            type="text"
            placeholder="Buscar..."
          />
        </Col>
        <Col sm="6">
          <Button color="primary" className="float-right">AGREGAR</Button>
        </Col>
      </Row>

      <Table className="mt-2">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Oficina</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            fakeData.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.job}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.subsidiary}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </section>
  )
};

export default DashboardContainer;
