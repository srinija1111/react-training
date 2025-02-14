import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Classroom from "./pages/Classroom";
import Assessments from "./pages/Assessments";
import News from "./pages/News";
import Calendar from "./pages/Calendar";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import MyAccount from "./pages/MyAccount";
import MySettings from "./pages/MySettings";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/store" element={<Store />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} >
        <Route path="/profile/myaccount" element={<MyAccount/>} />
        <Route path="/profile/mysettings" element={<MySettings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;