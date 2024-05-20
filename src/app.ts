import express, { json }  from "express";
import "dotenv";
import { carRouter } from "./routes/car.routes";
import { HandleErrors } from "./errors/handleErrors";

export const app = express();

app.use(json());

app.use("/car", carRouter);

app.use(HandleErrors.execute);