import * as requestClient from "mtglm-service-sdk/build/clients/request";

import ScryfallMapper from "mtglm-service-sdk/build/mappers/scryfall";

import { ScryfallCardQueryParameters } from "mtglm-service-sdk/build/models/QueryParameters";
import { ScryfallCardView, ScryfallSetView } from "mtglm-service-sdk/build/models/Views";

export default class ScryfallService {
  private baseUrl = "https://api.scryfall.com";

  private mapper = new ScryfallMapper();

  async getCard(cardId: string): Promise<ScryfallCardView> {
    const cardResult = await requestClient.get(`${this.baseUrl}/cards/${cardId}`);

    console.log(JSON.stringify(cardResult));

    return this.mapper.toCardView(cardResult as any);
  }

  async getCards(query: ScryfallCardQueryParameters): Promise<ScryfallCardView[]> {
    const queryString = this.mapper.toQueryString(query);

    const cardResults = await requestClient.get(`${this.baseUrl}/cards/search?${queryString}`);

    console.log(JSON.stringify(cardResults));

    return (cardResults as any).map(this.mapper.toCardView);
  }

  async getRandomCard(query: ScryfallCardQueryParameters): Promise<ScryfallCardView> {
    const queryString = this.mapper.toQueryString(query);

    const url = `${this.baseUrl}/cards/random?${queryString}`;

    const cardResult = await requestClient.get(url);

    console.log(JSON.stringify(cardResult));

    return this.mapper.toCardView(cardResult as any);
  }

  async getSet(setCode: string): Promise<ScryfallSetView> {
    const setResult = await requestClient.get(`${this.baseUrl}/sets/${setCode}`);

    return this.mapper.toSetView(setResult as any);
  }
}
