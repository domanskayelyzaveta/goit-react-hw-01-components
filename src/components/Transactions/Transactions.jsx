import styles from './Transactions.module.css';
import { Table, TableTitle, TableRow, TableCell } from './Transactions.styled';

export const Transactions = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </TableRow>
      </thead>
      <tbody>
        {transactions.map(data => (
          <TableRow key={data.id}>
            <TableCell>{data.type}</TableCell>
            <TableCell>{data.amount}</TableCell>
            <TableCell>{data.currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
