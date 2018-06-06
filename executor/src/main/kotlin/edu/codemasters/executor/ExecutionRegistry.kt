package edu.codemasters.executor

import edu.codemasters.executor.domain.Executor
import edu.codemasters.executor.domain.ExecutorLanguage
import edu.codemasters.executor.javac.JavaExecutor

class ExecutionRegistry(private val executorByLanguage: Map<ExecutorLanguage, Map<String, Executor>>
                        = mapOf(ExecutorLanguage.JAVA to mapOf("JDK8" to JavaExecutor.ofVersion(JavaExecutor.Companion.Version.JDK8))))