import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";

import AuthLayout from "../pages/AuthLayout";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import VerifyEmailPage from "../pages/VerifyEmailPage";
import ForgotPassword from "../components/Auth/ForgotPassword";
import ForgetPasswordReset from "../components/Auth/ForgetPasswordReset";
import ResetPassword from "../components/Auth/ResetPassword";

import { useSelector } from "react-redux";
// import { useEffect } from "react";
import Protected from "../pages/Protected";
import Profile from "../components/Profile/Profile";
import Dashboard from "../pages/Dashboard";
import Times from "../pages/Times";
import Videos from "../pages/Videos";
import Articles from "../pages/Articles";
import AddArticlePage from "../components/Articles/AddArticlePage";
import ViewArticlePage from "../components/Articles/ViewArticlePage";
import UpdateArticlePage from "../components/Articles/UpdateArticle";
// import VideoDetails from "../components/Videos/VideoDetails";
import YouTubeUpload from "../components/Videos/YouTubeUpload";
import Specialities from "../pages/Specialities";

import EditVideo from "../components/Videos/EditVideo";
import StaffVideos from "../components/Videos/StaffVideos";
import StaffArticles from "../components/Articles/StaffArticles";
import StaffTimes from "../components/Times/StaffTimes";
import Users from "../pages/Users";
import IsLoadingActiveProvider from "../Context/isLoadingActivity";
import Bouquets from "../pages/Bouquets";
import AddBouquet from "../components/Bouquets/AddBouquet";
import EditBouquet from "../components/Bouquets/EditBouquet";
import VideoTypes from "../pages/VideoTypes";
import VideoTypeProvider from "../Context/VideoTypes";
import SpecialistProvider from "../Context/Specialist";
import VideoProvider from "../Context/Videos";
import Files from "../pages/Files";
import AddFile from "../components/Files/AddFile";
import StaffFiles from "../components/Files/StaffFiles";
import UpdateFile from "../components/Files/UpdateFile";
import FilesProvider from "../Context/Files";

const Router = () => {
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user?.isMaster;
  return (
    <Routes>
      {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
      <Route
        path="/"
        element={
          <Protected isSignedIn={user}>
            <Layout>
              <Dashboard />
            </Layout>
          </Protected>
        }
      />
      {isAdmin && (
        <Route
          path="/users"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <IsLoadingActiveProvider>
                  <Users />
                </IsLoadingActiveProvider>
              </Layout>
            </Protected>
          }
        />
      )}
      {isAdmin && (
        <Route path="/bouquets">
          <Route
            index
            element={
              <Protected isSignedIn={user}>
                <Layout>
                  <Bouquets />
                </Layout>
              </Protected>
            }
          />
          <Route
            path="add-bouquet"
            element={
              <Protected isSignedIn={user}>
                <Layout>
                  <AddBouquet />
                </Layout>
              </Protected>
            }
          />
          <Route
            path="edit"
            element={
              <Protected isSignedIn={user}>
                <Layout>
                  <EditBouquet />
                </Layout>
              </Protected>
            }
          />
        </Route>
      )}
      {isAdmin && (
        <Route path="/videoTypes">
          <Route
            index
            element={
              <Protected isSignedIn={user}>
                <Layout>
                  <VideoTypeProvider>
                    <VideoTypes />
                  </VideoTypeProvider>
                </Layout>
              </Protected>
            }
          />
        </Route>
      )}
      <Route
        path="/profile"
        element={
          <Protected isSignedIn={user}>
            <Layout>
              <Profile />
            </Layout>
          </Protected>
        }
      />
      <Route path="/times">
        {isAdmin && (
          <Route
            index
            element={
              <Protected isSignedIn={user}>
                <Layout>
                  <Times />
                </Layout>
              </Protected>
            }
          />
        )}
        <Route
          path="staff-times"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <StaffTimes />
              </Layout>
            </Protected>
          }
        />
      </Route>
      {isAdmin && (
        <Route path="/specialities">
          <Route
            index
            element={
              <Protected isSignedIn={user}>
                <Layout>
                  <SpecialistProvider>
                    <Specialities />
                  </SpecialistProvider>
                </Layout>
              </Protected>
            }
          />
        </Route>
      )}
      <Route path="/videos">
        {user?.isMaster && (
          <Route
            index
            element={
              <Protected isSignedIn={user}>
                <Layout>
                  <VideoProvider>
                    <Videos />
                  </VideoProvider>
                </Layout>
              </Protected>
            }
          />
        )}
        {/* <Route
            path=":id"
            element={
              <Protected isSignedIn={user}>
                <Layout>
                  <VideoDetails />
                </Layout>
              </Protected>
            }
          /> */}
        <Route
          path="upload"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <YouTubeUpload />
              </Layout>
            </Protected>
          }
        />
        <Route
          path="edit"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <EditVideo />
              </Layout>
            </Protected>
          }
        />
        <Route
          path="staff-videos"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <VideoProvider>
                  <StaffVideos />
                </VideoProvider>
              </Layout>
            </Protected>
          }
        />
      </Route>
      <Route path="/files">
        {user?.isMaster && (
          <Route
            index
            element={
              <Protected isSignedIn={user}>
                <Layout>
                  <FilesProvider>
                    <Files />
                  </FilesProvider>
                </Layout>
              </Protected>
            }
          />
        )}

        <Route
          path="add-file"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <AddFile />
              </Layout>
            </Protected>
          }
        />
        <Route
          path="edit-file"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <UpdateFile />
              </Layout>
            </Protected>
          }
        />
        <Route
          path="staff-files"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <FilesProvider>
                  <StaffFiles />
                </FilesProvider>
              </Layout>
            </Protected>
          }
        />
      </Route>
      <Route path="articles">
        {user?.isMaster && (
          <Route
            index
            element={
              <Protected isSignedIn={user}>
                <Layout>
                  <Articles />
                </Layout>
              </Protected>
            }
          />
        )}
        <Route
          path="add-article"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <AddArticlePage />
              </Layout>
            </Protected>
          }
        />
        <Route
          path=":id"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <ViewArticlePage />
              </Layout>
            </Protected>
          }
        />
        <Route
          path="update-article/:id"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <UpdateArticlePage />
              </Layout>
            </Protected>
          }
        />
        <Route
          path="staff-articles"
          element={
            <Protected isSignedIn={user}>
              <Layout>
                <StaffArticles />
              </Layout>
            </Protected>
          }
        />
      </Route>

      <Route
        path="/reset-password"
        element={
          <Protected isSignedIn={user}>
            <Layout>
              <ResetPassword />
            </Layout>
          </Protected>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />

      <Route
        path="/forgot-password"
        element={
          <AuthLayout>
            <ForgotPassword />
          </AuthLayout>
        }
      />
      <Route
        path="/forgot-password-reset"
        element={
          <AuthLayout>
            <ForgetPasswordReset />
          </AuthLayout>
        }
      />

      <Route path="/verify-email" element={<VerifyEmailPage />} />
    </Routes>
  );
};
export default Router;
