import { CleanUpThemeProvider } from "./context/themeContext";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    // errorElement: <Error />,
  },
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
