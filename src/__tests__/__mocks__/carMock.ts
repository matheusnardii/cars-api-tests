export const carCreateBodyMock = { name: "Nome", description: "Descricao", brand: "Marca", year: 2024, km: 0 };

export const carWithInvalidNameMock = {name: 123 , description: "Descricao", brand: "Marca", year: 2024, km: 0};

export const carWithInvalidBrandMock = {name: "Nome" , description: "Descricao", brand: 1, year: 2024, km: 0};

export const carWithInvalidDescriptionMock = {name: "Nome" , description: 1, brand: "Marca", year: 2024, km: 0};

export const carWithInvalidYearMock = {name: "Nome", description: "Descricao", brand: "Marca", year: "2024", km: 0};

export const carWithInvalidKmMock = {name: "Nome", description: "Descricao", brand: "Marca", year: 2024, km: "123"};

export const carWithInvalidBodyMock = { name: 123, description: 123, brand: 123, year: "2024", km: "0" };

export const carUpdateBodyMock = { description: "Descricao atualizada" };

export const carUpdateInvalidNameMock = {name: 123 , description: "Descricao", brand: "Marca", year: 2024, km: 0};

export const carUpdateInvalidBrandMock = {name: "Nome" , description: "Descricao", brand: 1, year: 2024, km: 0};

export const carUpdateInvalidDescriptionMock = {name: "Nome" , description: 1, brand: "Marca", year: 2024, km: 0};

export const carUpdateInvalidYearMock = {name: "Nome", description: "Descricao", brand: "Marca", year: "2024", km: 0};

export const carUpdateInvalidKmMock = {name: "Nome", description: "Descricao", brand: "Marca", year: 2024, km: "123"};

export const carUpdateInvalidBodyMock = { name: 123, description: 123, brand: 123, year: "2024", km: "0" };

export const invalidId = "100000";

export const carMock = { id: "ebca7b7d-38e2-46ce-bd06-37f06168d4e0", name: "Nome", description: "Descricao", brand: "Marca", year: 2024, km: 0 };

export const carListCreateMock = [{ name: "Nome1", description: "Descricao1", brand: "Marca1", year: 2024, km: 0 }, { name: "Nome2", description: "Descricao2", brand: "Marca2", year: 2024, km: 1 }];

export const carListMock = [
    { id: "ebca7b7d-38e2-46ce-bd06-37f06168d4e0", name: "Nome", description: "Descricao", brand: "Marca", year: 2024, km: 0},
    { id: "712018d1-9050-42dd-ad1c-26e6485b45b8", name: "Nome", description: "Descricao", brand: "Marca", year: 2023, km: 0 },
];



