import { Routes, Route } from "react-router-dom";
import MainLayout from "./assets/layout/MainLayout";

import Dashboard from "./assets/pages/Dashboard";
import Expenses from "./assets/pages/Expenses";
import Wallets from "./assets/pages/Wallets";
import Summary from "./assets/pages/Summary";
import Accounts from "./assets/pages/Accounts";
import Settings from "./assets/pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="wallets" element={<Wallets />} />
        <Route path="summary" element={<Summary />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
