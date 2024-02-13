
const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}Friend name</p>
  <p>{isOnline}Friend status</p>
</div>

    );
};

export default FriendListItem;