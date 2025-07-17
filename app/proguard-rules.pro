# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile

# Keep service classes
-keep class com.weaver.missedcallsms.HybridMissedCallService { *; }
-keep class com.weaver.missedcallsms.BootReceiver { *; }

# Keep all activities
-keep class com.weaver.missedcallsms.MainActivity { *; }
-keep class com.weaver.missedcallsms.SettingsActivity { *; }
-keep class com.weaver.missedcallsms.HistoryActivity { *; }
-keep class com.weaver.missedcallsms.SetupActivity { *; }

# Keep Android components
-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider
-keep public class * extends android.app.backup.BackupAgentHelper
-keep public class * extends android.preference.Preference
-keep public class * extends android.view.View

# Keep SharedPreferences
-keep class android.content.SharedPreferences { *; }
-keep class android.content.SharedPreferences$Editor { *; }

# Keep telephony classes
-keep class android.telephony.** { *; }
-keep class android.telecom.** { *; }

# Keep all classes and methods that are annotated with @Keep
-keep @interface android.support.annotation.Keep
-keep @interface androidx.annotation.Keep

-keepclasseswithmembers class * {
    @android.support.annotation.Keep <methods>;
    @android.support.annotation.Keep <fields>;
}

-keepclasseswithmembers class * {
    @androidx.annotation.Keep <methods>;
    @androidx.annotation.Keep <fields>;
}

# Keep all public classes and methods in your application's package
-keep public class com.weaver.missedcallsms.** { *; }

# For libraries that use reflection, you might need to add specific rules.
# Example for GSON:
#-keep class com.google.gson.examples.android.model.** { *; }
#-keepattributes Signature

# For OkHttp and Retrofit
-dontwarn okio.**
-dontwarn retrofit2.Platform$Java8
-dontwarn javax.annotation.**

# For any classes that are accessed via reflection (e.g., by libraries)
# you might need to keep them.
# Example: if you use a library that dynamically loads a class by name:
#-keep class com.your.package.YourDynamicallyLoadedClass { *; }

# Suppress warnings for missing R.class fields
-dontwarn **.R$*

# Keep all members of any enum class
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# Keep all classes that are used as callbacks from native code
-keepclasseswithmembernames class * {
    native <methods>;
}

# Keep all classes that are used as JNI methods
-keep class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    private void readObjectNoData();
}

# Keep all classes that are used as annotations
-keepattributes *Annotation*

# Keep all classes that are used as generic types
-keepattributes Signature

# Keep all classes that are used as inner classes
-keepattributes InnerClasses

# Keep all classes that are used as exceptions
-keepattributes Exceptions

# Keep all classes that are used as EnclosingMethod
-keepattributes EnclosingMethod

# Keep all classes that are used as Deprecated
-keepattributes Deprecated

# Keep all classes that are used as Synthetic
-keepattributes Synthetic

# Keep all classes that are used as Bridge
-keepattributes Bridge

# Keep all classes that are used as Varargs
-keepattributes Varargs

# Keep all classes that are used as RuntimeVisibleAnnotations
-keepattributes RuntimeVisibleAnnotations

# Keep all classes that are used as RuntimeInvisibleAnnotations
-keepattributes RuntimeInvisibleAnnotations

# Keep all classes that are used as RuntimeVisibleParameterAnnotations
-keepattributes RuntimeVisibleParameterAnnotations

# Keep all classes that are used as RuntimeInvisibleParameterAnnotations
-keepattributes RuntimeInvisibleParameterAnnotations

# Keep all classes that are used as AnnotationDefault
-keepattributes AnnotationDefault

# Keep all classes that are used as ConstantValue
-keepattributes ConstantValue

# Keep all classes that are used as LocalVariableTable
-keepattributes LocalVariableTable

# Keep all classes that are used as LocalVariableTypeTable
-keepattributes LocalVariableTypeTable
