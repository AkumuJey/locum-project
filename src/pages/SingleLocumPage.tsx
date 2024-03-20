import { Button, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const SingleLocumPage = () => {
  const { id } = useParams();
  return (
    <>
      <div className="w-full md:w-[40%] m-[1.5rem]">
        {id}
        <Paper
          elevation={2}
          sx={{ width: "100%", px: "1.5rem", py: "1rem", bgcolor: "blueviolet" }}
        >
          <Typography variant="h5" fontWeight={`bold`}>
            Location
          </Typography>
          <Typography>Doctor</Typography>
          <div>
            <Typography fontWeight={`bold`}>Requirements: </Typography>
            <p>diavclfsd vasj</p>
          </div>
          <div>
            <Typography fontWeight={`bold`}>Job Description: </Typography>
            <p>diavclfsd vasj</p>
          </div>
          <div>
            <Typography fontWeight={`bold`}>Hourly Rate</Typography>
          </div>
          <div>
            <Typography>Start - Stop</Typography>
          </div>
          <div className="flex justify-between py-[0.5rem]">
            <Button variant="contained" color="error">
              Delete
            </Button>
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default SingleLocumPage;
