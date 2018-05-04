package executor

class JavaExecutor : Executor {
    override fun execute(code: String): ExecutionResult {
        return ExecutionResult(true)
    }

}