//
//  ConnectNativeModule.swift
//  RNNativeModule
//
//  Created by Bangkit Purbandoro on 04/03/21.
//

import Foundation
import React

enum RCTSupportedEvent: String, CaseIterable {
    case alarm = "EventAlarm"
}

@objc(ConnectNativeModule)
class ConnectNativeModule: RCTEventEmitter {
  
  var hasListener: Bool = false
  public static var shared: ConnectNativeModule?
  
  override init() {
    super.init()
    ConnectNativeModule.shared = self
  }
  
  override class func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  override func supportedEvents() -> [String]! {
      return RCTSupportedEvent.allCases.map { $0.rawValue }
  }
  
  func sendEventToReact(withName event: RCTSupportedEvent, body: [String: Any] = [:]) {
    if hasListener {
      sendEvent(withName: event.rawValue, body: body)
    }
  }
  
  @objc func sendCallbackToNative(_ type: String, callback rnCallback: RCTResponseSenderBlock?) {
    print("This log is callback from RN: \(type)")
  }
  
  @objc func sendMessageToNative(_ rnMessage: String) {
    print("This log is from RN: \(rnMessage)")
  }
  
  override func startObserving() {
    hasListener = true
  }
  
  override func stopObserving() {
    hasListener = false
  }
}
