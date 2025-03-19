# User Form and Profile App

This is a simple React app that allows users to fill out a form with their personal information, including a link and town. Upon form submission, the data is passed to a profile page where the user can view their details along with the current temperature for the specified town.

## Features
- **User Form**: Collects first name, last name, a link, and town from the user.
- **Profile Page**: Displays the user information and the current temperature for the town.
- **Link Validation**: Ensures the entered link is a valid URL before submission.
- **Temperature Fetch**: Fetches the current temperature of the entered town.

## Technologies Used
- React
- TypeScript
- React Router DOM

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/user-form-profile-app.git
cd user-form-profile-app
```
### 2. Install dependencies 
```bash
yarn add
```
### 3. Start the development server
```bash
yarn start
```
The app will be available at http://localhost:3000.

Usage

On the User Form page, enter your first name, last name, a valid URL, and a town.
Upon form submission, you'll be redirected to the User Profile page.
The profile page displays your information along with the current temperature for the entered town.
Notes

The app uses a simple approach to fetch temperature data for the given town.
This app demonstrates basic form validation, navigation, and data passing between components.
License

This project is licensed under the MIT License - see the LICENSE file for details.


### When cloning:
1. Replace `your-username` in the GitHub clone link with your actual GitHub username.  😊

