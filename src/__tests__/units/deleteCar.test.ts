import { CarServices } from "../../services/car.services";
import { carMock } from "../__mocks__/carMock";

describe("Unit test: delete car", () => {
    test("Delete car should work correctly", async () => {
        const carServices = new CarServices();

        await carServices.delete(carMock.id);

    });
});