# [react-boilerplate](https://react-boilerplate.arpanlaha.now.sh/) [![CircleCI](https://circleci.com/gh/arpanlaha/react-boilerplate.svg?style=svg)](https://circleci.com/gh/arpanlaha/react-boilerplate)

## Overview

This is a React boilerplate that I built in order to learn how to to integrate the different technologies I use in it as well as as a template for [building out](https://github.com/arpanlaha/arpanlaha.com) my [personal website](https://arpanlaha.com), as well as potential other use cases such as with [Hack4Impact UIUC](https://github.com/hack4impact-uiuc).

This boilerplate supports Next.js, Redux, SCSS, and is written in TypeScript. I used the following examples and projects for guidance:

- [Next.js's Redux example](https://github.com/zeit/next.js/tree/canary/examples/with-redux)
- [Hack4Impact Recruitment Portal](https://github.com/hack4impact-uiuc/h4i-recruitment)
- [react-async](https://github.com/ghengeveld/react-async) (inspiration for [LoadWrapper](/components/LoadWrapper.tsx))

## Usage

While still a work in progress, this boilerplate intends to demonstrate use cases for all of its functionality, and aims to maximize its scores using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/).

Additionally, this boilerplate is usable with [Now 2.0](https://zeit.co/now) with zero additional configuration, and comes with a `config.yml` file for running audit, format, lint, and typecheck scripts on [CircleCI](https://circleci.com/).

## TypeScript

While TypeScript allows for easier detection of errors, refactoring, and code completion, it also introduces some overhead (when compared to an equivalent boilerplate written in JavaScript).

I highly recommend reading [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html) prior to using this boilerplate if you're unfamiliar with TypeScript, as it does a far better job than I could at explaining both the unique features of TypeScript and the modern JavaScript it supports.

### Types

As this boilerplate operates in `strict` mode by default, types are required to be fed into components for custom props or state, and all function return types must be specified. Oftentimes, a type you want to use will fall into one of three categories:

- A base TypeScript type (`string`, `boolean`, `Error`) - primitives will be lowercase while objects will be uppercase.
- A package type (`Component`, `Store`) - sometimes, these are intuitive; however other times you may need to do some digging to find the type you need. Oftentimes, looking at the structure of types you're already using (right click + "Go to definition" or "Peek definition" in VSCode) will tell you the type you need to use.
- A type that doesn't exist - in this case, you'll need to define the type yourself. This will most often happen when specifying custom component state or props.

#### Creating types

When you want to define a type, create an `interface` with properties corresponding to the structure you want. For example, `Head` has optional props for `title`, `description`, and `keywords`, so we define `HeadProps` and `Head` as follows:

```ts
interface HeadProps extends Props<Component> {
  title?: string;
  description?: string;
  keywords?: string;
}

class Head extends Component<HeadProps> {...}
```

`HeadProps` extends `Props<Component>`, which is JavaScript's version of class inheritance that also holds for TypeScript interfaces. Additionally, as all the props are optional, they are marked by a question mark after their corresponding keys.

### Dependencies

The following dependencies are introduced by writing in TypeScript:

#### `typescript`

TypeScript itself is required in order to compile down to JavaScript at runtime.

#### `@types`

One of the downsides to developing in TypeScript is relying on packages to ship with type definitions. Usually, type definitions are only included if a package is itself written in TypeScript (`next` and `redux` are examples of JavaScript libraries that ship with type). To circumvent this, the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) monorepo maintains a massive collection of types for most popular libraries that are maintained by the open-source community and follow the naming convention `@types/<package-name>`. The following dependencies are required due to their corresponding packages not shipping with types:

- `@types/node`
- `@types/react`
- `@types/react-redux`

In the case of dependencies that neither ship with types or have a corresponding `@types` package, you must either ignore TypeScript errors by placing a comment with the `@ts-ignore` tag above the import declaration, or define the types yourself. In this boilerplate's case, `next-page-transitions` falls into this category, so errors are circumvented as follows:

```ts
// @ts-ignore
import { PageTransition } from "next-page-transitions";
```
