# modularium-sniper

## Overview
**modularium-sniper** is a codebase designed to snipe NFT drops on Modularium on Forma Chain. The project includes various scripts to facilitate the process, ensuring efficient and timely participation in NFT drops.

## Features
- **TIA Dispersal:** `disperse.js` allows dispersing TIA to multiple addresses in one click, enabling the use of these addresses to snipe listings (necessary due to max mint limit per wallet).
- **Drop Monitoring:** `getDrop.js` serves as the driver program, monitoring the `dropCreated` event emitted by the contract and issuing transactions accordingly.
- **Transaction Management:** `multiple_contract_call.js` handles transactions across multiple addresses by entering the private keys and performing transactions on all of them. This script is called by the other scripts.
- **Minted Event Handling:** `minted.js` listens for the `nftMinted` event and reinitializes transactions if they did not go through initially.

## Scripts
1. **disperse.js:** 
   - Disperses TIA to multiple addresses in one click.
   - Facilitates the use of multiple addresses for sniping due to wallet mint limits.

2. **getDrop.js:**
   - Monitors for the `dropCreated` event emitted by the contract.
   - Issues transactions to participate in the NFT drop.
   - Calls `multiple_contract_call.js` to handle transactions.

3. **multiple_contract_call.js:**
   - Manages transactions across multiple addresses.
   - Requires private keys of all addresses to perform transactions.
   - Called by other scripts to execute transactions.

4. **minted.js:**
   - Listens for the `nftMinted` event.
   - Reinitializes transactions if they did not go through before.

## Installation
To set up the modularium-sniper codebase locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/modularium-sniper.git
   cd modularium-sniper
2 **install dependencies**
``` bash
  npm install
```
