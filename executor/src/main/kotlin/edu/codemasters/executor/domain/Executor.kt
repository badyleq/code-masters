package edu.codemasters.executor.domain

interface Executor {

    fun execute(code: String, executionPoint: String): ExecutionResult

}
