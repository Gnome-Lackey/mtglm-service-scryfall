import requestMiddleware from "mtglm-service-sdk/build/middleware/requestResource";

import { LambdaResponse } from "mtglm-service-sdk/build/models/Lambda";
import { ScryfallCardQueryParameters } from "mtglm-service-sdk/build/models/QueryParameters";

import * as controller from "../controllers";

module.exports.handler = requestMiddleware(
  async (path: any, data: any, query: ScryfallCardQueryParameters): Promise<LambdaResponse> => {
    const response = await controller.getCards(query);

    return response;
  }
);
