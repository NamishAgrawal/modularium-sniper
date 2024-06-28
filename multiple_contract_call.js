import { ethers } from "ethers";

const rpcUrl = "https://rpc.forma.art";
const provider = new ethers.JsonRpcProvider(rpcUrl);
let walletAddress
let chainId = 984122;

//add your private keys here
const private_keys = {
    "forma-1": "",
    "forma-2": "",
    "forma-3": "",
    "forma-4": "",
    "forma-5": "",
}

const keyArrray = Object.keys(private_keys).map(name => ({
    name: name,
    address: private_keys[name]
}));

const ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            }
        ],
        "name": "AddressEmptyCode",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "AddressInsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ContractMetadataCemented",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ContractMetadataUnauthorized",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "ERC1967InvalidImplementation",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ERC1967NonPayable",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ErrAllowListManagementUnathorized",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dropId",
                "type": "uint256"
            }
        ],
        "name": "ErrInvalidDrop",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "ErrInvalidTokenType",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "ErrNotAllowed",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dropId",
                "type": "uint256"
            }
        ],
        "name": "ErrNotCreator",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "FailedInnerCall",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidInitialization",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotInitializing",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UUPSUnauthorizedCallContext",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            }
        ],
        "name": "UUPSUnsupportedProxiableUUID",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "Allowed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "ContractURICemented",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "ContractURIUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "Denied",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "DropCancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "dropId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "internalType": "address payable",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "tokenAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "enum TokenType",
                                "name": "tokenType",
                                "type": "uint8"
                            }
                        ],
                        "internalType": "struct Token",
                        "name": "token",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint32",
                        "name": "maxAllowed",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "maxPerWallet",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint48",
                        "name": "startDate",
                        "type": "uint48"
                    },
                    {
                        "internalType": "uint48",
                        "name": "endDate",
                        "type": "uint48"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minted",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "merkleRoot",
                        "type": "bytes32"
                    }
                ],
                "indexed": false,
                "internalType": "struct SimpleDropUpgradeable.Drop",
                "name": "drop",
                "type": "tuple"
            }
        ],
        "name": "DropCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "qty",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "DropMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "version",
                "type": "uint64"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferStarted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "Upgraded",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "UPGRADE_INTERFACE_VERSION",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "acceptOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "allow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dropId",
                "type": "uint256"
            }
        ],
        "name": "cancelDrop",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cementContractMetadata",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractURICemented",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address payable",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "tokenAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct SimpleToken",
                        "name": "token",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint32",
                        "name": "maxAllowed",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "maxPerWallet",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint48",
                        "name": "startDate",
                        "type": "uint48"
                    },
                    {
                        "internalType": "uint48",
                        "name": "endDate",
                        "type": "uint48"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "merkleRoot",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct SimpleDropUpgradeable.DropParams",
                "name": "_params",
                "type": "tuple"
            }
        ],
        "name": "createDrop",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "deny",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dropId",
                "type": "uint256"
            }
        ],
        "name": "drop",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "dropId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "internalType": "address payable",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "tokenAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "enum TokenType",
                                "name": "tokenType",
                                "type": "uint8"
                            }
                        ],
                        "internalType": "struct Token",
                        "name": "token",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint32",
                        "name": "maxAllowed",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "maxPerWallet",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint48",
                        "name": "startDate",
                        "type": "uint48"
                    },
                    {
                        "internalType": "uint48",
                        "name": "endDate",
                        "type": "uint48"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minted",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "merkleRoot",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct SimpleDropUpgradeable.Drop",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_initialOwner",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_feeRecipient",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "_fee",
                "type": "uint16"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "isAllowed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dropId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_qty",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_recipient",
                "type": "address"
            },
            {
                "internalType": "bytes32[]",
                "name": "_merkleProof",
                "type": "bytes32[]"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dropId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_minter",
                "type": "address"
            }
        ],
        "name": "minted",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dropId",
                "type": "uint256"
            }
        ],
        "name": "minted",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pendingOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "proxiableUUID",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "image",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "externalLink",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "collaborators",
                        "type": "string[]"
                    }
                ],
                "internalType": "struct StdContractMetadata",
                "name": "_data",
                "type": "tuple"
            }
        ],
        "name": "setContractMetadata",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "internalType": "struct RequiredContractMetadata",
                "name": "_data",
                "type": "tuple"
            }
        ],
        "name": "setContractMetadata",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "image",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "bannerImage",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "featuredImage",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "externalLink",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "collaborators",
                        "type": "string[]"
                    }
                ],
                "internalType": "struct FullContractMetadata",
                "name": "_data",
                "type": "tuple"
            }
        ],
        "name": "setContractMetadata",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_jsonBlob",
                "type": "string"
            }
        ],
        "name": "setContractMetadataRaw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_fee",
                "type": "uint16"
            }
        ],
        "name": "setPlatformFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_feeRecipient",
                "type": "address"
            }
        ],
        "name": "setPlatformFeeRecipient",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
]
const proxyAddress = "0xd09504c5E298647eC408D9eaD83F7C5730E61C72";


async function minting(gasPrice, value, dropId, qty, recipient, merkle, wallet) {

    const contract = new ethers.Contract(proxyAddress, ABI, wallet);

    try {
        const tx = await contract.mint(dropId, qty, recipient, merkle, {
            gasPrice: ethers.parseUnits(gasPrice.toString(), "gwei"),
            gasLimit: 250846,
            value: ethers.parseEther(value)
        });
        console.log("Transaction hash:", tx.hash);
    } catch (error) {
        console.error("Error minting tokens:", error);
    }
}
async function multiple_call(gasPrice, value, dropId, qty, merkle) {
    for (const item of keyArrray) {
        const privateKey = item.address;
        const wallet = new ethers.Wallet(privateKey, provider);
        walletAddress = wallet.address;
        console.log(`Name: ${item.name}, wallet address:${walletAddress}`);
        let recipient = walletAddress;
        await minting(gasPrice, value, dropId, qty, recipient, merkle, wallet);
    }
}

async function call_multiple(dropId,value){
        let qty = 1;
        let merkle = [];
        let gasPrice = 25;
        await multiple_call(gasPrice, value, dropId, qty, merkle);
}

export{
    call_multiple
}