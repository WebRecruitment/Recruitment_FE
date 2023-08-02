import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ButtonBase,
  Pagination,
  Tooltip,
  Box,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
const makeStatus = (status) => {
  if (status === "DONE") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "REQUEST") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else if (status === "INACTIVE") {
    return {
      background: "#ffadad8f",
      color: "black",
    };
  }
};
export default function Position() {
  const [selectedApply, setSelectedApply] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (applys) => {
    setSelectedApply(applys);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      // display="flex"
      alignItems="center"
      justifyContent="center"
      padding="16px"
      height="100%"
    >
      <h3>Apply Company</h3>

      <Grid>
        <TableContainer
          component={Paper}
          style={{
            boxShadow: "0px 13px 20px 0px #80808029",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Apply ID</TableCell>
                <TableCell>Cv ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                // (ApplyItems = apply.map((applys) => (
                //   <TableRow
                //     key={applys.operationId}
                //     // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                //   >
                //     {/* <TableCell component="th" scope="row"> */}
                //     <TableCell>{applys.operationId}</TableCell>
                //     <TableCell>{applys.responseCv.cvId}</TableCell>
                //     <TableCell>{applys.date}</TableCell>
                //     <TableCell>
                //       <Tooltip
                //         className="status"
                //         style={makeStatus(applys.status)}
                //       >
                //         {applys.status}
                //       </Tooltip>
                //     </TableCell>
                //     <TableCell className="Details">
                //       <ButtonBase onClick={() => handleOpen(applys)}>
                //         SHOW
                //       </ButtonBase>
                //     </TableCell>
                //   </TableRow>
                // )))
              }
              <TableCell>Apply ID</TableCell>
              <TableCell>Cv ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Information</TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        {
          // (selectedApply && (
          //   <>
          //     <DialogTitle>INFORMATION DETAILS</DialogTitle>
          //     <DialogContent>
          //       <DialogContentText>
          //         {/* Hiển thị các thông tin chi tiết của selectedApply */}
          //         Operation ID: {selectedApply.operationId}
          //         CV ID: {selectedApply.responseCv.cvId}
          //         Date: {selectedApply.date}
          //         Status:
          //         <Tooltip style={makeStatus(selectedApply.status)}>
          //           {selectedApply.status}
          //         </Tooltip>
          //       </DialogContentText>
          //     </DialogContent>
          //     <DialogActions>
          //       <Button onClick={handleClose} color="primary">
          //         Close
          //       </Button>
          //     </DialogActions>
          //   </>
          // ))
        }
      </Dialog>
    </Box>
  );
}
