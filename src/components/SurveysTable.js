import React from "react";
import { useTable } from "react-table";
import { makeStyles } from "@material-ui/core/styles";
import "./Table.css";

const useStyles = makeStyles({
  table: {
    fontFamily: "Roboto",
  },
  header: {
    fontWeight: "bold",
  },
});

function SurveysTable() {
  const data = React.useMemo(
    () => [
      {
        surveyName: "Survey 1",
        status: "Started",
        interviewers: "3",
        Successful: "2",
        Target: "100",
        Available: "40",
        Appointments: "0",
      },
      {
        surveyName: "Survey 2",
        status: "Paused",
        interviewers: "0",
        Successful: "1",
        Target: "100",
        Available: "20",
        Appointments: "5",
      },
      {
        surveyName: "Survey 3",
        status: "Stopped",
        interviewers: "0",
        Successful: "5",
        Target: "100",
        Available: "80",
        Appointments: "0",
      },
      // Add more data here
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Survey",
        accessor: "surveyName",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Interviewers",
        accessor: "interviewers",
      },
      {
        Header: "Successful",
        accessor: "Successful",
      },
      {
        Header: "Target",
        accessor: "Target",
      },
      {
        Header: "Available",
        accessor: "Available",
      },
      {
        Header: "Appointments",
        accessor: "Appointments",
      },
    ],
    []
  );

  const classes = useStyles();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()} className={classes.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className={classes.header}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SurveysTable;
