import { config } from "./config"

export class ApiService {
    constructor() {
        throw new Error('This class is static and cannot be instantiated.')
    }

    /**
     * Get star wars species in increments of 10
     */
    static async getSpeciesByPage(page = '1') {
        try {
            const response = await fetch(`${config.BASE_URL}/species?page=${page}&limit=10`);
            const data = await response.json();

            return data;
        } catch (e) {
            console.error(e);
            return e;
        }
    }
}