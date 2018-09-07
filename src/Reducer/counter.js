
const initialState={
	test:'',
}
export default function counters(state=initialState,action){
	switch(action.type){
       case 'TEST':
         console.log("test is coming here!");
         return {
         	...state,
         	...action.payload,
         }
       break;
       default:
          return state;
       break;
	}
}