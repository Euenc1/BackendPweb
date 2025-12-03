import { BadRequestException, Injectable } from '@nestjs/common';
import { Game } from './entidades/games';
import { CreateGameDto } from './dtos/create-game.dto';

@Injectable()
class GamesService {
    private games: Game[] = [];

    findAll(): Game[] {
        return this.games;
    }

    create(game: CreateGameDto): Game {
        const existGame = this.games.find((g) => (g.nome.toLowerCase() === game.nome.toLowerCase() && game.nomeDesenvolvedora.toLowerCase() === g.nomeDesenvolvedora.toLowerCase()));

        if(existGame) {
            throw new BadRequestException('Esse jogo já existe.');
        }

        this.games.push(game);
        return game;
    }
}

export { GamesService };