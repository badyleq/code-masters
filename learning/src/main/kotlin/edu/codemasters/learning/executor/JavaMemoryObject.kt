package edu.codemasters.learning.executor

import java.io.*
import java.net.URI
import javax.lang.model.element.Modifier
import javax.lang.model.element.NestingKind
import javax.tools.JavaFileObject

data class JavaMemoryObject(val fileName: String, val fileKind: JavaFileObject.Kind) : JavaFileObject {
    private var bos: ByteArrayOutputStream = ByteArrayOutputStream()
    private val uri: URI = URI.create("string:///" + fileName.replace('.', '/') + fileKind.extension);

    override fun toUri(): URI {
        return uri
    }

    fun getClassBytes(): ByteArray {
        return bos.toByteArray()
    }

    override fun getName(): String {
        return uri.path
    }

    override fun openInputStream(): InputStream {
        throw UnsupportedOperationException()
    }

    override fun openOutputStream(): OutputStream {
        return bos
    }

    override fun openReader(ignoreEncodingErrors: Boolean): Reader {
        throw UnsupportedOperationException()
    }

    @Throws(IOException::class)
    override fun getCharContent(ignoreEncodingErrors: Boolean): CharSequence {
        throw UnsupportedOperationException()
    }

    @Throws(IOException::class)
    override fun openWriter(): Writer {
        return OutputStreamWriter(openOutputStream())
    }

    override fun getLastModified(): Long {
        return 0L
    }

    override fun delete(): Boolean {
        return false
    }

    override fun getKind(): JavaFileObject.Kind {
        return fileKind
    }

    override fun isNameCompatible(simpleName: String, fileKind: JavaFileObject.Kind): Boolean {
        val baseName = simpleName + kind.extension
        return fileKind == fileKind && (baseName == toUri().path || toUri().path.endsWith("/$baseName"))
    }

    override fun getNestingKind(): NestingKind? {
        return null
    }

    override fun getAccessLevel(): Modifier? {
        return null
    }
}