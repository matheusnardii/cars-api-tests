import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
import { prisma } from "../../database/prisma";
import "reflect-metadata";

jest.mock('../../database/prisma', () => ({
    __esModule: true,
    prisma: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
    mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

