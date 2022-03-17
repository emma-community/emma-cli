Emma platform command line interface
=================

[![emmacli](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g emmacli
$ emmacli COMMAND
running command...
$ emmacli (--version)
emmacli/0.0.2 linux-x64 node-v12.22.9
$ emmacli --help [COMMAND]
USAGE
  $ emmacli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`emmacli auth info`](#emmacli-auth-info)
* [`emmacli auth login`](#emmacli-auth-login)
* [`emmacli auth logout`](#emmacli-auth-logout)
* [`emmacli company`](#emmacli-company)
* [`emmacli company groups`](#emmacli-company-groups)
* [`emmacli company limits`](#emmacli-company-limits)
* [`emmacli company limits exceed-history`](#emmacli-company-limits-exceed-history)
* [`emmacli company orders [ID]`](#emmacli-company-orders-id)
* [`emmacli company orders templates`](#emmacli-company-orders-templates)
* [`emmacli company permission-sets [ID]`](#emmacli-company-permission-sets-id)
* [`emmacli company permission-sets current`](#emmacli-company-permission-sets-current)
* [`emmacli company permission-sets default [ID]`](#emmacli-company-permission-sets-default-id)
* [`emmacli company pricings`](#emmacli-company-pricings)
* [`emmacli company pricings current`](#emmacli-company-pricings-current)
* [`emmacli company projects`](#emmacli-company-projects)
* [`emmacli company projects current`](#emmacli-company-projects-current)
* [`emmacli company roles [ID]`](#emmacli-company-roles-id)
* [`emmacli company roles default [ID]`](#emmacli-company-roles-default-id)
* [`emmacli company tickets [UID]`](#emmacli-company-tickets-uid)
* [`emmacli company tickets comments UID`](#emmacli-company-tickets-comments-uid)
* [`emmacli company tickets search`](#emmacli-company-tickets-search)
* [`emmacli company tickets statistic`](#emmacli-company-tickets-statistic)
* [`emmacli company users ID`](#emmacli-company-users-id)
* [`emmacli products`](#emmacli-products)
* [`emmacli products applications [ID]`](#emmacli-products-applications-id)
* [`emmacli products applications create`](#emmacli-products-applications-create)
* [`emmacli products applications delete`](#emmacli-products-applications-delete)
* [`emmacli products applications descriptions`](#emmacli-products-applications-descriptions)
* [`emmacli products applications schema`](#emmacli-products-applications-schema)
* [`emmacli products clusters [ID]`](#emmacli-products-clusters-id)
* [`emmacli products clusters create`](#emmacli-products-clusters-create)
* [`emmacli products clusters schema`](#emmacli-products-clusters-schema)
* [`emmacli products commons available-providers ID`](#emmacli-products-commons-available-providers-id)
* [`emmacli products commons bundles [ID]`](#emmacli-products-commons-bundles-id)
* [`emmacli products commons descriptions`](#emmacli-products-commons-descriptions)
* [`emmacli products commons locations [ID]`](#emmacli-products-commons-locations-id)
* [`emmacli products commons presets [ID]`](#emmacli-products-commons-presets-id)
* [`emmacli products commons projects [ID]`](#emmacli-products-commons-projects-id)
* [`emmacli products commons providers [ID]`](#emmacli-products-commons-providers-id)
* [`emmacli products commons ssh`](#emmacli-products-commons-ssh)
* [`emmacli products commons templates [ID]`](#emmacli-products-commons-templates-id)
* [`emmacli products commons vms ID`](#emmacli-products-commons-vms-id)
* [`emmacli products commons wizard-tuples`](#emmacli-products-commons-wizard-tuples)
* [`emmacli products commons wizard-tuples-advanced`](#emmacli-products-commons-wizard-tuples-advanced)
* [`emmacli products commons wizard-tuples-spot`](#emmacli-products-commons-wizard-tuples-spot)
* [`emmacli products networks security-groups`](#emmacli-products-networks-security-groups)
* [`emmacli products networks security-groups add-rule`](#emmacli-products-networks-security-groups-add-rule)
* [`emmacli products networks security-groups update`](#emmacli-products-networks-security-groups-update)
* [`emmacli products spots`](#emmacli-products-spots)
* [`emmacli products spots check-spot-price`](#emmacli-products-spots-check-spot-price)
* [`emmacli products spots create`](#emmacli-products-spots-create)
* [`emmacli products spots delete`](#emmacli-products-spots-delete)
* [`emmacli products spots reboot`](#emmacli-products-spots-reboot)
* [`emmacli products spots shutdown`](#emmacli-products-spots-shutdown)
* [`emmacli products spots snapshot`](#emmacli-products-spots-snapshot)
* [`emmacli products spots start`](#emmacli-products-spots-start)
* [`emmacli products vms`](#emmacli-products-vms)
* [`emmacli products vms clone`](#emmacli-products-vms-clone)
* [`emmacli products vms create`](#emmacli-products-vms-create)
* [`emmacli products vms delete`](#emmacli-products-vms-delete)
* [`emmacli products vms reboot`](#emmacli-products-vms-reboot)
* [`emmacli products vms shutdown`](#emmacli-products-vms-shutdown)
* [`emmacli products vms snapshot`](#emmacli-products-vms-snapshot)
* [`emmacli products vms start`](#emmacli-products-vms-start)
* [`emmacli products vms transfer`](#emmacli-products-vms-transfer)

## `emmacli auth info`

Get login information

```
USAGE
  $ emmacli auth info [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get login information
```

## `emmacli auth login`

Login in emma platform

```
USAGE
  $ emmacli auth login --clientId <value> --clientSecret <value> [--baseUrl <value>] [--avatarCode <value>]

FLAGS
  --avatarCode=<value>    Base avatar code in emma platform instance
  --baseUrl=<value>       Base url for emma platform instance
  --clientId=<value>      (required) Service App client id
  --clientSecret=<value>  (required) Service App client secret

DESCRIPTION
  Login in emma platform
```

## `emmacli auth logout`

Log out from emma platform

```
USAGE
  $ emmacli auth logout

DESCRIPTION
  Log out from emma platform
```

## `emmacli company`

Get company information

```
USAGE
  $ emmacli company [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get company information
```

_See code: [src/commands/company/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.2/src/commands/company/index.ts)_

## `emmacli company groups`

Get list of current project groups

```
USAGE
  $ emmacli company groups [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current project groups
```

## `emmacli company limits`

Get company rate limit state

```
USAGE
  $ emmacli company limits [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get company rate limit state
```

## `emmacli company limits exceed-history`

Get current company project payable requests count

```
USAGE
  $ emmacli company limits exceed-history --startPeriodUnixTimestamp <value> --endPeriodUnixTimestamp <value> [--json] [--yaml]
    [--companyLimits]

FLAGS
  --companyLimits                     Include company exceed history
  --endPeriodUnixTimestamp=<value>    (required) End period for limits search (in unix timestamp)
  --json                              Print a json output
  --startPeriodUnixTimestamp=<value>  (required) Start period for limits search (in unix timestamp)
  --yaml                              Print a yaml output

DESCRIPTION
  Get current company project payable requests count
```

## `emmacli company orders [ID]`

Get list of current company orders

```
USAGE
  $ emmacli company orders [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested order

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company orders
```

## `emmacli company orders templates`

Get list of current company order templates

```
USAGE
  $ emmacli company orders templates [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company order templates
```

## `emmacli company permission-sets [ID]`

Get list of current company permission set

```
USAGE
  $ emmacli company permission-sets [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested permissionSet

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company permission set
```

## `emmacli company permission-sets current`

Get permission set for current client

```
USAGE
  $ emmacli company permission-sets current [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get permission set for current client
```

## `emmacli company permission-sets default [ID]`

Get list of current company default permission set

```
USAGE
  $ emmacli company permission-sets default [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested permissionSet

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company default permission set
```

## `emmacli company pricings`

Get a list of pricing

```
USAGE
  $ emmacli company pricings [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get a list of pricing
```

## `emmacli company pricings current`

Get the current company pricing

```
USAGE
  $ emmacli company pricings current [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get the current company pricing
```

## `emmacli company projects`

Get list of company's projects

```
USAGE
  $ emmacli company projects [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of company's projects
```

## `emmacli company projects current`

Get current company project

```
USAGE
  $ emmacli company projects current [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get current company project
```

## `emmacli company roles [ID]`

Get a list of company roles

```
USAGE
  $ emmacli company roles [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested role

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get a list of company roles
```

## `emmacli company roles default [ID]`

Get a list of default roles

```
USAGE
  $ emmacli company roles default [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested role

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get a list of default roles
```

## `emmacli company tickets [UID]`

Get tickets

```
USAGE
  $ emmacli company tickets [UID] [--json] [--yaml]

ARGUMENTS
  UID  Uid of requested ticket

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get tickets
```

## `emmacli company tickets comments UID`

Get ticket comments by ticket uid

```
USAGE
  $ emmacli company tickets comments [UID] [--json] [--yaml]

ARGUMENTS
  UID  Uid of requested ticket

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get ticket comments by ticket uid
```

## `emmacli company tickets search`

Get all ticket by search term

```
USAGE
  $ emmacli company tickets search --term <value> [--json] [--yaml]

FLAGS
  --json          Print a json output
  --term=<value>  (required) Search term
  --yaml          Print a yaml output

DESCRIPTION
  Get all ticket by search term
```

## `emmacli company tickets statistic`

Get tickets statistic

```
USAGE
  $ emmacli company tickets statistic [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get tickets statistic
```

## `emmacli company users ID`

Get user

```
USAGE
  $ emmacli company users [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested user

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get user
```

## `emmacli products`

Get list of current project products

```
USAGE
  $ emmacli products [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current project products
```

_See code: [src/commands/products/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.2/src/commands/products/index.ts)_

## `emmacli products applications [ID]`

Get list of current company applications

```
USAGE
  $ emmacli products applications [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested product

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company applications
```

## `emmacli products applications create`

Create application by configuration schema

```
USAGE
  $ emmacli products applications create [--json] [--yaml] [--configFile <value>] [--config <value>]

FLAGS
  --config=<value>      Config schema
  --configFile=<value>  Config file location
  --json                Print a json output
  --yaml                Print a yaml output

DESCRIPTION
  Create application by configuration schema
```

## `emmacli products applications delete`

Delete application

```
USAGE
  $ emmacli products applications delete --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of application
  --yaml               Print a yaml output

DESCRIPTION
  Delete application
```

## `emmacli products applications descriptions`

Get list of full application descriptions

```
USAGE
  $ emmacli products applications descriptions [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of full application descriptions
```

## `emmacli products applications schema`

Get application configuration schema

```
USAGE
  $ emmacli products applications schema --applicationId <value> [--json] [--yaml]

FLAGS
  --applicationId=<value>  (required) Application id
  --json                   Print a json output
  --yaml                   Print a yaml output

DESCRIPTION
  Get application configuration schema
```

## `emmacli products clusters [ID]`

Get list of current company k8s clusters

```
USAGE
  $ emmacli products clusters [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested product

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company k8s clusters
```

## `emmacli products clusters create`

Create cluster by configuration schema

```
USAGE
  $ emmacli products clusters create [--json] [--yaml] [--configFile <value>] [--config <value>]

FLAGS
  --config=<value>      Config schema
  --configFile=<value>  Config file location
  --json                Print a json output
  --yaml                Print a yaml output

DESCRIPTION
  Create cluster by configuration schema
```

## `emmacli products clusters schema`

Get cluster configuration schema

```
USAGE
  $ emmacli products clusters schema --applicationId <value> [--json] [--yaml]

FLAGS
  --applicationId=<value>  (required) Application id
  --json                   Print a json output
  --yaml                   Print a yaml output

DESCRIPTION
  Get cluster configuration schema
```

## `emmacli products commons available-providers ID`

Get list of providers available for transfer a vm

```
USAGE
  $ emmacli products commons available-providers [ID] [--json] [--yaml] [--itemCount <value>]

ARGUMENTS
  ID  Id of transferring vm

FLAGS
  --itemCount=<value>  Item count default 10000
  --json               Print a json output
  --yaml               Print a yaml output

DESCRIPTION
  Get list of providers available for transfer a vm
```

## `emmacli products commons bundles [ID]`

Get list of bundles

```
USAGE
  $ emmacli products commons bundles [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
    [--order <value>]

ARGUMENTS
  ID  Id of requested flex

FLAGS
  --itemCount=<value>   Item count default 5
  --json                Print a json output
  --order=<value>       Order direction default ASC
  --pageNumber=<value>  Page number default 0
  --sortBy=<value>      Sort by field default id
  --yaml                Print a yaml output

DESCRIPTION
  Get list of bundles
```

## `emmacli products commons descriptions`

Get list of current company products descriptions

```
USAGE
  $ emmacli products commons descriptions [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company products descriptions
```

## `emmacli products commons locations [ID]`

Get list of locations

```
USAGE
  $ emmacli products commons locations [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
    [--order <value>]

ARGUMENTS
  ID  Id of requested flex

FLAGS
  --itemCount=<value>   Item count default 5
  --json                Print a json output
  --order=<value>       Order direction default ASC
  --pageNumber=<value>  Page number default 0
  --sortBy=<value>      Sort by field default id
  --yaml                Print a yaml output

DESCRIPTION
  Get list of locations
```

## `emmacli products commons presets [ID]`

Get list of presets

```
USAGE
  $ emmacli products commons presets [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
    [--order <value>]

ARGUMENTS
  ID  Id of requested flex

FLAGS
  --itemCount=<value>   Item count default 5
  --json                Print a json output
  --order=<value>       Order direction default ASC
  --pageNumber=<value>  Page number default 0
  --sortBy=<value>      Sort by field default id
  --yaml                Print a yaml output

DESCRIPTION
  Get list of presets
```

## `emmacli products commons projects [ID]`

Get list of projects

```
USAGE
  $ emmacli products commons projects [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
    [--order <value>]

ARGUMENTS
  ID  Id of requested flex

FLAGS
  --itemCount=<value>   Item count default 5
  --json                Print a json output
  --order=<value>       Order direction default ASC
  --pageNumber=<value>  Page number default 0
  --sortBy=<value>      Sort by field default id
  --yaml                Print a yaml output

DESCRIPTION
  Get list of projects
```

## `emmacli products commons providers [ID]`

Get list of providers

```
USAGE
  $ emmacli products commons providers [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
    [--order <value>]

ARGUMENTS
  ID  Id of requested flex

FLAGS
  --itemCount=<value>   Item count default 5
  --json                Print a json output
  --order=<value>       Order direction default ASC
  --pageNumber=<value>  Page number default 0
  --sortBy=<value>      Sort by field default id
  --yaml                Print a yaml output

DESCRIPTION
  Get list of providers
```

## `emmacli products commons ssh`

Get ssh keys in company

```
USAGE
  $ emmacli products commons ssh [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get ssh keys in company
```

## `emmacli products commons templates [ID]`

Get list of templates

```
USAGE
  $ emmacli products commons templates [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
    [--order <value>]

ARGUMENTS
  ID  Id of requested flex

FLAGS
  --itemCount=<value>   Item count default 5
  --json                Print a json output
  --order=<value>       Order direction default ASC
  --pageNumber=<value>  Page number default 0
  --sortBy=<value>      Sort by field default id
  --yaml                Print a yaml output

DESCRIPTION
  Get list of templates
```

## `emmacli products commons vms ID`

Get vm details

```
USAGE
  $ emmacli products commons vms [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested vm

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get vm details
```

## `emmacli products commons wizard-tuples`

Get list of wizard tuples

```
USAGE
  $ emmacli products commons wizard-tuples [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of wizard tuples
```

## `emmacli products commons wizard-tuples-advanced`

Get list of spot wizard tuples

```
USAGE
  $ emmacli products commons wizard-tuples-advanced [--json] [--yaml] [--osFamily <value>] [--osType <value>] [--osVersion <value>]
    [--locationsIds <value>] [--providers <value>] [--dcIds <value>] [--minCpu <value>] [--maxCpu <value>] [--minRam
    <value>] [--maxRam <value>] [--minStorage <value>] [--maxStorage <value>]

FLAGS
  --dcIds=<value>         Coma separated dc ids filter
  --json                  Print a json output
  --locationsIds=<value>  Coma separated location ids filter
  --maxCpu=<value>        Max cpu filter
  --maxRam=<value>        Max ram filter
  --maxStorage=<value>    Max storage filter
  --minCpu=<value>        Min cpu filter
  --minRam=<value>        Min ram filter
  --minStorage=<value>    Min storage filter
  --osFamily=<value>      OS family filter
  --osType=<value>        OS type filter
  --osVersion=<value>     OS version filter
  --providers=<value>     Coma separated provider names filter
  --yaml                  Print a yaml output

DESCRIPTION
  Get list of spot wizard tuples
```

## `emmacli products commons wizard-tuples-spot`

Get list of spot wizard tuples

```
USAGE
  $ emmacli products commons wizard-tuples-spot [--json] [--yaml] [--itemCount <value>]

FLAGS
  --itemCount=<value>  Return items count default 10000
  --json               Print a json output
  --yaml               Print a yaml output

DESCRIPTION
  Get list of spot wizard tuples
```

## `emmacli products networks security-groups`

Get list of current company security groups

```
USAGE
  $ emmacli products networks security-groups [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company security groups
```

## `emmacli products networks security-groups add-rule`

Add rules to security groups

```
USAGE
  $ emmacli products networks security-groups add-rule --securityGroupsId <value> --policy ALLOW|DENY --direction INBOUND|OUTBOUND --protocol
    all|TCP|UDP|ICMP|GRE|ESP|AH|SCTP|IPIP --ports <value> --ipRange <value> [--json] [--yaml] [--description <value>]

FLAGS
  --description=<value>                               Description of rule
  --direction=(INBOUND|OUTBOUND)                      (required) Direction
  --ipRange=<value>                                   (required) Ip range
  --json                                              Print a json output
  --policy=(ALLOW|DENY)                               (required) Policy type
  --ports=<value>                                     (required) Rule ports
  --protocol=(all|TCP|UDP|ICMP|GRE|ESP|AH|SCTP|IPIP)  (required) Protocol
  --securityGroupsId=<value>                          (required) Security groups id
  --yaml                                              Print a yaml output

DESCRIPTION
  Add rules to security groups
```

## `emmacli products networks security-groups update`

Update security groups rules

```
USAGE
  $ emmacli products networks security-groups update --securityGroupsId <value> --direction INBOUND|OUTBOUND [--json] [--yaml] [--configFile
    <value>] [--config <value>]

FLAGS
  --config=<value>                Config schema
  --configFile=<value>            Config file location
  --direction=(INBOUND|OUTBOUND)  (required) Direction
  --json                          Print a json output
  --securityGroupsId=<value>      (required) Security groups id
  --yaml                          Print a yaml output

DESCRIPTION
  Update security groups rules
```

## `emmacli products spots`

Get list of current company spot vms

```
USAGE
  $ emmacli products spots [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company spot vms
```

## `emmacli products spots check-spot-price`

Check spot price

```
USAGE
  $ emmacli products spots check-spot-price --providerId <value> --bundleId <value> --dcId <value> --templateId <value> [--json]
    [--yaml]

FLAGS
  --bundleId=<value>    (required) Bundle id
  --dcId=<value>        (required) DC id
  --json                Print a json output
  --providerId=<value>  (required) Provider id
  --templateId=<value>  (required) Template id
  --yaml                Print a yaml output

DESCRIPTION
  Check spot price
```

## `emmacli products spots create`

Create spot

```
USAGE
  $ emmacli products spots create --providerId <value> --locationId <value> --bundleId <value> --cloudType <value>
    --templateId <value> --dcId <value> --sshId <value> --cloudNetworkType <value> --username <value> --hostname <value>
    [--json] [--yaml]

FLAGS
  --bundleId=<value>          (required) Bundle id from wizard tuple
  --cloudNetworkType=<value>  (required) Cloud network type
  --cloudType=<value>         (required) Cloud type from wizard tuple
  --dcId=<value>              (required) DC id from wizard tuple
  --hostname=<value>          (required) Hostname of spot
  --json                      Print a json output
  --locationId=<value>        (required) Location id from wizard tuple
  --providerId=<value>        (required) Provider id from wizard tuple
  --sshId=<value>             (required) Ssh key id
  --templateId=<value>        (required) Template id from wizard tuple
  --username=<value>          (required) Username for authorization in spot
  --yaml                      Print a yaml output

DESCRIPTION
  Create spot
```

## `emmacli products spots delete`

Delete spot

```
USAGE
  $ emmacli products spots delete --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of spot
  --yaml               Print a yaml output

DESCRIPTION
  Delete spot
```

## `emmacli products spots reboot`

Reboot spot

```
USAGE
  $ emmacli products spots reboot --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of spot
  --yaml               Print a yaml output

DESCRIPTION
  Reboot spot
```

## `emmacli products spots shutdown`

Shutdown spot

```
USAGE
  $ emmacli products spots shutdown --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of spot
  --yaml               Print a yaml output

DESCRIPTION
  Shutdown spot
```

## `emmacli products spots snapshot`

Create spot snapshot

```
USAGE
  $ emmacli products spots snapshot --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of spot
  --yaml               Print a yaml output

DESCRIPTION
  Create spot snapshot
```

## `emmacli products spots start`

Start spot

```
USAGE
  $ emmacli products spots start --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of spot
  --yaml               Print a yaml output

DESCRIPTION
  Start spot
```

## `emmacli products vms`

Get list of current company vms (vm, spot, private vms)

```
USAGE
  $ emmacli products vms [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company vms (vm, spot, private vms)
```

## `emmacli products vms clone`

Clone vm

```
USAGE
  $ emmacli products vms clone --productId <value> --newVmName <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --newVmName=<value>  (required) New Vm name
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Clone vm
```

## `emmacli products vms create`

Create vm

```
USAGE
  $ emmacli products vms create --providerId <value> --locationId <value> --bundleId <value> --cloudType <value>
    --templateId <value> --dcId <value> --sshId <value> --cloudNetworkType <value> --username <value> --hostname <value>
    [--json] [--yaml]

FLAGS
  --bundleId=<value>          (required) Bundle id from wizard tuple
  --cloudNetworkType=<value>  (required) Cloud network type
  --cloudType=<value>         (required) Cloud type from wizard tuple
  --dcId=<value>              (required) DC id from wizard tuple
  --hostname=<value>          (required) Hostname of VM
  --json                      Print a json output
  --locationId=<value>        (required) Location id from wizard tuple
  --providerId=<value>        (required) Provider id from wizard tuple
  --sshId=<value>             (required) Ssh key id
  --templateId=<value>        (required) Template id from wizard tuple
  --username=<value>          (required) Username for authorization in VM
  --yaml                      Print a yaml output

DESCRIPTION
  Create vm
```

## `emmacli products vms delete`

Delete vm

```
USAGE
  $ emmacli products vms delete --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Delete vm
```

## `emmacli products vms reboot`

Reboot vm

```
USAGE
  $ emmacli products vms reboot --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Reboot vm
```

## `emmacli products vms shutdown`

Shutdown vm

```
USAGE
  $ emmacli products vms shutdown --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Shutdown vm
```

## `emmacli products vms snapshot`

Create vm snapshot

```
USAGE
  $ emmacli products vms snapshot --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Create vm snapshot
```

## `emmacli products vms start`

Start vm

```
USAGE
  $ emmacli products vms start --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Start vm
```

## `emmacli products vms transfer`

Transfer vm

```
USAGE
  $ emmacli products vms transfer --productId <value> --dcId <value> --providerId <value> --cloudType <value> [--json]
    [--yaml] [--doNotDeleteSource]

FLAGS
  --cloudType=<value>   (required) Cloud type from available provider tuple
  --dcId=<value>        (required) DC id from available provider tuple
  --doNotDeleteSource   Print a yaml output
  --json                Print a json output
  --productId=<value>   (required) Product id of vm
  --providerId=<value>  (required) Provider id from available provider tuple
  --yaml                Print a yaml output

DESCRIPTION
  Transfer vm
```
<!-- commandsstop -->
