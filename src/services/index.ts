import * as requestClient from "mtglm-service-sdk/build/clients/request";

import * as scryfallMapper from "mtglm-service-sdk/build/mappers/scryfall";

import { ScryfallCardQueryParameters } from "mtglm-service-sdk/build/models/QueryParameters";
import { ScryfallCardView, ScryfallSetView } from "mtglm-service-sdk/build/models/Views";

const SCRYFALL_BASE_URL = "https://api.scryfall.com";

export const getCard = async (cardId: string): Promise<ScryfallCardView> => {
  const cardResult = await requestClient.get(`${SCRYFALL_BASE_URL}/cards/${cardId}`);

  console.log(JSON.stringify(cardResult));

  return scryfallMapper.toCardView(cardResult as any);
};

export const getCards = async (query: ScryfallCardQueryParameters): Promise<ScryfallCardView[]> => {
  const queryString = scryfallMapper.toQueryString(query);

  const cardResults = await requestClient.get(`${SCRYFALL_BASE_URL}/cards/search?${queryString}`);

  console.log(JSON.stringify(cardResults));

  return (cardResults as any).map(scryfallMapper.toCardView);
};

export const getRandomCard = async (
  query: ScryfallCardQueryParameters
): Promise<ScryfallCardView> => {
  const queryString = scryfallMapper.toQueryString(query);

  const url = `${SCRYFALL_BASE_URL}/cards/random?${queryString}`;

  const cardResult = await requestClient.get(url);

  console.log(JSON.stringify(cardResult));

  return scryfallMapper.toCardView(cardResult as any);
};

export const getSet = async (setCode: string): Promise<ScryfallSetView> => {
  const setResult = await requestClient.get(`${SCRYFALL_BASE_URL}/sets/${setCode}`);

  return scryfallMapper.toSetView(setResult as any);
};
