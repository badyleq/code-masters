package edu.codemasters.learning.executor.javac

import java.net.URI
import javax.tools.JavaFileObject
import javax.tools.SimpleJavaFileObject

data class JavaSourceFromString(val className: String, val javaSourceCode: String) :
        SimpleJavaFileObject(URI.create("string:///" + className.replace('.', '/') + JavaFileObject.Kind.SOURCE.extension), JavaFileObject.Kind.SOURCE) {

    override fun getCharContent(ignoreEncodingErrors: Boolean): CharSequence {
        return javaSourceCode
    }

    override fun getName(): String {
        return className
    }
}