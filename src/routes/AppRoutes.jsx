import { Routes, Route } from "react-router-dom";
import LigaArg from "../components/LigaArg";
import Premier from "../components/Premier";
import LiveMatches from "../components/LiveMatches";
import Layout from "../components/Layout";

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LiveMatches/>} />
        <Route path="/liga_arg" element={<LigaArg />} />
        <Route path="/premier" element={<Premier />} />
      </Routes>
    </Layout>
  );
}