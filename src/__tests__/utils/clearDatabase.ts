import { prisma } from "../../database/prisma";
import "reflect-metadata";

beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
})