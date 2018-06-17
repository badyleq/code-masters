package edu

import edu.codemasters.common.ApplicationConfiguration
import ratpack.server.RatpackServer
import ratpack.server.ServerConfig

fun main(args: Array<String>) {
    RatpackServer.start { server ->
        server.serverConfig(ServerConfig.of({
            it.port(ApplicationConfiguration.get("server.port").toInt())
        }))
        server.handlers({ chain ->
            chain.get({ ctx -> ctx.render(ApplicationConfiguration.get("server.name")) })
        })
    }
}
