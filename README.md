# LOPI-2

## Install dependencies

yarn install

## Test commands

`yarn test-shop` for run shop tests<br>
`yarn test-shop-watch` for run shop tests in watch mode<br>
`yarn test-admin` for run admin tests<br>
`yarn test-admin-watch` for run admin tests in watch mode<br>

## Start commands

To start the shop app in development mode run `yarn run-shop`. URL: http://localhost:4000/. </br>
To start the admin-panel app in development mode run `yarn run-admin`. URL: http://localhost:4001/. </br>
To start `both` in development mode run `yarn run-all`.

## Build commands

To build the shop run `yarn build-shop`. </br>
To build the admin-panel run `yarn build-admin`. </br>
To build `both` run `yarn build-all`.

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.
