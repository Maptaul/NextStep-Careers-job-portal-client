import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddJob from "../pages/AddJob/AddJob";
import AllJob from "../pages/AllJob/AllJob";
import Home from "../pages/Home/Home";
import JobApply from "../pages/JobApply/JobApply";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyApplications from "../pages/MyApplications/MyApplications";
import MyPostedJobs from "../pages/MyPostedJob/MyPostedJobs";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2> Route not found </h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <AllJob />,
      },
      {
        path: "jobs/:id",
        element: (
          <PrivetRoute>
            <JobDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-flax-eta.vercel.app/jobs/${params.id}`
          ),
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivetRoute>
            <JobApply />
          </PrivetRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivetRoute>
            <MyApplications />
          </PrivetRoute>
        ),
      },
      {
        path: "addJob",
        element: (
          <PrivetRoute>
            <AddJob />
          </PrivetRoute>
        ),
      },
      {
        path: "myPostedJob",
        element: (
          <PrivetRoute>
            <MyPostedJobs />
          </PrivetRoute>
        ),
      },
      {
        path: "viewApplications/:job_id",
        element: (
          <PrivetRoute>
            <ViewApplications />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-flax-eta.vercel.app/job-applications/jobs/${params.job_id}`
          ),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
