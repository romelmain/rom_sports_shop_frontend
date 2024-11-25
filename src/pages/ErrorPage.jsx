import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section>
      <h1>Error</h1>
      <h2>Esta Página no Existe</h2>
      <Link to="/">Ir a Home</Link>
    </section>
  );
}

export default ErrorPage;
