import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Função handler para o método POST
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  console.log(email)

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
          user: 'raelmartinssousa@gmail.com',
          pass: 'tjbe muvx pika aekg'
      }
    });

    const mailOptions = {
      from: 'raelmartinssousa@gmail.com',
      to: email,
      subject: 'Redefinição de senha',
      text: 'Clique no link para redefinir sua senha: <link>',
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return res.status(200).json({ message: 'E-mail de redefinição de senha enviado com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao enviar o e-mail. Por favor, tente novamente.' });
  }
}
