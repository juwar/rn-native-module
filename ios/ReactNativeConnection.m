//
//  ReactNativeConnection.m
//  RNNativeModule
//
//  Created by Bangkit Purbandoro on 04/03/21.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_REMAP_MODULE(ConnectNative, ConnectNativeModule, RCTEventEmitter)

RCT_EXTERN_METHOD(sendCallbackToNative: (NSString)type
                  callback: (RCTResponseSenderBlock)rnCallback
                  )
RCT_EXTERN_METHOD(sendMessageToNative: (NSString)rnMessage)
@end
