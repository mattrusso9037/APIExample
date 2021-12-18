import { config } from "./config"

export class ApiService {
    constructor() {
        throw new Error('This class is static and cannot be instantiated.')
    }

    /**
     * Get's all stqar wars species
     */
    static async getSpeciesByPage(page = '1') {
        try {
            const response = await fetch(`${config.BASE_URL}/species?page=${page}&limit=10`)

            const data = await response.json();
            console.log('data', data);

            return data;
        } catch (e) {
            console.error(e);
            return e;
        }
    }
}