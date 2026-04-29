import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import InProgress from "./pages/InProgress";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* דף הבית (ה-Dashboard) */}
          <Route index element={<Dashboard />} />

          {/* דף הטרנזקציות */}
          <Route path="transactions" element={<Transactions />} />

          {/* דפים שעדיין בבנייה */}
          <Route path="investments" element={<InProgress />} />
          <Route path="savings" element={<InProgress />} />
          <Route path="profile" element={<InProgress />} />
          <Route path="settings" element={<InProgress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
