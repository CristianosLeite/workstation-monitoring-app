import { Workstation } from "@/src/types/workstation";
import axios from 'axios';

let workstations: Workstation[] = [];

async function getWorkstations() {
    try {
        const response = await axios.get('http://172.18.15.10:4000/api/workstations');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function init() {
    workstations = await getWorkstations();
}

init();

export const useWorkstations = () => {
    return workstations;
}
