import { Workstation } from "@/src/types/workstation";

const workstations: Workstation[] = [
    {
        id: "1",
        companyId: "1",
        name: "Estação 10",
        description: "Esta é uma descrição da Estação 10.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        deletedAt: new Date().toLocaleDateString(),
    },
    {
        id: "2",
        companyId: "1",
        name: "Estação 20",
        description: "Esta é uma descrição da Estação 20.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        deletedAt: new Date().toLocaleDateString(),
    },
    {
        id: "3",
        companyId: "1",
        name: "Estação 30",
        description: "Esta é uma descrição da Estação 30.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        deletedAt: new Date().toLocaleDateString(),
    },
    {
        id: "4",
        companyId: "1",
        name: "Estação 40",
        description: "Esta é uma descrição da Estação 40.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        deletedAt: new Date().toLocaleDateString(),
    },
    {
        id: "5",
        companyId: "1",
        name: "Estação 50",
        description: "Esta é uma descrição da Estação 50.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        deletedAt: new Date().toLocaleDateString(),
    },
    {
        id: "6",
        companyId: "1",
        name: "Estação 60",
        description: "Esta é uma descrição da Estação 60.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        deletedAt: new Date().toLocaleDateString(),
    },
    {
        id: "7",
        companyId: "1",
        name: "Estação 70",
        description: "Esta é uma descrição da Estação 70.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        deletedAt: new Date().toLocaleDateString(),
    },
    {
        id: "8",
        companyId: "1",
        name: "Estação 80",
        description: "Esta é uma descrição da Estação 80.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        deletedAt: new Date().toLocaleDateString(),
    },
    {
        id: "9",
        companyId: "1",
        name: "Estação 90",
        description: "Esta é uma descrição da Estação 90.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        deletedAt: new Date().toLocaleDateString(),
    },
];

export const useWorkstations = () => {
    return workstations;
}
