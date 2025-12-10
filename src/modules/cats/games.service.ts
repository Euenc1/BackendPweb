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
                "imagemLink": "https://th.bing.com/th/id/R.ef088bdab155160154141fa3898892af?rik=fFj3Q34goxm7Jg&pid=ImgRaw&r=0",
                "precoBase": 119.99,
                "descontos": [0.25, 0.50],
                "precoFinal": 59.99,
                "indicePopularidade": 98,
                "notaSteam": 9.8,
                "linkSteam": "https://store.steampowered.com/app/292030/the_witcher_3_wild_hunt/"
            },
            {
                "id": 2,
                "nome": "Cyberpunk 2077",
                "nomeDistribuidora": "CD Projekt",
                "nomeDesenvolvedora": "CD Projekt Red",
                "imagemLink": "https://tse4.mm.bing.net/th/id/OIP.NZ53080KQK6_O7wTDRTFxwHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                "precoBase": 199.99,
                "descontos": [0.30],
                "precoFinal": 139.99,
                "indicePopularidade": 85,
                "notaSteam": 7.5,
                "linkSteam": "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
            },
            {
                "id": 3,
                "nome": "Elden Ring",
                "nomeDistribuidora": "Bandai Namco Entertainment",
                "nomeDesenvolvedora": "FromSoftware",
                "imagemLink": "https://tse1.mm.bing.net/th/id/OIP.uv47fi4i16P5BP2PM6DjCgHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                "precoBase": 249.99,
                "descontos": [0.10, 0.40],
                "precoFinal": 149.99,
                "indicePopularidade": 95,
                "notaSteam": 9.6,
                "linkSteam": "https://store.steampowered.com/app/1245620/ELDEN_RING/"
            },
            {
                "id": 4,
                "nome": "Hades",
                "nomeDistribuidora": "Supergiant Games",
                "nomeDesenvolvedora": "Supergiant Games",
                "imagemLink": "https://th.bing.com/th/id/R.691e0a11c8f815e662145b50e720abb4?rik=rPXQ6KPS%2bQSlvg&pid=ImgRaw&r=0",
                "precoBase": 79.99,
                "descontos": [0.20],
                "precoFinal": 63.99,
                "indicePopularidade": 90,
                "notaSteam": 9.3,
                "linkSteam": "https://store.steampowered.com/app/1145360/hades/"
            },
            {
                "id": 5,
                "nome": "Red Dead Redemption 2",
                "nomeDistribuidora": "Rockstar Games",
                "nomeDesenvolvedora": "Rockstar Studios",
                "imagemLink": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqiFTkpXDEcGd02yZVWd6SP1yhPwvL_MGSs3iPdyeu9569k1VKf-EGLsfZy66rnEija4Qd1QOQNwFX7hOFsp_HEVYlxpiRFM5fB2ozKwyg9-mAZc0aALTjLBNLK3Cr_7zS-7kcYuh6a8YIb-MwYpZt36pR1dqPlHI_8PYuuzECVvKiz3mHHqf5pnZt/s550/c55c4b73824ca1b1f1cc937e0fd00eef.png",
                "precoBase": 299.99,
                "descontos": [0.50],
                "precoFinal": 149.99,
                "indicePopularidade": 97,
                "notaSteam": 9.7,
                "linkSteam": "https://store.steampowered.com/app/1174180/red_dead_redemption_2/"
            },
            {
                "id": 6,
                "nome": "God of War",
                "nomeDistribuidora": "Sony Interactive Entertainment",
                "nomeDesenvolvedora": "Santa Monica Studio",
                "imagemLink": "https://th.bing.com/th/id/R.164d108ce753d8638c30fbf6fcdad603?rik=5QZwYP0UwWvLcA&pid=ImgRaw&r=0",
                "precoBase": 199.99,
                "descontos": [0.20, 0.40],
                "precoFinal": 119.99,
                "indicePopularidade": 96,
                "notaSteam": 9.5,
                "linkSteam": "https://store.steampowered.com/app/1593500/God_of_War/"
            },
            {
                "id": 7,
                "nome": "Hollow Knight",
                "nomeDistribuidora": "Team Cherry",
                "nomeDesenvolvedora": "Team Cherry",
                "imagemLink": "https://tse4.mm.bing.net/th/id/OIP.kFfHChbP-LLcMbu9o59MYAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                "precoBase": 46.99,
                "descontos": [0.35],
                "precoFinal": 30.54,
                "indicePopularidade": 92,
                "notaSteam": "9.4",
                "linkSteam": "https://store.steampowered.com/app/367520/Hollow_Knight/"
            },
            {
                "id": 8,
                "nome": "Stardew Valley",
                "nomeDistribuidora": "ConcernedApe",
                "nomeDesenvolvedora": "ConcernedApe",
                "imagemLink": "https://tse4.mm.bing.net/th/id/OIP.HQ7kMLnz--961Cif-ZVzzAHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                "precoBase": 24.99,
                "descontos": [0.50],
                "precoFinal": 12.49,
                "indicePopularidade": 94,
                "notaSteam": "9.6",
                "linkSteam": "https://store.steampowered.com/app/413150/Stardew_Valley/"
            },
            {
                "id": 9,
                "nome": "Dark Souls III",
                "nomeDistribuidora": "Bandai Namco Entertainment",
                "nomeDesenvolvedora": "FromSoftware",
                "imagemLink": "https://th.bing.com/th/id/R.fa3b9799ce4cbb4d6e53f8465c1a81fc?rik=8BAMrrg56tJb8Q&pid=ImgRaw&r=0",
                "precoBase": 199.99,
                "descontos": [0.25],
                "precoFinal": 149.99,
                "indicePopularidade": 89,
                "notaSteam": "8.9",
                "linkSteam": "https://store.steampowered.com/app/374320/DARK_SOULS_III/"
            },
            {
                "id": 10,
                "nome": "Celeste",
                "nomeDistribuidora": "Matt Makes Games",
                "nomeDesenvolvedora": "Matt Makes Games",
                "imagemLink": "https://tse4.mm.bing.net/th/id/OIP.UfqiFpldNctlNC_W1IAOCgHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                "precoBase": 36.99,
                "descontos": [0.40],
                "precoFinal": 22.19,
                "indicePopularidade": 88,
                "notaSteam": "9.2",
                "linkSteam": "https://store.steampowered.com/app/504230/Celeste/"
            },
            {
                "id": 11,
                "nome": "Assassin's Creed Valhalla",
                "nomeDistribuidora": "Ubisoft",
                "nomeDesenvolvedora": "Ubisoft Montreal",
                "imagemLink": "https://th.bing.com/th/id/R.9458e3d57a1f900e1cdc290b78b9c2e7?rik=yMWNskti2Su49w&pid=ImgRaw&r=0",
                "precoBase": 249.99,
                "descontos": [0.45],
                "precoFinal": 137.49,
                "indicePopularidade": 82,
                "notaSteam": "7.8",
                "linkSteam": "https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/"
            },
            {
                "id": 12,
                "nome": "Resident Evil 4 Remake",
                "nomeDistribuidora": "Capcom",
                "nomeDesenvolvedora": "Capcom",
                "imagemLink": "https://th.bing.com/th/id/R.3578d6926ff196b2b842557681b8b0b2?rik=Mk9SA%2bKYEdgtWA&pid=ImgRaw&r=0",
                "precoBase": 259.99,
                "descontos": [0.30],
                "precoFinal": 181.99,
                "indicePopularidade": 91,
                "notaSteam": "9.1",
                "linkSteam": "https://store.steampowered.com/app/2050650/Resident_Evil_4/"
            },
            {
                "id": 13,
                "nome": "Death Stranding",
                "nomeDistribuidora": "505 Games",
                "nomeDesenvolvedora": "Kojima Productions",
                "imagemLink": "https://th.bing.com/th/id/R.fe4e51f1801fba36e452aa3466625789?rik=VJ2Qkl3Fdo%2fbKw&pid=ImgRaw&r=0",
                "precoBase": 199.99,
                "descontos": [0.60],
                "precoFinal": 79.99,
                "indicePopularidade": 84,
                "notaSteam": "8.5",
                "linkSteam": "https://store.steampowered.com/app/1190460/DEATH_STRANDING/"
            },
            {
                "id": 14,
                "nome": "Sekiro: Shadows Die Twice",
                "nomeDistribuidora": "Activision",
                "nomeDesenvolvedora": "FromSoftware",
                "imagemLink": "https://tse4.mm.bing.net/th/id/OIP.N2gl68MKG_Mw5nUMRXKi2QHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                "precoBase": 274.99,
                "descontos": [0.50],
                "precoFinal": 137.49,
                "indicePopularidade": 93,
                "notaSteam": "9.0",
                "linkSteam": "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/"
            },
            {
                "id": 15,
                "nome": "Minecraft",
                "nomeDistribuidora": "Microsoft Studios",
                "nomeDesenvolvedora": "Mojang Studios",
                "imagemLink": "https://store-images.s-microsoft.com/image/apps.60323.14294656681058683.4d17bdd8-7026-429a-846f-cf7836bc9e56.a69e6905-8926-4a48-b243-14a039b97aae?mode=scale&q=90&h=1080&w=1920&format=jpg",
                "precoBase": 99.99,
                "descontos": [0.15],
                "precoFinal": 84.99,
                "indicePopularidade": 99,
                "notaSteam": "9.7",
                "linkSteam": "https://store.steampowered.com/app/1672970/Minecraft/"
            },
            {
                "id": 16,
                "nome": "Control",
                "nomeDistribuidora": "505 Games",
                "nomeDesenvolvedora": "Remedy Entertainment",
                "imagemLink": "https://tse1.mm.bing.net/th/id/OIP.CkA_oDscqXBicFdYtg9uwwHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                "precoBase": 159.99,
                "descontos": [0.55],
                "precoFinal": 71.99,
                "indicePopularidade": 87,
                "notaSteam": "8.6",
                "linkSteam": "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/"
            },
            {
                "id": 17,
                "nome": "Dota 2",
                "nomeDistribuidora": "Valve",
                "nomeDesenvolvedora": "Valve",
                "imagemLink": "https://tse1.mm.bing.net/th/id/OIP.NiN021BoJ3x1C5BN54pMWAHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                "precoBase": 0,
                "descontos": null,
                "precoFinal": 0,
                "indicePopularidade": 100,
                "notaSteam": "9.4",
                "linkSteam": "https://store.steampowered.com/app/570/Dota_2/"
            },
            {
                "id": 18,
                "nome": "Counter-Strike 2",
                "nomeDistribuidora": "Valve",
                "nomeDesenvolvedora": "Valve",
                "imagemLink": "https://assets-prd.ignimgs.com/2023/03/22/keyart-wide-1-1679503853654-1679505306655.jpeg",
                "precoBase": 0,
                "descontos": null,
                "precoFinal": 0,
                "indicePopularidade": 99,
                "notaSteam": "8.8",
                "linkSteam": "https://store.steampowered.com/app/730/CounterStrike_2/"
            },
            {
                "id": 19,
                "nome": "Warframe",
                "nomeDistribuidora": "Digital Extremes",
                "nomeDesenvolvedora": "Digital Extremes",
                "imagemLink": "https://th.bing.com/th/id/R.3465c583ea184729c4baac5abd38e5bc?rik=cdoXEl1A95UDCw&pid=ImgRaw&r=0",
                "precoBase": 0,
                "descontos": null,
                "precoFinal": 0,
                "indicePopularidade": 91,
                "notaSteam": "9.0",
                "linkSteam": "https://store.steampowered.com/app/230410/Warframe/"
            },
            {
                "id": 20,
                "nome": "Apex Legends",
                "nomeDistribuidora": "Electronic Arts",
                "nomeDesenvolvedora": "Respawn Entertainment",
                "imagemLink": "https://tse4.mm.bing.net/th/id/OIP.9QJhGGpN36Cn6ntYyjj87wHaD4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
                "precoBase": 0,
                "descontos": null,
                "precoFinal": 0,
                "indicePopularidade": 93,
                "notaSteam": "8.7",
                "linkSteam": "https://store.steampowered.com/app/1172470/Apex_Legends/"
            },
            {
                "id": 21,
                "nome": "Team Fortress 2",
                "nomeDistribuidora": "Valve",
                "nomeDesenvolvedora": "Valve",
                "imagemLink": "https://th.bing.com/th/id/R.a9662c4393b82b16a3871de51cd636ef?rik=2zZmOza8GZ8Kvg&pid=ImgRaw&r=0",
                "precoBase": 0,
                "descontos": null,
                "precoFinal": 0,
                "indicePopularidade": 95,
                "notaSteam": "9.1",
                "linkSteam": "https://store.steampowered.com/app/440/Team_Fortress_2/"
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