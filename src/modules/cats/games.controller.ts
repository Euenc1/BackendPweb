import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { GamesService } from './games.service';
import { Game } from './entidades/games';
import { CreateGameDto } from './dtos/create-game.dto';
import { postMessageToThread } from 'worker_threads';


@Controller('gamehunter')
class GamesController {
    constructor(private readonly gamesService: GamesService) {}
    /* Quando o usuário acessar a rota /home, deve ser retornada uma lista
    com todos os jogos cadastrados no sistema, ou seja, uma espécie de
    "createAll";
    */

    @Get('/home')
    findAll(): Game[] {
        return this.gamesService.findAll();
    }

    @Get('/f2p')
    findAllF2P(): Game[] {
        return this.gamesService.findAllF2P();
    }

    @Get('/popular')
    findPopular(): Game[] {
        return this.gamesService.findByPopularity();
    }

    @Get('/well-appraised')
    findWellAppraised(): Game[] {
        return this.gamesService.findByAppraisal();
    }

    @Post('/search')
    findByName(): Game[] {
        return this.gamesService.findByName();
        // Função de buscar jogos por nome (barra de pesquisa no site);
    }
}

export { GamesController };