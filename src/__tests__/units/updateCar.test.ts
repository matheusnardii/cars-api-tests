import { CarServices } from "../../services/car.services";
import { carMock, carUpdateBodyMock } from "../__mocks__/carMock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: update car", () => {
    test("Update car should work correctly", async () => {
        const carServices = new CarServices();

        const updatedCar = { ...carMock, ...carUpdateBodyMock };


        prismaMock.car.update.mockResolvedValue(updatedCar);
        const data = await carServices.update(carMock.id, carUpdateBodyMock);
      

        expect(data).toStrictEqual(updatedCar);
    });
});
