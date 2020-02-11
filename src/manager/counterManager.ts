import { define, singleton } from "injex";

@define()
@singleton()
export class CounterManager {

	private _counter: number;

	constructor() {
		this._counter = 0;
	}

	public get counter(): number {
		return this._counter;
	}

	public increment(by: number = 1) {
		return this._counter += by;
	}

	public decrement(by: number = 1) {
		return this._counter -= by;
	}
}