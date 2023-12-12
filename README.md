# The Booking app

An appplication to simulate a booking feature, where a user is capable browsing through different accomodations, selecting checkin and checkout dates, save a booking, updating it and cancelling it.

## Validations

The app has date validations in place, so the user can't select a final date before the initial date; Also, the user can't book the same place in dates that conflict with bookings he/she already have.
Note: I chose to let the user book different places in the same date. The rational behind this decision is explained by this examples:

1. a user may want to book several places, that are near each other, for a family reunion, for instance;
2. a user may want to book places for a third party, even if the places are far away from each other, bacause a given person doesn't have an account on the platform, or doesn't know how to book a place, or isn't familiar to technology, phones, computers, and so on.

## Tools used

Here's a list of the tools that I used:

- JavaScript
- TypeScript
- React
- Material UI
- Styled Components
- Zustand
- Vite.js
- Vitest
- Dayjs

## Running it

Steps to run this project:

1. Clone the repo.
2. In your preferred terminal, run `npm i`
3. Then `npm run dev`

## Running the tests

Just run `npm run test`

## Architecture

For this project I chose to go with the Atomic Design pattern for architecturing the application. This pattern helps the developer to better separate concerns, since the whole logic of the pattern is to build the smaller components possible (atoms), and then combining some of them to form a second level of components (molecules), then combining these to build more complex features (organisms), and so on. These first levels are "dummies", meaning they only know how to show the data they've received. The Page components holds the data, obtained from the global state, and then pass it down to the smaller components, composing the interface that the user will interact with.

I used Zustand to hold the global state of the application, and react hooks as the layer that holds the logic to add, update and delete bookings, being responsible for the manipulation of the state.

The tests with Vitest where done to make sure the UI works as expected, testing from the smaller to bigger components with mock data.

## File and folder organization

```
📦 Booking app
├─ src
│  ├─ components
│  │  ├─ atoms
│  │  ├─ molecules
│  │  ├─ organisms
│  │  └─ pages
│  ├─ tests
│  ├─ style
│  └─ lib
│     ├─ hooks
│     ├─ store
│     ├─ types
│     └─ util
└─ public
```
