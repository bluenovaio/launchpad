<div>
    <p align="center">
        <img src="/logo.png" align="center" width="300" />
    </p>
    <hr>
    <p align="center">
       Opinionated CLI tool for generating deployment Github Action workflows. 
    </p>
    <br>
    <br>
</div>

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

## Programmatic Access

```typescript
import * as launchpad from "bluenova/launchpad";

// Generate a workflow
launchpad.generate({
    name: 'my-service'
    // other configs
});
```

## Features

* Preview Environments
* Environment Segmentation
* Environment-Based Rollbacks
