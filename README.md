# clicker

On-chain tap game on Stacks.

## Structure

- `contracts/` - Clarity smart contract
- `frontend/` - Next.js app deployed on Vercel
- `sdk/` - `clicker-stacks-sdk` npm package source

## Tech Stack

- Stacks + Clarity
- Next.js + React + TypeScript
- `@stacks/connect`, `@stacks/network`, `@stacks/transactions`

## Deployment

The frontend uses `frontend/` as the app root.

```bash
cd frontend
npm install
npm run build
npm start
```

## SDK

The SDK source now lives in [`sdk/`](./sdk).

```bash
npm install clicker-stacks-sdk
```
