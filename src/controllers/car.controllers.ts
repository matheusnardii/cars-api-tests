import { Request, Response } from "express";
import { TCar } from "../schemas/cars.schemas";
import { CarServices } from "../services/car.services";
import { inject, injectable } from "tsyringe";


@injectable()
export class CarControllers {
    constructor(@inject("CarServices") private carServices: CarServices) { }

    async getMany(req: Request, res: Response): Promise<Response<TCar[]>> {
        const response = await this.carServices.getMany();

        return res.status(200).json(response);
    }

    async getOne(req: Request, res: Response): Promise<Response<TCar | null>> {
        const id = req.params.id;

        const response = await this.carServices.getOne(id);

        return res.status(200).json(response);
    }

    async create(req: Request, res: Response): Promise<Response<TCar>> {
        const response = await this.carServices.create(req.body);

        return res.status(201).json(response);
    }

    async update(req: Request, res: Response): Promise<Response<TCar>> {
        const id = req.params.id;

        const response = await this.carServices.update(id, req.body);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response): Promise<Response<void>> {
        const id = req.params.id;

        await this.carServices.delete(id);

        return res.status(204).json();
    }

}