import { useEffect, useState } from "react";

const EMAIL_FORMAT = /.+@.+\..+/;
const RECOGNIZABLE_EMAIL_FORMAT = /.+@waterballsa\.tw/;

export function useEmailRecognition(email: string) {
	const [emailRecognizing, setEmailRecognizing] = useState(false);
	const [emailRecognized, setEmailRecognized] = useState(true);

	useEffect(() => {
		setEmailRecognized(false);
		setEmailRecognizing(true);

		if (!EMAIL_FORMAT.test(email)) {
			return;
		}

		const timeout = setTimeout(() => {
			setEmailRecognized(RECOGNIZABLE_EMAIL_FORMAT.test(email));
			setEmailRecognizing(false);
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [email]);

	return { emailRecognizing, emailRecognized };
}
