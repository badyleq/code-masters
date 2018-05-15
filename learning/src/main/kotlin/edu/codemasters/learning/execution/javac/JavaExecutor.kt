package edu.codemasters.learning.execution.javac

import edu.codemasters.learning.domain.ExecutionResult
import edu.codemasters.learning.execution.Executor

class JavaExecutor : Executor {
    override fun execute(code: String): ExecutionResult {
        return ExecutionResult(true, "", emptyList())
    }

}