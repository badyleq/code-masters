package executor.javac

import java.security.AccessController
import java.security.PrivilegedAction

class ByteArrayClassLoader : ClassLoader(ByteArrayClassLoader::class.java.classLoader) {
    private var byteCode: ByteArray? = null;

    fun loadClass(fqdn: String, byteCode: ByteArray): Class<*> {
        setBytecode(byteCode.clone())
        return loadClass(fqdn)
    }

    override fun findClass(name: String): Class<*>? {
        var cls: Class<*>? = null

        try {
            if (byteCode != null) {
                cls = defineClass(name, byteCode!!)
            }
        } catch (ex: ClassFormatError) {
            throw ClassNotFoundException("Class name: $name", ex)
        }

        return cls
    }

    internal fun defineClass(name: String, bytecode: ByteArray): Class<*> {
        return defineClass(name, bytecode, 0, bytecode.size)
    }

    internal fun setBytecode(bytecode: ByteArray) {
        this.byteCode = bytecode
    }

    private class BaclPrevilegedAction : PrivilegedAction<ByteArrayClassLoader> {

        override fun run(): ByteArrayClassLoader {
            return ByteArrayClassLoader()
        }
    }

    companion object {
        fun newInstance(): ByteArrayClassLoader {
            return AccessController.doPrivileged(BaclPrevilegedAction())
        }
    }
}