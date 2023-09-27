import styles from "./Friends.module.css"; 

export const Friends = ({ friends }) => {
    return (
        <ul className={styles.statList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li className={styles.item} key={id}>
                    {isOnline ? <span className={styles.status}></span> : null}
                    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
            ))}
        </ul>
    );
};
