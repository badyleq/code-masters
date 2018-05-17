package edu.codemasters.learning.domain.execution

data class ExecutionResult(
        val isCompiled: Boolean,
        val result: String,
        val errors: List<ExecutionError>)