# How to debug and test some example dapps based on the Elastos Carrier to understand better this technology



- [How to debug and test some example dapps based on the Elastos Carrier to understand better this technology](#how-to-debug-and-test-some-example-dapps-based-on-the-elastos-carrier-to-understand-better-this-technology)
    - [Prerequisites](#prerequisites)
    - [Getting started](#getting-started)
    - [Understanding a brief documentation of the Carrier and a file with functions and object attributes of the source code of the Carrier](#understanding-a-brief-documentation-of-the-carrier-and-a-file-with-functions-and-object-attributes-of-the-source-code-of-the-carrier)
    - [Running the demo app and the chat app of the nodejs Carrier before debugging and testing](#running-the-demo-app-and-the-chat-app-of-the-nodejs-carrier-before-debugging-and-testing)
    - [Debugging and testing the demo app and the chat app with Visual Studio Code and Chrome developer tools](#debugging-and-testing-the-demo-app-and-the-chat-app-with-visual-studio-code-and-chrome-developer-tools)
        - [Brief documentation about Chrome developer tools](#brief-documentation-about-chrome-developer-tools)
        - [Debugging the demo app and the chat-app](#debugging-the-demo-app-and-the-chat-app)

## Prerequisites
First, we need to install the following software in order to debug and test the example dapps of the Elastos Carrier and to understand better this technology:

- Visual studio CODE. This free software will help us to edit, test, develop and run the source code. Here is the [Installation guide](https://code.visualstudio.com/Docs/setup/setup-overview).
- Git. Git allows us to download and upload source code from repositories. Here is the [Link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to download and install it on your computer.
- Elastos.NET.Carrier.Native.SDK. Follow the instructions of this [Link](https://github.com/elastos/Elastos.NET.Carrier.Native.SDK) to download and install it. Also there are video tutorials where you can learn step by step to install and understand better this SDK [Here](https://www.youtube.com/playlist?list=PLS6d1baqGamKMwQPt51I82L5l1h51qrZA). 
- Elastos.NET.Carrier.Nodejs.SDK. After you install the last SDK, this [Link](https://github.com/elastos/Elastos.NET.Carrier.Nodejs.SDK) will help us to download, debug and test the example dapps based on the Elastos Carrier.
- Chrome developer tools. To debug and to test the source code we could do it with Visual Studio Code but it's much better to debug and test it with Chrome developer tools. So what we need is to install Chrome [Here](https://www.google.com/chrome/) if you already don't have it.

## Getting started

When everything is installed what we need to do is to open Visual Studio CODE and create a workplace file. This workplace file will help us to start with the Elastos repositories. 


## Understanding a brief documentation of the Carrier and a file with functions and object attributes of the source code of the Carrier

Here we have a brief introduction explaining the Carrier.

[Follow this link](https://github.com/elastos/Elastos/blob/master/DeveloperGuide/topics/carrier/README.md)

Next, what we can do is to learn an important file of the Carrier. This README documentation file down below is a very important part of the Elastos carrier to understand, if we want to debug/test/develop nodejs dapps with the Carrier on Elastos:

[Link here](https://github.com/elastos/Elastos.NET.Carrier.Nodejs.SDK/edit/master/docs/README.md)

We can see that this file contains functions and attributes of objects of the Carrier such as invite a friend, add/remove/list friends, send messages if our friend accepted us, send streams to our friend, ...


## Running the demo app and the chat app of the nodejs Carrier before debugging and testing



Down below we could watch a video running the demo app and the chat-app so we can have an idea of the functionality of the two apps and see how they can connect and send messages each other using the Elastos Carrier as a bridge of connectivity.

---
[![RUNNING DEMO APP AND CHAT APP](http://img.youtube.com/vi/82T1AWg1Lqw/0.jpg)](https://youtu.be/82T1AWg1Lqw)

---

The following intructions are the same process as in the video but in text format:

1. To know how to run the two apps, what we will do first is to open a terminal in Visual Studio Code or you can open just a terminal without Visual Studio Code and follow this instructions from the README. This file help us to run the demo app from [The source code](https://github.com/elastos/Elastos.NET.Carrier.Nodejs.SDK/tree/master/example/demo).


2. Afterwards, we can run the chat-app from another terminal with Visual Studio Code or without Visual Studio Code. We can run the chat-app from the source code following this instructions on the [README file](https://github.com/elastos/Elastos.NET.Carrier.Nodejs.SDK/tree/master/example/chat-app) 

    


    (Optional) When we run the chat-app we realize that it is a native app using node and nwjs instead of a terminal app as the demo app. If we are interested in developing native apps we can go to [This Website](http://docs.nwjs.io/en/latest/) for more documentation:


3. When the demo app is executed we introduce the following command in the demo app to know our address:

    ```console
    Command:$ address
    ```

4. Then, we copy our address of the resulting terminal output and we go to the chat-app and type this address to add as a friend with a message down below in the video we saw in order that the demo app receive our invitation.

5. When we send our invitation to the demo app, we can see the following message in demo app terminal faccept [chat-app ID]that we send. So we accept the friend typing this in the terminal

    ```console
    Command:$ faccept [chat-app ID]
    ```

6. In order to send a message from the demo app to the chat-app we can type

    ```console
    Command:$ msg [chat-app ID] HelloChatApp!
    ```

7. Finally we can send a hello to the demo app from the chat-app and we will receive the response in the demo app terminal.


## Debugging and testing the demo app and the chat app with Visual Studio Code and Chrome developer tools

### Brief documentation about Chrome developer tools

If it is the first time that you heard about the Chrome developer tools and you want to know more about it you can go to this [Website](https://developers.google.com/web/tools/chrome-devtools/) to learn more:

Also I recommend to watch this video about debugging with Chrome developer tools with node.js

---

[![PAUL IRISH IN GOOGLE](http://img.youtube.com/vi/Xb_0awoShR8/0.jpg)](https://www.youtube.com/watch?v=Xb_0awoShR8)

---

### Debugging the demo app and the chat-app


Here you can watch a debugging walkthrough video

---

[![DEBUGGING DEMO APP AND CHAT APP](http://img.youtube.com/vi/Ql3Vv2dviNM/0.jpg)](https://www.youtube.com/watch?v=Ql3Vv2dviNM)

---

There are two ways to debug the demo app. If it is your first time you debug the demo app one suggestion is to write in the terminal the following intruction in the folder of the demo app as we saw in the last video

```console
node --inspect-brk demo.js
```
This command will stop in the first line of code of **demo.js** file so we can learn better the code.

The other way is to write

```console
node --inspect demo.js
```
This other way would stop on the breakpoint that you create on Chrome developer Tools for the file **demo.js** of the demo app.

Then, we open our Chrome browser and we write on top of it the following sentence as we can see in the video.

> Chrome:inspect

Then, we click on **Open dedicated DevTools for Node** bottom and we can start to debug the demo app.

To debug the chat app as it is a native app, instead of using **node --inspect-brk** as in the demo app first we have to executed the app with **npm i** and **npm start**. When the chat app is running we click on the right bottom of the mouse on the app and click to **inspect** as we can see in the previous video. Then another Chrome developer tools window opens and we click to **Sources**. Also we need to create breakpoints in the file **index.js** of the chat-app in order to debug this app.

In the video we can see that in the javascript of the demo app is called **demo.js** and the javascript of the chat-app is called **index.js** where there are many breakpoints that can help us to debug an test the app.

Well, Thanks for reading and watching and if you share any question, issue, idea or suggestion will be apreciated.

So, happy coding and happy debugging :)
