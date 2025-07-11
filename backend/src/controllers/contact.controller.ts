import { Request, Response } from 'express';
import { Schema, model } from 'mongoose';

const ContactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const Contact = model('Contact', ContactSchema);

export const sendMessage = async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    try {
        const newContact = await Contact.create({ name, email, message });
        // Simular envío de mensaje (puedes integrar Nodemailer, Twilio o WhatsApp Business API)
        console.log('📩 Nuevo mensaje recibido:', newContact);
        return res.status(201).json({ message: 'Mensaje enviado con éxito.' });
    } catch (error) {
        return res.status(500).json({ error: 'Error del servidor.' });
    }
};
