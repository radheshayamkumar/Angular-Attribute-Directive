# Angular Attribute Directive Project

## Description

This is an Angular project demonstrating the use of `ngClass` and `ngStyle` within an attribute directive. The project contains dynamically styled elements and a table that changes based on user interactions.

## Screenshot

![Project Screenshot](src/assets/Screenshot%20(577).png)

## Features

- Uses `ngClass` to dynamically apply classes.
- Uses `ngStyle` to apply inline styles dynamically.
- Implements interactive UI components such as buttons, input fields, and checkboxes.
- Displays a table with student data and progress bars.

## Project Structure

```
angular-project/
│-- src/
│   │-- app/
│   │   │-- attribute-directive/
│   │   │   │-- atb-dir/
│   │   │   │   │-- atb-dir.component.html
│   │   │   │   │-- atb-dir.component.ts
│   │   │   │   │-- atb-dir.component.css
│   │   │-- app.component.html
│   │-- index.html
│   │-- main.ts
│-- angular.json
│-- package.json
│-- README.md
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/angular-attribute-directive.git
   ```
2. Navigate to the project folder:
   ```sh
   cd angular-attribute-directive
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project

1. Start the development server:
   ```sh
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200/`.

## Components Overview

### `AtbDirComponent`

- Contains four interactive boxes with dynamic class changes:
  - Box 1: Changes background color using buttons.
  - Box 2: Toggles background color with a button.
  - Box 3: Compares two numbers and changes background color.
  - Box 4: Uses a checkbox to toggle background color.
- Displays a table with student data where:
  - Background color of the status column changes based on student activity.
  - A progress bar represents total marks.

## Dependencies

- Angular
- Bootstrap

## License

This project is licensed under the MIT License.

## Author

[Radheshayam Kumar]

