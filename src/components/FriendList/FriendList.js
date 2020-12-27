import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return <ul className={s.friendList}>{friends.map(FriendsListItem)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
