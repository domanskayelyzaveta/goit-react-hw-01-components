// import PropTypes from "prop-types";
import styles from "./Statistics.module.css"; 

const BackgroundRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
};


export const Statistics = ({ stats, title, randomColor }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.statList}>
            { stats.map(data => 
                <li style={{ backrgoundColor: randomColor }} className={styles.item}
                    key={data.id}>
                    <span className={styles.label}>{data.label}</span>
                    <span className={styles.percentage}>{data.percentage}%</span>
                </li>
            )
            }
            </ul>
        </section>
    )
}
BackgroundRandomColor();


