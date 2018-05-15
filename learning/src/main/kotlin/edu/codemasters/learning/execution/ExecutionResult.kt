package edu.codemasters.learning.execution

data class ExecutionResult(
        val isCompiled: Boolean,
        val result: String,
        val errors: List<ExecutionError>) {

}