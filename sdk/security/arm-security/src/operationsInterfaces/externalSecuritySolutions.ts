/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ExternalSecuritySolutionUnion,
  ExternalSecuritySolutionsListOptionalParams,
  ExternalSecuritySolutionsListByHomeRegionOptionalParams,
  ExternalSecuritySolutionsGetOptionalParams,
  ExternalSecuritySolutionsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ExternalSecuritySolutions. */
export interface ExternalSecuritySolutions {
  /**
   * Gets a list of external security solutions for the subscription.
   * @param options The options parameters.
   */
  list(
    options?: ExternalSecuritySolutionsListOptionalParams
  ): PagedAsyncIterableIterator<ExternalSecuritySolutionUnion>;
  /**
   * Gets a list of external Security Solutions for the subscription and location.
   * @param options The options parameters.
   */
  listByHomeRegion(
    options?: ExternalSecuritySolutionsListByHomeRegionOptionalParams
  ): PagedAsyncIterableIterator<ExternalSecuritySolutionUnion>;
  /**
   * Gets a specific external Security Solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param externalSecuritySolutionsName Name of an external security solution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    externalSecuritySolutionsName: string,
    options?: ExternalSecuritySolutionsGetOptionalParams
  ): Promise<ExternalSecuritySolutionsGetResponse>;
}