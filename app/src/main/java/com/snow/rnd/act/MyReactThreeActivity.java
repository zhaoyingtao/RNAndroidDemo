package com.snow.rnd.act;

import android.os.Bundle;
import android.os.CountDownTimer;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.snow.rnd.MyApplication;

import javax.annotation.Nullable;

/**
 * author : zyt
 * e-mail : 632105276@qq.com
 * date   : 2019-07-03
 * desc   :
 */
public class MyReactThreeActivity extends ReactActivity {

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "SecondPage";
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        new CountDownTimer(10000, 10000) {
            @Override
            public void onTick(long millisUntilFinished) {

            }

            @Override
            public void onFinish() {
                // 发送事件
                WritableMap et = Arguments.createMap();
                et.putInt("key1", 11);
                et.putInt("key2", 22);
                et.putString("key3", "参数3");
                //方法1发送事件传值
                MyApplication.getTestReactPackage().openNativeModule.sendEvent("EventName_Async", et);
//                //方法2发送事件传值
//                MyApplication.getApplicationC().getReactNativeHost()
//                        .getReactInstanceManager().getCurrentReactContext()
//                        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
//                        .emit("EventName_Async", et);
            }
        }.start();

    }

    @Override
    protected void onPause() {
        super.onPause();

    }
}
