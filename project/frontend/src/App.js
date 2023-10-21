import "./App.css";
import ContactForm from "./components/ContactForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
