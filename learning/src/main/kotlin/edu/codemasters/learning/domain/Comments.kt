package edu.codemasters.learning.domain

import java.time.LocalDateTime

data class Comments(
        val userId: String,
        val content: String,
        val postDate: LocalDateTime,
        val banned: Boolean
)