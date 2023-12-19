# Building a-Game-with-the-Immutable-zkEVM

Embarking on the journey of "Building a Game with the Immutable zkEVM" opens a gateway to leveraging Immutable's cutting-edge technology. This guide delves into harnessing the power of zkEVM within game development, empowering creators to forge innovative, secure, and scalable gaming experiences atop Immutable's robust infrastructure.


## A Refresher on the Immutable Passport

Immutable Passport simplifies onboarding for games, ensuring a secure, passwordless experience. It facilitates wallet creation without holding private keys, ensuring user control and ownership. Integrated within the Immutable platform, it grants developers access to gamers and scalable infrastructure. Gamers create their Passport once, gaining access to all Immutable-built games and marketplaces, eliminating the hassle of multiple accounts.

## Setting Up Project on Immutable Developer Hub

1.Install/use latest version of node:

i. If you don't have node installed, install here [node](https://nodejs.org/en/download)     
ii. To make sure you're using the latest version, we install the @imtbl/sdk that enables all the passport functions:

 ```
npm install @imtbl/sdk@0.28.0
```

2. Application view :
    1. Go to Immutable Developer Hub and log in or create an account.
    2. Click 'Add Project' and name it 'Passport Integration (your username)' choosing Immutable zkEVM as the rollup.
    3. Create a testnet environment named 'Default Environment' to test your app.
    4. Navigate to Passport in the sidebar and create default Passport clients.
    5. Edit the Application type to 'Website' and set
       
       Logout URLs to http://localhost:5003/
       
       Redirect URLs to http://localhost:5003/callback.
       
       Save and copy the Client ID for later use.
       
    6. Learn: Logout URLs direct users after logout, while Redirect URLs handle authentication completion. For local testing, use localhost; update for live deployment. 
