// run: node index.js

const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };
    }
    case "travel": {
      if (state.supplies - 20 * action.payload < 0) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies - 20 * action.payload,
        distance: state.distance + 10 * action.payload,
        days: state.days + action.payload,
      };
    }
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };
    }
    default: {
      return state;
    }
  }
};

// 0 day
let wagon = reducer(undefined, {});
console.log(wagon);

// 1. day
wagon = reducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);

// 2. day
wagon = reducer(wagon, {type: 'gather'});
console.log(wagon);

// 3. day
wagon = reducer(wagon, {type: 'tippedWagon'});
console.log(wagon);

// 4. day: + 3 more days
wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);

// 7. day: insufficient supplies to travel
wagon = reducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);

/*
{ supplies: 100, distance: 0, days: 0 }
{ supplies: 80, distance: 10, days: 1 }
{ supplies: 95, distance: 10, days: 2 }
{ supplies: 65, distance: 10, days: 3 }
{ supplies: 5, distance: 40, days: 6 }
{ supplies: 5, distance: 40, days: 6 }
*/