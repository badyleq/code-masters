package edu.codemasters.learning.domain.execution

interface Executor {

    fun execute(code: String, executionPoint: String): ExecutionResult

}