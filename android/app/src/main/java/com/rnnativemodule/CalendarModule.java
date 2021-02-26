package com.rnnativemodule; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
//Callback
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
//Sending Event
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
//Test
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
       super(context);
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Callback callBack) {
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

        // Log.d("CalendarModule", "Create event called with name: " + name
        // + " and location: " + location);

        callBack.invoke(">> Callback in Native at " + formatter.format(date) + ", name: " + name
        + " and location: " + location);
    }

    
    private void sendEvent(ReactContext reactContext,
                    String eventName,
                    @Nullable String params) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit(eventName, params);
        }

    // Native -> React

    /**
     * Native menggunakan ini untuk mengirim event ke RN
     */
    private void sendToReact(String eventName, JSONObject messageJson) {
        sendEvent(this.getReactApplicationContext(), eventName, serializeMessage(messageJson));
    }

    //JSON Helpers
    private String serializeMessage(JSONObject jsonObject) {
        return jsonObject.toString();
    }


}