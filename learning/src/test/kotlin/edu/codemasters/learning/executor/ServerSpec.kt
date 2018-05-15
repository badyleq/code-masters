package edu.codemasters.learning.executor

import edu.codemasters.learning.execution.javac.CompilationPackageLoader
import edu.codemasters.learning.execution.javac.InMemoryCompiler
import io.kotlintest.shouldBe
import io.kotlintest.specs.StringSpec
import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.catchThrowable

class ServerSpec : StringSpec() {

    init {
        "should correctly compile code and run it" {
            val source = """
                public class HelloWorld {
                    public static String main() {
                        return "lorem ipsum";
                    }
                }""".trimIndent()

            val classes = compileAndLoadCode(source)

            // Execute
            val result = classes["HelloWorld"]?.getMethod("main")?.invoke(null) as String
            result shouldBe "lorem ipsum"
        }

        "should failed on compilation" {
            val source = """
                public class HelloWorld {
                    public static String main() {
                        return 1;
                    }
                }""".trimIndent()

            val thrown = catchThrowable({ compileAndLoadCode(source) })

            assertThat(thrown).isInstanceOf(InMemoryCompiler.CompilerException::class.java).hasMessageContaining("""1 class(es) failed to compile
ERROR in 3:16 - incompatible types: int cannot be converted to java.lang.String""".trimIndent()
            )
        }
    }

    private fun compileAndLoadCode(source: String): Map<String, Class<*>> {
        // Compiler
        val compiler = InMemoryCompiler()
        val pkg = compiler.singleCompile("HelloWorld", source)

        // Load
        val loader = CompilationPackageLoader()
        return loader.loadAsMap(pkg)
    }
}