import {put,take,takeEvery,cancel,fork} from 'redux-saga/effects';

import watch from './counter';
export default function* root(){
     yield fork(watch);
};