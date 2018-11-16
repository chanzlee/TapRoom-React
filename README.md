# TapRoom

#### _11/16/2018_, By Chan Lee

## Description

## Specification

- As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
- As an employee, I want to fill out a form when I tap a new keg to add it to the list. (Don't worry about authenticating employee user accounts yet.)
- As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
  As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).
- As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
- As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
- As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than \$5 per pint, perhaps) or the particular style of beer or kombucha.
- As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.

## Project Prompt

1. Unforeseen issues / Quesrtions

- Should Keg be component or just a object from the database?

- Which dependencies needs to be injected to use font-awesome?

2. Difference between Angular and React

- Routing is descriptive at the entry point, just router-outlet vs. Switching through routes with redirecting options.

- Area handled by one component in Angular can be account for several components in React.

- Since React uses jsx files, there should be specific configuration about babel compiling, and set up accordingly in order to use ES6 syntax.

## Support and contact details

chanethanlee@gmail.com

## License

MIT License

Copyright (c) 2018 **_Chan Lee_**
