import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logao.png';
import "./style.css";

interface PageHeaderProps {
    title: string;
    description?: string;
}


const PageHeader: React.FC<PageHeaderProps> = (props) => {
return (

    <header className="page-header">
    <div className="top-bar-container">
        <Link to="/">
            <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Ninety" />
    </div>
        <div className="header-content">
            <strong> {props.title} </strong>
            { props.description && <p>{props.description}</p> }

            {props.children}
        </div>

</header>
);

}

export default PageHeader;