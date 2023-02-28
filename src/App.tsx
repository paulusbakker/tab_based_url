import "./styles.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { Box } from "@mui/material";
import HomePage from "./HomePage";
import FilesPage from "./FilesPage";
import RawMediaList from "./RawMediaList";
import DatasetList from "./DatasetList";
import RawMediaPage from "./RawMediaPage";
import DatasetPage from "./DatasetPage";
import { RAW_DATA, DATASET_DATA } from "./mockData";

/**
 * https://stackoverflow.com/questions/74642093/how-to-make-tabs-routing-with-react-router-v6-with-cross-linking-on-nested-page
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/files",
        element: <FilesPage />,
        children: [
          {
            path: "raw-medias",
            element: <RawMediaList data={RAW_DATA} />
          },
          {
            path: "raw-medias/:rawMediaId",
            element: <RawMediaPage />
          },
          {
            path: "datasets",
            element: <DatasetList data={DATASET_DATA} />
          },
          {
            path: "datasets/:datasetId",
            element: <DatasetPage />
          },
          {
            index: true,
            element: <Navigate to="./raw-medias" replace />
          }
        ]
      }
    ]
  }
]);

export default function App() {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
}
