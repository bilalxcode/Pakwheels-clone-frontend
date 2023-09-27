import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  Button,
  Typography,
} from "@mui/material";

const dummyUserData = [
  { id: 1, name: "bilal Doe", email: "john@example.com" },
  { id: 2, name: "ali Smith", email: "jane@example.com" },
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 1, name: "hassan Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 1, name: "abdullah Doe", email: "john@example.com" },
  { id: 2, name: "a Smith", email: "jane@example.com" },
  // Add more dummy users here
];

function UsersView() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          minHeight: "80vh",
          width: "100%",
        }}
      >
        <div
          style={{
            marginTop: "6em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            padding: "0em 2em",
          }}
        >
          <TableContainer
            component={Paper}
            style={{ minWidth: "70em", background: "#F2F3F3" }} // Set minWidth to 100%
          >
            <Table style={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dummyUserData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="primary"
                          style={{ margin: "1em" }}
                        >
                          Action 1
                        </Button>
                        <Button
                          variant="outlined"
                          color="secondary"
                          style={{ margin: "1em" }}
                        >
                          Action 2
                        </Button>
                        <Button
                          variant="outlined"
                          color="info"
                          style={{ margin: "1em" }}
                        >
                          Action 3
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[4, 8, 20]}
            component="div"
            count={dummyUserData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{ marginBottom: "5em" }}
          />
        </div>
        <footer
          style={{
            position: "fixed",
            bottom: -1,
            width: "100%",
            background: "#E7232D",
            textAlign: "center",
          }}
        >
          <Typography variant="caption" color="textSecondary">
            &copy; 2023 PAKWHEELS
          </Typography>
        </footer>
      </div>
    </>
  );
}

export default UsersView;
