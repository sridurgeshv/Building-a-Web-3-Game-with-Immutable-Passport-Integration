# Building a-Game-with-the-Immutable-zkEVM

Embarking on the journey of "Building a Game with the Immutable zkEVM" opens a gateway to leveraging Immutable's cutting-edge technology. This guide delves into harnessing the power of zkEVM within game development, empowering creators to forge innovative, secure, and scalable gaming experiences atop Immutable's robust infrastructure.


## A Refresher on the Immutable Passport

Immutable Passport simplifies onboarding for games, ensuring a secure, passwordless experience. It facilitates wallet creation without holding private keys, ensuring user control and ownership. Integrated within the Immutable platform, it grants developers access to gamers and scalable infrastructure. Gamers create their Passport once, gaining access to all Immutable-built games and marketplaces, eliminating the hassle of multiple accounts.

# Project Configuration Guide

Effortlessly integrate Immutable Passport into your project with Node.js and ngrok. Follow the steps below to set up and configure your project on the Immutable Developer Hub for a seamless and secure experience.

## 1. Use the Latest Version of Node.js
Ensure you have Node.js installed on your machine. If not, download [Node.js](https://nodejs.org/en/download).

## 2. Initialize Project and Install Dependencies
Navigate to your project directory in the terminal and run the following command to initialize a new JavaScript project and install the necessary libraries:

```bash
npm init -y && npm install -D @imtbl/sdk @imtbl/contracts typescript ts-node ethers@5.7.2
```
## 3. Set Up Local Server
To run a local server for testing, install the http-server package by running the following command:

```bash
npm install --global http-server
```
Start the server on port 3000 with the following command:
```bash
http-server -p 3000
```
## 4. Expose Local Server with ngrok

i. Install ngrok
For MacOS (using Homebrew):
```bash
brew install ngrok
```
For Windows:
Download [ngrok](https://dashboard.ngrok.com/get-started/setup/windows) and unzip it. Then, open the application via the terminal.

ii. Create an ngrok Account
Visit [ngrok](https://dashboard.ngrok.com/login?state=JmUkV6gkSjCOEUITOlSyiz77u5IPWoRj1gC9yoOFFrLa7EsDyFUO2p7YpKZPmqCqj-qpy3Q04E8lbnAQQg4qPVXM7lR5_iu8iq0s9H4eSNn8QhCEho02NiEl1UKw2x1JBIWIZHh71P25SJALLdY80D-vltCJ_35KdAlerlpS0TR2gg%3D%3D) and sign up for a free account.

iii. Configure Authentication
After creating an account, obtain your Auth Token and run the following command in your terminal to configure ngrok:
```bash
ngrok authtoken <YOUR_AUTHTOKEN>
```
iv. Claim a Domain
On the ngrok website or in the Cloud Edge section, claim a free [domain](https://dashboard.ngrok.com/cloud-edge/domains). Copy the obtained domain.

After claiming your domain, head over to the [Immutable Developer Hub](https://hub.immutable.com/) and sign up if you haven't already.

- Next in the "Projects" field, Click on "Add Project". Choose a name for your project
- After that Head to "Passport" and click on "+ Add Client"
  
![Alt Text](https://github.com/sridurgeshv/a-Game-with-the-Immutable-zkEVM/blob/main/images/5.png)

- Now, within the Passport Client Details, proceed to adjust your settings in the Immutable Developer Hub accordingly:
  
![Alt Text](https://github.com/sridurgeshv/a-Game-with-the-Immutable-zkEVM/blob/main/images/7.png)

For the log out url, make sure to add "/logout.html" at the end of the redirect URL.

v. Expose Local Server: 

Run the following command in your terminal to expose your local server:
```bash
ngrok http 3000 --domain <YOUR_DOMAIN>
```
Replace <YOUR_DOMAIN> with the domain you claimed.

vi. Access the Forwarded URL
The HTTPS URL shown in the forwarding field now forwards to your local server.

# Configure Game Elements
Configure essential game elements such as canvas size, player and invader objects, and keyboard input for player movement and shooting.

### i. Passport.js
We will first make edits to the passport.js file. In it, ensure that you replace the values of clientId, redirectUri, and logoutRedirectUri. The values for these fields are the ones from the previous step that you configured in the Developer Hub.

Your code should look similar to the image below, but with your own clientId and domain.

![Alt Text](https://github.com/sridurgeshv/a-Game-with-the-Immutable-zkEVM/blob/main/images/6.png)

You will notice that in the logoutRedirectUri, we will redirect users to logout.html upon being logged out. Open the logout.html file now. You will notice that it is a very simple file with a message of "You have been logged out". Users will also be able to click on a link to return to the game's homepage.

### ii. Manage Login Process (Part 1 & 2)
Introduce the login.js file, handling Ethereum connection, user authentication, and NFT interactions. The code includes functions for EVM connection, user accounts, information fetching, and logging out. Additionally, contract address and private key insertion, NFT details retrieval, and claiming process handling are covered.

__In the login.js file, there's a private key variable that needs to be configured. For security reasons, we'll mask the private key in this documentation. Below is the line of code with the private key masked:__
```javascript
const PRIVATE_KEY = '***************************9e25'; // Masked private key
```
Replace the asterisks with your actual private key when setting up the project locally. However, ensure not to expose your private key in any public repositories or documentation.

### iii. Player Class
Introduce the Player class in Player.js, managing player state, including position, movement, bullets, lives, score, and NFT-related information. Define methods for NFT display, player respawn, spaceship upgrade, game state updates, movement/action handling, drawing, and utility.
### iv. Bullets for Player and Invaders
Create bullet classes: Bullet (general), PlayerBullet, and AlienBullet. Define bullet behavior, including movement direction, updates, and collision detection.
### v. Understanding Alien.js and Invaders.js
Explore Alien.js (Alien class) and Invaders.js (Invaders class). Alien.js represents individual aliens, with methods for drawing and player collisions. Invaders.js manages enemy logic, handling movement, shooting, and player collisions.
### vi. Understanding Debris.js & Sketch.js 
Examine Debris.js, defining behavior and appearance of space debris. The Debris class has methods for updating position, off-screen checking, displaying debris, and detecting collisions with the player. Focus on Sketch.js, the main script orchestrating the game. Initialize game entities, manage game states, and handle user interactions. Include functions for game setup, game over display, connection status visualization, resuming the game, and updating the game loop.
      
## Testing Gameplay
Guide users through testing the gameplay by following these steps:

1. Running Local Server:
Start by running a local server using the following command:

``` bash
http-server -p 3000
```
2. Creating Secure Tunnel with Ngrok:
Next, create a secure tunnel with Ngrok to make the game accessible through a browser. Execute the following command in the Ngrok terminal:

``` bash
ngrok http 3000 --domain <YOUR DOMAIN>
```
Once both commands are executed, users can proceed to log in with Immutable Passport, play using arrow keys and spacebar, and mint NFTs based on in-game achievements.

# Proof of Success :
   In your browser, go to your domain. ⚠️ Ensure that your browser's pop up blocker is turned off, as it will interfere with the login and minting process. Proceed to click on the 'Connect passport' button, which will trigger a pop-up to log in with Immutable Passport. Once the login has been authenticated, the game will start. You can use arrow keys to move your spaceship around and spacebar to shoot.
   
- You have to Log in with your Immutable passport

![Project Logo](https://github.com/sridurgeshv/a-Game-with-the-Immutable-zkEVM/blob/main/images/0.JPG)

- After Logging in with the passport

![Alt Text](https://github.com/sridurgeshv/a-Game-with-the-Immutable-zkEVM/blob/main/images/1.png)

- The nft div showing the Level 1 Badge name, image and description

![Alt Text](https://github.com/sridurgeshv/a-Game-with-the-Immutable-zkEVM/blob/main/images/2.png)

- The nft div showing the Level 2 Badge name, image and description

![Alt Text](https://github.com/sridurgeshv/a-Game-with-the-Immutable-zkEVM/blob/main/images/3.png)

- Your upgraded spaceship sprite
- Bullets showing that they are shot 2 at a time

![Alt Text](https://github.com/sridurgeshv/a-Game-with-the-Immutable-zkEVM/blob/main/images/4.png)

When you hit a score of 250, you have the chance to mint your first NFT. Then, resume the game. When you hit a score of 500, your nft div will show a second NFT to be minted. Next, when you click on the resume button for the second time in the game session, you should see your upgraded spaceship which is able to shoot two bullets. 

## Conclusion 
- [Local Testing Best Practice](#Local-Testing-Best-Practice) :
   It is advisable to conduct thorough testing on localhost before deploying your application. This ensures a meticulous examination of your integration with Immutable Passport in a controlled environment, reducing the risk of unforeseen issues in the live deployment.

- [Credential Security](#Credential-Security) :
Prioritize the security of your Immutable Passport credentials, particularly the Client ID. Avoid exposing such sensitive information in your source code or public repositories. Implement secure practices to safeguard your credentials from unauthorized access.

- [Exploration of Features](#Exploration-of-Features) : 
Delve deeper into the functionalities and capabilities offered by [Immutable Passport](https://docs.immutable.com/docs/zkevm/overview/). Refer to the official documentation to discover additional ways to augment and optimize your application. Explore opportunities for further integration and feature enhancement.

- [Community Support](#Community-Support) :
In case of challenges or inquiries, leverage the supportive [Immutable community](https://discord.gg/C7GNJUDF). Engage with forums, chat channels, and online communities to tap into valuable resources and insights. The Immutable Discord platform is particularly conducive for seeking assistance and participating in discussions.


