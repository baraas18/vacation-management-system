import Login from "../../auth/login/Login";
import About from "../../about/about/About";
import Signup from "../../auth/signup/Signup";
import Home from "../../home/home/Home";
import AddVacation from "../../vacations/AddVacation/AddVacation";
import EditVacation from "../../vacations/editVacation/EditVacation";
import Vacations from "../../vacations/vacations/Vacations";
import Page404 from "../page404/Page404";
import { Routes, Route, Navigate } from 'react-router-dom';
import HistogramComponent from "../../vacations/HistogramComponent/HistogramComponent";



function Routing(): JSX.Element {


    return (
        <Routes>

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />



            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            {/* <Route path="/home" element={<Home />} /> */}


            <Route path="/vacations/add" element={<AddVacation />} />

            <Route path="/vacations/graphs" element={<HistogramComponent />} />

            <Route path="/vacations/edit/:vacationId" element={<EditVacation />} />

            <Route path="/vacations" element={<Vacations />} />

            <Route path="/about" element={<About />} />

            <Route path="*" element={<Page404 />} />

        </Routes>

    );
}

export default Routing;
