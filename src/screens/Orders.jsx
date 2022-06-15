import React, {useState, useEffect} from 'react';
import {
  TableContainer, Table, TableHead,
  TableRow, TableBody, TableCell
} from '@material-ui/core';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


import styled from "styled-components";


const St= styled.div`
margin-top: 100px;
   
`;
const columns = [
  {
    id: 'orderCreatedDate',
    lable: 'Order Date'
  },
  {
    id: 'documentID',
    lable: 'Order ID'
  },
  {
    id: 'orderTotal',
    lable: 'Amount'
  }
];

const styles = {
  fontSize: '16px',
  cursor: 'pointer',
  width: '10%'
};

const formatText = (columnName, columnValue) => {
  switch (columnName) {
    case 'orderTotal':
      return `£${columnValue}`;
    case 'orderCreatedDate':
      return moment(columnValue.nano).format('DD/MM/YYYY')
    default:
      return columnValue;
  }
};


const Orders = () => {
  const history = useNavigate();
  
const [orders, setOrders] = useState([]);
useEffect(() => {
  const fetch = async () => {
    try {
      const { data } = await axios.get("https://forbessolar.herokuapp.com/api/orders/user/find");
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };
  fetch();
}, []);

  return (
    <St>
    <TableContainer >
      <Table>

        <TableHead style={{}}>
          <TableRow>
            {columns.map((column, pos) => {
              const { lable } = column;

              return (
                <TableCell
                  key={pos}
                  style={styles}
                >
                  {lable}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>

        <TableBody>

          {(Array.isArray(orders) && orders.length > 0) && orders.map((row, pos) => {
            const { documentID } = row;

            return (
              <TableRow
                key={pos}
                onClick={() => history.push(`/order/${documentID}`)}
              >

                {columns.map((column, pos) => {
                  const columnName = column.id;
                  const columnValue = row[columnName];
                  const formattedText = formatText(columnName, columnValue);

                  return (
                    <TableCell
                      key={pos}
                      style={styles}
                    >
                      {formattedText}
                    </TableCell>
                  )
                })}

              </TableRow>
            )
          })}

        </TableBody>

      </Table>
    </TableContainer>
    </St>
  )
}

export default Orders;