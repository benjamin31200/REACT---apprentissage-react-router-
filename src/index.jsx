import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Expenses from "./components/Expenses";
import Invoices from "./components/Invoices";
import Invoice from "./components/Invoice";
import Error from "./components/Error.jsx";
import IndexInvoices from "./components/indexInvoices";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
        <Route
        index
        element={<IndexInvoices />}
      />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={<Error />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
