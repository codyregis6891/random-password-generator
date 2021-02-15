For this assignment I was given a random password generator that was not working. My task was to give it life via javascript.

I started by assigning variables to the button and the text display elements of the index.html page.  I then defined the writePassword function with a series of if else statements.  

In the first one, I created an alert to choose a password length between the required range of 8 and 128 if the user failed to do so.  

If the user did choose an acceptable length, it triggered a series of confirmation alerts for the user to decide if they wanted their password to contain numbers, symbols, lowercase letters, and uppercase letters.  The user's choices were stored in defined variables.  

I then assigned each of those 4 user choices possible options in 4 seperate arrays.  I created 11 more arrays that were different combinations or the 4 previous arrays, as the user has the option to pick and choose whichever of the four prompts they do or do not want. 

I then started my 2nd if else statement that covered every possible outcome based on which choices were made by the user.  If the user did not choose any of the 4 available options, I added an alert that would remind the user to choose at least one of the four options.  

I used a random number generator inside a for loop to assign a random index of the chosen array before defining a password variable as the value of the added of values of the random index integers chosen.

I concluded the the definition of the writePassword function by adding text content to the text display element by attributing the value of the newly defined password variable as the text content to be added.

Below is a screenshot of the page as well as a link to the running application.