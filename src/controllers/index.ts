import MTGLMLogger from "mtglm-service-sdk/build/utils/logger";
import ResponseHandler from "mtglm-service-sdk/build/utils/response";

import { LambdaResponse } from "mtglm-service-sdk/build/models/Lambda";
import { ScryfallCardQueryParameters } from "mtglm-service-sdk/build/models/QueryParameters";

import ScryfallService from "../services";

export default class ScryfallController {
  private service = new ScryfallService();

  private logger = new MTGLMLogger();
  private responseHandler = new ResponseHandler();

  getCard = async (cardId: string): Promise<LambdaResponse> => {
    try {
      const result = await this.service.getCard(cardId);

      this.logger.success("DYNAMO", "GET card from Scryfall", result);

      return this.responseHandler.success(result);
    } catch (error) {
      this.logger.failure("DYNAMO", "GET card from Scryfall", error);

      return this.responseHandler.error(error);
    }
  };

  getCards = async (query: ScryfallCardQueryParameters): Promise<LambdaResponse> => {
    try {
      const results = await this.service.getCards(query);

      this.logger.success("DYNAMO", "GET cards from Scryfall", results);

      return this.responseHandler.success(results);
    } catch (error) {
      this.logger.failure("DYNAMO", "GET cards from Scryfall", error);

      return this.responseHandler.error(error);
    }
  };

  getRandomCard = async (query: ScryfallCardQueryParameters): Promise<LambdaResponse> => {
    try {
      const results = await this.service.getRandomCard(query);

      this.logger.success("DYNAMO", "GET random card from Scryfall", results);

      return this.responseHandler.success(results);
    } catch (error) {
      this.logger.failure("DYNAMO", "GET random card from Scryfall", error);

      return this.responseHandler.error(error);
    }
  };

  getSet = async (setCode: string): Promise<LambdaResponse> => {
    try {
      const result = await this.service.getSet(setCode);

      this.logger.success("DYNAMO", "GET set from Scryfall", result);

      return this.responseHandler.success(result);
    } catch (error) {
      this.logger.failure("DYNAMO", "GET set from Scryfall", error);

      return this.responseHandler.error(error);
    }
  };
}
