import css from "../Profile/Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.listItem}>
          <span className={css.listTitle}>Followers</span>
          <span className={css.amount}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listTitle}>Views</span>
          <span className={css.amount}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listTitle}>Likes</span>
          <span className={css.amount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
