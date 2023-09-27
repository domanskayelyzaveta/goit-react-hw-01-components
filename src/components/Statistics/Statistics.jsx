import styles from './Statistics.module.css';
import { Title, StatList, Description, List } from './Statitstics.styled';

const BackgroundRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
};

export const Statistics = ({ stats, title, randomColor }) => {
  return (
    <section>
      <Description>
        <Title className={styles.title}>{title}</Title>
        <StatList>
          {stats.map(data => (
            <List
              style={{ backgroundColor: BackgroundRandomColor() }}
              key={data.id}
            >
              <span className={styles.label}>{data.label}</span>
              <span className={styles.percentage}>{data.percentage}%</span>
            </List>
          ))}
        </StatList>
      </Description>
    </section>
  );
};
BackgroundRandomColor();
