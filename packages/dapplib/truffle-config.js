require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture story cruise rifle clutch grace light army gather'; 
let testAccounts = [
"0xf06f642580ef063fd04c1c12020149267d21b0e96cc547f991b4035abf5785c9",
"0xee9c0ea42198fd780ba8ea14b723d91b7e6a5649d497ad83b896c82f23d5cfa6",
"0xe75714c0fd6bbf9037be30661e1faf4e912fae0fc0e0833396ef09893f185ae2",
"0x4106f678bc9fad2219f4f002088b66621efbd0d6f04588173e5f87cd0e8eb930",
"0x2dfbd6269512c3e1d28d626732a96837c25bcb440789c2617f44bc84fba1ce7c",
"0xaa337edd3659c820d64f19b58906b9e64ba62612c39be1b90903e7a215b7a49e",
"0x3294b28a6574f5c2255bad864172a4e7cc577e834f22105ad9b3cce17fa7637e",
"0xe47faa39461140d0c44d657032f0c1fa2b427818938f1437fb72b89b423c45c6",
"0x58e53f12c517b5caf74c571e0af887aab96f1f2aaa82e323aa40c17c7c685fa0",
"0x75d8a2f5c12370a8096c020a161b461f31714446dd7a6a06c5c9ea06a3362a3b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

