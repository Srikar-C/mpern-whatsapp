import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./Components/UserComponents/Forms";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Forms />} />
                    <Route path="/:username" element={<Dashboard />} />
               </Routes>
          </BrowserRouter>
     );
}

export default App;
