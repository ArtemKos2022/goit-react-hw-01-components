import { Profile } from './Profile/Profile';
import { Section } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionTable } from './TransactionHistory/TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
// import { User } from './Profile/Profile.styled';

export const App = () => {
    return (
        <>
            <Profile user={user} />
            <Section statis={data} title="Upload stats" />
            <FriendList friends={friends} />
            <TransactionTable transactions={transactions} />
        </>
    );
};