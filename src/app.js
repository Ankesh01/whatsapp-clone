import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileupload from "express-fileupload";
import cors from "cors";
dotenv.config();

const app = express();

if (process.env.NODE_ENV != "production") {
  app.use(morgan("dev"));
}
app.use(helmet());

//Parse json req url
app.use(express.json());

//Parse json req body
app.use(express.urlencoded({ extended: true }));

app.use(mongoSanitize());

app.use(cookieParser());

app.use(compression());

app.use(fileupload({ useTempFiles: true }));

app.use(cors());

export default app;
