import PropTypes from 'prop-types';
import TransactionHistoryRow from './TransactionHistoryRow';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th className={s.headRow}>Type</th>
          <th className={s.headRow}>Amount</th>
          <th className={s.headRow}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>{items.map(TransactionHistoryRow)}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
