import Navbar from "./layout/Navbar"
import Home from "./pages/Home"
import AddTopic from "./topics/AddTopic"
import EditTopic from "./topics/EditTopic"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ViewTopic from "./topics/ViewTopic"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-topic" element={<AddTopic />} />
          <Route path="/edit-topic/:id" element={<EditTopic />} />
          <Route path="/view-topic/:id" element={<ViewTopic />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

