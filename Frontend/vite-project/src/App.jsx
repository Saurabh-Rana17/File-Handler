import "./App.css";
import ImageUploadComponent from "./Components/ImageUploadComponent";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import RichText from "./Components/RichTextEditor/RichText";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      errorElement: <>Something went wrong</>,
      children: [
        {
          index: true,
          element: <p> Home Page </p>,
        },
        {
          path: "/page1",
          element: <ImageUploadComponent />,
        },
        {
          path: "/page2",
          element: <RichText />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
