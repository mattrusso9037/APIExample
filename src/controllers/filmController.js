import { ApiService } from '../APIService/ApiService';

export class FilmController {
    /**
     * This class should return an array of "Film" objects, defined by us. We should use the Film class (models/Film) to encapsulate only 
     * the title, director, and opening crawl
     *  example return [{title: 'A New Hope', director: 'George Lucas', crawl: 'A long time ago....'}];
     */
    async getParsedFilms() {
        const filmResponse = await ApiService.getAllFilms();

        return filmResponse.result;
    }
}