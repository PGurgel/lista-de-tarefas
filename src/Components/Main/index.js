import './style.css';
import lupa from '../../img/lupa.png';
export default function Main() {
    return (
        <div className="main">
            <div class="input-group input-group-lg">
                <span class="input-group-text"><img src={lupa} /></span>
                <input type="text" class="form-control" aria-label="tarefas" placeholder="Procurar tarefas" aria-describedby="basic-addon1" />
            </div>

            <h2 className='main-text'>Tarefas</h2>

            <button type="button" class="btn btn-primary button-tarefa" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                + Nova tarefa
            </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Criar tarefa</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <span class="btn btn-primary" data-bs-dismiss="modal">Cancelar</span>
                            <span class="btn btn-primary">Salvar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}