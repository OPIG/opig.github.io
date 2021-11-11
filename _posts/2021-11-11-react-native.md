---

tags: [react-native]

---


1. Download and install Android Studio ----> Install the Android SDK

`open Android Studio ---> Project ---> More Actions --> SDK Manager --> choose SDK platform and SDK Tools`

`open Android Studio ---> Project ---> More Actions --> AVD Manager --> create virtual device`

config `environment config` --> create user variable `ANDROID_SDK_ROOT: {path}\AppData\Local\Android\Sdk `. (seems the variable name:`ANDROID_SDK_ROOT` is `mandatory`, though some articles named it as `ANDROID_HOME`)

config `environment config` --> add `{path}\AppData\Local\Android\Sdk\tools` to `path` in system variable.

config `environment config` --> add `{path}\AppData\Local\Android\Sdk\platform-tools` to `path` in system variable.


2. Download and install Java SDK

config `environment config` --> create system variable `JAVA_HOME: {path}\Program Files\Java\jdk1.8.0_191`.
config `environment config` --> add `%JAVA_HOME%\bin` to `path` in system variable.

3. Download and install Node (nvm for window)


4. Create project

`npx react-native init AwesomeProject --version X.XX.X`

5. Run project 

`npx react-native start`

`npx react-native run-android`


if you went wrong: `Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'`.  or Other error.

please go to check your `environment config` is correct. 
and You can navigator to android folder under your project and run  
`cd /d "%ANDROID_SDK_ROOT%/tools/bin"`, `sdkmanager --licenses`

Also you can try navigator to folder android under your project, and add `org.gradle.java.home=C:\\Program Files\\Java\\jdk1.8.0_191` in file `gradle.properties`


## Reference

[Android Studio](https://developer.android.com/studio/command-line/adb)

[React Native](https://reactnative.dev/docs/environment-setup)
