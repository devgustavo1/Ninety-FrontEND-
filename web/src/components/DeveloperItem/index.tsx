import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import './style.css'

function DeveloperItem() {
    return (
        <article className="developer-item">
        <header>
        <img src="https://avatars2.githubusercontent.com/u/50209444?s=460&u=b2cde4b6e91f467d30e77afa5cc199b4a235d381&v=4" alt="Gustavo"/>
            <div>
                <strong>Gustavo Pereira</strong>
                <span>Developer</span>
            </div>
        </header>

        <p>
        ProTip! Updating your profile with your name.

        ProTip! Updating your profile with your name, location, and a profile picture helps other GitHub users get to know you.
        </p>

        <footer>
        <p>
            Preço/hora
            <strong>R$ 90,00</strong>
        </p>

        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
        </button>
        </footer>
    </article>
    );
}

export default DeveloperItem;