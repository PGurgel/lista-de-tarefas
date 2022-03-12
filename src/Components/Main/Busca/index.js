import lupa from '../../../img/lupa.png';
export default function Busca() {
    return (
        <>
            <div className="input-group input-group-lg">
                <span className="input-group-text img-border"><img src={lupa} /></span>
                <input type="text" className="form-control" aria-label="tarefas" placeholder="Procurar tarefas" aria-describedby="basic-addon1" />
            </div>
        </>
    );
}