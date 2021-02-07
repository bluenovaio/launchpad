<div>
    <p align="center">
        <img src="/logo.png" align="center" width="300" />
    </p>
    <hr>
    <p align="center">
       A CLI tool for generating an <em>Opinionated Deployment Process</em> via Github Action workflows. 
    </p>
    <br>
</div>

[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

# Overview

LaunchPad is an *Opinionated Deployment Process* that we utilize at BlueNova. We deploy the vast majority of
our services using Cloud Run, and we manage this process with Github Action Workflows generated using the LaunchPad CLI tool.

We set up this process based off of our past-experiences, and our need to **move fast and NOT break things**. 
Please take a look below at the [Features](#features) section for more information on the *Whys* behind LaunchPad.

## Table of Contents

* [Features](#features)
* [Getting Started](#getting-started)
* [Environments](#environments)
* [Environment Variables](#environment-variables)
* [Requirements](#requirements)
* [Programmatic Access](#programmatic-access)
* [Gotchas & Other Important Tidbits](#gotchas--other-important-tid-bits)

## Features

Below is a list of the core features or *Whys* behind LaunchPad. This list is not all-inclusive, but the primary
reasons we built this tool.

| Feature               | Status | Description                                                                          |
|-----------------------|--------|--------------------------------------------------------------------------------------|
| Preview Environments  | Todo   | A customized set of deployments for each Pull-request, used to test collaboratively. |
| Customizable Previews | Todo   | Ability to parameterize and customize Previews on the fly.                           |
| Versioned Rollbacks   | Todo   | Utilize workflows to rollback to previous versions of deployments.                   |
| Preview Auto-Cleanup  | Todo   | Previews will clean themselves up when PRs are merged or closed.                     |

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
4. Generate your LaunchPad Workflows
```shell
launchpad generate
```
5. Launch your service! 

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

Due to the fact LaunchPad is an *Opinionated Deployment Process*, there are certain requirements
that need to be met. Specicially cross-service authentication must be set up correctly and certain 
secrets must be added either to the repository or the organization. Please review the below to sections
for more details.

### Docker Registry

### Authentication

TBD

### Secrets

TBD

## Programmatic Access

If you ever want to build your own tool or extend LaunchPad, we provide the ability via the npm package
to import certain functions and data structures to allow you to customize as needed. If you use the npm package
in a programmatic fashion you CAN NOT customize the CLI tool (you will have to build your own).

```typescript
import * as launchpad from "bluenova/launchpad";

// Generate a workflow
launchpad.generate({
    name: 'my-service'
    // other configs
});
```

## Gotchas & Other Important Tid-bits

Below is a list of things we think you should know or gotchas we've ran into with our *Opinionated Deployment Process*.

TBD
