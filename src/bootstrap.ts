/**
 * The bootstrap is your application entry point..
 * From the run method you can initialize your modules like DB services and connections.
 * It's important to say that this class is NOT mandatory.
 * You can return a Promise from the run method, Injex will wait for this Promise before
 * running your application.
 * 
 * Notice that you don't need to use the @define() or @singleton() decorators
 * for the bootstrap class, the @bootstrap() decorator doing it for you.
 */

import { IBootstrap, bootstrap } from "injex";

@bootstrap()
export class Bootstrap implements IBootstrap {

	public run(): void | Promise<void> {

		console.log("Hello from Injex bootstrap!");

	}
}