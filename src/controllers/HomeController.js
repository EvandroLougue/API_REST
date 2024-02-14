import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Janice',
      sobrenome: 'Lougue',
      email: 'janice.lougue@gmail.com',
      idade: 62,
      altura: 1.65,
      peso: 70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
