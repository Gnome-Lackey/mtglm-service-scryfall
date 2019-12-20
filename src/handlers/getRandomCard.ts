import requestMiddleware from "mtglm-service-sdk/build/middleware/requestResource";

import { LambdaResponse } from "mtglm-service-sdk/build/models/Lambda";
import { ScryfallCardQueryParameters } from "mtglm-service-sdk/build/models/QueryParameters";

import * as controller from "../controllers";

module.exports.handler = requestMiddleware(
  async (path: object, data: object, query: ScryfallCardQueryParameters): Promise<LambdaResponse> => {
    const response = await controller.getRandomCard(query);

    return response;
  }
);
