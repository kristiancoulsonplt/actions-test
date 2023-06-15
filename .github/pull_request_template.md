## Ticket

<!--- URL of the ticket --->

## Description

<!--- A short summary of the feature or fix that is required and
the solution that is being put in place --->

## Other notes (Optional)

<!--- Any additional information that would be useful to a reviewer --->

## Checklist

- [ ] I updated|added unit tests related to these changes (if possible).
- [ ] The content is translated for all locales.
- [ ] It supports both LTR and RTL.
- [ ] Requires DevOps changes.

## Screenshots (Optional)

| Before | After |
| :----: | :---: |
|        |       |

## Pull Request Titles

Allowed Prefixes

```
feat,fix,chore,task,bugfix,patch,hotfix
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
feat,fix,chore,task,bugfix,patch,hotfix,release
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
