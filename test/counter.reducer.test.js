import counterReducer from '../src/counter.reducer.js';

// counterReducer should initally be 0
test('counterReducer should initally be 0', () => {
  const action = {};
  // First argument is the existing state, the second is your action
  const returnedState = counterReducer(undefined, action);
  expect(returnedState).toBe(0);
});

// counterReducer should be able to ADD
test('counterReducer should initally be 0', () => {
  const action = {type: 'ADD'};
  // First argument is the existing state, the second is your action
  const returnedState = counterReducer(undefined, action);
  expect(returnedState).toBe(1);
});

// counterReducer should be able to SUBTRACT
test('counterReducer should initally be 0', () => {
  const action = {type: 'SUBTRACT'};
  // First argument is the existing state, the second is your action
  const returnedState = counterReducer(undefined, action);
  expect(returnedState).toBe(-1);
});

// counterReducer should be able to ADD & SUBTRACT (two actions)
test('counterReducer should initally be 0', () => {
  const subaction = {type: 'SUBTRACT'};
  const addaction = {type:'ADD'}
  // First argument is the existing state, the second is your action
  const addState = counterReducer(undefined, addaction);
  const subtractState = counterReducer(addState, subaction);
  expect(subtractState).toBe(0);
});

// counterReducer should ignore actions it doesn't care about IGNORE_ME
test('counterReducer should initally be 0', () => {
  const action = {type: 'IGNORE_ME', type:'ADD'};
  // First argument is the existing state, the second is your action
  const returnedState = counterReducer(undefined, action);
  expect(returnedState).toBe(1);
});