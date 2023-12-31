import user from "./user.json";
import data from './Statistics/data.json';
import friends from './Friends/data.json';
import transactions from './Transactions/data.json';


import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friends } from "./Friends/Friends";
import { Transactions } from "./Transactions/Transactions";

export const App = () => {
  return (
    <>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats" 
        stats={data}
      />
      <Friends
       friends={friends}
      />
      <Transactions
        transactions={transactions}/>
      </>
  );
};
