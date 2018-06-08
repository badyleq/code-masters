package edu.codemasters.learning

import ratpack.server.RatpackServer

fun main(args: Array<String>) {
    println("Hello world")

    RatpackServer.start { server ->
        server.handlers { chain ->
            chain.get({ ctx -> ctx.render("Hello ratpack") })
        }
    }
}