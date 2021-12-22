import { FilmController } from "./filmController";
const mockData = {
    result: [
        {
            "properties": {
                "created": "2021-12-20T08:49:35.181Z",
                "edited": "2021-12-20T08:49:35.181Z",
                "producer": "Gary Kurtz, Rick McCallum",
                "title": "A New Hope",
                "episode_id": 4,
                "director": "George Lucas",
                "release_date": "1977-05-25",
                "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
                "url": "https://www.swapi.tech/api/films/1"
            },
            "description": "A Star Wars Film",
            "_id": "5f63a117cf50d100047f9762",
            "uid": "1",
            "__v": 0
        },
        {
            "properties": {
                "created": "2021-12-20T08:49:35.181Z",
                "edited": "2021-12-20T08:49:35.181Z",
                "producer": "Gary Kurtz, Rick McCallum",
                "title": "The Empire Strikes Back",
                "episode_id": 5,
                "director": "Irvin Kershner",
                "release_date": "1980-05-17",
                "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
                "url": "https://www.swapi.tech/api/films/2"
            },
            "description": "A Star Wars Film",
            "_id": "5f63a117cf50d100047f9763",
            "uid": "2",
            "__v": 0
        },
        {
            "properties": {
                "created": "2021-12-20T08:49:35.181Z",
                "edited": "2021-12-20T08:49:35.181Z",
                "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
                "title": "Return of the Jedi",
                "episode_id": 6,
                "director": "Richard Marquand",
                "release_date": "1983-05-25",
                "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
                "url": "https://www.swapi.tech/api/films/3"
            },
            "description": "A Star Wars Film",
            "_id": "5f63a117cf50d100047f9764",
            "uid": "3",
            "__v": 0
        },
    ],
}

describe('Get all films', () => {
    let filmController;

    beforeEach(() => {
        filmController = new FilmController();
        jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(mockData) }))
    });

    it('returns an array', async () => {
        const expected = await filmController.getParsedFilms();

        expect(expected.length).toBeDefined();
    });

    it('each item has a title', async () => {
        const expected = await filmController.getParsedFilms();

        expected.forEach((result) => {
            expect(result.title).toBeDefined();
        });
    });

    it('each item has a director', async () => {
        const expected = await filmController.getParsedFilms();

        expected.forEach((result) => {
            expect(result.director).toBeDefined();
        });
    });

    it('each item has a crawl', async () => {
        const expected = await filmController.getParsedFilms();

        expected.forEach((result) => {
            expect(result.crawl).toBeDefined();
        });
    });
});
