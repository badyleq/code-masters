package executor


data class CompilationUnit(val name: String, val memoryObject: JavaMemoryObject) {

    fun getBytecode(): ByteArray {
        return memoryObject.getClassBytes()
    }

}