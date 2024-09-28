import { createTestClient } from "@hattip/adapter-test";
import { test as t } from "vitest";
// cannot import entrypoint because of VAVITE_VITE_DEV_SERVER
import handler from "#@/entry-hattip";

const test = t.extend<{ fetch: typeof fetch }>({
  fetch: async ({}, use) => {
    await use(createTestClient({ handler }));
  },
});

test("can i run rakkas server?", async ({ expect, fetch }) => {
  const topPage = await fetch("/");
  expect(topPage.status).toEqual(200);
});
