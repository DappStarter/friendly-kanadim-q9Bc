require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember history hover arctic bottom sustain'; 
let testAccounts = [
"0xd372e1fb1709e237ea327d90f35cbb7895ef7a052db7eb31f89ba349218f3105",
"0xb2d023da928cb47b22d61ad83f15be3ac86f7502ab87575a682e517ec98666d1",
"0xffebfe3af41fa2c20efe2ce48c153aa87adaa339ba61d26a95b2b4ba67d93958",
"0x86492341cdd52fa3a2fc190836a91874c0ecdfd33ce17ba80111a5ef19389085",
"0xfbfc9b8f0caece1637e1946ad4098cb222cdc4fcd9504e99c7fa503cfe65472b",
"0x9c015cbb5738d6161a9f0d6e462b6124070034f1b015a8e5327ee8d1591eeb22",
"0x0218cbf729c77eb8b00b11e3980338b1763da75bbbf680740ea5653dea2d4b6e",
"0xb1ae6a1ba586402a56a0233cb63b3bc5ff05f3f9e0cf593f639087d613d6166e",
"0xb05a4e2347a8009a7cc050491813977248b45bb455e474213f6221d7c715ff98",
"0x0a2bab33e5712b37360ed14e6f05ce18dbbd95ec805efbba1d167c3dd35feba4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

