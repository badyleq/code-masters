package executor

interface Executor {

    fun execute(code: String): ExecutionResult

}