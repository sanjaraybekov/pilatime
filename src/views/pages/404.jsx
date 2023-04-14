import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function ErrorPage() {
	const { t } = useTranslation();
	return (
		<div className="main">
			<Helmet>
				<title>{t("nothing-found")} - 404 Page</title>
			</Helmet>

			<h1 className="d-none">{t("nothing-found")} - 404 Page</h1>


			<div
				className="error-content text-center"
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/error-bg.jpg)`
				}}
			>
				<div className="container">
					<h1 className="error-title">Ошибка 404</h1>

					<p>Извините, такой страницы не существует.</p>
					<Link
						to=""
						className="btn btn-outline-primary-2 btn-minwidth-lg"
					>
						<span>Вернуться на главную</span>
						<i className="icon-long-arrow-right"></i>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default React.memo(ErrorPage);
