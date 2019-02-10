import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const ProfileBreadCrumbs = ({ current }) => (
  <Breadcrumb>
    <BreadcrumbItem>
      <Link to="/main/dashboard">Dashboard</Link>
    </BreadcrumbItem>
    <BreadcrumbItem active>{current}</BreadcrumbItem>
  </Breadcrumb>
);

export default ProfileBreadCrumbs;
