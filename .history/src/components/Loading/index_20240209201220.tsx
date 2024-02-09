import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import "./Loading.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
export default function Loading() {
  const loading = useSelector((state: RootState) => state.loading.value);
  return (
    <>
      {!loading ? (
        <div className="loading">
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
            <CircularProgress color="secondary" size={100} />
            <CircularProgress color="success" size={100} />
            <CircularProgress color="inherit" size={100} />
          </Stack>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
