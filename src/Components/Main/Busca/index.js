import './style.css';
import lupa from '../../../img/lupa.png';
export default function Busca() {

    return (
        <div>
            <div className="input-group input-group-lg">
                <span className="input-group-text img-border"><img src={lupa} /></span>
                <input type="text" className="form-control busca_input"
                 aria-label="tarefas"
                 placeholder="Procurar tarefas" 
                 aria-describedby="basic-addon1"
                 />
            </div>
        </div>
    );
}