package com.snow.rnd.act;

import android.os.Bundle;
import android.text.TextUtils;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;
import com.snow.rnd.BuildConfig;
import com.snow.rnd.R;

/**
 * author : zyt
 * e-mail : 632105276@qq.com
 * date   : 2019-11-20
 * desc   :RN实现Activity中既有原生控件又有RN控件
 */
public class RnAndAndroidActivity extends AppCompatActivity {
    private TextView mTv;
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_rn_and_android);
        mTv = findViewById(R.id.tv);
        String params = getIntent().getStringExtra("params");
        mTv.setText(TextUtils.isEmpty(params) ? "这是原生文本控件" : params);

        mReactRootView = new ReactRootView(this);
        mReactRootView = findViewById(R.id.test_js);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
//                .setJSBundleFile(bundlePath)
                .setJSMainModulePath("SecondPage")//对应MyTest.js
                .addPackage(new MainReactPackage())
//                .addPackage(new CustomToastPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG) //开发者支持，BuildConfig.DEBUG的值默认是false，无法使用开发者菜单
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
//        这里的ReactNativeView对应index.android.js中AppRegistry.registerComponent('ReactNativeView', () => ReactNativeView)的ReactNativeView
        mReactRootView.startReactApplication(mReactInstanceManager, "SecondPage", null);
    }
}
