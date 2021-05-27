---
page_type: sample
languages:
  - javascript
products:
  - azure
  - azure-farmbeats
urlFragment: agrifood-farming-javascript
---

# Azure FarmBeats rest client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for Azure FarmBeats rest in some common scenarios.

| **File Name**                   | **Description**        |
| ------------------------------- | ---------------------- |
| [deleteFarmer.js][deletefarmer] | deletes a farmer       |
| [listFarmers.js][listfarmers]   | gets a list of farmers |
| [createFarmer.js][createfarmer] | creates a farmer       |

## Prerequisites

The sample programs are compatible with Node.js >=12.0.0.

You need [an Azure subscription][freesub] and the following Azure resources to run these sample programs:

- [Azure FarmBeats Service instance][createinstance_azurefarmbeatsserviceinstance]

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
node deleteFarmer.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env FARMBEATS_ENDPOINT="<farmbeats endpoint>" node deleteFarmer.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[deletefarmer]: https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/agrifood/agrifood-farming-rest/samples/v1/javascript/deleteFarmer.js
[listfarmers]: https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/agrifood/agrifood-farming-rest/samples/v1/javascript/listFarmers.js
[createfarmer]: https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/agrifood/agrifood-farming-rest/samples/v1/javascript/createFarmer.js
[apiref]: https://docs.microsoft.com/javascript
[freesub]: https://azure.microsoft.com/free/
[createinstance_azurefarmbeatsserviceinstance]: https://docs.microsoft.com/azure/industry/agriculture/install-azure-farmbeats
[package]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/agrifood/agrifood-farming-rest/README.md