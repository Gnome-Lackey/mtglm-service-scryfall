import { logFailure, logSuccess } from "mtglm-service-sdk/build/utils/logger";
import { handleError, handleSuccess } from "mtglm-service-sdk/build/utils/response";

import { LambdaResponse } from "mtglm-service-sdk/build/models/Lambda";
import { ScryfallCardQueryParameters } from "mtglm-service-sdk/build/models/QueryParameters";

import ScryfallService from "../services";

export default class ScryfallController {
  private service = new ScryfallService();

  getCard = async (cardId: string): Promise<LambdaResponse> => {
    try {
      const result = await this.service.getCard(cardId);

      logSuccess("DYNAMO", "GET card from Scryfall", result);

      return handleSuccess(result);
    } catch (error) {
      logFailure("DYNAMO", "GET card from Scryfall", error);

      return handleError(error);
    }
  };

  getCards = async (query: ScryfallCardQueryParameters): Promise<LambdaResponse> => {
    try {
      const results = await this.service.getCards(query);

      logSuccess("DYNAMO", "GET cards from Scryfall", results);

      return handleSuccess(results);
    } catch (error) {
      logFailure("DYNAMO", "GET cards from Scryfall", error);

      return handleError(error);
    }
  };

  getRandomCard = async (query: ScryfallCardQueryParameters): Promise<LambdaResponse> => {
    try {
      const results = await this.service.getRandomCard(query);

      logSuccess("DYNAMO", "GET random card from Scryfall", results);

      return handleSuccess(results);
    } catch (error) {
      logFailure("DYNAMO", "GET random card from Scryfall", error);

      return handleError(error);
    }
  };

  getSet = async (setCode: string): Promise<LambdaResponse> => {
    try {
      const result = await this.service.getSet(setCode);

      logSuccess("DYNAMO", "GET set from Scryfall", result);

      return handleSuccess(result);
    } catch (error) {
      logFailure("DYNAMO", "GET set from Scryfall", error);

      return handleError(error);
    }
  };
}
