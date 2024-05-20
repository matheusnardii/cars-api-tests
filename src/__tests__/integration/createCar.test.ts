import { carCreateBodyMock, carWithInvalidBodyMock, carWithInvalidBrandMock, carWithInvalidDescriptionMock, carWithInvalidKmMock, carWithInvalidNameMock, carWithInvalidYearMock } from "../__mocks__/carMock";
import { carDefaultExpects } from "../utils/carDefaultExpect";
import { request } from "../utils/request"

describe("Integration test: create car", () => {
    test("Should be able to create a car successfully", async () => {
        const data = await request.post("/car").send(carCreateBodyMock).expect(201).then(( response ) => response.body);

        carDefaultExpects(data, carCreateBodyMock);
    });

    test("Should throw an error when try to create a car with invalid body", async () => {
        const wrongNameCar = await request.post("/car").send(carWithInvalidBodyMock);

        expect(wrongNameCar.status).toBe(409);
    });

    test("Should throw an error when try to create a car with invalid name", async () => {
        const wrongNameCar = await request.post("/car").send(carWithInvalidNameMock);

        expect(wrongNameCar.status).toBe(409);
    });

    test("Should throw an error when try to create a car with invalid brand", async () => {
        const wrongNameCar = await request.post("/car").send(carWithInvalidBrandMock);

        expect(wrongNameCar.status).toBe(409);
    });

    test("Should throw an error when try to create a car with invalid description", async () => {
        const wrongNameCar = await request.post("/car").send(carWithInvalidDescriptionMock);

        expect(wrongNameCar.status).toBe(409);
    });
    
    test("Should throw an error when try to create a car with invalid year", async () => {
        const wrongNameCar = await request.post("/car").send(carWithInvalidYearMock);

        expect(wrongNameCar.status).toBe(409);
    });

    test("Should throw an error when try to create a car with invalid Km", async () => {
        const wrongNameCar = await request.post("/car").send(carWithInvalidKmMock);

        expect(wrongNameCar.status).toBe(409);
    });

});
