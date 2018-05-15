package edu.codemasters.learning.executor

interface Executor {

    fun execute(code: String): ExecutionResult

}