<!-- Add banner here -->

# Project Title

### **Weather Journal App Project by [udacity](https://learn.udacity.com/nanodegrees/nd0011-fwd-t2/parts/cd0429/lessons/ls1847/concepts/3a60cae7-1938-4e37-92de-ec63f975e9b6)**
<!-- Add buttons here -->

<!-- Describe your project in brief -->

<!-- The project title should be self explanotory and try not to make it a mouthful. (Although exceptions exist- **awesome-readme-writing-guide-for-open-source-projects** - would have been a cool name)

Add a cover/banner image for your README. **Why?** Because it easily **grabs people's attention** and it **looks cool**(*duh!obviously!*).

The best dimensions for the banner is **1280x650px**. You could also use this for social preview of your repo.

I personally use [**Canva**](https://www.canva.com/) for creating the banner images. All the basic stuff is **free**(*you won't need the pro version in most cases*).

There are endless badges that you could use in your projects. And they do depend on the project. Some of the ones that I commonly use in every projects are given below. 

I use [**Shields IO**](https://shields.io/) for making badges. It is a simple and easy to use tool that you can use for almost all your badge cravings. -->

<!-- Some badges that you could use -->

<!-- ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/navendu-pottekkat/awesome-readme?include_prereleases)
: This badge shows the version of the current release.

![GitHub last commit](https://img.shields.io/github/last-commit/navendu-pottekkat/awesome-readme)
: I think it is self-explanatory. This gives people an idea about how the project is being maintained.

![GitHub issues](https://img.shields.io/github/issues-raw/navendu-pottekkat/awesome-readme)
: This is a dynamic badge from [**Shields IO**](https://shields.io/) that tracks issues in your project and gets updated automatically. It gives the user an idea about the issues and they can just click the badge to view the issues.

![GitHub pull requests](https://img.shields.io/github/issues-pr/navendu-pottekkat/awesome-readme)
: This is also a dynamic badge that tracks pull requests. This notifies the maintainers of the project when a new pull request comes.

![GitHub All Releases](https://img.shields.io/github/downloads/navendu-pottekkat/awesome-readme/total): If you are not like me and your project gets a lot of downloads(*I envy you*) then you should have a badge that shows the number of downloads! This lets others know how **Awesome** your project is and is worth contributing to.

![GitHub](https://img.shields.io/github/license/navendu-pottekkat/awesome-readme)
: This shows what kind of open-source license your project uses. This is good idea as it lets people know how they can use your project for themselves.

![Tweet](https://img.shields.io/twitter/url?style=flat-square&logo=twitter&url=https%3A%2F%2Fnavendu.me%2Fnsfw-filter%2Findex.html): This is not essential but it is a cool way to let others know about your project! Clicking this button automatically opens twitter and writes a tweet about your project and link to it. All the user has to do is to click tweet. Isn't that neat? -->

# Demo-Preview

<!-- Add a demo for your project -->
This project requirement is to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

![Random GIF](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif) 

# Table of contents

<!-- After you have introduced your project, it is a good idea to add a **Table of contents** or **TOC** as **cool** people say it. This would make it easier for people to navigate through your README and find exactly what they are looking for.

Here is a sample TOC(*wow! such cool!*) that is actually the TOC for this README. -->

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contribute](#contribute)
    - [Sponsor](#sponsor)
    - [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)
- [License](#license)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)

<!-- 
The first one should be how to install(how to generally use your project or set-up for editing in their machine).

This should give the users a concrete idea with instructions on how they can use your project repo with all the steps.

Following this steps, **they should be able to run this in their device.**

A method I use is after completing the README, I go through the instructions from scratch and check if it is working. -->

<!-- Here is a sample instruction: -->

To use this project, first clone the repo on your device using the command below:

```git init```

```git clone https://github.com/ZEXAWY/weather-journal-app.git```

# Usage
[(Back to top)](#table-of-contents)

<!-- This is optional and it is used to give the user info on how to use the project after installation. This could be added in the Installation section also. -->
To use this Project just follow the intallation instruction first.
1. run the server.js file through command line `node server.js`, Please don't forget to to be inside your folder path where you clone the project to.
2. Open your web browser (like: Google Chrome) then type `localhost:8000` or `127.0.0.1:8000`, the web application should run for you.
3. Enter the Zip code for the city you like to know the weather at, and enter how your feel right now.
4. Press `Generate` button to get the weather for you.
    
    
# Development
[(Back to top)](#table-of-contents)

The Project main file splited into ``` server.js ``` file, and the main folder ```website``` which hold the website application data.

The ```website``` folder contain the ```app.js``` file, the ```index.html``` file, and the `CSS.css` file.

Mainly, You are going to work with only two files which are the `server.js` and the `app.js` files only, the first one is resonsible for the server side code, and the other one is responsible for the client side code.

1. In the `server.js` file there is 3 main funciton:
    - the first one is `listening` function and it's used to run the server at specific port (The port i used is `8000`).
    - the second one is `arrow function` used inside the `app.get()` method, and it's used to get data from the client side code at ```url: '/getData'```.
    - The third one is `arrow funtion` used inside the `app.post()` method, and it's used to to post data to to created project object `projectData` we created before.
    Note that the `arrow function` used in `app.get()` and `app.post()` used two Parameters. `(req, res)` where `req` stands for `required` and `res` stands for   `response`. and both `arrow function` send the data back to the `projectData` objected created at line `2` in the code.

    I created an empty array called `data` to hold the whole data that user entered, while runing the server.

    the rest of the code is the same as simple server side code which require `express` package, `body-parser` package as middleware, and the `cors` package. 


2. in the `app.js` file:
    - Creating three variable to hold the `url` we want to fetch the data from:
        - The first variable is the one who hold the `siteURL`, i get this url from [Here](https://openweathermap.org/current#zip)
        - The second one to Hold my `apiKey` i get after signup at [openweathermap.org](https://openweathermap.org/).
        - The thirs one is to hold the `tempUnit` i get it's code from [Here](https://openweathermap.org/current#data).
    - Adding an `eventListener` to the `Generate` button, so that when `click` on, it should do some fuctions:
        - The first one is the `generateData` function which `fetch` data from the `fullUrl`, to get the `fullURL` we had to build it after the user enter his zip code so we had to wait for that, and the we concatenate the whole `url` variables together into one single `fullURL` variable. so that function will be `async` function that needs to `await` for `fetch` the required data to build the `fullUrl`.
        - `.then()` the second function is used to post data after `fetch` data from the 'url` we defined in the `server.js` file using the `app.post()`.
        - `.then()` the third function is used to display to the user on the website, using the `projectData` object where we saved the data we collected. 

    
# Contribute
[(Back to top)](#table-of-contents)

feel free to contribute or use this code as it's provided for free from udacity web developement professional track course.

i only implement some function to make it based on a server code, and some function to help fetching data through Openweathermap.org website.

### Sponsor
[(Back to top)](#table-of-contents)

This only a project code, so if you like my code feel free to contact me trough my [Email](freedomblackknights@gmail.com).

all credit for the source code goes to [udacity.com](https://www.udacity.com/) for providing the starting code and the guidance to build this applicaiton.

### Adding new features or fixing bugs
[(Back to top)](#table-of-contents)

feel free to report any issue, bugs or improvement through:

you should use a [issue template](https://github.com/navendu-pottekkat/nsfw-filter/blob/master/ISSUE_TEMPLATE.md) and a [pull request template](https://github.com/navendu-pottekkat/nsfw-filter/blob/master/PULL_REQ_TEMPLATE.md)(click for examples) 


### Sources
[(Back to top)](#table-of-contents)

1. [udacity.com](https://www.udacity.com/)
2. [openweathermap.org](https://openweathermap.org/)
3. [writing a good README.md](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
4. [This man's code help me to start think about my project](https://github.com/tem-nik/Weather-Journal-App)
5. [udacity web development professional track](https://emc.udacity.com/c/egyptfwd/catalog/gOOOLCSBncRvbr8y/i/nd/nd0011-fwd-t2)


# License
[(Back to top)](#table-of-contents)

[GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0)

# Footer
[(Back to top)](#table-of-contents)



Leave a star in GitHub, give a clap in Medium and share this guide if you found this helpful.

![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png) 
