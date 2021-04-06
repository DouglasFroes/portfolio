import React, { useRef, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'

import Layout from '../../components/layout'
import * as styled from '../../styles/contact'

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const email = useRef<HTMLInputElement>(null)
  const name = useRef<HTMLInputElement>(null)
  const message = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()
  function styleColor(valid: boolean, style: any) {
    if (valid) {
      style.borderBottomColor = 'transparent'
    } else {
      style.borderBottomColor = 'red'
    }
  }
  function validateEmail(emailV: any) {
    const re = /\S+@\S+\.\S+/
    const boolean = re.test(emailV.value)
    styleColor(boolean, emailV.style)
    return boolean
  }

  function validateName(nameV: any) {
    const boolean = nameV.value.length > 2

    styleColor(boolean, nameV.style)

    return boolean
  }

  function validateMessage(messageV: any) {
    const boolean = messageV.value.length > 5

    styleColor(boolean, messageV.style)

    return boolean
  }

  async function handleSubmit(e: any) {
    e.preventDefault()

    if (
      !validateEmail(email.current) ||
      !validateName(name.current) ||
      !validateMessage(message.current)
    ) {
      alert('Verifique os dados e tente novamente')
      return
    }

    const templateParams = {
      from_name: name.current?.value,
      message: message.current?.value,
      reply_to: email.current?.value
    }

    setLoading(true)
    try {
      await emailjs.send(
        'service_8hvrzad',
        'template_6uz4ccs',
        templateParams,
        'user_gXrGk6s0ZXL1c577srj4S'
      )
      console.log(templateParams)
      alert(
        'Mensagem enviada com sucesso, entrarei em contato o mais rápido possível'
      )
      router.push('/')
    } catch (err) {
      console.log(err)
      alert('Erro, verifique os dados e tente novamente')
      setLoading(false)
    }
  }

  return (
    <Layout page={4}>
      <Head>
        <title>Contate-me</title>
      </Head>
      <styled.container>
        <styled.heading>
          <h2>CONTATO - ME</h2>
          <div className="line-dec"></div>
        </styled.heading>

        <styled.body>
          <styled.from onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              onBlur={() => validateEmail(email.current)}
              required
              ref={email}
            />
            <input
              type="text"
              placeholder="Nome"
              required
              ref={name}
              onBlur={() => validateName(name.current)}
            />
            <textarea
              placeholder="Mensagem"
              required
              ref={message}
              onBlur={() => validateMessage(message.current)}
            />
            <styled.button type="submit">Enviar</styled.button>
            <styled.loading style={!loading ? { display: 'none' } : {}} />
          </styled.from>
        </styled.body>
      </styled.container>
    </Layout>
  )
}

export default Contact
