# Uroflow Mobile Application

This is a React-Native recording app that is compatible with both iOS and Android devices. Using Expo's AV modules, it allows the user to record themselves, and send the recordings to a PostgreSQL server. 

The audio is converted into a base64 encoded data URI that is stored as a text field on the server. That, alongside its location on the local device, is stored. Upon viewing your recording history, the base64 string is reconstructed into an audio file and stored in a separate location on the user's device.

Furthermore, this would prove to be useful in settings where a clinician would like to process user audio via the stored data URIs. 

## Demo

<img src="https://github.com/hamzanadeveloper/uroflow/blob/master/demo.gif?raw=true" width="300" />

## Technologies 

The following technologies were used to make this app.

- React-Native
- Expo CLI, Expo Client, Expo AV modules
- FeathersJS (authentication)
- PostgreSQL server.

## Key Features
 - As you launch the app, a login page first shows up:
    - **Log in**: Using FeathersJS authentication, email & password combination that matches record in the database will be needed, and will be authenticated for a period of time.
      - Log in user with correct combination of email and password. 
      - Since all users are pre-defined, there will not be an sign-up function at the moment.

- After login, there are 3 tabs that you can navigate in this application: 
    - **Record**:
      - Start a new recording by pressing the microphone icon.
      - A **timer** will start at the same time to indicate recording length.
      - Stop the recorder by pressing same icon again; it will then navigate to the **result page automatically**.
    - **Result**:
        - **Playback functionality**：\
        Play back the recording recently made.
        - **Send recording**: \
        Upload the recording file. Here, it'll be encoded into a base64 encorded data URI and stored onto the server.
        - **Rerecord recording**: \
        Scratch the previous recording and direct back to the Record Tab.
        - **Add a title**: \
        Add recording-specific information on this page. 

  - **History**:
      - This page shows all recordings that this user has uploaded. 
      - Selecting an entry will display you with information specific to that recording (file type, upload date, etc) and allow the user to replay the recording). 
 
  - **Profile** 
    - Currently, this page just allows the user to log out from the app. In the future, it can be used to upload profile-specific information regarding the user.

## General Instructions

To start the application, from the root directory:
- `cd sickkids_uroflow` into the app folder, and run `npm start` to bring up the Expo server.
- `cd api` to bring up the API, and run `npm start` to start the Feathers API.
 
 ## Development requirements
 
 - To be able to run this application, some software needs to be installed prior:
     - Node.js: Download link and instructions can be found on website:
         > https://nodejs.org/en/
     - npm: npm is distributed together with by Node.js
         - Download both package from the above link
         > Detailed step can be found on: https://www.npmjs.com/get-npm
     - Expo CLI & Expo client app: Expo CLI holds a platform for React Native applications. It allows you to develop and test on your own mobile devices on iOS or Android apps from the same JavaScript code. Expo client app is the mobile app that supports Expo CLI. You don't need Expo client app if you want to use Android and iOS simulators. Both download can be found using this link: 
        > https://docs.expo.io/versions/latest/get-started/installation/
     - PostgreSQL database server: Installer and instructions can be found on official website:
         > https://www.postgresql.org/download/

 - Once you have the software above installed and have cloned this repository:
     - cd into the project folder from machine's root folder
     - cd into folder called **'api'** by run:
     ``` sh
         cd api
     ```
     - Run following command to have required packages installed for server side:
     ``` sh
         npm install
     ``` 
     - Then after package successfully installed, run following command to start the database server:
     ``` sh
         npm start
     ```

     - Now open up a new terminal window, also cd into project folder, then change into **'sickkids_uroflow'** folder:
     ``` sh
         cd sickkids_uroflow
     ```
     - Run following command to have required packages installed for front-end side:
     ``` sh
         npm install
     ``` 
     - Again, run:
     ``` sh
         npm start
     ```
    to start running this application.

    > A predefined user has already been created for log in credential:
         > Email: dorin
         > Password: dorin

- Once the application is up and running, a webpage will popup with a QR Code ready to be scanned:
    - Install **Expo Client** App on your mobile device, and then scan the code. The app will open up on your mobile device.


