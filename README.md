# ThoughtWave

An API for a dynamic social network enabling users to share thoughts, interact, and forge connections.

## Overview

ThoughtWave is a powerful and versatile social media API designed to simplify the development of social networking applications. With a focus on user management, thought sharing, and interaction, ThoughtWave provides essential features for building robust social platforms.

### **Key Aspects and Objectives**

- **User Management:** ThoughtWave allows you to manage users, including creating, updating, and deleting user profiles. Users can have friends and share thoughts.

- **Thought Sharing:** Users can create, update, and delete their thoughts. These thoughts can also be associated with reactions from other users.

- **Friendship:** ThoughtWave enables the creation and management of friend relationships between users.

- **Reactions:** Users can react to thoughts, providing a way to engage with and express emotions about shared content.

### **Purpose**

ThoughtWave simplifies the development of social media applications by providing a well-structured API. It's a valuable tool for developers looking to create their own social platforms, integrate social features into existing projects, or learn about API development. With ThoughtWave, you can efficiently build and manage a social network, making it an excellent choice for projects involving user interactions and content sharing.

## Table of Contents

- [Description](#description)
- [Tools](#tools)
- [Installation](#installation)
- [Testing](#testing)
- [Links](#links)
- [Credits](#credits)
- [Contributing](#contributing)
- [Report Issue](#report-issue)
- [License](#license)

## Description

The ThoughtWave project is a comprehensive social media API that facilitates user management, thought sharing, and interaction with friends and reactions. This project offers solutions for managing users, creating and updating thoughts, and establishing connections between users as friends. It provides a robust API for developers to build social media applications or integrate social features into their existing projects. With ThoughtWave, users can seamlessly share their thoughts, connect with friends, and engage with reactions, all powered by a user-friendly API.

In summary, ThoughtWave simplifies the process of building social media functionalities, making it an ideal choice for developers looking to create or enhance social networking applications.

## Tools

To interact effectively with ThoughtWave, ensure the presence of the following tools and software:

1. **Code Editor/IDE:** Employ a code editor or integrated development environment (IDE) for writing, editing, and managing the project's code. Notable options include [Visual Studio Code](https://code.visualstudio.com/download), [Sublime Text](https://www.sublimetext.com/download), or [WebStorm](https://www.jetbrains.com/webstorm/download/#section=mac).

2. **Node.js:** This project, which utilizes Express, is constructed using Node.js. Please install [Node.js](https://nodejs.org/en/download) to run the application.

3. **npm (Node Package Manager):** 'npm' is employed for dependency management and script execution. It is bundled with Node.js and becomes accessible after Node.js installation.

4. **MongoDB:** This project uses MongoDB as a database. Please install [MongoDB](https://www.mongodb.com/download-center/community/releases) and a tool for interacting with the database, such as [MongoDB Compass](https://www.mongodb.com/try/download/compass) or the [MongoDB shell](https://www.mongodb.com/try/download/shell).

5. **Insomnia or API Testing Tool:** This project functions as an API. An API testing tool like [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/downloads/) is indispensable for testing API endpoints and executing HTTP requests.

6. **Git (Version Control):** Git is essential for version control and collaborating on the project. Use Git for source code management and work with platforms like GitHub, GitLab, or Bitbucket.

7. **Terminal or Command Prompt:** Use the command line to run the application, install packages, and execute various scripts.

These tools should cover the basic requirements for interacting with this project, but specific tools may vary depending on the project's details and other personal preferences.

## Installation

To install and set up the ThoughtWave project, follow these step-by-step instructions.

Ensure to have the following prerequisites before starting:

**Prerequisites:**

- [Node.js](https://nodejs.org/en/download): Install Node.js in the system.

**Installation Steps:**

1. **Clone the Repository:**

   - Open the terminal or command prompt.
   - Navigate to the directory to install ThoughtWave.
   - Run the following command to clone the project repository:

     ```
     git clone git@github.com:Clkwong3/ThoughtWave.git
     ```

2. **Install Dependencies:**

   - Change the working directory to the cloned project's folder:

     ```
     cd ThoughWave
     ```

   - Use npm to install project dependencies. Run:

     ```
     npm install
     ```

3. **Set Up MongoDB:**

   - Ensure MongoDB is installed and running. If not, download and install it from [here](https://www.mongodb.com/download-center/community/releases).
   - Use either MongoDB Compass or the MongoDB shell to interact with the database.

4. **Configure the Environment:**

   - Create a `.env` file in the project's root directory to store environment variables.

5. **Start the Application:**

   - Run the following command to start the application:

     ```
     npm start
     ```

   - The application should be accessible at `http://localhost:3001` in the web browser.

6. **Testing with Insomnia:**
   - If using Insomnia for API testing, import the project's API configuration from the project directory, if available.

The ThoughtWave project is now set up and ready to run. It can be accessed in the web browser, and there is the option to test its API endpoints using tools like Insomnia or Postman.

These instructions should help with installing and configuring the project.

## Testing

After successfully setting up the ThoughtWave project, interact with the application through its API endpoints. Below, explore how to use these endpoints and perform various actions.

### User Management

- **Get All Users:**

  - `GET /api/users`
  - Retrieve a list of all users in the database.

- **Get a Single User:**

  - `GET /api/users/:userId`
  - Retrieve information about a specific user by providing their ID.

- **Create a User:**

  - `POST /api/users`
  - Create a new user by providing user data in the request body.

- **Update a User:**

  - `PUT /api/users/:userId`
  - Update an existing user's data by providing the user's ID and the updated data in the request body.

- **Delete a User:**

  - `DELETE /api/users/:userId`
  - Delete a user by providing their ID.

- **Add a Friend:**

  - `PUT /api/users/:userId/friends/:friendId`
  - Add a new friend to a user's friend list by providing both the user's ID and the friend's ID.

- **Remove a Friend:**
  - `DELETE /api/users/:userId/friends/:friendId`
  - Remove a friend from a user's friend list by providing both the user's ID and the friend's ID.

### Thought Management

- **Get All Thoughts:**

  - `GET /api/thoughts`
  - Retrieve a list of all thoughts in the database.

- **Get a Single Thought:**

  - `GET /api/thoughts/:thoughtId`
  - Retrieve information about a specific thought by providing its ID.

- **Create a Thought:**

  - `POST /api/thoughts`
  - Create a new thought by providing thought data in the request body.

- **Update a Thought:**

  - `PUT /api/thoughts/:thoughtId`
  - Update an existing thought's data by providing the thought's ID and the updated data in the request body.

- **Delete a Thought:**

  - `DELETE /api/thoughts/:thoughtId`
  - Delete a thought by providing its ID.

- **Add a Reaction:**

  - `POST /api/thoughts/:thoughtId/reactions`
  - Add a reaction to a specific thought by providing the thought's ID and the reaction data in the request body.

- **Remove a Reaction:**
  - `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`
  - Remove a specific reaction from a thought by providing both the thought's ID and the reaction's ID.

These API endpoints allow interaction with the ThoughtWave application to manage users, thoughts, friends, and reactions. Tools like Insomnia or Postman can be used to test these endpoints and perform various actions within the application.

Feel free to explore the project and its features by making requests to these endpoints.

## Links

Here are a variety of resources that can be immensely helpful in your journey with the ThoughtWave project. 

**Project Resources:**

- [Project Walkthrough Video](link-to-your-video): A video that provides a walkthrough of the project, demonstrating its features and functionality.

- [GitHub Repository](https://github.com/Clkwong3/ThoughtWave): Link to the GitHub repository for this project.

**Web Tutorials:**

- [GeeksforGeeks Web Tutorial on Node.js CRUD Operations](https://www.geeksforgeeks.org/node-js-crud-operations-using-mongoose-and-mongodb-atlas): This web tutorial provides insights into Node.js CRUD operations using Mongoose and MongoDB Atlas, which can be a helpful resource for understanding related concepts.

- [V School Web Tutorial on Mongoose CRUD](https://coursework.vschool.io/mongoose-crud/): This web tutorial offers guidance on Mongoose CRUD operations, which is valuable for understanding the principles behind this project. It also provides links to the Mongoose Docs and other various guides.

**Video Tutorials:**

- [Build backend for applications using NodeJS and MongoDB](https://www.youtube.com/playlist?list=PLf0swTFhTI8reEqes_y588WF500j9i-ym) by [itversity](https://www.youtube.com/@itversity): A series of video tutorials for a project similar to ThoughtWave.

- [MongoDB - noSQL Database | Tutorial](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOFJ9JcVW9u4PlSWO-VFoao) by [Giraffe Academy](https://www.youtube.com/@GiraffeAcademy): A collection of web tutorials covering key concepts, including the CRUD operations.

## Credits

This project was developed by [Clarice Kwong](https://github.com/Clkwong3).

**Code Attribution:**

I would like to acknowledge that this project has code that was introduced in a class activity, specifically Activity 25 -26: CRUD SubDoc of Module 18 NoSQL. The class materials and discussions played a significant role in shaping the project's development and design.

**Tutoring Session Influence:**

I also want to express my gratitude for the valuable guidance and insights I received during the tutoring sessions. They were instrumental in providing solutions, suggesting improvements, and inspiring certain aspects of this project.

## Contributing

If you'd like to contribute to the project with code or other contributions, here's how you can get started:

1. **Fork the Repository:** Start by forking the project's repository to your GitHub account.

2. **Clone the Repository:** Clone your forked repository to your local development environment.

   ```
   git clone git@github.com:Clkwong3/ThoughtWave.git
   ```

3. **Create a New Branch:** Create a new branch for your contribution.

   ```
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes:** Make your desired changes or contributions.

5. **Test Your Changes:** Ensure that your changes do not introduce any new issues and pass all existing tests.

6. **Commit Your Changes:** Commit your changes with a clear and concise commit message.

   ```
   git commit -m "Add feature: your feature description"
   ```

7. **Push to Your Repository:** Push your changes to your forked repository.

   ```
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request:** Go to the project's [Pull Requests](https://github.com/Clkwong3/ThoughtWave/pulls) page, and click on "New Pull Request."

9. **Select the Base Branch:** Choose the appropriate base branch, typically the main branch of the project.

10. **Review and Submit:** Review your changes, provide a clear description of your contribution, and submit the pull request.

The project creator will review your pull request and provide feedback.

Thank you for your interest in contributing to the project!

## Report Issue

If you encounter any issues in the project, here's how you can get involved:

**Reporting Issues**

1. **GitHub Issues:** Visit the project's [GitHub Issues](https://github.com/Clkwong3/ThoughtWave/issues) page.

2. **Search for Existing Issues:** Before creating a new issue, please search for existing ones to check if your concern has already been addressed.

3. **Create a New Issue:** If your issue isn't already listed, click on the "New Issue" button.

4. **Issue Title:** Use a descriptive and concise title that summarizes the problem.

5. **Issue Description:** In the issue description, provide the following details:

   - A clear and detailed explanation of the issue.
   - Steps to reproduce the problem if applicable.
   - Information about your environment, such as your operating system and any relevant software versions.

6. **Screenshots or Error Messages:** If you have visual aids, such as screenshots or error messages, please attach them to the issue.

7. **Labeling:** If you're familiar with labels or the issue tracking system on GitHub, you can add labels that best describe the issue. If not, don't worry; we'll handle that.

8. **Submit the Issue:** Click "Submit new issue," and the project creator will review it. We'll get back to you as soon as possible.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Clkwong3/ThoughtWave/blob/main/LICENSE) file for details.
