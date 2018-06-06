package edu.codemasters.executor.javac

import edu.codemasters.executor.domain.ExecutionResult
import edu.codemasters.executor.domain.Executor

class JavaExecutor : Executor {

    companion object {
        enum class Version {
            JDK8
        }

        fun ofVersion(javaExecutorVersion: Version): JavaExecutor {
            return when (javaExecutorVersion) {
                Version.JDK8 -> JavaExecutor()
            }
        }
    }

    override fun execute(code: String, executionPoint: String): ExecutionResult {
        val source = """
                public class HelloWorld {
                    public static String main() {
                        return "lorem ipsum";
                    }
                }""".trimIndent()

        val className = getClassNameFromExecutionPoint(executionPoint)
        val methodName = getMethodNameFromExecutionPoint(executionPoint)
        val classes = compileAndLoadCode(source, className)

        // Execute
        val result = classes[className]?.getMethod(methodName)?.invoke(null) as String // co jak wynik nie bedzie typu string? json?

        return ExecutionResult(true, result, emptyList())
    }

    private fun compileAndLoadCode(source: String, className: String): Map<String, Class<*>> {
        // Compiler
        val compiler = InMemoryCompiler()
        val pkg = compiler.singleCompile(className, source)

        // Load
        val loader = CompilationPackageLoader()
        return loader.loadAsMap(pkg)
    }

    private fun getClassNameFromExecutionPoint(executionPoint: String): String {
        val splitedValue = executionPoint.split(":")
        return splitedValue[0].replace(":", "")
    }

    private fun getMethodNameFromExecutionPoint(executionPoint: String): String {
        val splitedValue = executionPoint.split(":")
        return splitedValue[1].replace(":", "")
    }
}
