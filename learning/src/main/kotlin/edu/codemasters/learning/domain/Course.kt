package edu.codemasters.learning.domain

import edu.codemasters.learning.domain.execution.ExecutorLanguage

enum class CourseState {
    DRAFT,
    APPROVED,
    REMOVED
}

data class Course(
        val id: String,
        val authorId: String,
        val name: String,
        val description: String,
        val executorLanguage: ExecutorLanguage,
        val executorVersion: String,
        val discussion: Discussion,
        val exercises: List<Exercise>)