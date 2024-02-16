import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    //const novoAluno = await Aluno.create({});
    res.json('Index');
  }
}

export default new HomeController();
