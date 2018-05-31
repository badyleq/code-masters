package edu.codemasters.learning.domain

data class Lesson(
        val lessonId: String,
        val descriptionAsHtml: String,
        val exercises: List<Exercise>
)