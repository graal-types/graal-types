# Graal Types

> Inspired by [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped)

> A repository for Java type definitions in TypeScript; made for Graal 

## Declaration Files

To learn more about declaration files, see [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).


You can install by doing one of the following (via npm/yarn):

```
npm install --save-dev @graal-types/{LIBRARY_HERE}
```

```
yarn add dev @graal-types/{LIBRARY_HERE}
```

# Contributing

We use a modified tool called `java-ts-bind` created by bensku, which is found [here](https://github.com/MercerK/java-ts-bind). You'll need to clone the repo, compile it, copy the jar to `./types`, visit the target folder (or create one for a new library), and configure the `tsbindOptions` field in a packageJson file (as needed).

Once configured, you can run:

```
cd types
java -jar java-ts-bind-all.jar --packageJson {FOLDER_HERE}
```

This should generate new typings. If they look correct, commit and create a PR.

# Resources

Feel free to come join us in the [Grakkit Discord](https://discord.com/invite/e682hwR) in the #graal-types channel!
