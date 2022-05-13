Emma platform command line interface
=================

[![emmacli](https://img.shields.io/badge/cli-emmacli-brightgreen.svg)](https://emma.ms/)
[![Version](https://img.shields.io/npm/v/emmacli.svg)](https://npmjs.org/package/emmacli)
[![Downloads/week](https://img.shields.io/npm/dw/emmacli.svg)](https://npmjs.org/package/emmacli)

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
emmacli/0.0.5 linux-x64 node-v12.22.9
$ emmacli --help [COMMAND]
USAGE
  $ emmacli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`emmacli api limits`](#emmacli-api-limits)
* [`emmacli api limits exceed-history`](#emmacli-api-limits-exceed-history)
* [`emmacli applications [ID]`](#emmacli-applications-id)
* [`emmacli applications create`](#emmacli-applications-create)
* [`emmacli applications delete`](#emmacli-applications-delete)
* [`emmacli applications descriptions`](#emmacli-applications-descriptions)
* [`emmacli applications schema`](#emmacli-applications-schema)
* [`emmacli auth info`](#emmacli-auth-info)
* [`emmacli auth login`](#emmacli-auth-login)
* [`emmacli auth logout`](#emmacli-auth-logout)
* [`emmacli clusters [ID]`](#emmacli-clusters-id)
* [`emmacli clusters create`](#emmacli-clusters-create)
* [`emmacli clusters schema`](#emmacli-clusters-schema)
* [`emmacli commons available-providers ID`](#emmacli-commons-available-providers-id)
* [`emmacli commons bundles [ID]`](#emmacli-commons-bundles-id)
* [`emmacli commons descriptions`](#emmacli-commons-descriptions)
* [`emmacli commons locations [ID]`](#emmacli-commons-locations-id)
* [`emmacli commons presets [ID]`](#emmacli-commons-presets-id)
* [`emmacli commons projects [ID]`](#emmacli-commons-projects-id)
* [`emmacli commons providers [ID]`](#emmacli-commons-providers-id)
* [`emmacli commons ssh`](#emmacli-commons-ssh)
* [`emmacli commons ssh create`](#emmacli-commons-ssh-create)
* [`emmacli commons ssh delete ID`](#emmacli-commons-ssh-delete-id)
* [`emmacli commons ssh generate`](#emmacli-commons-ssh-generate)
* [`emmacli commons templates [ID]`](#emmacli-commons-templates-id)
* [`emmacli commons vms ID`](#emmacli-commons-vms-id)
* [`emmacli commons wizard-tuples`](#emmacli-commons-wizard-tuples)
* [`emmacli commons wizard-tuples-advanced`](#emmacli-commons-wizard-tuples-advanced)
* [`emmacli commons wizard-tuples-spot`](#emmacli-commons-wizard-tuples-spot)
* [`emmacli networks security-groups`](#emmacli-networks-security-groups)
* [`emmacli networks security-groups add-rule`](#emmacli-networks-security-groups-add-rule)
* [`emmacli networks security-groups update`](#emmacli-networks-security-groups-update)
* [`emmacli products`](#emmacli-products)
* [`emmacli spots`](#emmacli-spots)
* [`emmacli spots check-spot-price`](#emmacli-spots-check-spot-price)
* [`emmacli spots create`](#emmacli-spots-create)
* [`emmacli spots delete`](#emmacli-spots-delete)
* [`emmacli spots reboot`](#emmacli-spots-reboot)
* [`emmacli spots shutdown`](#emmacli-spots-shutdown)
* [`emmacli spots snapshot`](#emmacli-spots-snapshot)
* [`emmacli spots start`](#emmacli-spots-start)
* [`emmacli vms`](#emmacli-vms)
* [`emmacli vms clone`](#emmacli-vms-clone)
* [`emmacli vms create`](#emmacli-vms-create)
* [`emmacli vms delete`](#emmacli-vms-delete)
* [`emmacli vms reboot`](#emmacli-vms-reboot)
* [`emmacli vms shutdown`](#emmacli-vms-shutdown)
* [`emmacli vms snapshot`](#emmacli-vms-snapshot)
* [`emmacli vms start`](#emmacli-vms-start)
* [`emmacli vms transfer`](#emmacli-vms-transfer)

## `emmacli api limits`

Get company API limits information

```
USAGE
  $ emmacli api limits [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get company API limits information
```

## `emmacli api limits exceed-history`

Get current project API payable requests count

```
USAGE
  $ emmacli api limits exceed-history --startPeriodUnixTimestamp <value> --endPeriodUnixTimestamp <value> [--json]
  [--yaml]

FLAGS
  --endPeriodUnixTimestamp=<value>    (required) End period for limits search (in unix timestamp)
  --json                              Print a json output
  --startPeriodUnixTimestamp=<value>  (required) Start period for limits search (in unix timestamp)
  --yaml                              Print a yaml output

DESCRIPTION
  Get current project API payable requests count
```

## `emmacli applications [ID]`

Get list of current project applications

```
USAGE
  $ emmacli applications [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested product

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current project applications
```

_See code: [src/commands//applications/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.5/src/commands//applications/index.ts)_

## `emmacli applications create`

Create application by configuration schema

```
USAGE
  $ emmacli applications create [--json] [--yaml] [--configFile <value>] [--config <value>]

FLAGS
  --config=<value>      Config schema
  --configFile=<value>  Config file location
  --json                Print a json output
  --yaml                Print a yaml output

DESCRIPTION
  Create application by configuration schema
```

## `emmacli applications delete`

Delete application

```
USAGE
  $ emmacli applications delete --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of application
  --yaml               Print a yaml output

DESCRIPTION
  Delete application
```

## `emmacli applications descriptions`

Get list of full application descriptions

```
USAGE
  $ emmacli applications descriptions [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of full application descriptions
```

## `emmacli applications schema`

Get application configuration schema

```
USAGE
  $ emmacli applications schema --applicationId <value> [--json] [--yaml]

FLAGS
  --applicationId=<value>  (required) Application id
  --json                   Print a json output
  --yaml                   Print a yaml output

DESCRIPTION
  Get application configuration schema
```

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

## `emmacli clusters [ID]`

Get list of current project k8s clusters

```
USAGE
  $ emmacli clusters [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested product

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current project k8s clusters
```

_See code: [src/commands//clusters/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.5/src/commands//clusters/index.ts)_

## `emmacli clusters create`

Create cluster by configuration schema

```
USAGE
  $ emmacli clusters create [--json] [--yaml] [--configFile <value>] [--config <value>]

FLAGS
  --config=<value>      Config schema
  --configFile=<value>  Config file location
  --json                Print a json output
  --yaml                Print a yaml output

DESCRIPTION
  Create cluster by configuration schema
```

## `emmacli clusters schema`

Get cluster configuration schema

```
USAGE
  $ emmacli clusters schema --applicationId <value> [--json] [--yaml]

FLAGS
  --applicationId=<value>  (required) Application id
  --json                   Print a json output
  --yaml                   Print a yaml output

DESCRIPTION
  Get cluster configuration schema
```

## `emmacli commons available-providers ID`

Get list of providers available for transfer a vm

```
USAGE
  $ emmacli commons available-providers [ID] [--json] [--yaml] [--itemCount <value>]

ARGUMENTS
  ID  Id of transferring vm

FLAGS
  --itemCount=<value>  Item count default 10000
  --json               Print a json output
  --yaml               Print a yaml output

DESCRIPTION
  Get list of providers available for transfer a vm
```

## `emmacli commons bundles [ID]`

Get list of bundles

```
USAGE
  $ emmacli commons bundles [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

## `emmacli commons descriptions`

Get list of products descriptions

```
USAGE
  $ emmacli commons descriptions [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of products descriptions
```

## `emmacli commons locations [ID]`

Get list of locations

```
USAGE
  $ emmacli commons locations [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

## `emmacli commons presets [ID]`

Get list of presets

```
USAGE
  $ emmacli commons presets [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

## `emmacli commons projects [ID]`

Get list of projects

```
USAGE
  $ emmacli commons projects [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

## `emmacli commons providers [ID]`

Get list of providers

```
USAGE
  $ emmacli commons providers [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

## `emmacli commons ssh`

Get ssh keys in company

```
USAGE
  $ emmacli commons ssh [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get ssh keys in company
```

## `emmacli commons ssh create`

Create ssh key in company

```
USAGE
  $ emmacli commons ssh create --name <value> --publicKey <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --name=<value>       (required) Ssh name
  --publicKey=<value>  (required) Ssh public key
  --yaml               Print a yaml output

DESCRIPTION
  Create ssh key in company
```

## `emmacli commons ssh delete ID`

Delete ssh key in company

```
USAGE
  $ emmacli commons ssh delete [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of ssh key

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Delete ssh key in company
```

## `emmacli commons ssh generate`

Generate ssh key in company

```
USAGE
  $ emmacli commons ssh generate --keyName <value> --host <value> --userName <value> [--json] [--yaml]

FLAGS
  --host=<value>      (required) Ssh host name
  --json              Print a json output
  --keyName=<value>   (required) Ssh key name
  --userName=<value>  (required) Ssh user name
  --yaml              Print a yaml output

DESCRIPTION
  Generate ssh key in company
```

## `emmacli commons templates [ID]`

Get list of templates

```
USAGE
  $ emmacli commons templates [ID] [--json] [--yaml] [--pageNumber <value>] [--itemCount <value>] [--sortBy <value>]
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

## `emmacli commons vms ID`

Get vm details

```
USAGE
  $ emmacli commons vms [ID] [--json] [--yaml]

ARGUMENTS
  ID  Id of requested vm

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get vm details
```

## `emmacli commons wizard-tuples`

Get list of wizard tuples

```
USAGE
  $ emmacli commons wizard-tuples [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of wizard tuples
```

## `emmacli commons wizard-tuples-advanced`

Get list of spot wizard tuples

```
USAGE
  $ emmacli commons wizard-tuples-advanced [--json] [--yaml] [--osFamily <value>] [--osType <value>] [--osVersion <value>]
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

## `emmacli commons wizard-tuples-spot`

Get list of spot wizard tuples

```
USAGE
  $ emmacli commons wizard-tuples-spot [--json] [--yaml] [--itemCount <value>]

FLAGS
  --itemCount=<value>  Return items count default 10000
  --json               Print a json output
  --yaml               Print a yaml output

DESCRIPTION
  Get list of spot wizard tuples
```

## `emmacli networks security-groups`

Get list of current project security groups

```
USAGE
  $ emmacli networks security-groups [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current project security groups
```

## `emmacli networks security-groups add-rule`

Add rules to security groups

```
USAGE
  $ emmacli networks security-groups add-rule --securityGroupsId <value> --policy ALLOW|DENY --direction INBOUND|OUTBOUND --protocol
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

## `emmacli networks security-groups update`

Update security groups rules

```
USAGE
  $ emmacli networks security-groups update --securityGroupsId <value> --direction INBOUND|OUTBOUND [--json] [--yaml] [--configFile
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

_See code: [src/commands//products/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.5/src/commands//products/index.ts)_

## `emmacli spots`

Get list of current project spot vms

```
USAGE
  $ emmacli spots [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current project spot vms
```

_See code: [src/commands//spots/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.5/src/commands//spots/index.ts)_

## `emmacli spots check-spot-price`

Check spot price

```
USAGE
  $ emmacli spots check-spot-price --providerId <value> --bundleId <value> --dcId <value> --templateId <value> [--json]
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

## `emmacli spots create`

Create spot

```
USAGE
  $ emmacli spots create --providerId <value> --locationId <value> --bundleId <value> --cloudType <value>
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

## `emmacli spots delete`

Delete spot

```
USAGE
  $ emmacli spots delete --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of spot
  --yaml               Print a yaml output

DESCRIPTION
  Delete spot
```

## `emmacli spots reboot`

Reboot spot

```
USAGE
  $ emmacli spots reboot --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of spot
  --yaml               Print a yaml output

DESCRIPTION
  Reboot spot
```

## `emmacli spots shutdown`

Shutdown spot

```
USAGE
  $ emmacli spots shutdown --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of spot
  --yaml               Print a yaml output

DESCRIPTION
  Shutdown spot
```

## `emmacli spots snapshot`

Create spot snapshot

```
USAGE
  $ emmacli spots snapshot --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of spot
  --yaml               Print a yaml output

DESCRIPTION
  Create spot snapshot
```

## `emmacli spots start`

Start spot

```
USAGE
  $ emmacli spots start --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of spot
  --yaml               Print a yaml output

DESCRIPTION
  Start spot
```

## `emmacli vms`

Get list of current project vms (vm, spot, private vms)

```
USAGE
  $ emmacli vms [--json] [--yaml]

FLAGS
  --json  Print a json output
  --yaml  Print a yaml output

DESCRIPTION
  Get list of current project vms (vm, spot, private vms)
```

_See code: [src/commands//vms/index.ts](https://github.com/MandarinSolutions/emma-cli/blob/v0.0.5/src/commands//vms/index.ts)_

## `emmacli vms clone`

Clone vm

```
USAGE
  $ emmacli vms clone --productId <value> --newVmName <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --newVmName=<value>  (required) New Vm name
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Clone vm
```

## `emmacli vms create`

Create vm

```
USAGE
  $ emmacli vms create --providerId <value> --locationId <value> --bundleId <value> --cloudType <value>
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

## `emmacli vms delete`

Delete vm

```
USAGE
  $ emmacli vms delete --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Delete vm
```

## `emmacli vms reboot`

Reboot vm

```
USAGE
  $ emmacli vms reboot --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Reboot vm
```

## `emmacli vms shutdown`

Shutdown vm

```
USAGE
  $ emmacli vms shutdown --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Shutdown vm
```

## `emmacli vms snapshot`

Create vm snapshot

```
USAGE
  $ emmacli vms snapshot --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Create vm snapshot
```

## `emmacli vms start`

Start vm

```
USAGE
  $ emmacli vms start --productId <value> [--json] [--yaml]

FLAGS
  --json               Print a json output
  --productId=<value>  (required) Product id of vm
  --yaml               Print a yaml output

DESCRIPTION
  Start vm
```

## `emmacli vms transfer`

Transfer vm

```
USAGE
  $ emmacli vms transfer --productId <value> --dcId <value> --providerId <value> --cloudType <value> [--json]
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
