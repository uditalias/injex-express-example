import { Injex } from "injex";
import * as path from "path";
import { InjexExpressPlugin } from "injex-express-plugin";
import * as express from "express";

const PORT = process.env.PORT || 8080;

Injex.create({
	rootDirs: [
		path.resolve(__dirname, "./src")
	],
	plugins: [
		new InjexExpressPlugin({
			createAppCallback: (app: express.Application) => {
				app.use(express.urlencoded({ extended: true }));
				app.listen(PORT, () => console.log(`Express application is running!\r\nGo to http://localhost:${PORT}/`));
			}
		}),
	]
}).bootstrap();
