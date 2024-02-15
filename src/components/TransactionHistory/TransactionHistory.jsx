import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
      <>
        <table className={css.container}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{items.type}</td>
      <td>{items.amount}</td>
      <td>{items.currency}</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

      </>
    );
  };

  export default TransactionHistory;