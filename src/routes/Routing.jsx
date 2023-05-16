import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CorpManagement from "../components/member/CorpManagement";
import MemberManagment from "../components/member/MemberManagement";
import Login from "../pages/Login";
import Dashboard from "../components/Dashboard";
import PrivateLesson from "../components/lesson/PrivateLesson";
import OnlineLesson from "../components/lesson/OnlineLesson";
import StoreVoucher from "../components/voucher/StoreVoucher";
import GroupLesson from "../components/lesson/GroupLesson";
import VODvoucher from "../components/voucher/VODvoucher";
import Inquiry from "../components/message/Inquiry";
import Notice from "../components/message/Notice";
import Event from "../components/message/Event";
import Message from "../components/message/messagePage/Message";
import UrgentNotice from "../components/message/UrgentNotice";
import EmployeeSetting from "../components/employee/EmployeeSetting";
import PayManagement from "../components/employee/PayManagement";
import SalarySettlement from "../components/employee/SalarySettlement";
import StoreManagement from "../components/StoreManagement";
import SalesManagement from "../components/SalesManagment/SalesManagement";
import UserCreate from "../components/userDetails/UserCreate";
import TicketCreate from "../components/voucher/TicketCreate";
import TicketDetail from "../components/voucher/TicketDetail";
import InquiryDetail from "../components/message/InquiryDetail";
import Notification from "../components/message/Notification";
import PayrollDetails from "../components/employee/PayrollDetails";
import PayrollCreate from "../components/employee/PayrollCreate";
import EmployeeDetail from "../components/employee/EmployeeDetail";
import SetUserDetail from "../components/settings/SetUserDetail";
import SetUserList from "../components/settings/SetUserList";
import Home from "../pages/Home";
import SuperAdmin from "../components/SuperAdmin";
import UserDetail from "../components/userDetails/UserDetail";
import NotFound from "../pages/404";
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/member"
          element={
            <MainLayout>
              <SuperAdmin>
                <MemberManagment />
              </SuperAdmin>
            </MainLayout>
          }
        />
        <Route
          path="/corp"
          element={
            <MainLayout>
              <CorpManagement />
            </MainLayout>
          }
        />

        <Route
          path="/private"
          element={
            <MainLayout>
              <PrivateLesson />
            </MainLayout>
          }
        />
        <Route
          path="/group"
          element={
            <MainLayout>
              <GroupLesson />
            </MainLayout>
          }
        />
        <Route
          path="/online"
          element={
            <MainLayout>
              <OnlineLesson />
            </MainLayout>
          }
        />

        <Route
          path="/storevoucher"
          element={
            <MainLayout>
              <StoreVoucher />
            </MainLayout>
          }
        />
        <Route
          path="/vodvoucher"
          element={
            <MainLayout>
              <VODvoucher />
            </MainLayout>
          }
        />

        <Route
          path="/inquiry"
          element={
            <MainLayout>
              <Inquiry />
            </MainLayout>
          }
        />

        <Route
          path="/notice"
          element={
            <MainLayout>
              <Notice />
            </MainLayout>
          }
        />
        <Route
          path="/event"
          element={
            <MainLayout>
              <Event />
            </MainLayout>
          }
        />
        <Route
          path="/urgent"
          element={
            <MainLayout>
              <UrgentNotice />
            </MainLayout>
          }
        />
        <Route
          path="/message"
          element={
            <MainLayout>
              <Message />
            </MainLayout>
          }
        />
        <Route
          path="/employeeSetting"
          element={
            <MainLayout>
              <EmployeeSetting />
            </MainLayout>
          }
        />
        <Route
          path="/payManagement"
          element={
            <MainLayout>
              <PayManagement />
            </MainLayout>
          }
        />
        <Route
          path="/salarySettlement"
          element={
            <MainLayout>
              <SalarySettlement />
            </MainLayout>
          }
        />
        <Route
          path="/storeManagement"
          element={
            <MainLayout>
              <StoreManagement />
            </MainLayout>
          }
        />
        <Route
          path="/salesManagement"
          element={
            <MainLayout>
              <SalesManagement />
            </MainLayout>
          }
        />
        <Route
          path="/userCreate"
          element={
            <MainLayout>
              <UserCreate />
            </MainLayout>
          }
        />
        <Route
          path="/user-details/:id"
          element={
            <MainLayout>
              <UserDetail />
            </MainLayout>
          }
        />

        <Route
          path="/ticketCreate"
          element={
            <MainLayout>
              <TicketCreate />
            </MainLayout>
          }
        />

        <Route
          path="/ticketDetail/:id"
          element={
            <MainLayout>
              <TicketDetail />
            </MainLayout>
          }
        />
        <Route
          path="/inquiryDetail"
          element={
            <MainLayout>
              <InquiryDetail />
            </MainLayout>
          }
        />
        <Route
          path="/notification"
          element={
            <MainLayout>
              <Notification />
            </MainLayout>
          }
        />
        <Route
          path="/payrollDetail"
          element={
            <MainLayout>
              <PayrollDetails />
            </MainLayout>
          }
        />
        <Route
          path="/payrollCreate"
          element={
            <MainLayout>
              <PayrollCreate />
            </MainLayout>
          }
        />
        <Route
          path="/employeeDetail"
          element={
            <MainLayout>
              <EmployeeDetail />
            </MainLayout>
          }
        />
        <Route
          path="/setUserList"
          element={
            <MainLayout>
              <SetUserList />
            </MainLayout>
          }
        />
        <Route
          path="/setUserDetail"
          element={
            <MainLayout>
              <SetUserDetail />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
