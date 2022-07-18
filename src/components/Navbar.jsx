import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </>
  );
}
