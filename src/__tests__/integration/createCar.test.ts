import { carCreateBodyMock, carWithInvalidBodyMock, carWithInvalidBrandMock, carWithInvalidDescriptionMock, carWithInvalidKmMock, carWithInvalidNameMock, carWithInvalidYearMock } from "../__mocks__/carMock";
import { carDefaultExpects } from "../utils/carDefaultExpect";
import { request } from "../utils/request"

describe("Integration test: create car", () => {
    test("Should be able to create a car successfully", async () => {
        const data = await request.post("/car").send(carCreateBodyMock).expect(201).then(( response ) => response.body);

        carDefaultExpects(data, carCreateBodyMock);
    });

    test("Should throw an error when try to create a car with invalid body", async () => {
        const wrongBodyCar = await request.post("/car").send(carWithInvalidBodyMock);

        expect(wrongBodyCar.status).toBe(409);
    });

    test("Should throw an error when try to create a car with invalid name", async () => {
        const wrongNameCar = await request.post("/car").send(carWithInvalidNameMock);

        expect(wrongNameCar.status).toBe(409);
    });

    test("Should throw an error when try to create a car with invalid brand", async () => {
        const wrongBrandCar = await request.post("/car").send(carWithInvalidBrandMock);

        expect(wrongBrandCar.status).toBe(409);
    });

    test("Should throw an error when try to create a car with invalid description", async () => {
        const wrongDescriptionCar = await request.post("/car").send(carWithInvalidDescriptionMock);

        expect(wrongDescriptionCar.status).toBe(409);
    });
    
    test("Should throw an error when try to create a car with invalid year", async () => {
        const wrongYearCar = await request.post("/car").send(carWithInvalidYearMock);

        expect(wrongYearCar.status).toBe(409);
    });

    test("Should throw an error when try to create a car with invalid Km", async () => {
        const wrongKmCar = await request.post("/car").send(carWithInvalidKmMock);

        expect(wrongKmCar.status).toBe(409);
    });

});
