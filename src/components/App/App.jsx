import { Profile } from '../Profile/Profile'
import { FriendList } from '../FriendList/FriendList'
import { TransactionHistory } from '../TransactionHistory/TransactionHistory'
import './App.css'
import userData from "../../userData.json"
import friends from "../../friends.json"


const App = () => {
  return (
    <>
      <div>
      <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory
        />
      </div>
    </>
  );
};

export default App

