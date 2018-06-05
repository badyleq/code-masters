package edu.codemasters.executor.javac

import com.google.common.collect.Lists.newArrayList
import java.io.IOException
import javax.tools.FileObject
import javax.tools.ForwardingJavaFileManager
import javax.tools.JavaFileManager
import javax.tools.JavaFileObject

class InMemoryClassManager(fileManager: JavaFileManager) : ForwardingJavaFileManager<JavaFileManager>(fileManager) {

    private val memory = newArrayList<CompilationUnit>()

    /**
     * Gets the bytecode as a list of compiled classes. If the source code
     * generates inner classes, these classes will be placed in front of the
     * returned list and the class associated to the source file will be the
     * last element in the list.
     *
     * @return List of compiled classes
     */
    val allClasses: List<CompilationUnit>
        get() = memory

    @Throws(IOException::class)
    override fun getFileForInput(location: JavaFileManager.Location, packageName: String, relativeName: String): FileObject {
        throw UnsupportedOperationException()
    }

    @Throws(IOException::class)
    override fun getJavaFileForInput(location: JavaFileManager.Location, className: String, kind: JavaFileObject.Kind): JavaFileObject {
        throw UnsupportedOperationException()
    }

    @Throws(IOException::class)
    override fun getJavaFileForOutput(location: JavaFileManager.Location,
                                      name: String, kind: JavaFileObject.Kind, sibling: FileObject): JavaFileObject {
        val co = JavaMemoryObject(name, kind)
        val cf = CompilationUnit(name, co)
        memory.add(cf)
        return co
    }

    override fun isSameFile(a: FileObject, b: FileObject): Boolean {
        return false
    }
}
