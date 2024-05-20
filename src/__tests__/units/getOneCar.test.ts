import { CarServices } from "../../services/car.services";
import { carMock } from "../__mocks__/carMock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: get one car by id", () => {
    test("Get one car by id should work correctly", async () => {
        const carServices = new CarServices();

        prismaMock.car.findFirst.mockResolvedValue(carMock);
        const data = await carServices.getOne(carMock.id)

        expect(data).toStrictEqual(carMock);
    });
});