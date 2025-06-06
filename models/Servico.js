import mongoose from 'mongoose';

const servicoSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  descricao: { type: String, required: true }
});

export default mongoose.model('Servico', servicoSchema);
