import { NativeModules, NativeEventEmitter } from 'react-native'


export const createCalendarEvent = (testName, testLocation) => {
  NativeModules.CalendarModule.createCalendarEvent(testName, testLocation, (res) => {
    console.log(res);
  });
}

export const eventEmitter = () => {
  return new NativeEventEmitter(NativeModules.CalendarModule);
}
