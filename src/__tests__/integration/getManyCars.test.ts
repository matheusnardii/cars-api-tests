import { prisma } from "../../database/prisma";
import { carListCreateMock} from "../__mocks__/carMock";
import { carDefaultExpects } from "../utils/carDefaultExpect";
import { request } from "../utils/request";

describe("Integration test: get many car", () => {
    test("Get many cars should work correctly", async () => {
        await prisma.car.createMany({data: carListCreateMock});

        const data = await request.get("/car").expect(200).then((response) => response.body);

        expect(data).toHaveLength(carListCreateMock.length);

        expect(data[0].id).toBeDefined();
        carDefaultExpects(data[0], carListCreateMock[0]);

        expect(data[1].id).toBeDefined();
        carDefaultExpects(data[1], carListCreateMock[1]);
    });
});