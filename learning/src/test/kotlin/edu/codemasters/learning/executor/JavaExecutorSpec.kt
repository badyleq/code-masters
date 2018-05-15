package edu.codemasters.learning.executor

import edu.codemasters.learning.execution.javac.JavaExecutor
import io.kotlintest.specs.StringSpec

class JavaExecutorSpec : StringSpec() {
    init {
        "Should JavaExecutor compile and run successful hello world" {
            val javaExecutor = JavaExecutor()

            val executionResult = javaExecutor.execute("""
                public class Hello {
                    public static void main(String[] args) {
                        System.out.println("Hello World");
                    }
                }
            """.trimIndent())
        }
    }
}