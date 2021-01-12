import React, { FormEvent, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";
// @ts-ignore
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import { MdHome } from "react-icons/md";

// Importando CSS
import '../../../styles/global.css';
import './style.css';

// Importando imagens
import LogoLogin from '../../../images/logo-checkout.png';

// Customização dos Inputs
const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
            },
            '&:hover fieldset': {
                borderColor: 'grey',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
      selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Login() {

    const history = useHistory();

    const classes = useStyles();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function loginFail() {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Usuário inexistente ou dados incorretos!',
        });
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        const data = {
            users: user,
            key: password
        };

        try {
            const response = await api.post('usersAuthenticate', data);
            const userName = response.data.result[0].user;
            const userToken = response.data.result[0].token;

            localStorage.setItem('userName', userName);
            localStorage.setItem('userToken', userToken);
            history.push('/adminController');

        } catch (err) {
            // console.log("Falha no Login!");
            // alert("Falha!");
            loginFail();
        }
    }

    return (
        <div className="container-login">
            <div className="logo-login">
                <img className="img-logo-login" src={ LogoLogin } alt="Logo do Login"/>
            </div>

            <form onSubmit={handleSubmit} className="form-login">
                <CssTextField
                    id="form-input-user"
                    className={classes.margin + " form-input-user"}
                    label="Seu Usuário"
                    variant="outlined"
                    value={user}
                    onChange={event => setUser(event.target.value)}
                    required
                />

                <CssTextField
                    type="password"
                    id="form-input-password"
                    className={classes.margin + " form-input-password"}
                    label="Sua Senha"
                    variant="outlined"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />

                <button 
                    className="form-btn-login"
                    type="submit"
                >
                    Entrar
                </button>
                <Link to="/" className="link-go-home">
                    <button className="go-home"><MdHome /> Home</button>
                </Link>
            </form>
        </div>
    );
}

export default Login;