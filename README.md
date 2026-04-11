![npm](https://img.shields.io/npm/v/clicker-stacks-sdk?color=blueviolet) ![Stacks Mainnet](https://img.shields.io/badge/Stacks-Mainnet-blueviolet) ![license](https://img.shields.io/badge/license-MIT-blue)

# clicker

On-chain tap game on Stacks.

## Contract Details

| Property | Value |
|---|---|
| Network | Stacks Mainnet |
| Address | `SP1Q7YR67R6WGP28NXDJD1WZ11REPAAXRJJ3V6RKM` |
| Name | `clicker` |
| Explorer | [View on Hiro](https://explorer.hiro.so/address/SP1Q7YR67R6WGP28NXDJD1WZ11REPAAXRJJ3V6RKM.clicker?chain=mainnet) |

## Structure

- `contracts/` - Clarity smart contract
- `frontend/` - Next.js app deployed on Vercel
- `sdk/` - `clicker-stacks-sdk` npm package source

## Tech Stack

- Smart Contract: Clarity on Stacks blockchain
- Frontend: Next.js + React + TypeScript
- Wallet: `@stacks/connect`
- SDK: TypeScript client in `sdk/`

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

## License

MIT
