package edu.codemasters.executor.domain

data class ExecutionResult(
        val isCompiled: Boolean,
        val result: String,
        val errors: List<ExecutionError>)
