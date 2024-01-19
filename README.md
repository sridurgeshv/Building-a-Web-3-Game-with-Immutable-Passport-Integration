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

3. Configure Game Elements
   In this step, you configure the necessary elements for your game. This includes setting up the canvas size, initializing player and invader objects, and handling keyboard input for player movement and shooting.

4. Manage Login Process (Part 1 & 2)
   In this step, the login.js file is introduced, which handles Ethereum connection, user authentication, and NFT interactions in the game. The code includes functions for connecting to the Ethereum Virtual Machine (EVM), requesting user accounts, fetching user information, and logging out. Additionally, the contract address and private key are inserted, and functions for retrieving NFT details and handling the claiming process are defined. Continuing from Step 4, this step covers the minting process for NFTs. The grantMinterRole function is introduced to grant the minter role to a specified address. The mintNft function is provided for minting NFTs, and the upgradeNft function is defined for triggering an upgrade event when the second milestone is reached.

5. Player Class
   This step introduces the Player class in the Player.js file. The class manages the player's state, including position, movement, bullets, lives, score, and NFT-related information. Methods for displaying NFTs, respawning the player, and upgrading the spaceship are defined. The class also includes game state updates, movement and action handlers, drawing methods, and utility methods.

6. Bullets for Player and Invaders
   This step involves creating bullet classes. The Bullet class is a general class for bullets, while the PlayerBullet and AlienBullet classes extend the Bullet class. These classes define bullet behavior, including movement direction, updates, and collision detection.

7. Understanding Alien.js and Invaders.js
   In this step, we explore the Alien.js and Invaders.js files. Alien.js defines the Alien class, which represents individual alien objects in the game. It includes methods for drawing the alien and checking for collisions with the player. Invaders.js, on the other hand, defines the Invaders class, responsible for managing the logic of the enemy alien formation. It handles movement, shooting, and collision detection with the player.

8. Understanding Debris.js
    In this step, we examine the Debris.js file, which defines the behavior and appearance of space debris objects in the game. The Debris class has methods for updating the position, checking if it's off-screen, displaying the debris, and detecting collisions with the player.

9. Understanding Sketch.js
    This step focuses on the Sketch.js file, the main script that orchestrates the game. It initializes game entities, handles game states, and manages user interactions. The script includes functions for game setup, game over display, connection status visualization, resuming the game, and updating the game loop.

10. Testing Gameplay
    The final step guides users through testing the gameplay. It instructs them to run a local server, create a secure tunnel with ngrok, and access the game through a browser. Players can log in with Immutable Passport, play the game using arrow keys and spacebar, and have the opportunity to mint NFTs based on their in-game achievements.

    Now that we have finished building our game, it is time to test it out. In your terminal, ensure that you are in the immutable-stackupinvaders directory. Then, run the following command to run the server on the port 3000.

```
http-server -p 3000
```

Next, open a new terminal or open the ngrok application and run the following command, which will invoke the ngrok tool to create a secure tunnel to our local development environment running on HTTP over port 3000. Replace <YOUR DOMAIN> with the domain you obtained in Step 2.
    
```
ngrok http 3000 --domain <YOUR DOMAIN>
```


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
