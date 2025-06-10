import React from 'react'
import { Button, Form, Input } from 'antd';
import { useUser } from '../context/UserContext';

export function Login() {

    const context = useUser(); //opcion 1 -> recomendado
    // const {login} = useUser();  opción 2

    const onFinish = values => {
        console.log('Success:', values);
        const {password, username} = values;
        const success = context.login({parametro1 : username, parametro2 : password });

        if(success){
            // manejo de mensajes para el usuario preferido (modal de respuesta)
            alert('Inicio de sesión exitoso')
        } else {
            alert('Credenciales incorrectas')
        }

    };


    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
        //modal de swwetAlert
    };

    return (
        <>

            <h1 className='text-4xl text-center m-12'>Formulario de inicio de sesión</h1>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className='bg-ivory p-12 w-[60%] mx-auto rounded-xl flex flex-col items-center'
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Por favor ingresa tu nombre de usuario!' }]}
                >
                    <Input className='w-[400px]'/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
                >
                    <Input.Password className='w-[400px]'/>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Iniciar sesión
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}
