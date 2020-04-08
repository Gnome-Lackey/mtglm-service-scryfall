import RequestClient from "mtglm-service-sdk/build/clients/request";

import ScryfallMapper from "mtglm-service-sdk/build/mappers/scryfall";

import { ScryfallCardQueryParameters } from "mtglm-service-sdk/build/models/QueryParameters";
import { ScryfallCardView, ScryfallSetView } from "mtglm-service-sdk/build/models/Views";

export default class ScryfallService {
  private baseUrl = "https://api.scryfall.com";

  private mapper = new ScryfallMapper();

  private client = new RequestClient();

  getCard = async (cardId: string): Promise<ScryfallCardView> => {
    const cardResult = await this.client.get(`${this.baseUrl}/cards/${cardId}`);

    console.log(JSON.stringify(cardResult));

    return this.mapper.toCardView(cardResult as any);
  };

  getCards = async (query: ScryfallCardQueryParameters): Promise<ScryfallCardView[]> => {
    const queryString = this.mapper.toQueryString(query);

    const cardResults = await this.client.get(`${this.baseUrl}/cards/search?${queryString}`);

    console.log(JSON.stringify(cardResults));

    return (cardResults as any).map(this.mapper.toCardView);
  };

  getRandomCard = async (query: ScryfallCardQueryParameters): Promise<ScryfallCardView> => {
    const queryString = this.mapper.toQueryString(query);

    const url = `${this.baseUrl}/cards/random?${queryString}`;

    const cardResult = await this.client.get(url);

    console.log(JSON.stringify(cardResult));

    return this.mapper.toCardView(cardResult as any);
  };

  getSet = async (setCode: string): Promise<ScryfallSetView> => {
    const setResult = await this.client.get(`${this.baseUrl}/sets/${setCode}`);

    return this.mapper.toSetView(setResult as any);
  };
}
