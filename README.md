# Spotlight Experience Project

## Description
This project demonstrates how to add animation to an HTML file. It includes a simple HTML file with embedded animations.

## Instructions

### Python Setup and Server Start
#### For Windows:
1. Download and install Python from the official website: [Python Downloads](https://www.python.org/downloads/)
2. Open Command Prompt.
3. Navigate to the directory containing your HTML project files using the `cd` command.
4. Run the following command to start the Python HTTP server:

python -m http.server 8000

#### For macOS:
1. macOS usually comes with Python pre-installed. However, you can install the latest version using Homebrew or from the official website: [Python Downloads](https://www.python.org/downloads/)
2. Open Terminal.
3. Navigate to the directory containing your HTML project files using the `cd` command.
4. Run the following command to start the Python HTTP server:

python3 -m http.server 8000

### Project Information
This project contains a single HTML file named `about-spotlight.html`. The HTML file includes examples of adding animations using CSS and JavaScript. Feel free to explore and modify the HTML file to experiment with different animations.

### Accessing the Demo
You can view the demo by navigating to [http://localhost:8000/about-spotlight.html](http://localhost:8000/about-spotlight.html) in your web browser.

### Note
Usually, a Python server is not needed to run a simple HTML project. However, this project includes HTML importing and loading a JSON file, which may not work with usual browser settings. Therefore, directly running the HTML file from the browser may result in animations not working. Running this project on a Python server solves this problem.
