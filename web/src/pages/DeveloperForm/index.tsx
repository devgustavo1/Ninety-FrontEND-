import React, { useState } from 'react';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader/';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';



function DeveloperForm () {
    const [scheduleItems,setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
             { week_day: 0, from: '', to: '' }
        ]);
    }

    return (
        <div id="page-developer-form" className="container">
            <PageHeader title="Cadastre o seu serviço aqui. É fácil!" 
            description="O primeiro passo é preencher este formulário de inscrição."
            />
            
            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="name" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />  
                    <Textarea name="bio" label="Descrição" />
 
                </fieldset>

                <fieldset>
                    <legend>Sobre o serviço</legend>

                    <Select 
                    name="subject" 
                    label="Serviço"
                    options={[
                        { value: 'Artes', label: 'Artes' },
                        { value: 'Computadores', label: 'Computadores' },
                        { value: 'Eletríca', label: 'Elétrica' },
                        { value: 'Massagem', label: 'Massagem' },
                    ]}
                    />

                    <Input name="cost" label="Custo da sua hora" />
 
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo horário 
                    </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                            <Select 
                            name="week_day" 
                            label="Dia da semana"
                            options={[
                                { value: '0', label: 'Domingo' },
                                { value: '1', label: 'Segunda-feira' },
                                { value: '2', label: 'Terça-feira' },
                                { value: '3', label: 'Quarta-feira' },
                                { value: '4', label: 'Quinta-feira' },
                                { value: '5', label: 'Sexta-feira' },
                                { value: '6', label: 'Sábado' },
                            ]}
                            />
                            <Input name="from" label="Das" type="time"/>
                            <Input name="to" label="Até" type="time"/>                          
                            </div>
                        );   
                    })}

                </fieldset>
                
                <footer>
                    <p> 
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br/>
                        Preencha todos os dados.
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>
        </div>

    )
}

export default DeveloperForm;














