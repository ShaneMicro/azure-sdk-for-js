# client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for in some common scenarios.

| **File Name**                                                                               | **Description**                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [checkLocalNameAvailability.js][checklocalnameavailability]                                 | Check Name Availability for local uniqueness x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/proxy/CheckNameAvailabilityForLocalUniqueness.json |
| [createRemoteRenderingAccount.js][createremoterenderingaccount]                             | Creating or Updating a Remote Rendering Account. x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/remote-rendering/Put.json                      |
| [createSpatialAnchorAccount.js][createspatialanchoraccount]                                 | Creating or Updating a Spatial Anchors Account. x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/spatial-anchors/Put.json                        |
| [deleteRemoteRenderingAccount.js][deleteremoterenderingaccount]                             | Delete a Remote Rendering Account. x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/remote-rendering/Delete.json                                 |
| [deleteSpatialAnchorsAccount.js][deletespatialanchorsaccount]                               | Delete a Spatial Anchors Account. x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/spatial-anchors/Delete.json                                   |
| [getRemoteRenderingAccount.js][getremoterenderingaccount]                                   | Retrieve a Remote Rendering Account. x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/remote-rendering/Get.json                                  |
| [getSpatialAnchorsAccount.js][getspatialanchorsaccount]                                     | Retrieve a Spatial Anchors Account. x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/spatial-anchors/Get.json                                    |
| [listAvailableOperations.js][listavailableoperations]                                       | Exposing Available Operations x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/proxy/ExposingAvailableOperations.json                            |
| [listRemoteRenderingAccountKey.js][listremoterenderingaccountkey]                           | List Both of the 2 Keys of a Remote Rendering Account x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/remote-rendering/ListKeys.json            |
| [listRemoteRenderingAccountsByResourceGroup.js][listremoterenderingaccountsbyresourcegroup] | List Resources by Resource Group x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/remote-rendering/GetByResourceGroup.json                       |
| [listRemoteRenderingAccountsBySubscription.js][listremoterenderingaccountsbysubscription]   | List Remote Rendering Accounts by Subscription x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/remote-rendering/GetBySubscription.json          |
| [listSpatialAnchorAccountKey.js][listspatialanchoraccountkey]                               | List Both of the 2 Keys of a Spatial Anchors Account x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/spatial-anchors/ListKeys.json              |
| [listSpatialAnchorAccountsByResourceGroup.js][listspatialanchoraccountsbyresourcegroup]     | List Resources by Resource Group x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/spatial-anchors/GetByResourceGroup.json                        |
| [listSpatialAnchorsAccountsBySubscription.js][listspatialanchorsaccountsbysubscription]     | List Spatial Anchors Accounts by Subscription x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/spatial-anchors/GetBySubscription.json            |
| [regenerateRemoteRenderingAccountKeys.js][regenerateremoterenderingaccountkeys]             | Regenerate specified Key of a Remote Rendering Account x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/remote-rendering/RegenerateKey.json      |
| [regenerateSpatialAnchorsAccountKeys.js][regeneratespatialanchorsaccountkeys]               | Regenerate specified Key of a Spatial Anchors Account x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/spatial-anchors/RegenerateKey.json        |
| [updateRemoteRenderingAccount.js][updateremoterenderingaccount]                             | Updating a Remote Rendering Account x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/remote-rendering/Patch.json                                 |
| [updateSpatialAnchorsAccount.js][updatespatialanchorsaccount]                               | Updating a Spatial Anchors Account x-ms-original-file: specification/mixedreality/resource-manager/Microsoft.MixedReality/stable/2021-01-01/examples/spatial-anchors/Patch.json                                   |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node checkLocalNameAvailability.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env  node checkLocalNameAvailability.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[checklocalnameavailability]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/checkLocalNameAvailability.js
[createremoterenderingaccount]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/createRemoteRenderingAccount.js
[createspatialanchoraccount]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/createSpatialAnchorAccount.js
[deleteremoterenderingaccount]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/deleteRemoteRenderingAccount.js
[deletespatialanchorsaccount]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/deleteSpatialAnchorsAccount.js
[getremoterenderingaccount]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/getRemoteRenderingAccount.js
[getspatialanchorsaccount]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/getSpatialAnchorsAccount.js
[listavailableoperations]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/listAvailableOperations.js
[listremoterenderingaccountkey]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/listRemoteRenderingAccountKey.js
[listremoterenderingaccountsbyresourcegroup]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/listRemoteRenderingAccountsByResourceGroup.js
[listremoterenderingaccountsbysubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/listRemoteRenderingAccountsBySubscription.js
[listspatialanchoraccountkey]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/listSpatialAnchorAccountKey.js
[listspatialanchoraccountsbyresourcegroup]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/listSpatialAnchorAccountsByResourceGroup.js
[listspatialanchorsaccountsbysubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/listSpatialAnchorsAccountsBySubscription.js
[regenerateremoterenderingaccountkeys]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/regenerateRemoteRenderingAccountKeys.js
[regeneratespatialanchorsaccountkeys]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/regenerateSpatialAnchorsAccountKeys.js
[updateremoterenderingaccount]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/updateRemoteRenderingAccount.js
[updatespatialanchorsaccount]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/mixedreality/arm-mixedreality/samples/v4/javascript/updateSpatialAnchorsAccount.js
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-mixedreality?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/mixedreality/arm-mixedreality/README.md
