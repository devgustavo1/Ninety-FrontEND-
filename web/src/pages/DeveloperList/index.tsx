import React from 'react';
import DeveloperItem from '../../components/DeveloperItem';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import "./style.css";


function DeveloperList() {
    return (
        <div id="page-developer-list" className="container">
            <PageHeader title="Estes são os profissionais disponíveis.">
             <form  id="search-developers">
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
                <Input type="time" name="time" label="Hora"/>
              </form>   
            </PageHeader>

            <main>
                <DeveloperItem />
                <DeveloperItem />
                <DeveloperItem />
                <DeveloperItem />
                <DeveloperItem />
                

            </main>
        </div>
    )
}

export default DeveloperList;