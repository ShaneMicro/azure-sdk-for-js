/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualMachineTemplates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureArcVMwareManagementServiceAPI } from "../azureArcVMwareManagementServiceAPI";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  VirtualMachineTemplate,
  VirtualMachineTemplatesListNextOptionalParams,
  VirtualMachineTemplatesListOptionalParams,
  VirtualMachineTemplatesListByResourceGroupNextOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesCreateOptionalParams,
  VirtualMachineTemplatesCreateResponse,
  VirtualMachineTemplatesGetOptionalParams,
  VirtualMachineTemplatesGetResponse,
  VirtualMachineTemplatesUpdateOptionalParams,
  VirtualMachineTemplatesUpdateResponse,
  VirtualMachineTemplatesDeleteOptionalParams,
  VirtualMachineTemplatesListResponse,
  VirtualMachineTemplatesListByResourceGroupResponse,
  VirtualMachineTemplatesListNextResponse,
  VirtualMachineTemplatesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VirtualMachineTemplates operations. */
export class VirtualMachineTemplatesImpl implements VirtualMachineTemplates {
  private readonly client: AzureArcVMwareManagementServiceAPI;

  /**
   * Initialize a new instance of the class VirtualMachineTemplates class.
   * @param client Reference to the service client
   */
  constructor(client: AzureArcVMwareManagementServiceAPI) {
    this.client = client;
  }

  /**
   * List of virtualMachineTemplates in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: VirtualMachineTemplatesListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineTemplate> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: VirtualMachineTemplatesListOptionalParams
  ): AsyncIterableIterator<VirtualMachineTemplate[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: VirtualMachineTemplatesListOptionalParams
  ): AsyncIterableIterator<VirtualMachineTemplate> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List of virtualMachineTemplates in a resource group.
   * @param resourceGroupName The Resource Group Name.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: VirtualMachineTemplatesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineTemplate> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: VirtualMachineTemplatesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<VirtualMachineTemplate[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: VirtualMachineTemplatesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<VirtualMachineTemplate> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create Or Update virtual machine template.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineTemplatesCreateResponse>,
      VirtualMachineTemplatesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineTemplatesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, virtualMachineTemplateName, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create Or Update virtual machine template.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesCreateOptionalParams
  ): Promise<VirtualMachineTemplatesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      virtualMachineTemplateName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements virtual machine template GET method.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesGetOptionalParams
  ): Promise<VirtualMachineTemplatesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualMachineTemplateName, options },
      getOperationSpec
    );
  }

  /**
   * API to update certain properties of the virtual machine template resource.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesUpdateOptionalParams
  ): Promise<VirtualMachineTemplatesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualMachineTemplateName, options },
      updateOperationSpec
    );
  }

  /**
   * Implements virtual machine template DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, virtualMachineTemplateName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements virtual machine template DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      virtualMachineTemplateName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List of virtualMachineTemplates in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: VirtualMachineTemplatesListOptionalParams
  ): Promise<VirtualMachineTemplatesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * List of virtualMachineTemplates in a resource group.
   * @param resourceGroupName The Resource Group Name.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: VirtualMachineTemplatesListByResourceGroupOptionalParams
  ): Promise<VirtualMachineTemplatesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: VirtualMachineTemplatesListNextOptionalParams
  ): Promise<VirtualMachineTemplatesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The Resource Group Name.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: VirtualMachineTemplatesListByResourceGroupNextOptionalParams
  ): Promise<VirtualMachineTemplatesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineTemplate
    },
    201: {
      bodyMapper: Mappers.VirtualMachineTemplate
    },
    202: {
      bodyMapper: Mappers.VirtualMachineTemplate
    },
    204: {
      bodyMapper: Mappers.VirtualMachineTemplate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualMachineTemplateName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineTemplate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualMachineTemplateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineTemplate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualMachineTemplateName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualMachineTemplateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineTemplatesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineTemplatesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineTemplatesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineTemplatesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
