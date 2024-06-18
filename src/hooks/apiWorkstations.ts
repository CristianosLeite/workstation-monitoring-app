import axios from 'axios';
import { useEffect, useState } from 'react';
import { Workstation } from "@/src/types/workstation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useWorkstations() {
    const [workstations, setWorkstations] = useState<Workstation[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const ip = await AsyncStorage.getItem("ip");
        const port = await AsyncStorage.getItem("port");

        if (!ip || !port) {
          console.error('IP ou porta não definidos');
          return;
        }

        try {
            const response = await axios.get(`http://${ip}:${port}/api/workstations`);
            setWorkstations(response.data);
        } catch (error) {
            console.error('Erro ao buscar workstations:', error);
        }
      };

      fetchData();
    }, []);

    return workstations;
}
