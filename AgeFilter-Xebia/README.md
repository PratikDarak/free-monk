Detailed Instructions on how to run the website:-
1. Clone the GitHub respository to your local machine using "git clone" command
2. In command prompt, navigate to the "AgeFilter-Xebia" folder
3. Run "npm i" command to install the dependencies
4. Run "ng serve --open" to run the website

This website does the following things:
1. Gets the data asynchronously from the locally mocked JSON file.
2. In the header component, it displays the count of employees within each Age bucket.
3. Upon clicking on each filter toggle, the data in the below table is modified according to the Age bucket selected.
4. In the employee component, first it diaplys the filter if it has been selected by the end user otherwise it remains hidden.
5. The selected filter also gives us the option to clear it by clicking on the 'X' icon.
6. Employee table will continue to display us the relevant data as per the choices.
7. The table also provides us with an option to sort the data by "Age" and/or "ID".
8. In the footer template, we have an option to select the pages we want to see.
9. We can also select how many rows we want to display on a single page.

Also, more employee data can be directly added to the "employees.json" file in the "assests/data" folder to further the testing.

Thank you!

---------------------------------------------------------------------------------------------------------------------------------------------------

# AgeFilterXebia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
