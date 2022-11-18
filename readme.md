# Node API Proxy Server

Server used for hiding API keys, with rate limiting and caching. This can easily be customized to any API.

## Usage

### Install dependencies

```bash
npm install
```

### Run on http://localhost:4000

```bash
npm run dev
```

### Add public API info

Rename **.env.example** to **.env** and edit the values

- GITHUB_GRAPHQL_KEY=
- GITHUB_GRAPHQL_ENDPOINT=
- POST_ENDPOINT=
- CLIENT=

- Add new routes can be added
- Change rate limiting and caching

