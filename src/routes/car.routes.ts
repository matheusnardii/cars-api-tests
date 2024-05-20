import { Router } from "express";
import { CarControllers } from "../controllers/car.controllers";
import { IsCarIdValid } from "../middlewares/isCarIdValid.middleware";
import { IsBodyValid } from "../middlewares/isBodyValid.middleware";
import { carCreateBodySchema, carUpdateBodySchema } from "../schemas/cars.schemas";

export const carRouter = Router();

const carController = new CarControllers();

carRouter.get("/", carController.getMany);
carRouter.get("/:id", IsCarIdValid.execute, carController.getOne);
carRouter.post("/", IsBodyValid.execute(carCreateBodySchema), carController.create);
carRouter.patch("/:id", IsBodyValid.execute(carUpdateBodySchema), IsCarIdValid.execute, carController.update);
carRouter.delete("/:id", IsCarIdValid.execute, carController.delete);