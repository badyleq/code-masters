package edu.codemasters.executor

import edu.codemasters.learning.domain.execution.Executor
import edu.codemasters.learning.domain.execution.ExecutorLanguage
import edu.codemasters.learning.execution.javac.JavaExecutor

class ExecutionRegistry(private val executorByLanguage: Map<ExecutorLanguage, Map<String, Executor>>
                        = mapOf(ExecutorLanguage.JAVA to mapOf("JDK8" to JavaExecutor.ofVersion(JavaExecutor.Companion.Version.JDK8)))) {

}
