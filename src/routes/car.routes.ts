import { Router } from "express";
import { CarControllers } from "../controllers/car.controllers";
import { IsCarIdValid } from "../middlewares/isCarIdValid.middleware";
import { IsBodyValid } from "../middlewares/isBodyValid.middleware";
import { carCreateBodySchema, carUpdateBodySchema } from "../schemas/cars.schemas";
import { container } from "tsyringe";
import { CarServices } from "../services/car.services";

export const carRouter = Router();



container.registerSingleton("CarServices", CarServices);

const carController = container.resolve(CarControllers);

carRouter.get("/", (req, res) => carController.getMany(req, res));
carRouter.get("/:id", IsCarIdValid.execute, (req, res) => carController.getOne(req, res));
carRouter.post("/", IsBodyValid.execute(carCreateBodySchema), (req, res) => carController.create(req, res));
carRouter.patch("/:id", IsBodyValid.execute(carUpdateBodySchema), IsCarIdValid.execute, (req, res) => carController.update(req, res));
carRouter.delete("/:id", IsCarIdValid.execute, (req, res) => carController.delete(req, res));