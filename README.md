# React useEffect Cleanup Function Missing

This repository demonstrates a common error in React applications: forgetting to include a cleanup function in the `useEffect` hook. This can lead to memory leaks and unexpected behavior.

## The Bug

The `bug.js` file contains a component that uses `useEffect` to update a counter every second using `setInterval`. However, it's missing the crucial cleanup function that should clear the interval when the component unmounts. This means that the interval will continue to run even after the component is removed from the DOM.

## The Solution

The `bugSolution.js` file corrects this issue by adding a cleanup function.  The cleanup function is responsible for clearing the `setInterval` using `clearInterval` before the component unmounts. This prevents the memory leak.