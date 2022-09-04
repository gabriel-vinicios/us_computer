"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const logger_1 = __importDefault(require("./logger"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(cors_1.default());
try {
    app.listen(PORT, () => console.log(`Server is on ${BASE_URL}`));
    logger_1.default.info("the server has been activated or updated");
}
catch (err) {
    logger_1.default.error(`the server was unable to be activated or was interrupted by the error: \n${err}`);
}
//# sourceMappingURL=server.js.map