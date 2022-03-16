import './style.css';
import '../../scripts/script';
import Busca from './Busca';
import Button from './Button';
import Modal from './Modal';
import Tarefas from './Tarefas';

export default function Main() {
    return (
        <div className='main'>
            <Busca />
            <Tarefas />
            <Button />
            <Modal />
        </div>
    );
}