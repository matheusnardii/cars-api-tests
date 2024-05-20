import { CarServices } from "../../services/car.services"
import { carCreateBodyMock, carMock } from "../__mocks__/carMock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: create car", () => {
    test("Create car should work correctly", async () => {
        const carServices = new CarServices();

        prismaMock.car.create.mockResolvedValue(carMock);
        const data = await carServices.create(carCreateBodyMock)

        expect(data).toStrictEqual(carMock);
    });
});

