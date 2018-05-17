package edu.codemasters.learning.domain

data class CourseDiscussion(
        val courseId: String,
        val comments: List<Comments>
)