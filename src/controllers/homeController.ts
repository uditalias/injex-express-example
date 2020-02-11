import { define, inject } from "injex";
import { controller, get, post } from "injex-express-plugin";
import { Response, Request } from "express";
import { CounterManager } from "../managers/counterManager";
import { HomeView } from "../views/homeView";
import { Action } from "../common/enums";

@define()
@controller()
export class HomeController {

	@inject() private counterManager: CounterManager;
	@inject() private homeView: HomeView;

	@get("/")
	public home(req: Request, res: Response) {
		res.send(
			this.homeView.render({
				actionType: Action.Increment,
				counter: this.counterManager.counter,
				title: "Awesome Counter!"
			})
		);
	}

	@post("/")
	public updateValue(req: Request, res: Response) {
		const { actionType } = req.body;

		switch (actionType) {
			case Action.Increment:
				this.counterManager.increment();
				break;
			case Action.Decrement:
				this.counterManager.decrement();
				break;
		}

		res.send(
			this.homeView.render({
				actionType,
				counter: this.counterManager.counter,
				title: `Awesome Counter! - ${actionType}`
			})
		);
	}
}