export function isDevServer() {
	return process.env.REACT_APP_DEV === "1";
}
export function isDevelopment() {
	return process.env.NODE_ENV === "development";
}

export function fetchDataFromOx() {
	return isDevServer();
}

export function byENV(onDevelopment, onProduction) {
	if (isDevelopment()) {
		return onDevelopment;
	}

	return onProduction;
}
