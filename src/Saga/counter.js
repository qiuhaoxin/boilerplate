import {put,call,take,fork} from 'redux-saga/effects';


function* test(){
	console.log("test in saga!");
   yield put({type:'TEST'})
}

export default function* watch(){
	while(true){
		yield take('TEST_SYNC');
        yield fork(test);
	}
}