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
emmacli/0.0.1 linux-x64 node-v12.22.9
$ emmacli --help [COMMAND]
USAGE
  $ emmacli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`emmacli company`](#emmacli-company)
* [`emmacli estore descriptions`](#emmacli-estore-descriptions)
* [`emmacli flex bundles [ID]`](#emmacli-flex-bundles-id)
* [`emmacli flex locations [ID]`](#emmacli-flex-locations-id)
* [`emmacli flex presets [ID]`](#emmacli-flex-presets-id)
* [`emmacli flex projects [ID]`](#emmacli-flex-projects-id)
* [`emmacli flex providers [ID]`](#emmacli-flex-providers-id)
* [`emmacli flex templates [ID]`](#emmacli-flex-templates-id)
* [`emmacli flex vms ID`](#emmacli-flex-vms-id)
* [`emmacli flex wizard-tuples`](#emmacli-flex-wizard-tuples)
* [`emmacli flex wizard-tuples-advanced`](#emmacli-flex-wizard-tuples-advanced)
* [`emmacli flex wizard-tuples-spot`](#emmacli-flex-wizard-tuples-spot)
* [`emmacli groups`](#emmacli-groups)
* [`emmacli login`](#emmacli-login)
* [`emmacli logout`](#emmacli-logout)
* [`emmacli orders [ID]`](#emmacli-orders-id)
* [`emmacli orders check-spot-price`](#emmacli-orders-check-spot-price)
* [`emmacli orders templates`](#emmacli-orders-templates)
* [`emmacli orders vm create`](#emmacli-orders-vm-create)
* [`emmacli orders vm delete`](#emmacli-orders-vm-delete)
* [`emmacli orders vm reboot`](#emmacli-orders-vm-reboot)
* [`emmacli orders vm shutdown`](#emmacli-orders-vm-shutdown)
* [`emmacli orders vm snapshot`](#emmacli-orders-vm-snapshot)
* [`emmacli orders vm start`](#emmacli-orders-vm-start)
* [`emmacli permissionSets [ID]`](#emmacli-permissionsets-id)
* [`emmacli permissionSets current`](#emmacli-permissionsets-current)
* [`emmacli permissionSets default [ID]`](#emmacli-permissionsets-default-id)
* [`emmacli pricing`](#emmacli-pricing)
* [`emmacli pricing current`](#emmacli-pricing-current)
* [`emmacli products`](#emmacli-products)
* [`emmacli products applications [ID]`](#emmacli-products-applications-id)
* [`emmacli products descriptions`](#emmacli-products-descriptions)
* [`emmacli products k8s [ID]`](#emmacli-products-k8s-id)
* [`emmacli products vms`](#emmacli-products-vms)
* [`emmacli projects`](#emmacli-projects)
* [`emmacli projects current`](#emmacli-projects-current)
* [`emmacli rate limits-exceed-history`](#emmacli-rate-limits-exceed-history)
* [`emmacli rate limits-state`](#emmacli-rate-limits-state)
* [`emmacli roles [ID]`](#emmacli-roles-id)
* [`emmacli roles default [ID]`](#emmacli-roles-default-id)
* [`emmacli ssh`](#emmacli-ssh)
* [`emmacli tickets [UID]`](#emmacli-tickets-uid)
* [`emmacli tickets comments UID`](#emmacli-tickets-comments-uid)
* [`emmacli tickets search`](#emmacli-tickets-search)
* [`emmacli tickets statistic`](#emmacli-tickets-statistic)
* [`emmacli users ID`](#emmacli-users-id)

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

EXAMPLES
  $ emmacli company
```

_See code: [dist/commands/company/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/company/index.ts)_

## `emmacli estore descriptions`

Get list of full application descriptions

```
USAGE
  $ emmacli estore descriptions [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of full application descriptions

EXAMPLES
  $ emmacli estore descriptions
```

## `emmacli flex bundles [ID]`

Get list of bundles

```
USAGE
  $ emmacli flex bundles [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

EXAMPLES
  $ emmacli flex bundles

  $ emmacli flex bundles {id}
```

## `emmacli flex locations [ID]`

Get list of locations

```
USAGE
  $ emmacli flex locations [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

EXAMPLES
  $ emmacli flex locations

  $ emmacli flex locations {id}
```

## `emmacli flex presets [ID]`

Get list of presets

```
USAGE
  $ emmacli flex presets [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

EXAMPLES
  $ emmacli flex presets

  $ emmacli flex presets {id}
```

## `emmacli flex projects [ID]`

Get list of projects

```
USAGE
  $ emmacli flex projects [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

EXAMPLES
  $ emmacli flex projects

  $ emmacli flex projects {id}
```

## `emmacli flex providers [ID]`

Get list of providers

```
USAGE
  $ emmacli flex providers [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

EXAMPLES
  $ emmacli flex providers

  $ emmacli flex providers {id}
```

## `emmacli flex templates [ID]`

Get list of templates

```
USAGE
  $ emmacli flex templates [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

EXAMPLES
  $ emmacli flex templates

  $ emmacli flex templates {id}
```

## `emmacli flex vms ID`

Get vm details

```
USAGE
  $ emmacli flex vms [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested vm

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get vm details

EXAMPLES
  $ emmacli flex vms {id}
```

## `emmacli flex wizard-tuples`

Get list of wizard tuples

```
USAGE
  $ emmacli flex wizard-tuples [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of wizard tuples

EXAMPLES
  $ emmacli flex wizard-tuples
```

## `emmacli flex wizard-tuples-advanced`

Get list of spot wizard tuples

```
USAGE
  $ emmacli flex wizard-tuples-advanced [--json] [--yaml] [--osFamily <value>] [--osType <value>] [--osVersion <value>]
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

EXAMPLES
  $ emmacli flex wizard-tuples-spot
```

## `emmacli flex wizard-tuples-spot`

Get list of spot wizard tuples

```
USAGE
  $ emmacli flex wizard-tuples-spot [--json] [--yaml] [--itemCount <value>]

FLAGS
  --itemCount=<value>  Return items count default 10000
  --json               Print a json output
  --yaml               Print a yaml output

DESCRIPTION
  Get list of spot wizard tuples

EXAMPLES
  $ emmacli flex wizard-tuples-spot
```

## `emmacli groups`

Get list of current project groups

```
USAGE
  $ emmacli groups [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current project groups

EXAMPLES
  $ emmacli groups
```

_See code: [dist/commands/groups/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/groups/index.ts)_

## `emmacli login`

Login in emma platform

```
USAGE
  $ emmacli login --clientId <value> --clientSecret <value> [--baseUrl <value>] [--avatarCode <value>]

FLAGS
  --avatarCode=<value>    Base avatar code in emma platform instance
  --baseUrl=<value>       Base url for emma platform instance
  --clientId=<value>      (required) Service App client id
  --clientSecret=<value>  (required) Service App client secret

DESCRIPTION
  Login in emma platform

EXAMPLES
  $ emmacli login
```

_See code: [dist/commands/login/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/login/index.ts)_

## `emmacli logout`

Log out from emma platform

```
USAGE
  $ emmacli logout

DESCRIPTION
  Log out from emma platform

EXAMPLES
  $ emmacli logout
```

_See code: [dist/commands/logout/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/logout/index.ts)_

## `emmacli orders [ID]`

Get list of current company orders

```
USAGE
  $ emmacli orders [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested order

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company orders

EXAMPLES
  $ emmacli orders

  $ emmacli orders {id}
```

_See code: [dist/commands/orders/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/orders/index.ts)_

## `emmacli orders check-spot-price`

Check spot price

```
USAGE
  $ emmacli orders check-spot-price --providerId <value> --bundleId <value> --dcId <value> --templateId <value> [--json]
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

EXAMPLES
  $ emmacli orders check-spot-price
```

## `emmacli orders templates`

Get list of current company order templates

```
USAGE
  $ emmacli orders templates [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company order templates

EXAMPLES
  $ emmacli orders templates
```

## `emmacli orders vm create`

Create vm

```
USAGE
  $ emmacli orders vm create --providerId <value> --locationId <value> --bundleId <value> --cloudType <value>
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

EXAMPLES
  $ emmacli orders vm create
```

## `emmacli orders vm delete`

Delete vm

```
USAGE
  $ emmacli orders vm delete --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Delete vm

EXAMPLES
  $ emmacli orders vm delete
```

## `emmacli orders vm reboot`

Reboot vm

```
USAGE
  $ emmacli orders vm reboot --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Reboot vm

EXAMPLES
  $ emmacli orders vm reboot
```

## `emmacli orders vm shutdown`

Shutdown vm

```
USAGE
  $ emmacli orders vm shutdown --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Shutdown vm

EXAMPLES
  $ emmacli orders vm shutdown
```

## `emmacli orders vm snapshot`

Create vm snapshot

```
USAGE
  $ emmacli orders vm snapshot --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Create vm snapshot

EXAMPLES
  $ emmacli orders vm snapshot
```

## `emmacli orders vm start`

Start vm

```
USAGE
  $ emmacli orders vm start --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Start vm

EXAMPLES
  $ emmacli orders vm start
```

## `emmacli permissionSets [ID]`

Get list of current company permission set

```
USAGE
  $ emmacli permissionSets [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested permissionSet

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company permission set

EXAMPLES
  $ emmacli permissionSets {id}

  $ emmacli permissionSets
```

_See code: [dist/commands/permissionSets/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/permissionSets/index.ts)_

## `emmacli permissionSets current`

Get permission set for current client

```
USAGE
  $ emmacli permissionSets current [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get permission set for current client

EXAMPLES
  $ emmacli permissionSets current
```

## `emmacli permissionSets default [ID]`

Get list of current company default permission set

```
USAGE
  $ emmacli permissionSets default [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested permissionSet

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company default permission set

EXAMPLES
  $ emmacli permissionSets default

  $ emmacli permissionSets default {id}
```

## `emmacli pricing`

Get a list of pricing

```
USAGE
  $ emmacli pricing [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get a list of pricing

EXAMPLES
  $ emmacli pricing
```

_See code: [dist/commands/pricing/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/pricing/index.ts)_

## `emmacli pricing current`

Get the current company pricing

```
USAGE
  $ emmacli pricing current [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get the current company pricing

EXAMPLES
  $ emmacli pricing current
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

EXAMPLES
  $ emmacli products
```

_See code: [dist/commands/products/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/products/index.ts)_

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

EXAMPLES
  $ emmacli products applications

  $ emmacli products applications {id}
```

## `emmacli products descriptions`

Get list of current company products descriptions

```
USAGE
  $ emmacli products descriptions [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company products descriptions

EXAMPLES
  $ emmacli products descriptions
```

## `emmacli products k8s [ID]`

Get list of current company k8s clusters

```
USAGE
  $ emmacli products k8s [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested product

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current company k8s clusters

EXAMPLES
  $ emmacli products k8s

  $ emmacli products k8s {id}
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

EXAMPLES
  $ emmacli products vms
```

## `emmacli projects`

Get list of company's projects

```
USAGE
  $ emmacli projects [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of company's projects

EXAMPLES
  $ emmacli projects
```

_See code: [dist/commands/projects/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/projects/index.ts)_

## `emmacli projects current`

Get current company project

```
USAGE
  $ emmacli projects current [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get current company project

EXAMPLES
  $ emmacli projects current
```

## `emmacli rate limits-exceed-history`

Get current company project payable requests count

```
USAGE
  $ emmacli rate limits-exceed-history --startPeriodUnixTimestamp <value> --endPeriodUnixTimestamp <value> [--json] [--yaml]
    [--companyLimits]

FLAGS
  --companyLimits                     Include company exceed history
  --endPeriodUnixTimestamp=<value>    (required) End period for limits search (in unix timestamp)
  --json                              Print a json output
  --startPeriodUnixTimestamp=<value>  (required) Start period for limits search (in unix timestamp)
  --yaml                              Print a yaml output

DESCRIPTION
  Get current company project payable requests count

EXAMPLES
  $ emmacli rate limits-exceed-history
```

## `emmacli rate limits-state`

Get company rate limit state

```
USAGE
  $ emmacli rate limits-state [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get company rate limit state

EXAMPLES
  $ emmacli rate limits-state
```

## `emmacli roles [ID]`

Get a list of company roles

```
USAGE
  $ emmacli roles [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested role

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get a list of company roles

EXAMPLES
  $ emmacli roles {id}

  $ emmacli roles
```

_See code: [dist/commands/roles/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/roles/index.ts)_

## `emmacli roles default [ID]`

Get a list of default roles

```
USAGE
  $ emmacli roles default [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested role

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get a list of default roles

EXAMPLES
  $ emmacli roles default

  $ emmacli roles default {id}
```

## `emmacli ssh`

Get ssh keys in company

```
USAGE
  $ emmacli ssh [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get ssh keys in company

EXAMPLES
  $ emmacli ssh
```

_See code: [dist/commands/ssh/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/ssh/index.ts)_

## `emmacli tickets [UID]`

Get tickets

```
USAGE
  $ emmacli tickets [UID] [--json] [--yaml]

ARGUMENTS
  UID  Uid of requested ticket

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get tickets

EXAMPLES
  $ emmacli tickets

  $ emmacli tickets {uid}
```

_See code: [dist/commands/tickets/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/tickets/index.ts)_

## `emmacli tickets comments UID`

Get ticket comments by ticket uid

```
USAGE
  $ emmacli tickets comments [UID] [--json] [--yaml]

ARGUMENTS
  UID  Uid of requested ticket

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get ticket comments by ticket uid

EXAMPLES
  $ emmacli tickets comments {uid}
```

## `emmacli tickets search`

Get all ticket by search term

```
USAGE
  $ emmacli tickets search --term <value> [--json] [--yaml]

FLAGS
  --json          Print a json output
  --term=<value>  (required) Search term
  --yaml          Print a yaml output

DESCRIPTION
  Get all ticket by search term

EXAMPLES
  $ emmacli tickets search
```

## `emmacli tickets statistic`

Get tickets statistic

```
USAGE
  $ emmacli tickets statistic [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get tickets statistic

EXAMPLES
  $ emmacli tickets statistic
```

## `emmacli users ID`

Get user

```
USAGE
  $ emmacli users [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested user

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get user

EXAMPLES
  $ emmacli users {id}
```

_See code: [dist/commands/users/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.1/dist/commands/users/index.ts)_
<!-- commandsstop -->
