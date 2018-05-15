package edu.codemasters.learning.execution

interface Executor {

    fun execute(code: String): ExecutionResult

}