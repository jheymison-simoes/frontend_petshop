import React, { FormEvent, ChangeEvent, useState } from 'react';
//@ts-ignore
import { useHistory } from 'react-router';
import { MdCloudUpload, MdDoneAll, MdPowerSettingsNew } from 'react-icons/md'
// import CloudUploadIcon from '';


// Importando CSS
import '../../../styles/global.css';
import './style.css';

// Importando Logo
import Logo from '../../../images/logo-checkout.png';
import api from '../../../services/api';

function AdminControler(){

    const [file, setFile] = useState<File[]>([]);
    const userName = localStorage.getItem("userName");
    const history = useHistory();

    function handleSelectedFile(event: ChangeEvent<HTMLInputElement>){
        if(!event.target.files){
            return;
        }
        const fileImport = Array.from(event.target.files);

        if(fileImport[0].type !== "application/vnd.ms-excel"){
            alert("Formato de Arquivo não Aceito!");
        } else {
            setFile(fileImport);
        }   
    }
    
    function handleLogout(){
        history.push("/admin");
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        const data = new FormData();

        if(file.length > 0){
            data.append('arquives', file[0]);
            await api.post('uploads', data);
            alert("Produtos importados com Sucesso!");
        } else {
            alert('Campo Upload Vazio!');
        }
    }

    return (
        <div className="container-admin-controler">
            <div className="content-admin-controller">
                <div className="content-header">
                    <h1>Seja Bem Vindo { userName }</h1>
                    <p onClick={handleLogout}>
                        <MdPowerSettingsNew className="content-icon"/>
                        logout
                    </p>
                </div>
                <div className="content-logo">
                    <img className="content-img" src={Logo} alt="Logo"/>
                </div>
                <form className="content-form" onSubmit={handleSubmit}>
                    <h1>Importar Produtos</h1>
                    <label htmlFor="fileUpload" className="content-label-upload">
                        <MdCloudUpload className="icon"/> Upload
                    </label>

                    {file.length > 0 &&
                        <p className="content-file-name">
                            <MdDoneAll className="p-icon"/>
                            {file[0].name}
                        </p>
                    }

                    <input type="file" id="fileUpload" className="content-file-upload" onChange={handleSelectedFile}/>
                    
                    <button 
                        className="form-btn-upload"
                        type="submit"
                    >
                        Importar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminControler;