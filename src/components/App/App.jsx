import { Profile } from '../Profile/Profile'
import { FriendList } from '../FriendList/FriendList'
import { TransactionHistory } from '../TransactionHistory/TransactionHistory'
import './App.css'
import userData from "../../userData.json"

export default function App() {
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
        <FriendList
        />
        <TransactionHistory
        />
      </div>
    </>
  )
}


