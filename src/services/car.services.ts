import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TCar, TCarCreateBody, TCarUpdateBody } from "../schemas/cars.schemas";

injectable()
export class CarServices {
    async getMany(): Promise<TCar[]> {
        const carList = await prisma.car.findMany();

        return carList;
    }

    async getOne(id: string) {
        const car = await prisma.car.findFirst({ where: { id } });

        return car;
    }

    async create(body: TCarCreateBody): Promise<TCar> {
        const newCar = await prisma.car.create({ data: body });

        return newCar;
    }

    async update(id: string, body: TCarUpdateBody): Promise<TCar> {
        const updateCar = await prisma.car.update({ where: { id }, data: body });

        return updateCar;
    }

    async delete(id: string): Promise<void> {
        await prisma.car.delete({ where: { id } });
    }


}