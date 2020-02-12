import App from './App.svelte';
import { _ } from "./utils"

if (is_private_leaderboard() && get_api_url()) {
	add_style("bundle.css")
	const app = new App({
		target: document.body,
		props: {
			api_url: get_api_url(),
			join_code: localStorage.getItem("aoc-joincode"),
		}
	});
}

if (is_private_leaderboard() && get_join_code()) {
	localStorage.setItem("aoc-joincode", get_join_code())
}

function is_private_leaderboard() {
	return document.title.includes("Private Leaderboard - Advent of Code")
}

function get_join_code() {
	let first_code_in_document = _("main > article code")
	if (!first_code_in_document) {
		return null
	}
	// join code is in form: 123456-abcdef1234
	let possible_join_code = first_code_in_document.innerText
	let splitted = possible_join_code.split("-")

	if (splitted.length !== 2) {
		return null
	}

	let first = splitted[0].replace(/[^0-9]/, "")
	let second = splitted[1].replace(/[^abcdef0-9]/, "")

	if (first.length !== splitted[0].length && second.length !== splitted[1].length) {
		return null
	}

	return possible_join_code
}

function get_api_url() {
	let link = _("#api_info > a")
	if (!link) {
		return null
	}
	let href = link.getAttribute("href");
	return location.host.includes("localhost")
		? `https://cors.seljebu.no/https://adventofcode.com${href}`
		: `https://adventofcode.com${href}`
}

function add_style(href) {
    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = href;
    document.head.appendChild(style);
}
