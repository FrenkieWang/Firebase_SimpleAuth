## Introduction
This is a very easy project that realised the full-stack function of C-R-U-D, by using Firebase and React. There are only **9 JavaScript files** and **1 PNG file** in this project. 

The reason why we chose Firebase to connect with React is because we don’t 
need to set up Backend program.  

In this part, we need to allow a user to 
- CREATE - Add a pallet for shipping (add to our Firestore database) – Allow the user to specify the goods on the pallet and the overall weight (KG). 
- READ - Display all pallets in our warehouse.  
- UPDATE - Edit a pallet – allow the user to change the details for an existing pallet in our Firestore database. 
- DELETE - Delete a pallet – remove this pallet from our Firestore database 


## Play it by yourself first!
I have deployed the project on the website, click the following link to have a try.

https://firebase-simple-auth.vercel.app/

You can register your account in the Home Page.
You can login with your registered account as well.

Have fun!

## List
There are 9 files and 1 picture in this project:

- fbconfig.js
- App.js
- SignIn.js
- SignUp.js
- SignOut.js
- PalletDashboard.js
- DisplayPallet.js
- AddPallet.js
- EditPallet.js
- pallet.png

All of them are in the 'src' folder.

## Prepare

Use **git clone** to download the project, then do the following steps: 

1) Change directory to the folder with **package.json**.

2) Type **npm install** in the VS Code terminal, this will install all the dependencies that are used in this project.

3) Type **npm start** to run the project, the project will run in **http://localhost:3000/**.

Despite the JS code, there is a **Handbook(Firebase + React Full Stack Project)** that you need to read first.

In this Handbook, there are three parts that claifiy the project in detail.

### PART 1 - How to run this project?

This part tells you how to register the firebase account on Google, 
how to configure your firebase, how to install the dependency and
how to run this project.

### PART 2 – Project Architecture
 
This part tells you the architecture of this project.

This project is divided into 3 parts.

- Part A: Pallet Dashboard
- Part B: Authentication
- Part C: Combination

You can understand how this project works after reading this file.

In **7 Overall Schematic**, I also draw a picture to explain the architecture of this code.

### PART 3 – Firebase Function
 
This part explains all the function that are used in this firebase App:

- Firebase Configuration: initializeApp, getApp, initializeFirestore(), getAuth()...
- Firebase Authentication: signInWithEmailAndPassword(),createUserWithEmailAndPassword(), signOut()...
- Data CRUD: addDoc, updateDoc, deleteDoc, query, onSnapShot...



