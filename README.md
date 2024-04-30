# Mempoll

A simple NodeJS memory usage poller.

![Review](https://img.shields.io/github/actions/workflow/status/JoelLefkowitz/mempoll/review.yml)
![Version](https://img.shields.io/npm/v/mempoll)
![Downloads](https://img.shields.io/npm/dw/mempoll)
![Size](https://img.shields.io/bundlephobia/min/mempoll)
![Quality](https://img.shields.io/codacy/grade/3c758fa5074c4e39a5a26277aecc3821)
![Coverage](https://img.shields.io/codacy/coverage/3c758fa5074c4e39a5a26277aecc3821)

## Installing

```bash
npm install mempoll
```

## Documentation

Documentation and more detailed examples are hosted on [Github Pages](https://joellefkowitz.github.io/mempoll).

## Usage

```ts
import { poll } from "mempoll";

poll();
```

This will print a summary every second:

```bash
┌────────────────────┬────────┐
│      (index)       │ Values │
├────────────────────┼────────┤
│      Rss / MB      │   28   │
│  Heap total / MB   │ 4.102  │
│   Heap used / MB   │ 2.275  │
│   External / MB    │ 1.074  │
│ Array buffers / MB │  0.01  │
└────────────────────┴────────┘
```

## Parameters

```ts
import { Worker } from "worker_threads";

const poll: (interval: number = 1000, resolution: number = 3) => Worker;
```

- Interval: Polling interval in ms.
- Resolution: Output figure decimal places.

## Tooling

### Dependencies

To install dependencies:

```bash
yarn install
```

### Tests

To run tests:

```bash
npm run test
```

### Documentation

To generate the documentation locally:

```bash
npm run docs
```

### Linters

To run linters:

```bash
npm run lint
```

### Formatters

To run formatters:

```bash
npm run format
```

## Contributing

Please read this repository's [Code of Conduct](CODE_OF_CONDUCT.md) which outlines our collaboration standards and the [Changelog](CHANGELOG.md) for details on breaking changes that have been made.

This repository adheres to semantic versioning standards. For more information on semantic versioning visit [SemVer](https://semver.org).

Bump2version is used to version and tag changes. For example:

```bash
bump2version patch
```

### Contributors

- [Joel Lefkowitz](https://github.com/joellefkowitz) - Initial work

## Remarks

Lots of love to the open source community!

<div align='center'>
    <img width=200 height=200 src='https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif' alt='Be kind to your mind' />
    <img width=200 height=200 src='https://media.giphy.com/media/KEAAbQ5clGWJwuJuZB/giphy.gif' alt='Love each other' />
    <img width=200 height=200 src='https://media.giphy.com/media/WRWykrFkxJA6JJuTvc/giphy.gif' alt="It's ok to have a bad day" />
</div>
