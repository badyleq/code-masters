import java.util.*

object ApplicationConfiguration {
    private val properties = Properties()

    fun get(key: String): String = properties.getProperty(key)

    init {
        properties.load(ApplicationConfiguration.javaClass.getResourceAsStream("application.properties"))
    }
}