import styles from "./titulos.module.css";
import Header from "../components/header"
import Footer from "../components/footer"
import Card from "../components/cards"

const CorinthiansTrophiesPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <section className={styles.featured}>
                    <h2>Conquistas Principais</h2>
                    <div className={styles.featuredTrophies}>
                        <Card ano={2012} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 1 X 0 Chelsea"} titulo={"Mundial de Clubes da FIFA"} textoAlt={"Troféu do Mundial de Clubes 2012"} />
                        <Card ano={2012} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 2 x 0 Boca Juniors"} titulo={"Copa Libertadores da América"} textoAlt={"Troféu da Copa Libertadores da América 2012"} />
                        <Card ano={2000} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 0(4) x 0(3) Vasco"} titulo={"Mundial de Clubes da FIFA"} textoAlt={"Troféu do Mundial de Clubes 2000"} />
                    </div>
                </section>

                <section className={styles.newTrophies}>
                    <h2>Campeonatos Brasileiros</h2>
                    <div className={styles.trophiesGrid}>
                        <Card ano={2017} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"7º título brasileiro"} titulo={"Campeonato Brasileiro"} textoAlt={"Troféu do Campeonato Brasileiro 2017"} />
                        <Card ano={2015} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"6º título brasileiro"} titulo={"Campeonato Brasileiro"} textoAlt={"Troféu do Campeonato Brasileiro 2015"} />
                        <Card ano={2011} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"5º título brasileiro"} titulo={"Campeonato Brasileiro"} textoAlt={"Troféu do Campeonato Brasileiro 2011"} />
                    </div>
                </section>

                <section className={styles.promo}>
                    <h2>Campeonatos Estaduais</h2>
                    <div className={styles.trophiesGrid}>
                        <Card ano={2023} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"30º título estadual"} titulo={"Campeonato Paulista"} textoAlt={"Troféu do Campeonato Paulista 2023"} />
                        <Card ano={2019} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"29º título estadual"} titulo={"Campeonato Paulista"} textoAlt={"Troféu do Campeonato Paulista 2019"} />
                        <Card ano={2019} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"28º título estadual"} titulo={"Campeonato Paulista"} textoAlt={"Troféu do Campeonato Paulista 2018"} />
                    </div>
                </section>

                <section className={styles.otherTrophies}>
                    <h2>Outras Conquistas</h2>
                    <div className={styles.trophiesGrid}>
                    <Card ano={2009} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 2 x 0 Internacional"} titulo={"Copa do Brasil"} textoAlt={"Troféu da Copa do Brasil 2009"} />
                    <Card ano={2013} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 3 x 1 São Paulo"} titulo={"Recopa Sul-Americana"} textoAlt={"Troféu da Recopa Sul-Americana 2013"} />
                    <Card ano={2002} capa={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"} detalhes={"Corinthians 3 x 2 Brasiliense"} titulo={"Copa do Brasil"} textoAlt={"Troféu da Copa do Brasil 2002"} />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CorinthiansTrophiesPage;