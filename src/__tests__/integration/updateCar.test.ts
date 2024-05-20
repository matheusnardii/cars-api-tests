import { prisma } from "../../database/prisma";
import { carCreateBodyMock, carMock, carUpdateBodyMock, carUpdateInvalidBodyMock, carUpdateInvalidBrandMock, carUpdateInvalidDescriptionMock, carUpdateInvalidKmMock, carUpdateInvalidNameMock, carUpdateInvalidYearMock, invalidId } from "../__mocks__/carMock";
import { request } from "../utils/request";

describe("Integration test: update car", () => {
    test("Update car should work correctly", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});

        const data = await request.patch(`/car/${car.id}`).send(carUpdateBodyMock).expect(200).then((response) => response.body);
      
        const updatedCar = { ...car, ...carUpdateBodyMock};

        expect(data).toStrictEqual(updatedCar);
    });

    test("Should throw a error when car id is not valid", async () => {
        await request.patch(`/car/${invalidId}`).expect(404);
    });

    test("Should throw an error when try to update a car with invalid body", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});
        
        const wrongNameCar = await request.patch(`/car/${car.id}`).send(carUpdateInvalidBodyMock);

        expect(wrongNameCar.status).toBe(409);
    });

    test("Should throw an error when try to create a car with invalid name", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});

        const wrongNameCar = await request.patch(`/car/${car.id}`).send(carUpdateInvalidNameMock);

        expect(wrongNameCar.status).toBe(409);
    });

    test("Should throw an error when try to update a car with invalid brand", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});

        const wrongNameCar = await request.patch(`/car/${car.id}`).send(carUpdateInvalidBrandMock);

        expect(wrongNameCar.status).toBe(409);
    });

    test("Should throw an error when try to update a car with invalid description", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});

        const wrongNameCar = await request.patch(`/car/${car.id}`).send(carUpdateInvalidDescriptionMock);

        expect(wrongNameCar.status).toBe(409);
    });
    
    test("Should throw an error when try to update a car with invalid year", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});

        const wrongNameCar = await request.patch(`/car/${car.id}`).send(carUpdateInvalidYearMock);

        expect(wrongNameCar.status).toBe(409);
    });

    test("Should throw an error when try to update a car with invalid Km", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});
        
        const wrongNameCar = await request.patch(`/car/${car.id}`).send(carUpdateInvalidKmMock);

        expect(wrongNameCar.status).toBe(409);
    });

});
