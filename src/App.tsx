import CleanUpThemeProvider from "./context/themeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Problemset from "./pages/Problemset";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/problemset",
    element: (
      <Layout>
        <Problemset />
      </Layout>
    )
  }
]);

function App() {
  return (
    <div className="App">
      <CleanUpThemeProvider>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </CleanUpThemeProvider>
    </div>
  );
}

export default App;
