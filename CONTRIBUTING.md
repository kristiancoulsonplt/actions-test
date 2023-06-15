# Contributing Guidelines

In order to keep pull requests organised, we have implemented some github actions to keep everything consistent. As we have so many tickets, when every PR is different, it can be harder to check what should and shouldn't be going into releases.

## Checklists

When you create a pull request, please read through the checklist and tick each point once you have completed it.

Sometimes they aren't needed, and in these cases you may remove them.

## Pull Request Titles

Allowed Prefixes

```
feat,fix,chore,task,bugfix,patch,hotfix,urgent
```

Allowed format

```
feat: BBT-1234 Updated component name
feat(plp): BBT-1234 Updated Component name
chore: Release/1.2.3
```

- Must start with an accepted prefix
- Must include the ticket number (unless it uses the chore prefix)
- Optionally includes a descriptor after the prefix - (such as (plp) in the examples above)
- Must include a `:` after the prefix
- Must describe the changes after the ticket number
- Prefix must be lowercase, ticket must be uppercase

## Branch Naming Conventions

Allowed Prefixes

```
feat,fix,chore,task,bugfix,patch,hotfix,release,urgent
```

Allowed Formats:

```
task/bbt-1234
task/bbt-1234-updated
release/1.2.3
chore-something
revert-something
```

- The branch must start with one of the allowed
- Unless it is a release, chore, or revert it must include the ticket name in the format bbt-1234
- releases must be in the format release/1.2.3
- You can add additional characters on the end in case you need to clone or extend your branch
- it must be lowercase

### I have an urgent change, and don't have time to follow the guidelines!

It happens, in this case just follow the following rules:

- Name your branch prefixed with `urgent-` as `urgent-some-pdp-fix`
- Remove any checklist tasks so it doesn't block the pr
- Title your PR prefixed with `urgent` such as `urgent: fixed some data issue on pdp`
