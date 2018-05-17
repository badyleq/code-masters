package edu.codemasters.learning.domain

data class Exercise(
        val id: String,
        val descriptionAsHtml: String,
        val initialCode: String,
        val correctAnswer: String,
        val validationExpression: String,
        val executionPoint: String = "")