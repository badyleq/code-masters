

import {Subject} from 'rxjs/index';

class CodeExecutionService {

    private codeExecutionResultSubject: Subject<string> = new Subject();

    public executeCode() {
        this.codeExecutionResultSubject.next('');
    }

    public subscribeOnCodeExecutionResult(callback: (value: string) => void) {
        this.codeExecutionResultSubject.subscribe(callback);
    }
}

const codeExecutionService = new CodeExecutionService();
export default codeExecutionService;