import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import login from "../../images/login.png";
import { BsGift } from 'react-icons/bs';

import MetaTags from 'react-meta-tags';

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<MetaTags>
            <title>Eagle</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </MetaTags>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Log in. <BsGift color=" #7c3bb1"/></h1>
						<h5>Enter your email address</h5>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<h5>Enter your password</h5>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
					
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up Now
						</button>
					</Link>
					<div>
						
					</div>
				</div>
				<div className={styles.right}>
				<img src={login} alt="login_img" className={styles.success_img} />
				</div>
			</div>
		</div>
	);
};

export default Login;