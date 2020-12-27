import PropTypes from 'prop-types';
import s from './FriendsListItem.module.css';

function FriendsListItem({ avatar, name, id, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.statusGreen : s.statusRed}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendsListItem;
