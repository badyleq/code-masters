package edu.codemasters.learning.domain

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
        val lessons: List<Lesson>)