package com.snow.rnd.rn;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * author : zyt
 * e-mail : 632105276@qq.com
 * date   : 2019-08-15
 * desc   :
 */
public class TestReactPackage implements ReactPackage {
    public OpenNativeModule openNativeModule;

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        openNativeModule = new OpenNativeModule(reactContext);
        modules.add(openNativeModule);
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}