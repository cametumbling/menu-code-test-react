# OpenTable front-end coding challenge

Thank you for taking the time to view my submission. I would love to receive feedback.

## Priorities

-   Treat data as dynamic, and as I/O for a wide variety of microservices, e.g. assume individual diner orders will be used for future engagement
-   Design for a POS, using CSS-in-JS.
    _Based on the goals for this job role, I assumed this front-end might be utilized for a POS touchscreen application, either iPad-ish or smaller in size. This led me to implement the functionality and design in terms of large buttons that could be quickly and easily clicked by touch._
    _Finally, the pair-programming test was meant to cover CSS-in-JS, hence the use of styled-components here, with just a bit of inline CSS._

## Notes

-   To constrain scope to passing the acceptance tests, menu and order editing functionality are not live.
-   Things got a bit messy when I started implementing the conditions, so everything around the Diners needs to be refactored and made more robust to avoid errors.
-   I've not finished implementing the clear-order functionality, items are clearing from the UI only now
-   The test provided is several years old, perhaps to mimic a real environment, and some tinkering with babel/webpack/etc. was required to get testing packages set up. I wanted to utilize two technologies mentioned for this role (react-testing-library and CSS-in-JS, in this case styled-components), but unfortunately realized a bit late that additional troubleshooting would be required to get them to play well together. I left a failing test in to demonstrate the issue with the way in which s-c passes props. More testing is definitely needed and I apologize for this shortcoming.

## Next Steps

-   Implement add/edit/delete functionality for menu and order
-   Poll for menu changes
-   Improve test coverage
-   Implement a state management system
-   Design for specific POS viewports
-   Break out validation logic
-   Add amount of each dish be added to menu data; disable buttons if no longer available
-   Build out API
