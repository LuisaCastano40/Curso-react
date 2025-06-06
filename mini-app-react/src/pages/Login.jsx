import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

export function Login() {
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
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
