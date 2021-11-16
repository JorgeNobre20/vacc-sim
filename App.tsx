import React from "react";

import { Routes } from "./src/routes/index.routes";
import { AuthProvider } from "./src/contexts/auth.context";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export { App };
