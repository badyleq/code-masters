package edu.codemasters.learning.domain

import java.time.LocalDateTime

data class CourseProgress(
        val participantId: String,
        val courseId: String,
        val lastExerciseId: String,
        val signInDate: LocalDateTime)