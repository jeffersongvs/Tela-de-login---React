import styles from "./styles.module.css";
import MetaTags from 'react-meta-tags';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<MetaTags>
            <title>Eagle</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </MetaTags>
			<nav className={styles.navbar}>
				<h1>EagleMed</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;