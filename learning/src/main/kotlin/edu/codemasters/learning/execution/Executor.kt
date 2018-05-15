package edu.codemasters.learning.execution

import edu.codemasters.learning.domain.ExecutionResult

interface Executor {

    fun execute(code: String): ExecutionResult

}