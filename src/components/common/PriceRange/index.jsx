// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/TextField';
// import PropType from 'prop-types';
// import React, { useState } from 'react';
// import {
//     Handles, Rail, Slider, Ticks, Tracks
//   } from 'react-compound-slider';
//   import Handle from './Handle'
//   import SliderRail from './SliderRail'
//   import Tick from './Tick'
//   import Track from './Track'


//   const sliderStyle = {
//     position: 'relative',
//     width: '100%'
//   }

//   const PriceRange = ({
//     min, max, initMin, initMax, productsCount, onPriceChange
//   }) => {

//     const [state, setState] = useState({
//         domain: [min, max],
//         values: [initMin || min, initMax || max],
//         update: [min, max].slice(),
//         inputMin: initMin || min,
//         inputMax: initMax || max,
//         inputError: false,
//         reversed: false
//       });
//       const onUpdate = (update) => {
//         setState(() => ({
//           ...state, update, inputMin: update[0], inputMax: update[1]
//         }));
//       };
    
//       const onChange = (values) => {
//         setState(() => ({
//           ...state, values, inputMin: values[0], inputMax: values[1]
//         }));
//         if (values[0] < values[1]) onPriceChange(...values);
//       };


//       return (
//         <Box>
//            <Box>
//             <TextField
//                     disabled={productsCount === 0}
//                     max={max}
//                     min={min}
//                     type="number"
//                     readOnly
//                     value={state.inputMin}
//                 />
//                 <TextField
//                     disabled={productsCount === 0}
//                     max={max}
//                     min={min}
//                     type="number"
//                     readOnly
//                     value={state.inputMax}
//                 />
//            </Box>
//            <Slider
//                 mode={1}
//                 step={1}
//                 domain={state.domain}
//                 rootStyle={sliderStyle}
//                 onUpdate={onUpdate}
//                 onChange={onChange}
//                 values={state.values}
//             >
//                 <Rail>
//                     {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
//                 </Rail>
//                 <Handles>
//                 {({ handles, activeHandleID, getHandleProps }) => (
//                     <div>
//                     {handles.map((handle) => (
//                         <Handle
//                         key={handle.id}
//                         handle={handle}
//                         domain={state.domain}
//                         isActive={handle.id === activeHandleID}
//                         getHandleProps={getHandleProps}
//                         />
//                     ))}
//                     </div>
//                 )}
//                 </Handles>
//                 <Tracks left={false} right={false}>
//                 {({ tracks, getTrackProps }) => (
//                     <div>
//                     {tracks.map(({ id, source, target }) => (
//                         <Track
//                         key={id}
//                         source={source}
//                         target={target}
//                         getTrackProps={getTrackProps}
//                         />
//                     ))}
//                     </div>
//                 )}
//                 </Tracks>
//                 <Ticks count={5}>
//                 {({ ticks }) => (
//                     <div>
//                     {ticks.map((tick) => (
//                         <Tick key={tick.id} tick={tick} count={ticks.length} />
//                     ))}
//                     </div>
//                 )}
//                 </Ticks>
//             </Slider>

//         </Box>
//       )

//   }

  
// PriceRange.defaultProps = {
//     initMin: undefined,
//     initMax: undefined
//   };
  
//   PriceRange.propTypes = {
//     initMin: PropType.number,
//     initMax: PropType.number,
//     min: PropType.number.isRequired,
//     max: PropType.number.isRequired,
//     productsCount: PropType.number.isRequired,
//     onPriceChange: PropType.func.isRequired
//   };
  
//   export default PriceRange;
  