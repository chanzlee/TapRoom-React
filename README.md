# TapRoom

#### _11/30/2018_, By Chan Lee

## Description

Static website for the bar to to sell & manage kegs using React.

## Specification

- Website shows list/menu of all available kegs. For each keg, I need to see its name, brewer, price, and alcoholContent
- It responsively updates how many pints are left in a keg
- User can login/logout through the router, but not allowed to see admin page if they are not admins.
- Admin can add new keg to add it to the list, delete from the list and edit a keg's properties after entering them.
- If admin add or delete keg, there will be a modal to render the component inside.
- When admin click a sell button, it will decrease the number of pints left by 1.
- If there are less than 10 pints left, text color will changed into red so admin can be ready to change them.
- Kegs prices are color-coded for easy readability, based on their price (greater than \$7) or the particular style of beer or kombucha.
- Alcohol content property will also be color-coded to display stronger beers differently than weaker beers.

## Setup/Installation Requirements

1.

```
    // navigate into directory
    > cd TapRoom-React
```

2.

```
    // install dependent plugins
    > npm install
```

3.

```
    // start application
    > ng run start
```

## Project Prompt

1. Unforeseen issues / Questions

- Should Keg be component or just a object from the database?

- Which dependencies needs to be injected to use font-awesome?

2. Difference between Angular and React

- Routing is descriptive at the entry point, just router-outlet vs. Switching through routes with redirecting options.

- Area handled by one component in Angular can be account for several components in React.

- Since React uses jsx files, there should be specific configuration about babel compiling, and set up accordingly in order to use ES6 syntax.

- NgIf of Angular goes inside the tag as "property binding" but corresponding functionality can be done by ternary operator in React, outside the DOM element.

- Angular enables two way binding, but React is allows only one way binding, parent to child.

- Since Angular developed on MVC while React only has View of MVC, react becomes verbose as it became hard to incorporate Model and Component.

- Regarding forms, two way binding is also possible by onChange property, but should careful about only source of truth.

## Components

- Navigation bar
- Store
- Kegs
- newKegForm
- Admin
- Employee
- Login
- Common component: Like/ Modal/ Sell/ Input

## Technologies Used

- React
- Node
- Webpack
- ESLint
- Bootstrap
- Babel
- Styled JSX

## Support and contact details

chanethanlee@gmail.com

## License

MIT License

Copyright (c) 2018 **_Chan Lee_**
