# Met Collection Viewer

A Practice React Project using [https://metmuseum.github.io/](The Met's API). A Large-scale, free api.

View the most recent updates at [https://met-collection-app.vercel.app/collection](https://met-collection-app.vercel.app/collection)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Install all depenencies:

```bash
npm install
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Integrations

- [Next](https://nextjs.org/docs/getting-started) is the framework that wraps React. It adds great lazy loading/speed/build time static generation/global CDN/etc to make the site fast + easy to build by default. Notably, there's a "client" + a "server", and client requests to `/api/X` hit the server via `pages/api/X.tsx` and it makes requests directly from the host, enabling use of DB/etc.

- [Vercel](https://vercel.com) hosts + builds the site. Every commit to `main` triggers a new deploy & publish on Vercel.

- [useSWR](https://swr.vercel.app) HTTP cache invalidation strategy popularized by HTTP RFC 5861. SWR is my strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.

- [MUI System](https://mui.com/system/getting-started/overview/) provides the styling system.

## API

- All Next client and server endpoints are synchronized and strongly typed using `/src/api/endpoints.ts`. No endpoint should be directly accessed from the client side. However, the types defined in this file can be utilized.

- The presence of strong typing enables the usage of `useData` with an `EndpointKey` as the standard approach for components and hooks to access data through useSWR.
