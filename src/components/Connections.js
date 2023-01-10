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

function Connections() {
  const data = React.useMemo(
    () => [
      {
        interviewer: "327164", survey: "Survey 1", name: "John Doe", status: "Waiting",
      },
      {
        interviewer: "524211", survey: "Survey 1", name: "Jane Doe", status: "Interviewing",
      },
      {
        interviewer: "621412", survey: "Survey 1", name: "John Smith", status: "On Break",
      },
      // Add more data here
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "interviewer",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Survey",
        accessor: "survey",
      },
      {
        Header: "Status",
        accessor: "status",
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

export default Connections;
