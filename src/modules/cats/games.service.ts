import { BadRequestException, Injectable } from '@nestjs/common';
import { Game } from './entidades/games';

@Injectable()
class GamesService {
    private games: Game[] = [];

    findAll(): Game[] {
        const games = [
            {
                "id": 1,
                "nome": "The Witcher 3: Wild Hunt",
                "nomeDistribuidora": "CD Projekt",
                "nomeDesenvolvedora": "CD Projekt Red",
                "imagemLink": "https://example.com/witcher3.jpg",
                "precoBase": 119.99,
                "descontos": [0.25, 0.50],
                "precoFinal": 59.99,
                "indicePopularidade": 98,
                "notaSteam": 9.8,
                "linkSteam": ""
            },
            {
                "id": 2,
                "nome": "Cyberpunk 2077",
                "nomeDistribuidora": "CD Projekt",
                "nomeDesenvolvedora": "CD Projekt Red",
                "imagemLink": "https://example.com/cyberpunk2077.jpg",
                "precoBase": 199.99,
                "descontos": [0.30],
                "precoFinal": 139.99,
                "indicePopularidade": 85,
                "notaSteam": 7.5,
                "linkSteam": ""
            },
            {
                "id": 3,
                "nome": "Elden Ring",
                "nomeDistribuidora": "Bandai Namco Entertainment",
                "nomeDesenvolvedora": "FromSoftware",
                "imagemLink": "https://example.com/eldenring.jpg",
                "precoBase": 249.99,
                "descontos": [0.10, 0.40],
                "precoFinal": 149.99,
                "indicePopularidade": 95,
                "notaSteam": 9.6,
                "linkSteam": ""
            },
            {
                "id": 4,
                "nome": "Hades",
                "nomeDistribuidora": "Supergiant Games",
                "nomeDesenvolvedora": "Supergiant Games",
                "imagemLink": "https://example.com/hades.jpg",
                "precoBase": 79.99,
                "descontos": [0.20],
                "precoFinal": 63.99,
                "indicePopularidade": 90,
                "notaSteam": 9.3,
                "linkSteam": ""
            },
            {
                "id": 5,
                "nome": "Red Dead Redemption 2",
                "nomeDistribuidora": "Rockstar Games",
                "nomeDesenvolvedora": "Rockstar Studios",
                "imagemLink": "https://example.com/rdr2.jpg",
                "precoBase": 299.99,
                "descontos": [0.50],
                "precoFinal": 149.99,
                "indicePopularidade": 97,
                "notaSteam": 9.7,
                "linkSteam": ""
            },
            {
                "id": 6,
                "nome": "God of War",
                "nomeDistribuidora": "Sony Interactive Entertainment",
                "nomeDesenvolvedora": "Santa Monica Studio",
                "imagemLink": "https://example.com/godofwar.jpg",
                "precoBase": 199.99,
                "descontos": [0.20, 0.40],
                "precoFinal": 119.99,
                "indicePopularidade": 96,
                "notaSteam": 9.5,
                "linkSteam": ""
            },
            {
                "id": 7,
                "nome": "Hollow Knight",
                "nomeDistribuidora": "Team Cherry",
                "nomeDesenvolvedora": "Team Cherry",
                "imagemLink": "https://example.com/hollowknight.jpg",
                "precoBase": 46.99,
                "descontos": [0.35],
                "precoFinal": 30.54,
                "indicePopularidade": 92,
                "notaSteam": 9.4,
                "linkSteam": ""
            },
            {
                "id": 8,
                "nome": "Stardew Valley",
                "nomeDistribuidora": "ConcernedApe",
                "nomeDesenvolvedora": "ConcernedApe",
                "imagemLink": "https://example.com/stardewvalley.jpg",
                "precoBase": 24.99,
                "descontos": [0.50],
                "precoFinal": 12.49,
                "indicePopularidade": 94,
                "notaSteam": 9.6,
                "linkSteam": ""
            },
            {
                "id": 9,
                "nome": "Dark Souls III",
                "nomeDistribuidora": "Bandai Namco Entertainment",
                "nomeDesenvolvedora": "FromSoftware",
                "imagemLink": "https://example.com/darksouls3.jpg",
                "precoBase": 199.99,
                "descontos": [0.25],
                "precoFinal": 149.99,
                "indicePopularidade": 89,
                "notaSteam": 8.9,
                "linkSteam": ""
            },
            {
                "id": 10,
                "nome": "Celeste",
                "nomeDistribuidora": "Matt Makes Games",
                "nomeDesenvolvedora": "Matt Makes Games",
                "imagemLink": "https://example.com/celeste.jpg",
                "precoBase": 36.99,
                "descontos": [0.40],
                "precoFinal": 22.19,
                "indicePopularidade": 88,
                "notaSteam": 9.2,
                "linkSteam": ""
            },
            {
                "id": 11,
                "nome": "Assassin's Creed Valhalla",
                "nomeDistribuidora": "Ubisoft",
                "nomeDesenvolvedora": "Ubisoft Montreal",
                "imagemLink": "https://example.com/acvalhalla.jpg",
                "precoBase": 249.99,
                "descontos": [0.45],
                "precoFinal": 137.49,
                "indicePopularidade": 82,
                "notaSteam": 7.8,
                "linkSteam": ""
            },
            {
                "id": 12,
                "nome": "Resident Evil 4 Remake",
                "nomeDistribuidora": "Capcom",
                "nomeDesenvolvedora": "Capcom",
                "imagemLink": "https://example.com/re4remake.jpg",
                "precoBase": 259.99,
                "descontos": [0.30],
                "precoFinal": 181.99,
                "indicePopularidade": 91,
                "notaSteam": 9.1,
                "linkSteam": ""
            },
            {
                "id": 13,
                "nome": "Death Stranding",
                "nomeDistribuidora": "505 Games",
                "nomeDesenvolvedora": "Kojima Productions",
                "imagemLink": "https://example.com/deathstranding.jpg",
                "precoBase": 199.99,
                "descontos": [0.60],
                "precoFinal": 79.99,
                "indicePopularidade": 84,
                "notaSteam": 8.5,
                "linkSteam": ""
            },
            {
                "id": 14,
                "nome": "Sekiro: Shadows Die Twice",
                "nomeDistribuidora": "Activision",
                "nomeDesenvolvedora": "FromSoftware",
                "imagemLink": "https://example.com/sekiro.jpg",
                "precoBase": 274.99,
                "descontos": [0.50],
                "precoFinal": 137.49,
                "indicePopularidade": 93,
                "notaSteam": 9.0,
                "linkSteam": ""
            },
            {
                "id": 15,
                "nome": "Minecraft",
                "nomeDistribuidora": "Microsoft Studios",
                "nomeDesenvolvedora": "Mojang Studios",
                "imagemLink": "https://example.com/minecraft.jpg",
                "precoBase": 99.99,
                "descontos": [0.15],
                "precoFinal": 84.99,
                "indicePopularidade": 99,
                "notaSteam": 9.7,
                "linkSteam": ""
            },
            {
                "id": 16,
                "nome": "Control",
                "nomeDistribuidora": "505 Games",
                "nomeDesenvolvedora": "Remedy Entertainment",
                "imagemLink": "https://example.com/control.jpg",
                "precoBase": 159.99,
                "descontos": [0.55],
                "precoFinal": 71.99,
                "indicePopularidade": 87,
                "notaSteam": 8.6,
                "linkSteam": ""
            },
            {
                "id": 17,
                "nome": "Dota 2",
                "nomeDistribuidora": "Valve",
                "nomeDesenvolvedora": "Valve",
                "imagemLink": "https://example.com/dota2.jpg",
                "precoBase": 0,
                "descontos": null,
                "precoFinal": 0,
                "indicePopularidade": 100,
                "notaSteam": 9.4,
                "linkSteam": ""
            },
            {
                "id": 18,
                "nome": "Counter-Strike 2",
                "nomeDistribuidora": "Valve",
                "nomeDesenvolvedora": "Valve",
                "imagemLink": "https://example.com/cs2.jpg",
                "precoBase": 0,
                "descontos": null,
                "precoFinal": 0,
                "indicePopularidade": 99,
                "notaSteam": 8.8,
                "linkSteam": ""
            },
            {
                "id": 19,
                "nome": "Warframe",
                "nomeDistribuidora": "Digital Extremes",
                "nomeDesenvolvedora": "Digital Extremes",
                "imagemLink": "https://example.com/warframe.jpg",
                "precoBase": 0,
                "descontos": null,
                "precoFinal": 0,
                "indicePopularidade": 91,
                "notaSteam": 9.0,
                "linkSteam": ""
            },
            {
                "id": 20,
                "nome": "Apex Legends",
                "nomeDistribuidora": "Electronic Arts",
                "nomeDesenvolvedora": "Respawn Entertainment",
                "imagemLink": "https://example.com/apexlegends.jpg",
                "precoBase": 0,
                "descontos": null,
                "precoFinal": 0,
                "indicePopularidade": 93,
                "notaSteam": 8.7,
                "linkSteam": ""
            },
            {
                "id": 21,
                "nome": "Team Fortress 2",
                "nomeDistribuidora": "Valve",
                "nomeDesenvolvedora": "Valve",
                "imagemLink": "https://example.com/tf2.jpg",
                "precoBase": 0,
                "descontos": null,
                "precoFinal": 0,
                "indicePopularidade": 95,
                "notaSteam": 9.1,
                "linkSteam": ""
            }
        ];
        this.games = games;
        return this.games;
    }

    findAllF2P(): Game[] {
        const F2PGames: Game[] = [];
        for(let i = 0; i < this.games.length; i++) {
            if(this.games[i].precoBase === 0) {
                F2PGames.push(this.games[i]);
            }
        }
        return F2PGames;
    }

    findByPopularity(): Game[] {
        const popularGames: Game[] = [];
        for(let i = 0; i < this.games.length; i++) {
            if(this.games[i].indicePopularidade >= 91) {
                popularGames.push(this.games[i]);
            }
        }
        return popularGames;
    }

    findByAppraisal(): Game[] {
        const wellAppraisedGames: Game[] = [];
        for(let i = 0; i < this.games.length; i++) {
            if(this.games[i].notaSteam >= "8.0"){
                wellAppraisedGames.push(this.games[i]);
            }
        }
        return wellAppraisedGames;
    }

    findByName(search: String): Game[] {
        const foundGames: Game[] = [];
        for(let i = 0; i < this.games.length; i++) {
            if(this.games[i].nome.includes(search)){
                foundGames.push(this.games[i]);
            }
        }
        return foundGames;
    }
}

export { GamesService };