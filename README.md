# rakkas-with-test-handler

Running `vitest` with `rakkasjs` and `@hattip/adapter-test` throws an error.

```shell-session
$ npm run test

FAIL  tests/index.test.ts [ tests/index.test.ts ]
ReferenceError: VAVITE_VITE_DEV_SERVER_259b24b2b62d29e1a0e553484dd9d864340a9d69 is not defined
 ❯ virtual:vavite-vite-dev-server:1:32
 ❯ node_modules/rakkasjs/dist/server.js:13:32
     11|   RouteParamsContext,
     12|   ServerSideContext,
     13|   composableActionData,
       |                                ^
     14|   createNamedContext,
     15|   createQueryClient,

```

Other commands throw no errors.
