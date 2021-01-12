import React, { FormEvent, ChangeEvent, useState } from 'react';
import Swal from "sweetalert2";
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

    function arquiveInvalidFormat() {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Este formato de arquivo não é aceito. Formato aceito ".csv"!',
        });
    }

    function arquiveNull() {
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Nenhum arquivo foi selecionado!',
        });
    }

    function importSuccess() {
        Swal.fire({
            icon: 'success',
            title: 'Oba...',
            text: 'Dados importados com Sucesso!',
        });
    }

    function handleSelectedFile(event: ChangeEvent<HTMLInputElement>){
        if(!event.target.files){
            return;
        }
        
        const fileImport = Array.from(event.target.files);

        if(fileImport[0].type !== "application/vnd.ms-excel"){
            arquiveInvalidFormat();
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
            // alert("Produtos importados com Sucesso!");
            importSuccess();
        } else {
            arquiveNull();
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