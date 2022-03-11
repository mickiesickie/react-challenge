//given these functions
const mockAPIDelay = (data) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 400);
  });

const getPetNames = () =>
  mockAPIDelay([
    { type: 'dog', name: 'derp' },
    { type: 'cat', name: 'waffles' },
  ]);
const getPetFoods = () =>
  mockAPIDelay([
    { type: 'cat', food: 'cat food' },
    { type: 'dog', food: 'dog food' },
  ]);

//write a function that fetches both "apis" and returns the following response:
// [{name: 'derp', food: 'dog food'}, {name: 'waffles', food: 'cat food'}]
