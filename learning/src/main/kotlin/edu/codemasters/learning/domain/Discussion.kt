package edu.codemasters.learning.domain

enum class DiscussionParentKind {
    COURSE,
    EXERCISE,
    COMMENT
}

data class Discussion(
        val discussionId: String,
        val parentId: String,
        val parentKindKind: DiscussionParentKind,
        val comments: List<Comments>
)