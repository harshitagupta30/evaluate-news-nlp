# Project 4 - Evaluate a news article with Natural Language Processing (Front End Developer Udacity Nanodegree)

## Setup

To get the project up and running follow the steps below:

### To run in development mode

To start the webpack dev server at port 8080

` $ npm run build-dev`

### To run in production mode

` $ npm run build-prod`

The above step will generate a dist folder with all the files required to run the client side and then start server at port 8081 using the command given below.

` $ npm run start`

## Configs

Here, we have two separate webpack config files for both development mode(`webpack.config.dev.js`) and production mode(`webpack.config.prod.js` )

All the scripts and dependencies are listed in the `package.json` file.

## API

We have used the Text Analysis API from [Aylien](https://aylien.com/text-api/), which will evaluate the article and provides a powerful and flexible AI-driven content analysis solutions.

## Offline Functionality

The project has service workers set up in webpack to provide the offline functionality. When the service worker is functioning correctly, you will see the below message when you inspect the browser.

![service worker message](https://github.com/harshitagupta30/evaluate-news-nlp/blob/master/images/img4.png)
## Testing

The testing is done using Jest. To run test, enter the command 

`npm run test`. 

## Pages

### Home page

It is a single page web app. It has a single form input field that accepts an input(URL), then runs a check to make sure it is a valid URL. 
![Homepage](https://github.com/harshitagupta30/evaluate-news-nlp/blob/master/images/img1.png)

If it is not a valid URL, the following message will be displayed;

![Invalid URL](https://github.com/harshitagupta30/evaluate-news-nlp/blob/master/images/img3.png)

### API response

If the url is valid, then an api call is performed and the result displayed on the page.

![Result](https://github.com/harshitagupta30/evaluate-news-nlp/blob/master/images/img2.png)
