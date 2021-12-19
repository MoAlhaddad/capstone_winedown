import React from "react";
import { Table } from "antd";

function Paginate(props) {
  const { wineList } = props;
  const columns = [
    {
      title: "WINE",
      dataIndex: "wine",
      key: "wine",
      //If the start of the sort direction is descending then sort from z to a, else sort ascending a to z
      sorter: (a, b) => a.wine > b.wine,
      sortDirections: ["descend"],
    },
    {
      title: "VINTAGE",
      dataIndex: "vintage",
      key: "vintage",
      sorter: (a, b) => a.vintage > b.vintage,
      sortDirections: ["descend"],
    },
    {
      title: "GWS",
      dataIndex: "gws",
      key: "gws",
      sorter: (a, b) => Number(a.gws) > Number(b.gws),
      sortDirections: ["descend"],
    },

    {
      title: "CI",
      dataIndex: "ci",
      key: "ci",
      sorter: (a, b) => a.ci > b.ci,
      sortDirections: ["descend"],
    },
    {
      title: "NBJ",
      dataIndex: "nbj",
      key: "nbj",
      sorter: (a, b) => a.nbj > b.nbj,
      sortDirections: ["descend"],
    },
    {
      title: "COUNTRY",
      dataIndex: "country",
      key: "country",
      sorter: (a, b) => a.country > b.country,
      sortDirections: ["descend"],
    },

    {
      title: "DATE CREATED",
      dataIndex: "date_created",
      key: "date_created",
      sorter: (a, b) => new Date(a.date_created) > new Date(b.date_created),
      sortDirections: ["descend"],
    },
  ];

  return <Table size="large" columns={columns} dataSource={wineList} />;
}

export default Paginate;
