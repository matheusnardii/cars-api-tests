import { TCar, TCarCreateBody } from "../../schemas/cars.schemas";

export const carDefaultExpects = (data: TCar, expected: TCarCreateBody) => {
    expect(data.id).toBeDefined();
    expect(data.name).toBe(expected.name);
    expect(data.brand).toBe(expected.brand);
    expect(data.description).toBe(expected.description);
    expect(data.year).toBe(expected.year);
    expect(data.km).toBe(expected.km);
}