import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import CustomSkeleton from "../components/CustomSkeleton";
import VideoTypesTable from "../components/videoTypes/VideoTypesTable";
import { useGetAllTypesQuery } from "../store/features/videoTypes/videoTypes";
import { notifyError } from "../utils/helper";

const VideoTypes = () => {
  const { data, isLoading, isError } = useGetAllTypesQuery();
  //   console.log(data);
  useEffect(() => {
    if (isError) notifyError("Failed To Get All Types");
  }, [isError]);
  return (
    <>
      <Box
        sx={{
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <Box
          sx={{
            boxShadow: "var(--shadow-1)",
            background: "var(--light-color)",
            p: "20px",
          }}
        >
          {isLoading ? (
            <CustomSkeleton />
          ) : data?.result?.length > 0 ? (
            <VideoTypesTable rows={data?.result} />
          ) : (
            <Typography variant=""> There is No Types</Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default VideoTypes;
