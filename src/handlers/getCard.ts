import requestMiddleware from "mtglm-service-sdk/build/middleware/requestResource";

import { LambdaResponse } from "mtglm-service-sdk/build/models/Lambda";
import { ScryfallCardPathParameters } from "mtglm-service-sdk/build/models/PathParameters";

import ScryfallController from "../controllers";

const controller = new ScryfallController();

module.exports.handler = requestMiddleware(
  async (path: ScryfallCardPathParameters): Promise<LambdaResponse> => {
    const { cardId } = path;

    const response = await controller.getCard(cardId);

    return response;
  }
);
