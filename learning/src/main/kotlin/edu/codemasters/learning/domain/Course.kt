package edu.codemasters.learning.domain

data class Course(
        val id: String,
        val authorId: String,
        val name: String,
        val description: String,
        val exercises: List<Exercise>) {
}