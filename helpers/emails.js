import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos;

  // Enviar el email
  await transport.sendMail({
    from: 'BienesRaices.com <no-reply@bienesraices.com>',
    to: email,
    subject: 'Confirma tu cuenta en BienesRaices.com',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #E4E3F0; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(to right, rgb(97, 67, 133), rgb(81, 99, 149)); padding: 20px; text-align: center; color: white;">
          <h1 style="font-size: 24px; text-transform: uppercase; text-shadow: 7px 7px #00B2CA; -webkit-text-stroke: 2px #ffffff; color: transparent;">Bienes Raíces</h1>
        </div>
        <div style="padding: 20px; background-color: #ffffff;">
          <p style="font-size: 16px; color: #333;">
            Hola <strong>${nombre}</strong>, gracias por registrarte en BienesRaices.com.
          </p>
          <p style="font-size: 16px; color: #333;">
            Para activar tu cuenta, haz clic en el siguiente enlace:
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3001}/auth/confirmar/${token}" 
               style="background-color: #00B2CA; color: white; padding: 10px 20px; text-decoration: none; font-size: 16px; border-radius: 4px; display: inline-block;">
              Confirmar Cuenta
            </a>
          </div>
          <p style="font-size: 14px; color: #555;">
            Si no creaste esta cuenta, puedes ignorar este correo.
          </p>
        </div>
        <div style="background-color: #E4E3F0; padding: 10px; text-align: center; font-size: 12px; color: #555;">
          © 2024 BienesRaices.com
        </div>
      </div>
    `
  });
};


const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos

  //Enviar el email
  await transport.sendMail({
    from: 'BienesRaices.com',
    to: email,
    subject: 'Restablece tu password en BienesRaices.com',
    text: 'Restablece tu password en BienesRaices.com',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #E4E3F0; border-radius: 8px; overflow: hidden;">
        <div style="background: linear-gradient(to right, rgb(97, 67, 133), rgb(81, 99, 149)); padding: 20px; text-align: center; color: white;">
          <h1 style="font-size: 24px; text-transform: uppercase; text-shadow: 7px 7px #00B2CA; -webkit-text-stroke: 2px #ffffff; color: transparent;">Bienes Raíces</h1>
        </div>
        <div style="padding: 20px; background-color: #ffffff;">
          <p style="font-size: 16px; color: #333;">
            Hola <strong>${nombre}</strong>, hemos recibido una solicitud para restablecer tu contraseña en BienesRaices.com.
          </p>
          <p style="font-size: 16px; color: #333;">
            Para continuar, haz clic en el siguiente enlace:
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3001}/auth/olvide-password/${token}" 
               style="background-color: #00B2CA; color: white; padding: 10px 20px; text-decoration: none; font-size: 16px; border-radius: 4px; display: inline-block;">
              Restablecer Contraseña
            </a>
          </div>
          <p style="font-size: 14px; color: #555;">
            Si no solicitaste este cambio, puedes ignorar este correo. Tu contraseña permanecerá segura.
          </p>
        </div>
        <div style="background-color: #E4E3F0; padding: 10px; text-align: center; font-size: 12px; color: #555;">
          © 2024 BienesRaices.com | Todos los derechos reservados
        </div>
      </div>
    `
  })

}

export { emailRegistro, emailOlvidePassword }