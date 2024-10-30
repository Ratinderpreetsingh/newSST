import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Customer from './pages/Customer/Customer.jsx';
import Login from './auth/Login';
import AddShop from './pages/Shops/Add_shop.jsx';
import Shop from './pages/Shops/Shop.jsx';
import Definition from './pages/Definition/Definition.jsx';
import AddDefinition from './pages/Definition/Add_definiton.jsx';
import DefinitionTest from './pages/Definition/Definition-test.jsx';
import Events from './pages/Events/Events.jsx';
import Surveys from './pages/Surveys/Surveys.jsx';
import SurveyType from './pages/Surveys/Survey-type.jsx';
import SurveyAlert from './pages/Surveys/Survey-alert.jsx';
import UnresolvedIssue from './pages/Issue/Unresolved-issue.jsx';
import Hotspot from './pages/Hotspot/Hotspot.jsx';
import PerfectScore from './pages/PerfectScore/Perfect_score.jsx';
import Misfire from './pages/Misfire/Misfire.jsx';
import { useSelector } from 'react-redux';
import { AuthPath, CustomerPath, DashboardPath, DefinitionPath, EventsPath, HotspotPath, ImportExport, IssuesPath, MisfirePath, ScorePath, ShopPath, SurveysPath } from './Constant/Pages_Routes.jsx';
import AuthCommon from './auth/AuthCommon.jsx';
import ForgotPassword from './auth/ForgotPassword.jsx';
import { useEffect, useState } from 'react';
import { getCookie } from './utils/Cookies.jsx';
import ProtectedRoutes from './Guards/ProtectedRoutes.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import ChangePassword from './auth/ChangePassword.jsx';
import { ToastContainer } from 'react-toastify';
import VerifyOtp from './auth/VerifyOtp.jsx';
import Layout from './common/Layout.jsx';
import Edit_shop from './pages/Shops/Edit_shop.jsx';
import AddCustomer from './pages/Customer/AddCustomer.jsx';
import Im_Ex_Shop from './pages/Import_Export/Im_Ex_Shop.jsx';
import Im_Ex_Customer from './pages/Import_Export/Im_Ex_Customer.jsx';
import View_Edit from './pages/Customer/View_Edit_Customer.jsx';

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const token = getCookie('token');
    setAuthenticated(!!token);  // setAuthenticated as true if token exists, false otherwise
  }, []);

  if (isAuthenticated === null) {
    // Optionally, you could show a loading spinner here while checking for authentication
    return null;
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Redirect based on the presence of the token */}
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth/login"} replace />}
        />

        {/* Authentication Routes */}
        <Route path="/auth" element={<AuthCommon />}>
          <Route index path={AuthPath.LOGIN} element={<Login />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
        </Route>

        {/* Protected Routes (Require Authentication) */}
        <Route path="*" element={<ProtectedRoutes><Layout /></ProtectedRoutes>}>
          <Route index path={DashboardPath.DASHBOARD} element={<Dashboard />} />
          <Route path={CustomerPath.CUSTOMER} element={<Customer />} />
          <Route path={CustomerPath.ADD_CUSTOMER} element={<AddCustomer />} />
          <Route path={CustomerPath.VIEW_EDIT_CUSTOMER} element={<View_Edit />} />


          <Route path={ShopPath.ADD_SHOP} element={<AddShop />} />
          <Route path={ShopPath.SHOP} element={<Shop />} />
          <Route path={ShopPath.EDIT_SHOP} element={<Edit_shop />} />

          <Route path={DefinitionPath.DEFINITION} element={<Definition />} />
          <Route path={DefinitionPath.ADD_DEFINITION} element={<AddDefinition />} />
          <Route path={DefinitionPath.DEFINITION_TEST} element={<DefinitionTest />} />


          <Route path={EventsPath.EVENTS} element={<Events />} />
          <Route path={SurveysPath.SURVEYS} element={<Surveys />} />
          <Route path={SurveysPath.SURVEYS_TYPE} element={<SurveyType />} />
          <Route path={SurveysPath.SURVEYS_ALERT} element={<SurveyAlert />} />
          <Route path={IssuesPath.UNRESOLVED_ISSUE} element={<UnresolvedIssue />} />
          <Route path={HotspotPath.HOTSPOT} element={<Hotspot />} />
          <Route path={ScorePath.PERFECT_SCORE} element={<PerfectScore />} />
          <Route path={MisfirePath.MISFIRE} element={<Misfire />} />
          
          <Route path={ImportExport.SHOP} element={<Im_Ex_Shop />} />
          <Route path={ImportExport.CUSTOMER} element={<Im_Ex_Customer />} />

          
          {/* Optional Not Found Page */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
