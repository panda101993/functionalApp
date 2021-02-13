// import React, { useState, useEffect, useRef } from 'react';

// export function useInterval(callback) {
//   const savedCallback = useRef();

//   // Remember the latest callback.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (1000 !== null) {
//       let id = setInterval(tick, 1000);
//       return () => clearInterval(id);
//     }
//   }, [1000]);
// }