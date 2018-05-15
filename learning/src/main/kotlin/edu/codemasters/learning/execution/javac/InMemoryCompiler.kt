package edu.codemasters.learning.execution.javac

import com.google.common.collect.ImmutableMap
import com.google.common.collect.Lists.newArrayList
import java.net.URLClassLoader
import java.util.*
import javax.tools.DiagnosticCollector
import javax.tools.JavaCompiler
import javax.tools.JavaFileObject
import javax.tools.ToolProvider

class InMemoryCompiler {
    internal val diagnosticCollector: DiagnosticCollector<JavaFileObject> = DiagnosticCollector()

    internal val systemJavaCompiler: JavaCompiler = ToolProvider.getSystemJavaCompiler()

    fun singleCompile(className: String, code: String): CompilationPackage {
        return compile(ImmutableMap.builder<String, String>()
                .put(className, code)
                .build()
        )
    }

    fun compile(classesToCompile: Map<String, String>): CompilationPackage {
        val manager = getClassManager(systemJavaCompiler)

        // defining classpath
        val classpath = loadClasspath()

        // add classpath to options
        val options = Arrays.asList("-classpath", classpath)

        // java source from string
        val strFiles = newArrayList<JavaSourceFromString>()
        for (className in classesToCompile.keys) {
            val classCode = classesToCompile[className]
            strFiles.add(JavaSourceFromString(className, classCode!!))
        }

        // compile
        val task = systemJavaCompiler.getTask(null, manager, diagnosticCollector, options, null, strFiles)
        val status = task.call()!!

        // check for compilation errors
        if (status) {
            val compilationUnits = manager.allClasses
            return CompilationPackage(compilationUnits)
        } else {
            // something's really wrong
            val compilationReport = buildCompilationReport(diagnosticCollector, options)
            throw CompilerException(compilationReport)
        }
    }

    internal fun getClassManager(compiler: JavaCompiler): InMemoryClassManager {
        return InMemoryClassManager(compiler.getStandardFileManager(null, null, null))
    }

    internal fun buildCompilationReport(collector: DiagnosticCollector<JavaFileObject>, options: List<String>): String {
        return collector.diagnostics
                .map { diagnostic ->
                    """${diagnostic.kind} in ${diagnostic.lineNumber}:${diagnostic.columnNumber} - ${diagnostic.getMessage(null)}""".trimIndent()
                }
                .fold("""${collector.diagnostics.size} class(es) failed to compile
                    |
                """.trimMargin()) { sum, element -> sum + element }
    }

    internal fun loadClasspath(): String {
        val sb = StringBuilder()
        val urlClassLoader = Thread
                .currentThread().contextClassLoader as URLClassLoader
        for (url in urlClassLoader.urLs) {
            sb.append(url.file).append(
                    System.getProperty("path.separator"))
        }

        return sb.toString()
    }

    class CompilerException(message: String) : Exception(message)
}
