package edu.codemasters.learning.executor

import com.google.common.collect.Maps
import edu.codemasters.learning.executor.javac.ByteArrayClassLoader

class CompilationPackageLoader {
    private val BY_CLASS_NAME = { aClass: Class<*>? -> aClass?.name }

    fun load(pkg: CompilationPackage): List<Class<*>> {
        val bacl = ByteArrayClassLoader.newInstance()
        return pkg.units
                .map { it ->
                    bacl.loadClass(it.name, it.getBytecode())
                }
    }

    fun loadAsMap(pkg: CompilationPackage): Map<String, Class<*>> {
        val classes = load(pkg)
        return Maps.uniqueIndex(classes, BY_CLASS_NAME)
    }
}