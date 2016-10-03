# Contributing

 *  [Support](#support)
 *  [Committing](#committing)
 *  [Issues](#issues)
 *  [Pull requests](#pull-requests)
 *  [Coding rules](#coding-rules)
 *  [Branching](#branching)

## Support

Feel free to ask us anything you want at our
[official channels][channels],
but don't forget our [rules][]



## Committing

 *  Commit must be as atomic as possible.
 *  Commit messages must be as terse as possible,
    but without big damage to information value.
 *  Commit message format (similar with Angular's one):
    
    ````
    <type> (<scope>): <subject>
    <blank line>
    <body>
    <blank line>
    <footer>
    ````
 *  Types:
    *  `fix` — issue fix
       (presented at `release-x.y.z` branches).
    *  `documentation` — documentation update.
    *  `revert` — this commit reverts other commit.
    *  `feature` — new feature
       (first commit in `feature-*` branch).
    *  `style` — code style change.
    *  `performance` — performance improvement.
    *  `refactoring` — refactoring.
    *  `tests` — adding missing tests.
    *  `chore` — changes in build system etc.
 *  Scopes:
    *  Scopes are repository-specific.
       See `CONTRIBUTING.md` files in each repository.
 *  Subject:
    *  Describe change in few words.
    *  Use past tense.
    *  If possible, capitalize first letter.
    *  Don't add the dot at the end of line.
 *  Body:
    *  Describe change and it's reason.
    *  Provide previous behaviour description.
    *  Use past tense.
    *  If possible, capitalize first letter
       of each sentence.
    *  Add dot etc. at the end of each sentence.
    *  Use Markdown.
 *  Footer:
    *  Only presented in breaking commits.
    *  Starts with `BREAKING CHANGE:` keyword
       and whitespace or two newlines.
    *  Footer must include description
       of breaking change and migration notes.



## Issues

 *  Before opening an issue:
     *  Find for already existing similar ones.
     *  Open a new one, only if there are no issues,
        describing your problem.
 *  Issue format:
    
    ````
    <subject>
    
    ## TL;DR
    <overview>
    
    ## Motivation
    <motivation>
    
    ## Version
    <affected version or commit>
    
    ## Environment
    <OS and other related software versions>
    
    ## Reproduction
    <how to reproduce>
    
    ## Stack
    <stack trace, logs and other related data>
    
    ## Suggestion
    <how would you fix it>
    
    ## Related
    <related issues>
    ````
 *  Subject:
     *  Use imperative mood.
     *  If possible, use polite speak.
     *  Describe desired change in a few words.
 *  Overview:
     *  Describe desired change using free form.
     *  Use more verbose style, than in the subject.
 *  Motivation:
     *  Describe, why it is a problem.
 *  Affected version or commit:
     *  If the issue presented in tagged version,
        refer to the corresponding tag.
     *  If the issue presented in development version,
        refer to the commit representing your version.
 *  OS and other related software versions:
     *  OS version.
     *  Lexer implementation language
        and runtime (e. g. TS 2, Node 6).
 *  How to reproduce:
     *  Steps to reproduce error.
 *  Stack trace, logs and other related data:
     *  Optional.
     *  Includes stack traces, logs, configs
        and other data, which may be useful for developers.
 *  Suggestion:
     *  Suggest us, how to fix the issue.
     *  Optional, if you have no idea how to do this.
 *  Related:
     *  Specify related issues.
     *  Describe, why you open new issue,
        when there are similar ones already.
     *  Optional, if you can't find similar issues.



## Pull requests

 *  Before opening new pull request:
     *  Find for already existing similar ones.
     *  Open a new one, only if there are no pull requests,
        duplicating your one.
 *  Follow branching rules.
 *  Follow coding rules.
 *  Pull request must include tests, covering all changes.
 *  All tests must pass.



## Coding rules

 *  All public API must be documented
    using JSDoc, JavaDoc, etc.
 *  See existing sources to figure out,
    what we mean when talking about coding style.



## Branching

Repositories of Kawaii projects
includes following branches:

 *  `master` — production-ready code only, latest version.
 *  `latest` — development version.
     *  Branches off from `master`.
     *  Merges into `master`.
 *  `release-x.y.0` — one branch per release.
     *  Branches off from `dev`.
     *  Merges into `dev` and `master`.
 *  `release-x.y.z` — one branch per fix.
     *  Branches off from `release-x.y.0`.
     *  Merges into `release-x.y.0`, `master` and `latest`.
 *  `feature-*` — one branch per feature.
     *  Branches off from `latest`.
     *  Merges into `latest`.



[channels]: https://kawaii-lang.github.io/channels
[rules]:    https://kawaii-lang.github.io/rules
