<div>
    <p align="center">
        <img src="/logo.png" align="center" width="300" />
    </p>
    <hr>
    <p align="center">
       A CLI tool for generating an opinionated deployment process via Github Action workflows. 
    </p>
    <br>
</div>

[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

# Overview

LaunchPad is an "opinionated deployment process" that we use at BlueNova. We run the vast majority of
our services using Cloud Run, and we manage this process using the LaunchPad CLI tool.

We set up this process based off past experiences, and our need to "move fast and NOT break things". 
Please take a look below at the [Features](#features) section for more information on the "Whys"
behind LaunchPad.

## Table of Contents

* [Features](#features)
* [Getting Started](#getting-started)
* [Environments](#environments)
* [Environment Variables](#environment-variables)
* [Requirements](#requirements)
* [Programmatic Access](#programmatic-access)
* [Gotchas & Other Important Tidbits](#gotchas--other-important-tid-bits)

## Features

* Customizable Preview Environments
* Environment Segmentation
* Environment-Based Rollbacks

## Getting Started

1. Install launchpad

```shell
npm install -g @bluenova/launchpad
```
2. Create initial `launchpad.yaml`
```shell
launchpad init
```
3. Configure your yaml file
4. Launch your service! 

## Environments 

LaunchPad provides multiple "Environments" that are segmented based on Security, Best Practice, and the ability to
safely test code changes. See the table and diagram below for more details:

| Environment    | Project        | Description                                                                                                                                                       |
|----------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Production     | Production     | Completely isolated production environment that end-users will utilize.                                                                                           |
| Pre-Production | Pre-Production | A UAT / Staging-like Environment meant for integration testing and a final step before pushing code to end users.                                                 |
| Preview        | Pre-Production | A customized set of deployments for each Pull-request. These Environments will have their own DBs and interact with Pre-Production Services (NOT other Previews). |

![Environment Architecture](/environment-architecture.png)
**Source**: [Diagram](https://app.diagrams.net/#G1jTxP0easfavZMxBaCAu_XDhadvdz5rGj)

## Environment Variables

A set of pre-defined Environment variables are injected by default.

## Requirements

### Authentication

### Secrets

## Programmatic Access

```typescript
import * as launchpad from "bluenova/launchpad";

// Generate a workflow
launchpad.generate({
    name: 'my-service'
    // other configs
});
```

## Gotchas & Other Important Tid-bits

