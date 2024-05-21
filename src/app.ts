import express, { json } from "express";
import "reflect-metadata";
import "dotenv";
import "express-async-errors";
import { carRouter } from "./routes/car.routes";
import { HandleErrors } from "./errors/handleErrors";
import helmet from "helmet";

export const app = express();

app.use(json());

app.use(helmet());

app.use("/car", carRouter);

app.use(HandleErrors.execute);