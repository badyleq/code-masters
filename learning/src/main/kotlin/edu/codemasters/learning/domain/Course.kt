package edu.codemasters.learning.domain

import edu.codemasters.learning.domain.execution.ExecutorKind

data class Course(
        val id: String,
        val authorId: String,
        val name: String,
        val description: String,
        val executorKind: ExecutorKind,
        val executorVersion: String,
        val exercises: List<Exercise>)