import styles from './Profile.module.css';
import {
  Img,
  Paragraph,
  ParagraphTitle,
  Description,
  Container,
  List,
  Stats,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <Container>
        <Description>
          <Img src={avatar} alt="User avatar" className={styles.avatar} />
          <ParagraphTitle className={styles.name}>{username}</ParagraphTitle>
          <Paragraph className={styles.tag}>{tag}</Paragraph>
          <Paragraph className={styles.location}>{location}</Paragraph>
        </Description>

        <Stats>
          <List>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </List>
          <List>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </List>
          <List>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </List>
        </Stats>
      </Container>
    </div>
  );
};
