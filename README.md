# Building a-Game-with-the-Immutable-zkEVM

Embarking on the journey of "Building a Game with the Immutable zkEVM" opens a gateway to leveraging Immutable's cutting-edge technology. This guide delves into harnessing the power of zkEVM within game development, empowering creators to forge innovative, secure, and scalable gaming experiences atop Immutable's robust infrastructure.


## A Refresher on the Immutable Passport

Immutable Passport simplifies onboarding for games, ensuring a secure, passwordless experience. It facilitates wallet creation without holding private keys, ensuring user control and ownership. Integrated within the Immutable platform, it grants developers access to gamers and scalable infrastructure. Gamers create their Passport once, gaining access to all Immutable-built games and marketplaces, eliminating the hassle of multiple accounts.

Now I want the below information in a professional documentation format  :

# Project Configuration Guide

Effortlessly integrate Immutable Passport into your project with Node.js and ngrok. Follow the steps below to set up and configure your project on the Immutable Developer Hub for a seamless and secure experience.

### 1. Install/Use the Latest Version of Node.js

Ensure you have Node.js installed on your machine. If not,download [Node.js](https://nodejs.org/en/download).

To use the latest version of immutable, install the @imtbl/sdk, enabling all the passport functions:

```bash
npm install @imtbl/sdk@0.28.0
```

### Expose Local Server with ngrok
 i. Install ngrok:
 For MacOS (using Homebrew):
 
``` bash
brew install ngrok
```

 For Windows:
Download [ngrok](https://dashboard.ngrok.com/get-started/setup/windows) and unzip, then open the application via the terminal.

### ii. Create an ngrok Account:
Visit [ngrok](https://dashboard.ngrok.com/login?state=JmUkV6gkSjCOEUITOlSyiz77u5IPWoRj1gC9yoOFFrLa7EsDyFUO2p7YpKZPmqCqj-qpy3Q04E8lbnAQQg4qPVXM7lR5_iu8iq0s9H4eSNn8QhCEho02NiEl1UKw2x1JBIWIZHh71P25SJALLdY80D-vltCJ_35KdAlerlpS0TR2gg%3D%3D) and sign up for a free account.

### iii. Configure Authentication:
After creating an account, run the following command in your terminal to configure ngrok:
``` bash
ngrok config add-authtoken <YOUR_AUTHTOKEN>
```
After creating the account, you will be able to see the Auth Token on your left and replace it here.

### iv. Claim a Domain:
On the ngrok website or in the Cloud Edge section, claim a free [domain](https://dashboard.ngrok.com/cloud-edge/domains). Copy the obtained domain.

### v. Expose Local Server:

In your terminal, run the following command to expose your local server:

``` bash
ngrok http 3000 --domain <YOUR_DOMAIN>
``` 
Replace <YOUR_DOMAIN> with the copied domain.
### vi. Access the Forwarded URL:
The HTTPS URL shown in the forwarding field now forwards to your local server.

# Configure Game Elements
Configure essential game elements such as canvas size, player and invader objects, and keyboard input for player movement and shooting.

### i. Manage Login Process (Part 1 & 2)
Introduce the login.js file, handling Ethereum connection, user authentication, and NFT interactions. The code includes functions for EVM connection, user accounts, information fetching, and logging out. Additionally, contract address and private key insertion, NFT details retrieval, and claiming process handling are covered.
### ii. Player Class
Introduce the Player class in Player.js, managing player state, including position, movement, bullets, lives, score, and NFT-related information. Define methods for NFT display, player respawn, spaceship upgrade, game state updates, movement/action handling, drawing, and utility.
### iii. Bullets for Player and Invaders
Create bullet classes: Bullet (general), PlayerBullet, and AlienBullet. Define bullet behavior, including movement direction, updates, and collision detection.
### iv. Understanding Alien.js and Invaders.js
Explore Alien.js (Alien class) and Invaders.js (Invaders class). Alien.js represents individual aliens, with methods for drawing and player collisions. Invaders.js manages enemy logic, handling movement, shooting, and player collisions.
### v. Understanding Debris.js & Sketch.js 
Examine Debris.js, defining behavior and appearance of space debris. The Debris class has methods for updating position, off-screen checking, displaying debris, and detecting collisions with the player. Focus on Sketch.js, the main script orchestrating the game. Initialize game entities, manage game states, and handle user interactions. Include functions for game setup, game over display, connection status visualization, resuming the game, and updating the game loop.
      
### Testing Gameplay
Guide users through testing gameplay—run a local server, create a secure tunnel with ngrok, and access the game through a browser. Log in with Immutable Passport, play using arrow keys and spacebar, and mint NFTs based on in-game achievements.

``` bash
http-server -p 3000
```

``` bash
ngrok http 3000 --domain <YOUR DOMAIN>
```

- You have to Log in with passport

![Project Logo](https://github.com/sridurgeshv/a-Game-with-the-Immutable-zkEVM/blob/main/images/0.JPG)

- After Logging in with the passport

![Alt Text](https://github.com/sridurgeshv/a-Game-with-the-Immutable-zkEVM/blob/main/images/1.png)


In your browser, go to your domain. ⚠️ Ensure that your browser's pop up blocker is turned off, as it will interfere with the login and minting process. Proceed to click on the 'Connect passport' button, which will trigger a pop-up to log in with Immutable Passport. Once the login has been authenticated, the game will start. You can use arrow keys to move your spaceship around and spacebar to shoot. When you hit a score of 250, you have the chance to mint your first NFT. Then, resume the game.

When you hit a score of 500, your nft div will show a second NFT to be minted. 

Next, when you click on the resume button for the second time in the game session, you should see your upgraded spaceship which is able to shoot two bullets. 

## Conclusion 
- [Local Testing Best Practice](#Local-Testing-Best-Practice) :
   It is advisable to conduct thorough testing on localhost before deploying your application. This ensures a meticulous examination of your integration with Immutable Passport in a controlled environment, reducing the risk of unforeseen issues in the live deployment.

- [Credential Security](#Credential-Security) :
Prioritize the security of your Immutable Passport credentials, particularly the Client ID. Avoid exposing such sensitive information in your source code or public repositories. Implement secure practices to safeguard your credentials from unauthorized access.

- [Exploration of Features](#Exploration-of-Features) : 
Delve deeper into the functionalities and capabilities offered by [Immutable Passport](https://docs.immutable.com/docs/zkevm/overview/). Refer to the official documentation to discover additional ways to augment and optimize your application. Explore opportunities for further integration and feature enhancement.

- [Community Support](#Community-Support) :
In case of challenges or inquiries, leverage the supportive [Immutable community](). Engage with forums, chat channels, and online communities to tap into valuable resources and insights. The Immutable Discord platform is particularly conducive for seeking assistance and participating in discussions.

### Access my live application : [Application]()
