import { ethers, getDefaultProvider } from "./libs/ethers-5.6.2.esm.min.js";

window.provider = window.passport.connectEvm();

const connectPassport = async function(){
    window.accounts = await window.provider.request({ method: "eth_requestAccounts" });
    console.log(window.accounts)
    if (window.accounts){
        getUserInfo();
    }
}

const config = {
  baseConfig: new window.immutable.config.ImmutableConfiguration({
    environment: window.immutable.config.Environment.SANDBOX,
  }),
};

const client = new window.immutable.blockchainData.BlockchainData(config);

const getUserInfo = async function(){
    window.userProfile = await window.passport.getUserInfo();
}

const passportLogout = async function(){
    let logout = await window.passport.logout();
    console.log(logout, "logout");
    window.userProfile = {};
}

// Insert Contract Address
const CONTRACT_ADDRESS = '0xFD38889090690c452c711cA6E96ec0c6873704b9';
const PRIVATE_KEY = '***************************9e25'; //replace it with your metamask wallet private key

const CONTRACT_ABI = [
    'function grantRole(bytes32 role, address account)',
    'function MINTER_ROLE() view returns (bytes32)',
    'function mint(address to, uint256 tokenId)',
    'function hasRole(bytes32 role, address account) view returns (bool)',
    'function totalSupply() view returns (uint256)'
  ];
  async function getData(id) {
    try {
      let nft = document.getElementById("nft");
  
      const nftDetails = {
        '1': {
          image: 'https://bafkreigugjgtcvkwg7ym7uk5ic65wmtkmbngonaj3twzl3nttuj5w7zjku.ipfs.nftstorage.link/',
          name: 'Level 1 Badge',
          description: 'This NFT represents your first accomplishment on StackUp Invaders.'
        },
        '2': {
          image: 'https://bafkreifxbz53txersuyqok75dmdhyrnfkascznytyvum2i25bunii5dih4.ipfs.nftstorage.link/',
          name: 'Level 2 Badge',
          description: 'This NFT represents your second accomplishment on StackUp Invaders which grants you an upgraded spaceship.'
        }
      };
  
      const details = nftDetails[id.toString()];
  
      if (!details) {
        throw new Error("Invalid Token ID");
      }
  
      nft.innerHTML = `
      <div class="alert alert-success"> Great Score! Claim this NFT, then resume the game.</div>
      <div class="card" >
      <div class="card-body">
        <div class="media">
          <img src='${details.image}' class="mr-3 img-thumbnail" alt="nft" style="width: 30%;">
          <div class="media-body">
            <h5 class="card-title">${details.name}</h5>
            <p class="card-text">'${details.description}'</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <button id="claim-btn" class="btn btn-success"> Claim</button>
      </div>
    </div>
      `;
      const claimBtn = this.document.getElementById('claim-btn');
      claimBtn.onclick = async function(){
        if (id === '1') {
          await mintNft();
        } else if (id === '2') {
          await upgradeNft();
        }
      }
      return details;
    } catch (error) {
      console.error(error);
      alert(error)
    }
  }
  
  window.getData = getData;
  
  const grantMinterRole = async (recipientAddress) => {
    try {
      const provider = getDefaultProvider("https://rpc.testnet.immutable.com");
      const adminWallet = new ethers.Wallet(PRIVATE_KEY, provider);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, adminWallet);
  
      const minterRole = await contract.MINTER_ROLE();
  
      const currentGasPrice = await provider.getGasPrice();
      const adjustedGasPrice = currentGasPrice.add(ethers.utils.parseUnits('10', 'gwei'));
      const tx = await contract.grantRole(minterRole, recipientAddress, {
        gasPrice: adjustedGasPrice,
      });
  
      await tx.wait();
      console.log("Minter Role Granted to", recipientAddress);
    } catch (e) {
      console.error("Error in granting minter role:", e);
    }
  };
  
  // Mint NFTs
  const mintNft = async function () {
    if (window?.provider) {
        const provider = new ethers.providers.Web3Provider(window.provider);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  
        try {
          
          const minterRole = await contract.MINTER_ROLE();
          const hasMinterRole = await contract.hasRole(minterRole, userAddress);
    
          if (!hasMinterRole) {
            console.log("Account doesnt have permissions to mint.");
            await grantMinterRole(userAddress);
          }
  
          const TOKEN_ID = getNextTokenId(contract);
  
          const currentGasPrice = await provider.getGasPrice();
          const adjustedGasPrice = currentGasPrice.add(ethers.utils.parseUnits('10', 'gwei'));
  
          const tx = await contract.mint(userAddress, TOKEN_ID, {
            gasPrice: adjustedGasPrice, // for pre-EIP-1559
          });
            
            const receipt = await tx.wait();
            console.log('NFT minted successfully!', receipt);
            let nft = document.getElementById("nft");
            nft.innerHTML += `
              <div class="alert alert-success"> 
                NFT minted successfully! Transaction hash: ${receipt.transactionHash}
              </div>`;
        } catch (error) {
            console.error('Error minting the first NFT:', error);
        }
    } else {
        console.log("No provider found.");
    }
  };
  
  async function getNextTokenId(contract) {
    try {
      const totalSupply = await contract.totalSupply();
      return totalSupply.toNumber() +1;
    } catch (error) {
      console.error('Error getting next token ID:', error);
      return null;
    }
  }
  
  const upgradeNft = async function () {
    const upgradeEvent = new CustomEvent('upgradeSpaceship');    
    window.dispatchEvent(upgradeEvent);
    nft.innerHTML += `
              <div class="alert alert-success"> 
                Your spaceship has been upgraded! At this stage, there is no NFT.
              </div>`;
  };
  
  window.addEventListener('load', function() {
      const passportBtn = this.document.getElementById('btn-passport');
      const logoutBtn = this.document.getElementById('btn-logout');
      
      passportBtn.onclick = function(){
         window.isconnecting = true;
         connectPassport();
      }
  
      logoutBtn.onclick = passportLogout;
      window.passport.loginCallback();
  });
  