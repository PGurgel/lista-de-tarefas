import './style.css';
export default function Modal() {
    return (
        <>
            <div className="modal fade center" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Criar tarefa</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <span data-bs-dismiss="modal">Nome da tarefa</span>
                            <input type="text" className="form-control" aria-label="tarefas" aria-describedby="basic-addon1" />

                            <span data-bs-dismiss="modal">Descrição da tarefa</span>
                            <input type="text" className="form-control" aria-label="tarefas" aria-describedby="basic-addon1" />
                        </div>
                        <div className="modal-footer">
                            <span className='btn text' data-bs-dismiss="modal">CANCELAR</span>
                            <span className='btn text'>SALVAR</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}