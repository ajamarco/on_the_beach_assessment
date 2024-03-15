# On The Beach Assessment

This project is part of On The Beach's Frontend developer assessment.

It is a simple project that demonstrates how components can be assembled to form a larger application. In this application, there's no need for any API calls, as everything is served statically. The client is expected to render it all.

- Components can be found in /src/components.
- Assets (such as hotel images) can be found in /src/assets.
- CSS files can be found in /src/styles.

### Components

There are 4 components in this project:

- **SortSelection**: the sort menu.
- **SortButton**: an individual Sort button for any of the 3 sorting capabilities.
- **Trips**: the container for trips.
- **TripCard**: an individual trip card.

### Responsiveness

The project also has a simple responsiveness system in place, since this wasn't in the design that was sent to me, so I decided to keep this simple.

### Sorting

By clicking on any of the buttons on the left, the sorting is done by hotel name, price, or star rating (name from A to Z, price from lower to higher, and star rating from higher to lower).

### Future Implementations

As future implementations of this project, we could have:

- Different types of filters (by location, star rating, date, etc.).
- Different types of sorting (from Z to A - if clicked again on the 'sort by name' button -, price from higher to lower, etc.).
- Improved responsiveness.
- Improved compatibility, as I used flex grid to make the layout work. Maybe this won't work on some older browsers.
- Adding additional information on each trip, as well as a Google Maps integration showing the location of the hotel on a map.
