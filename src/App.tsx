import Index from "./pages/index";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="fondo">
      <Index></Index>;
      <Routes>
        <Route path="/demo" element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
