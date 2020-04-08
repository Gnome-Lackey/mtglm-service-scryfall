import requestMiddleware from "mtglm-service-sdk/build/middleware/requestResource";

import { LambdaResponse } from "mtglm-service-sdk/build/models/Lambda";
import { ScryfallSetPathParameters } from "mtglm-service-sdk/build/models/PathParameters";

import ScryfallController from "../controllers";

const controller = new ScryfallController();

module.exports.handler = requestMiddleware(
  async (path: ScryfallSetPathParameters): Promise<LambdaResponse> => {
    const { code } = path;

    const response = await controller.getSet(code);

    return response;
  }
);
