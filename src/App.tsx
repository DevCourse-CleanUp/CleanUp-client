import { CleanUpThemeProvider } from "./context/themeContext";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        <RouterProvider router={router} />
      </CleanUpThemeProvider>
    </div>
  );
}

export default App;
