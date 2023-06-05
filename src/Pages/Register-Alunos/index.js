
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Input } from '@chakra-ui/react'
import axios from 'axios';
import styled from 'styled-components';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

const URL = 'http://localhost:8080/alunos/cadastro'

const Register = () => {

    const handleSubmit1 = (data) => {
    
        if (data.name && data.cpf && data.email && data.password) {

            const existeNoBanco = verificarNoBanco(data.email);
            
            const verificarNoBanco = (email) => {

                return email === data.email;
            };

            if (existeNoBanco) {
                toast.error('O email já está cadastrado.');
            } else {
                axios
                    .post(URL, {
                        name: data.name,
                        cpf: data.cpf,
                        email: data.email,
                        password: data.password
                    })
                    .then(function () {
                        toast.success('Cadastro efetuado!');
                        window.location.href = "/";

                    })
            }

        


        } else {
            toast.error("Preencha todos os campos!")
        }


    }

    return (
        <ContainerGroup>
            <Formik
                initialValues={{ name: '', cpf: '', email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}

                onSubmit={handleSubmit1}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <FormGroup onSubmit={handleSubmit}>
                        <Title>
                            Register
                        </Title>
                        <P>Name</P>
                        <Input onBlur={handleBlur} onChange={handleChange} value={values.name} type="name"
                            name="name" placeholder='Ex: João Gomes' />


                        <P>CPF</P>
                        <Input onBlur={handleBlur} onChange={handleChange} value={values.cpf} type="cpf"
                            name="cpf" placeholder='Ex:  123456712-22' />
                        {errors?.cpf && (<Alert status='error'>
                            <AlertIcon />
                            <AlertDescription>{errors.cpf}</AlertDescription>
                        </Alert>)}

                        <P>Email</P>
                        <Input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email"
                            name="email" placeholder='Ex: João@gmail.com' />
                        {errors?.email && (<Alert status='error'>
                            <AlertIcon />

                            <AlertDescription>{errors.email}</AlertDescription>
                        </Alert>)}

                        <P>Password</P>
                        <Input onBlur={handleBlur} onChange={handleChange} type="password"
                            name="password" placeholder='Ex: 123456789' />


                        <Button disabled={isSubmitting} type='submit' onClick={handleSubmit} margin="0.5em 0em 0em 0em" width="100%" colorScheme='teal' size='md'>
                            Sign Up
                        </Button>
                        <Link>
                            Já possui cadastro? <a href='/'>Sign In</a>
                        </Link>
                    </FormGroup>
                )}
            </Formik>
        </ContainerGroup>
    )
}

export default Register;


const FormGroup = styled.section`
    padding: 2em;
    background-color: white ;
    border-radius: 8px;
    width: 450px;
    Input{
        margin: 0em 0em 0.5em 0em;
    }
`;


const ContainerGroup = styled.section`
 width: 100vw;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #DCDCDC ;
 
`

const P = styled.p`
color:#4682B4 ;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 600;
font-size: 18px;
`
const Title = styled.h1`
display: flex;
 font-size: 30px;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
justify-content: center;
align-items: center;
text-align: center;
padding: 0em 2em 1em 2em;
color: #4682B4 ;
`
const Link = styled.p`
   text-align: right;
   a{
    text-decoration: underline;
   }
`