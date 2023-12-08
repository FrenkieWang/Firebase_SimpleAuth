## Introduction
This is a very easy project that realised the full-stack function of C-R-U-D, by using Firebase and React. There are only 8 JavaScript files and 1 PNG file in this project. 

The reason why we chose Firebase to connect with React is because we don’t 
need to set up Backend program.  

In this part, we need to allow a user to 
- CREATE - Add a pallet for shipping (add to our Firestore database) – Allow the user to specify the goods on the pallet and the overall weight (KG). 
- READ - Display all pallets in our warehouse.  
- UPDATE - Edit a pallet – allow the user to change the details for an existing pallet in our Firestore database. 
- DELETE - Delete a pallet – remove this pallet from our Firestore database 


## Play it by yourself first!
I have deployed the project on the website, click the following link to have a try.

https://easy-firebase.vercel.app/

I created two sample users in this file.
Each users can deal with their own pallets.

frenkie@gmail.com 12345678

frenkie2@gmail.com 12345678

Have fun!

## List
There are 8 files and 1 picture in this project:

- fbconfig.js
- App.js
- SignIn.js
- SignOut.js
- PalletDashboard.js
- DisplayPallet.js
- AddPallet.js
- EditPallet.js
- pallet.png

All of them are in the 'src' folder.

## Prepare
Despite the JS code, there are 3 files that you need to read first.

Type “npm install firebase" in the VS Code terminal first, then type "npm run". 

### How to run this project.pdf

This document tells you how to register the firebase account on Google, 
how to configure your firebase, how to install the dependency and
how to run this project.

### Overall Components Schematic.jpg

I draw a picture to explain the architecture of this code.

### Project Architecture.pdf
 
This document tells you the architecture of this program.

This program is divided into 3 parts.

- Part A: Pallet Dashboard
- Part B: Authentication
- Part C: Combination

You can understand how this project works after reading this file.

### Firebase function.pdf
 
This document explains all the function that are used in this firebase App:

- Firebase Configuration: initializeApp, getApp, initializeFirestore(), getAuth()...
- Firebase Authentication: signInWithEmailAndPassword(),signOut()...
- Data CRUD: addDoc, updateDoc, deleteDoc, query, onSnapShot...



