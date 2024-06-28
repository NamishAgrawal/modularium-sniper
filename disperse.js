const { ethers } = require("ethers");

const rpcUrl = "https://rpc.forma.art";
const provider = new ethers.JsonRpcProvider(rpcUrl);

const privateKey = "enter your private key here"; 
const wallet = new ethers.Wallet(privateKey, provider);
let walletAddress = wallet.address;
let chainId = 984122;


//add the addresses you want to disperse to here
const nameToAddress = {
    "forma-1": "",
    "forma-2": "",
    "forma-3": "",
    "forma-4": "",
    "forma-5": "",
}
const addressArray = Object.keys(nameToAddress).map(name => ({
    name: name,
    address: nameToAddress[name]
}));


async function disperse(value) {
    for (const item of addressArray) {
        console.log(`Name: ${item.name}, Address: ${item.address}`);
        if (walletAddress != item.address) {
            try {
                const tx = {
                    to: item.address, 
                    value: ethers.parseEther(value.toString()), 
                    gasLimit: 210000,
                    gasPrice: ethers.parseUnits("25", "gwei")
                };
                const txResponse = await wallet.sendTransaction(tx);
                console.log("Transaction sent! Hash:", txResponse.hash);   
            }
            catch (error) {
                console.error("Error sending transaction:", error);
            }
        }
    }
}

disperse(0.1);//call with the amount of tia you want to disperse
