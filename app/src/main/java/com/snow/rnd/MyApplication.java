package com.snow.rnd;

import android.app.Application;
import android.os.Environment;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.horcrux.svg.SvgPackage;
import com.snow.rnd.rn.TestReactPackage;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

/**
 * author : zyt
 * e-mail : 632105276@qq.com
 * date   : 2019-07-03
 * desc   :
 */
public class MyApplication extends Application implements ReactApplication {
    private static MyApplication application;
    public String BUNDLE_PATH = Environment.getExternalStorageDirectory().getAbsolutePath()
            + "/Android/data/com.snow.rnd/index.android.js";
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new SvgPackage(),
                    testReactPackage
//                    new TestReactPackage()
            );
        }

        @Nullable
        @Override
        protected String getJSBundleFile() {
            return super.getJSBundleFile();
        }
    };

    private static TestReactPackage testReactPackage = new TestReactPackage();

    public static TestReactPackage getTestReactPackage() {
        return testReactPackage;
    }

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    public static MyApplication getApplicationC() {
        return application;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        application = this;
        SoLoader.init(this, false);
    }

}
