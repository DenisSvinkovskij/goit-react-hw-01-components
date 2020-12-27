import PropTypes from 'prop-types';
import s from './TransactionHistoryRow.module.css';

function TransactionHistoryRow({ id, type, amount, currency }) {
  return (
    <tr key={id} className={s.row}>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </tr>
  );
}

TransactionHistoryRow.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryRow;
