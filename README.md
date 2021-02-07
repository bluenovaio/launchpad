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

WHY???

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

