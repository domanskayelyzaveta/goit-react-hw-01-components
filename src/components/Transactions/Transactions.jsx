import styles from "./Transactions.module.css"; 


export const Transactions = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(data => (
          <tr key={data.id}>
            <td>{data.type}</td>
            <td>{data.amount}</td>
            <td>{data.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
