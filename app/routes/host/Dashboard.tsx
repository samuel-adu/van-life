import React from 'react';
import { Outlet } from 'react-router';

export default function Dashboard() {
  return (
    <section>
      <div className="container">Dashboard Goes Here</div>
      <Outlet />
    </section>
  );
}
