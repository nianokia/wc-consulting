# Revamp of Wright Choice Consulting
This redesigned website will provide a clear and user-friendly experience for potential clients and professionals seeking information about my dad’s private therapy practice, highlighting his expertise and services in a visually appealing format.
## Features

* Implement data fetching from a database using a GET request
* Integrate and implement Auth0 to allow for admin login only to view all form entries
* Send newly submitted form data to admin as an email with the Twilio API
* Parse and display retrieved JSON data on admin-only side of the client.
* Utilize React components, props, and state to manage input states form submission.
* Uses SQL to relate table in a database and grab specific data and records.
* Track form submission and display client_entries and professional_entries table on admin-side of the client.

## WEEK 1
* [Trello Board] (https://trello.com/invite/b/6706ff11d21043703e88d152/ATTIaba76391d295ac4919d76a19e0b4e0a1488E702F/wcc)
* [Project Pitch Figma] (https://www.figma.com/board/9Hclt6RroLGZQGgFwg3qkg/Final-Project-Planning?node-id=110-915&t=zomsQ8rA2WFEu8iG-1)

## Technologies Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)


* Frontend:
    * React
    * Vite
* Backend:
    * JavaScript / Node.js
    * Express.js
    * Nodemon (development)
    * Postgres SQL
* Additional Tools:
    * Jest / RTL
    * Sequelize

## Demo
![demo]()

## Setup Instructions

1. Project Cloning and Ownership

    * Clone this project repository to your local machine:

        ```bash
        git clone git@github.com:nianokia/wc-consulting.git
        ```

    * Remove the existing git repository (optional, to establish local ownership):

        ```bash
        rm -rf .git
        ```

2. Install Dependencies

    * **For both the client (frontend) and server (backend) directories:**
        * Navigate to the respective directory:
            * `cd client`
            * `cd server` (after completing client setup)
        * Install required dependencies:

            ```bash
            npm install
            ```

    * This will install all the necessary packages for both the frontend (Vite and React) and backend (Express.js, cors, and nodemon).

3. Create a .env file in the server folder.

4. There are two ways to restore the DB dump file the project already contains:
    * A- If you have postgres set up postgres with an User: 

        * Run the command ```psql -U <user> wcc -f db.sql```
        * Make sure that you have your Postgres password on hand. The psql console will ask for your password.

    * B- If your initial configuration of postgres doesn't require a User:

        * Run the command ```psql wcc -f db.sql```
        * Inside your server folder, open the file .env.example and copy the correct option for your configuration found there to your new .env file.
            * Your .env might look like:
                ```bash
                DATABASE_URI="postgresql://localhost/wcc"
                ```

5. For this template, the name of your db should be wcc.

    ⚠️ If you don't see an wcc db, you can create one. ⚠️
    * From the terminal, navigate to the psql command line with psql and type:
        ```sql
        CREATE DATABASE wcc;
        ``` 

6. Run the App in Browser

    * **Concurrently start Frontend & Backend:**
        * Navigate to the `server` directory:
            ```bash
            npm run dev
            ```

    The app should now be accessible in your web browser at the specified URL (usually `http://localhost:5173`).

### Implementation Details

* The `server.js` file will handle the Express server setup and fetch data from database.
* React components will be created in the `client` directory to manage the app interface, form displays, event submission, and list of events.
* Data fetched from the database will be parsed and displayed in the React components.

## Planning Process
![planning-process-diagram]()


## Future Implementations

### Resources

* [Vite Documentation](https://vitejs.dev/): (Refer to official documentation for setup specifics)

### About the Developer
Nia Wright is a software engineer who primarily works with HTML, CSS, Javascript, and React. Check out her other [projects](https://niawright.netlify.app/)!

### License

MIT License

This project is open-source and licensed under the MIT License.

