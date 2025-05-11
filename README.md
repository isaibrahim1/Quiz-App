# Quiz-App

![The Quiz App](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/start%20game.png?raw=true)

![The Quiz App](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/question%20page.jpeg?raw=true)

## 📑 Table of Contents
1. [User Experience](#user-experience)  
   1.1. [User Stories](#user-stories)  
2. [Design](#design)  
   2.1. [Colour Scheme](#colour-scheme)  
   2.2. [Typography](#typography)  
   2.3. [Imagery](#imagery)  
   2.4. [Wireframes](#wireframes)  
   2.5. [Features](#features)  
      - [The Home Page](#the-home-page)  
      - [The Game Page](#the-game-page)  
      - [The High Scores Page](#the-high-scores-page)  
      - [The 404 Error Page](#the-404-error-page)  
      - [Future Implementations](#future-implementations)  
   2.6. [Accessibility](#accessibility)  
3. [Technologies Used](#technologies-used)  
   3.1. [Languages Used](#languages-used)  
   3.2. [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)  
4. [Deployment & Local Development](#deployment--local-development)  
   4.1. [Deployment](#deployment)  
   4.2. [Local Development](#local-development)  
      - [How to Fork](#how-to-fork)  
      - [How to Clone](#how-to-clone)  
5. [Testing](#testing)  
   5.1. [Solved Bugs](#solved-bugs)  
   5.2. [Known Bugs](#known-bugs)  
6. [Credits](#credits)  
   6.1. [Code Used](#code-used)  
   6.2. [Content](#content)  
   6.3. [Media](#media)  
   6.4. [Acknowledgments](#acknowledgments)  

## 1. User Experience <a name="user-experience"></a>
### 1.1. User Stories <a name="user-stories"></a>
## First Time Visitor Goals

These are the key goals and expectations of first-time users visiting the JavaScript Quiz App:

-  **Join Fun Quiz App**  
  I want to join fun quiz App online and improve my general knowledge anytime, anywhere.

-  **Device Compatibility**  
  I want the site to work well on my phone, tablet, or computer.

-  **Simple Navigation**  
  I want the site to be easy to use and simple to move around.

## 2. Design <a name="design"></a>
### 2.1. Colour Scheme <a name="colour-scheme"></a>
I chose a simple and limited colour palette to avoid overwhelming users
I have used #fff & #ffff as the primary and secondary colours used for background color.
I have used #0075ff  submit button, spans and correct answer.

### 2.2. Typography <a name="typography"></a>
Google Fonts was used to import the chosen fonts for use in the site.
This project uses Google Fonts to enhance the typography and visual appeal of the quiz app. The following fonts have been imported:
The fonts are imported in the `style.css` file using the `@import` rule:

- **Inconsolata**
- **Montserrat**
- **Raleway**
- **Roboto**
- **Work Sans**

### How Fonts Are Integrated
### 2.3. Imagery <a name="imagery"></a>
Since the website is named "The Quiz App," I chose not to use an image for the page background. Instead, I opted for a blue color scheme to evoke the atmosphere of a pub quiz.


## 3. Technologies Used <a name="technologies-used"></a>
### 3.1. Languages Used <a name="languages-used"></a>
## Languages Used

* HTML
* CSS
* Javascript

## Frameworks, Libraries & Programs Used

* **Balsamiq:** Used to create wireframes.
* **Github:** To save and store the files for the website.
* **Google Fonts:** To import the fonts used on the website.
* **Google Developer Tools:** To troubleshoot and test features, solve issues with responsiveness and styling.
* **Favicon.io:** To create favicon.

## 4. Deployment & Local Development <a name="deployment--local-development"></a>
### 4.1. Deployment <a name="deployment"></a>
## Deploying with GitHub Pages

**Prerequisites:**

* A GitHub account (sign up if you don't have one).
* A GitHub repository containing your quiz App project.

**Steps:**

1.  **Login to GitHub:** Go to [https://github.com/login](https://github.com/login) and enter your credentials.
2.  **Navigate to your Repository:** Open the repository for your JavaScript Quiz App (e.g., click on the project link).
3.  **Access Settings:** Click on the **Settings** button located near the top of your repository page.
4.  **Go to Pages:** In the left-hand navigation menu, scroll down and click on **Pages**.
5.  **Select Deployment Source:**
    * Under the "Build and deployment" section, find the **Source** dropdown.
    * Select **main branch** from the dropdown menu.
6.  **Save Changes:** Click the **Save** button.


### 4.2. Local Development <a name="local-development"></a>
- **How to Fork** <a name="how-to-fork"></a>
  **Steps:**

1.  **Login to GitHub:** Go to [https://github.com/login](https://github.com/login) and enter your credentials.
2.  **Navigate to the Repository:** Open the repository for the JavaScript Quiz App (e.g., click on the project link).
3.  **Click the Fork Button:** In the top right corner of the repository page, click the **Fork** button.


- **How to Clone** <a name="how-to-clone"></a>
  ## Cloning the Repository

**Steps:**

1.  **Login to GitHub:** Go to [https://github.com/login](https://github.com/login) and enter your credentials.
2.  **Navigate to your Repository:** Open the repository for your JavaScript Quiz App (e.g., click on the project link).
3.  **Get the Repository Link:**
    * Click the green **Code** button.
    * Choose your preferred method (**HTTPS**, **SSH**, or **GitHub CLI**).
    * Copy the displayed link.
4.  **Open Terminal/Command Prompt:** Open the terminal or command prompt in your code editor or on your system.
5.  **Navigate to Destination:** Use the `cd` command to go to the folder where you want to clone the project (e.g., `cd Documents/Projects`).
6.  **Clone the Repository:**
    * Type `git clone ` (make sure there's a space after `clone`).
    * Paste the link you copied in step 3.
    * Press **Enter**.


### Testing

Please refer to [TESTING.MD](TESTING.md) file for all texting carried out.

| **Feature**              | **Expected Outcome**                              | **Testing Performed**                     | **Result**                          | **Pass/Fail** |
|---------------------------|--------------------------------------------------|------------------------------------------|-------------------------------------|---------------|
| **Start Button**          | Starts the quiz and hides the start button       | Clicked "Start" button                   | Quiz started, start button hidden   | **Pass**      |
| **Next Button**           | Moves to the next question                       | Clicked "Next" button after answering    | Moved to the next question          | **Pass**      |
| **Button Hover Effects**  | Buttons change style on hover                    | Hovered over buttons                     | Hover effects observed               | **Pass**      |
| **Mobile Responsiveness** | Page adapts correctly to mobile screen sizes     | Tested on mobile & resized browser window| Layout responds well to screen size | **Pass**      |
| **Page Load Speed**       | Loads within 7 seconds                           | Opened the quiz app                      | Loaded quickly                       | **Pass**      |
| **HTML Validation**       | HTML markup is valid                             | Checked in HTML validator                | Valid – no major issues              | **Pass**      |


- ## Validator Testing 
    - ## HTML
     ![HTML VALIDATION](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/htmlvalidation.png?)
  - ## Css 
    ![CSS VALIDATION](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/cssvalidation.png?raw=true)

  - ## Javascript
    ![CSS VALIDATION](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/javascriptvalidation.png?raw=true)

### 2.4. Wireframes <a name="wireframes"></a>
* Wireframes were created for mobile, tablet and desktop using balsamiq.
![Question Pag](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/Desktop.png?raw=true)
![Question Pag](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/Tablet.png?raw=true)
![Question Pag](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/mbile.png?raw=true)
![The High Scores Pag](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/Mobile%202.png?raw=true)
  
### 2.5. Features <a name="features"></a>
- **The Game Page** <a name="the-game-page"></a>
* A favicon in the browser tab.
![The High Scores Pag](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/testing/favicon.jpg?raw=true)

![Selected Answers](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/testing/select%20answer.png?raw=true)
* Once a user makes a selection, they cannot choose again. Visual feedback will immediately show if their answer is right or wrong: the quiz border and selected button will turn green for correct answers and red for incorrect ones. Correct answers add 10 points to their score. Tapping "Next" will move them to the subsequent question, updating the question number. In case of a wrong answer, the button they picked will be red, while the correct option will be clearly shown in green.

  
- **The High Scores Page** <a name="the-high-scores-page"></a>
![The High Scores Pag](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/testing/score%20page.png?raw=true)
* The high scores page title shows the site name. Two "Play Again" buttons appear below the high scores
- **Future Implementations** <a name="future-implementations"></a>  
### 2.6. Accessibility <a name="accessibility"></a>
"I have prioritized accessibility throughout the development process to ensure the website is as user-friendly as possible. 
* Using semantic HTML.
* Using a hover state on all buttons on the site to make it clear to the user if they are hovering over a button.
* Choosing a Montserrat font for the site - these fonts are suitable for people with dyslexia.
* Ensuring that there is a sufficient colour contrast throughout the site.
* 
 **Contrast Button**  
  ![Contrast Button](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/accessibility2.png?raw=true)  

- **Contrast Button (Hover State)**  
  ![Contrast Button Hover](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/accessibility.png?raw=true)  

- **Contrast Text**  
  ![Contrast Text](https://github.com/isaibrahim1/Quiz-App/blob/main/assets/documentation/accessibility1.png?raw=true)

  ## Credits

### Code Used

* I used [this You Tube tutorial](https://www.youtube.com/watch?v=riDzcEQbX6k&t=601s) to create the project, and I add some change qquestion,mediaquery and style.


 ### Content

All questions for my site were pulled from [Google gemini](https://gemini.google.com/app). 

### Acknowledgments

I would like to acknowledge the following people:

* jubril_mentor - My Code Institute Mentor.
* The Code Institute Slack - Thank you to everyone who took the time to play the quiz and look over the code.
