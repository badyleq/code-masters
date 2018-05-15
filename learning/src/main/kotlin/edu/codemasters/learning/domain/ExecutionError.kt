package edu.codemasters.learning.domain

enum class ErrorType { COMPILATION, RUNTIME }

data class CodePosition(val lineNumber: String, val rowNumber: String)

data class ExecutionError(
        val type: ErrorType,
        val codePosition: CodePosition,
        val errorMessage: String) {
}