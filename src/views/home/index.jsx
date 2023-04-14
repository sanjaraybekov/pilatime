import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
	const state = useSelector(state => state);
	console.log(state);
	return <div>Pila timee</div>;
}
