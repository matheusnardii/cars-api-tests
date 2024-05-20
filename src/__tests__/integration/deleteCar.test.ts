import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { carCreateBodyMock, carMock, invalidId } from "../__mocks__/carMock";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
    test("Delete car should work correctly", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});

        await request.delete(`/car/${car.id}`).expect(204);
    });

    test("Should throw a error when car id is not valid", async () => {
        await request.delete(`/car/${invalidId}`).expect(404);
    });
});
