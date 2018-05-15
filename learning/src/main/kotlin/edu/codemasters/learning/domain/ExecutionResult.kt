package edu.codemasters.learning.domain

data class ExecutionResult(
        val isCompiled: Boolean,
        val result: String,
        val errors: List<ExecutionError>) {

}