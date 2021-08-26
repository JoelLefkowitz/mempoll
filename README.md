# Mempoll

A simple NodeJS memory usage poller.

## Status

| Source     | Shields                                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Project    | ![release][release_shield] ![license][license_shield] ![lines][lines_shield] ![languages][languages_shield]                                   |
| Health     | ![readthedocs][readthedocs_shield] ![github_review][github_review_shield] ![codacy][codacy_shield] ![codacy_coverage][codacy_coverage_shield] |
| Publishers | ![npm][npm_shield] ![npm_downloads][npm_downloads_shield]                                                                                     |
| Repository | ![issues][issues_shield] ![issues_closed][issues_closed_shield] ![pulls][pulls_shield] ![pulls_closed][pulls_closed_shield]                   |
| Activity   | ![contributors][contributors_shield] ![monthly_commits][monthly_commits_shield] ![last_commit][last_commit_shield]                            |

## Installing

```bash
npm install -D mempoll
```

```bash
yar add -D mempoll
```

## Usage

```js
const mempoll = require('mempoll');

const worker = mempoll();
```

```ts
import { mempoll } from 'mempoll';

const worker = mempoll();
```

## Tests

To run unit tests:

```bash
grunt test
```

## Documentation

This repository's documentation is hosted on [readthedocs][readthedocs].

## Tooling

To run linters:

```bash
grunt lint
```

To run formatters:

```bash
grunt format
```

## Continuous integration

This repository uses github actions to lint and test each commit. Formatting tasks and writing/generating documentation must be done before committing new code.

## Versioning

This repository adheres to semantic versioning standards.
For more information on semantic versioning visit [SemVer][semver].

Bump2version is used to version and tag changes.
For example:

```bash
bump2version patch
```

## Changelog

Please read this repository's [changelog](CHANGELOG.md) for details on changes that have been made.

## Contributing

Please read this repository's guidelines on [contributing](CONTRIBUTING.md) for details on the process for submitting pull requests. Moreover, our [code of conduct](CODE_OF_CONDUCT.md) declares our collaboration standards.

## Contributors

- **Joel Lefkowitz** - _Initial work_ - [Joel Lefkowitz][author]

[![Buy Me A Coffee][coffee_button]][coffee]

## Remarks

Lots of love to the open source community!

![Be kind][be_kind]

<!-- Public links -->

[semver]: http://semver.org/
[be_kind]: https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif
[coffee]: https://www.buymeacoffee.com/joellefkowitz
[coffee_button]: https://cdn.buymeacoffee.com/buttons/default-blue.png
[readthedocs]: https://mempoll.readthedocs.io/en/latest/

<!-- Acknowledgments -->

[author]: https://github.com/joellefkowitz

<!-- Project shields -->

[release_shield]: https://img.shields.io/github/v/tag/joellefkowitz/mempoll
[license_shield]: https://img.shields.io/github/license/joellefkowitz/mempoll
[lines_shield]: https://img.shields.io/tokei/lines/github/joellefkowitz/mempoll
[languages_shield]: https://img.shields.io/github/languages/count/joellefkowitz/mempoll

<!-- Health shields -->

[readthedocs_shield]: https://img.shields.io/readthedocs/mempoll
[github_review_shield]: https://img.shields.io/github/workflow/status/JoelLefkowitz/mempoll/Review
[codacy_shield]: https://img.shields.io/codacy/grade/3c758fa5074c4e39a5a26277aecc3821
[codacy_coverage_shield]: https://img.shields.io/codacy/coverage/3c758fa5074c4e39a5a26277aecc3821

<!-- Publishers shields -->

[npm_shield]: https://img.shields.io/npm/v/mempoll
[npm_downloads_shield]: https://img.shields.io/npm/dw/mempoll

<!-- Repository shields -->

[issues_shield]: https://img.shields.io/github/issues/joellefkowitz/mempoll
[issues_closed_shield]: https://img.shields.io/github/issues-closed/joellefkowitz/mempoll
[pulls_shield]: https://img.shields.io/github/issues-pr/joellefkowitz/mempoll
[pulls_closed_shield]: https://img.shields.io/github/issues-pr-closed/joellefkowitz/mempoll

<!-- Activity shields -->

[contributors_shield]: https://img.shields.io/github/contributors/joellefkowitz/mempoll
[monthly_commits_shield]: https://img.shields.io/github/commit-activity/m/joellefkowitz/mempoll
[last_commit_shield]: https://img.shields.io/github/last-commit/joellefkowitz/mempoll
