//
//  RCTCalendarModule.h
//  RNNativeModule
//
//  Created by SQS Alter 2 on 04/03/21.
//

#ifndef RCTCalendarModule_h
#define RCTCalendarModule_h

//  RCTCalendarModule.h
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCTCalendarModule : NSObject <RCTBridgeModule>
@end

@interface CalendarModule : RCTEventEmitter <RCTBridgeModule>
@end



#endif /* RCTCalendarModule_h */
