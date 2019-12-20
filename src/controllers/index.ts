import { logFailure, logSuccess } from "mtglm-service-sdk/build/utils/logger";
import { handleError, handleSuccess } from "mtglm-service-sdk/build/utils/response";

import { LambdaResponse } from "mtglm-service-sdk/build/models/Lambda";

import * as service from "../services";
import { ScryfallCardQueryParameters } from "mtglm-service-sdk/build/models/QueryParameters";

export const getCard = async (cardId: string): Promise<LambdaResponse> => {
  try {
    const result = await service.getCard(cardId);

    logSuccess("DYNAMO", "GET card from Scryfall", result);

    return handleSuccess(result);
  } catch (error) {
    logFailure("DYNAMO", "GET card from Scryfall", error);

    return handleError(error);
  }
};

export const getCards = async (query: ScryfallCardQueryParameters): Promise<LambdaResponse> => {
  try {
    const results = await service.getCards(query);

    logSuccess("DYNAMO", "GET cards from Scryfall", results);

    return handleSuccess(results);
  } catch (error) {
    logFailure("DYNAMO", "GET cards from Scryfall", error);

    return handleError(error);
  }
};

export const getRandomCard = async (query: ScryfallCardQueryParameters): Promise<LambdaResponse> => {
  try {
    const results = await service.getRandomCard(query);

    logSuccess("DYNAMO", "GET random card from Scryfall", results);

    return handleSuccess(results);
  } catch (error) {
    logFailure("DYNAMO", "GET random card from Scryfall", error);

    return handleError(error);
  }
};

export const getSet = async (setCode: string): Promise<LambdaResponse> => {
  try {
    const result = await service.getSet(setCode);

    logSuccess("DYNAMO", "GET set from Scryfall", result);

    return handleSuccess(result);
  } catch (error) {
    logFailure("DYNAMO", "GET set from Scryfall", error);

    return handleError(error);
  }
};
