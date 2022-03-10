import './style.css';
import lupa from '../../img/lupa.png';
export default function Main() {
    return (
        <div className="main">
            <div class="input-group input-group-lg">
                <span class="input-group-text"><img src={lupa}/></span>
                <input type="text" class="form-control" aria-label="tarefas"  placeholder="Procurar tarefas" aria-describedby="basic-addon1"/>
            </div>
            <h2 className='main-text'>Tarefas</h2>

            <button type="button" class="btn btn-primary btn-lg button-tarefa">+ Nova tarefa</button>
        </div>
    );
}