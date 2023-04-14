import { useEffect } from "react";
import { useHistory } from "react-router-dom";

/**
	type FirebaseAppActionArgs = {
		url: string;
		image_url?: string;
		title?: string;
		body?: string;
		type: "action" | "foreground";
	};

	type FirebaseNotificationType = {
		onAppAction?: (options: FirebaseAppActionArgs) => void;
		init: () => void;
		removeTokenFromDatabase: (token: string) => Promise<void>;
	};
*/
export function getFirebaseNotification() {
	return window.FirebaseNotification;
}

export function useFirebase() {
	const FirebaseNotification = getFirebaseNotification();

	const history = useHistory();
	useEffect(() => {
		if (FirebaseNotification) {
			FirebaseNotification.init();

			FirebaseNotification.onAppAction = action => {
				if (action.type === "foreground") {
					window.notify(action);
				} else {
					const parsed_url = new URL(action.url);
					history.push(parsed_url.pathname + parsed_url.search);
				}
			};
		}
	}, []);
}
