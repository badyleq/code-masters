package edu.codemasters.learning.domain

data class CourseProgress(
        val participantId: String,
        val courseId: String,
        val lastExerciseId: String) {
}