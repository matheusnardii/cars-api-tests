import { Request, Response } from "express";
import { TCar } from "../schemas/cars.schemas";
import { CarServices } from "../services/car.services";

export class CarControllers {
    async getMany(req: Request, res: Response): Promise<Response<TCar[]>> {
        const carService = new CarServices();

        const response = await carService.getMany();

        return res.status(200).json(response);
    }

    async getOne(req: Request, res: Response): Promise<Response<TCar | null>> {
        const id = req.params.id;

        const carService = new CarServices();

        const response = await carService.getOne(id);

        return res.status(200).json(response);
    }

    async create(req: Request, res: Response): Promise<Response<TCar>> {
        const carService = new CarServices();

        const response = await carService.create(req.body);

        return res.status(201).json(response);
    }

    async update(req: Request, res: Response): Promise<Response<TCar>> {
        const id = req.params.id;

        const carService = new CarServices();

        const response = await carService.update(id, req.body);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response): Promise<Response<void>> {
        const id = req.params.id;

        const carService = new CarServices();

        await carService.delete(id);

        return res.status(204).json();
    }

}