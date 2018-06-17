package edu.codemasters.common
import org.slf4j.LoggerFactory
import java.util.*

object ApplicationConfiguration {
    private val LOGGER = LoggerFactory.getLogger(ApplicationConfiguration::class.java)
    private val properties = Properties()

    fun get(key: String): String = properties.getProperty(key)

    init {
        properties.load(ApplicationConfiguration.javaClass.getResourceAsStream("/application.properties"))
        LOGGER.info("Loaded application configuration: $properties")
    }
}