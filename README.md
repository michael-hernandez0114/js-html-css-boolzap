# Boolzap Web App

## Description

A web app that has some characteristics of a messaging app like Whatsapp. It features:

* Friendlist (static)
* Search bar to search for friends (search is updated in realtime)
* Write messages to each friend and store the message separately for each friend
* Receive feedback from friend (automated default message)

Using the Handlebars JS library, it is possible to design a HTML template for code that is reused multiple times. jQuery will help fill the data based on a friendList data structure stored in JS.


## Languages Used

* Javascript
* jQuery
* HTML
* CSS

## About the Data

Static friend data in the form of an object is manually created in JS. The source could come from an API or another data point.


## Screenshots

### First Time Reaching the App

Generic friend list with a few default messages.

![GitHub Logo](/img/readme/homePage.png)

### Search for Friends

Enter any string on the search bar to display results. Below are a few examples.

![GitHub Logo](/img/readme/sampleSearch1.png)
![GitHub Logo](/img/readme/sampleSearch2.png)
![GitHub Logo](/img/readme/sampleSearchSpecific.png)

### Sending a Message

Easily send any friend a message by first selecting them on the friend list. They are marked red when active. Write a message and press enter on the keyboard. After 1 second delay, an automated response will appear.

![GitHub Logo](/img/readme/sampleMessage1.png)
![GitHub Logo](/img/readme/sampleMessage2.png)

### Removing Messages

It is also possible to go to any individual message per user and delete it. Upon hovering on a message, an arrow icon will appear. Here, you can choose "Delete Message" and the specific message will be deleted from the conversation.

![GitHub Logo](/img/readme/deleteMessagePopUp.png)
![GitHub Logo](/img/readme/deleteMessageDone.png)
