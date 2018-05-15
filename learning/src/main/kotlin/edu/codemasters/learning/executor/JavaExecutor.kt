package edu.codemasters.learning.executor

import edu.codemasters.learning.execution.ExecutionResult
import edu.codemasters.learning.execution.Executor

class JavaExecutor : Executor {
    override fun execute(code: String): ExecutionResult {
        return ExecutionResult(true)
    }

}