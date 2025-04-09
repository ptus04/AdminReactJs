import { Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import {
  AnalyticsPage,
  DashboardPage,
  IntegrationsPage,
  MessagesPage,
  ProjectsPage,
  TeamsPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/analystics" element={<AnalyticsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
