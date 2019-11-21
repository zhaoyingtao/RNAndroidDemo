package com.snow.rnd;

import android.content.Intent;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.IllegalViewOperationException;

/**
 * author : zyt
 * e-mail : 632105276@qq.com
 * date   : 2019-08-15
 * desc   :
 */
public class OpenNativeModule extends ReactContextBaseJavaModule {
    private ReactContext mReactContext;

    public OpenNativeModule(ReactApplicationContext context) {
        super(context);
        this.mReactContext = context;
    }

    @Override
    public String getName() {
        return "OpenNativeModule";
    }

    /**
     * rn调用原生方法
     *
     * @param flag
     */
    @ReactMethod
    public void openNativeVC(int flag) {
        if (1 == flag) {
            Intent intent = new Intent();
            intent.setClass(mReactContext, MineActivity.class);
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            mReactContext.startActivity(intent);
        }
    }

    /**
     * 通过Callbacks的方式由原生向RN传值
     *
     * @param errorCallback
     * @param successCallback
     */
    @ReactMethod
    public void jsCallNativeMethod(
            Callback errorCallback,
            Callback successCallback) {
        try {
            successCallback.invoke(10, 11, "收到", "ss");
        } catch (IllegalViewOperationException e) {
            errorCallback.invoke(e.getMessage());
        }

    }

    /**
     * 通过Promises的方式由原生向RN传值
     *
     * @param promise
     */
    @ReactMethod
    public void jsCallNativeMethodTwo(Promise promise) {
        try {
            WritableMap map = Arguments.createMap();
            map.putDouble("relativeX", 1);
            map.putDouble("relativeY", 1);
            map.putDouble("width", 2);
            map.putDouble("height", 3);
            promise.resolve(map);
        } catch (IllegalViewOperationException e) {
            promise.reject(e);
        }
    }

//    public void Native_AsyncTest() {
//        // 发送事件
//        WritableMap et = Arguments.createMap();
//        et.putInt("key1", 11);
//        et.putInt("key2", 22);
//        sendEvent(mReactContext, "EventName_Async", et);
//    }

    /**
     * 发送事件
     * @param eventName  事件Flag
     * @param params  要传的参数
     */
    public void sendEvent(String eventName, @Nullable Object params) {
        ReactContext reactContext = MyApplication.getApplicationC().getReactNativeHost()
                .getReactInstanceManager().getCurrentReactContext();
        if (reactContext == null){
            return;
        }
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}