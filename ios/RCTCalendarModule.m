//
//  RCTCalendarModule.m
//  RNNativeModule
//
//  Created by SQS Alter 2 on 04/03/21.
//


// RCTCalendarModule.m
#import "RCTCalendarModule.h"

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title location:(NSString *)location callback: (RCTResponseSenderBlock)callback)
{
  NSString *res = @"Run in ios";
 callback(@[(res)]);

}


@end

@implementation CalendarModule
{
  bool hasListeners;
}

// Will be called when this module's first listener is added.
-(void)startObserving {
    hasListeners = YES;
    // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
    hasListeners = NO;
    // Remove upstream listeners, stop unnecessary background tasks
}

- (void)calendarEventReminderReceived:(NSString *)name
{
  NSString *eventName = @"name";
  if (hasListeners) { // Only send events if anyone is listening
    [self sendEventWithName:@"Test" body:@{@"name": eventName}];
  }
}

@end
