import styles from './Friends.module.css';
import {
  Paragraph,
  StatusDot,
  FriendList,
  List,
  Description,
} from './Friends.styled';

export const Friends = ({ friends }) => {
  return (
    <Description>
      <FriendList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <List className={styles.item} key={id}>
            <StatusDot
              isOnline={isOnline}
              className={styles.status}
            ></StatusDot>
            <img
              className={styles.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <Paragraph className={styles.name}>{name}</Paragraph>
          </List>
        ))}
      </FriendList>
    </Description>
  );
};
