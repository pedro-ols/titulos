import styles from "./sections.module.css"

const Section = ({ titulo }) => {
    return (
        <section className={styles.newTrophies}>
            <h2>{titulo}</h2>
            <div className={styles.trophiesGrid}>
            </div>
        </section>
    );
};

export default Section;