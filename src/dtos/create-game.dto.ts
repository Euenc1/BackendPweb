export class CreateGameDto {
    nome: String;
    nomeDistribuidora: String;
    nomeDesenvolvedora: String;
    imagemLink: String;
    precoBase: number;
    descontos: Array<number>;
    precoFinal: number;
    indicePopularidade: number; // número de análises positivas nos últimos 30 dias
    notaSteam: number; // Razão entre o número de análises positivas e o totaol de análises
    linkSteam: String;
}