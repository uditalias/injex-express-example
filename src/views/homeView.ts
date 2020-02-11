/**
 * This is just for demo propose, in a real life application
 * you use something like handlebars, react server side rendering
 * or any other view engine out there.
 */

import { define, singleton } from "injex";
import { Action } from "../common/enums";

@define()
@singleton()
export class HomeView {
	public render({ counter, actionType, title }): string {
		return `
		<!doctype html>
		<html>
			<head>
				<title>${title}</title>
			</head>
			<body>
				<form method="POST" action="/">
					<h1>${title}</h1>
					<input type="number" value="${counter}" />
					<p>
						<label><input type="radio" value="${Action.Increment}" ${actionType === Action.Increment ? "checked" : ""} name="actionType"  /> Increment</label>
						<label><input type="radio" value="${Action.Decrement}" ${actionType === Action.Decrement ? "checked" : ""} name="actionType" /> Decrement</label>
					</p>
					<button name="decrement">Submit</button>
				</form>
			</body>
		</html>`;
	}
}