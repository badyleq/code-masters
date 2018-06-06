package edu

import ApplicationConfiguration
import ratpack.server.RatpackServer
import ratpack.server.ServerConfig

fun main(args: Array<String>) {
    println("Starting server on port ${ApplicationConfiguration.get("server.port")}")

    RatpackServer.start { server ->
        server.serverConfig(ServerConfig.of({
            it.port(ApplicationConfiguration.get("server.port").toInt())
        }))
        server.handlers({ chain ->
            chain.get({ ctx -> ctx.render(ApplicationConfiguration.get("server.name")) })
        })
    }
}
