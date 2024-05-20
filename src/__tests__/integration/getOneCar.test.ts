import { prisma } from "../../database/prisma";
import { carCreateBodyMock, carMock, invalidId } from "../__mocks__/carMock";
import { carDefaultExpects } from "../utils/carDefaultExpect";
import { request } from "../utils/request";

describe("Integration test: get one car by id", () => {
    test("Get one car by id should work correctly", async () => {
       const car = await prisma.car.create({data: carCreateBodyMock});

        const data = await request.get(`/car/${car.id}`).expect(200).then((response) => response.body);

        expect(data.id).toBeDefined();
        carDefaultExpects(data, car);
    });

    test("Should throw a error when car id is not valid", async () => {
        await request.get(`/car/${invalidId}`).expect(404);
    })
});