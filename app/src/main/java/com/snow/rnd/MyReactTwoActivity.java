package com.snow.rnd;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;

/**
 * author : zyt
 * e-mail : 632105276@qq.com
 * date   : 2019-07-03
 * desc   :
 */
public class MyReactTwoActivity extends ReactActivity {

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "Hello_World2";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new MyReactDelegate(this,getMainComponentName());
    }
    //自定义MyReactDelegate
    class  MyReactDelegate extends ReactActivityDelegate {

        public MyReactDelegate(Activity activity, @javax.annotation.Nullable String mainComponentName) {
            super(activity, mainComponentName);
        }

        //重点是重写这个方法，把启动参数在这里准备好。
        @javax.annotation.Nullable
        @Override
        protected Bundle getLaunchOptions() {
            //获取传入的参数
            Intent intent    = getIntent();
//            String data_str = intent.getStringExtra("data");
            String data_str = "从android传过来的参数";
            Bundle bundle = new Bundle();
            //bundle.putString("bundle","android传递的初始化参数");
            bundle.putString("data",data_str);
            bundle.putString("key","参数二");
            return bundle;
        }
    }
}
