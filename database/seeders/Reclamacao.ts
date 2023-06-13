import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import reclamacao from 'App/Models/Reclamacao'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await reclamacao.createMany([{
      "id": 1,
      "categoria": "Estabilidade do sistema", 
      "conteudo": "Tenho notado que o Angohut apresenta frequentes quedas de conexão e instabilidades, o que impacta diretamente minha produtividade. Durante o meu trabalho diário, tenho enfrentado interrupções constantes, perdendo informações e tempo valioso para reiniciar o sistema e recuperar dados perdidos. Isso é extremamente frustrante e compromete a confiabilidade do sistema como um todo.",
      "user_id": 2
    },
    {
      "id": 2,
      "categoria": "Funcionalidades ausentes", 
      "conteudo": "Percebi que o Angohut carece de algumas funcionalidades cruciais para o meu fluxo de trabalho. Em diversas ocasiões, me deparei com limitações que impossibilitaram a realização de tarefas específicas. Essas funcionalidades faltantes prejudicam minha eficiência e me obrigam a buscar soluções alternativas fora do sistema, o que gera retrabalho e atrasos desnecessários.",
      "user_id": 3
    },
    {
      "id": 3,
      "categoria": "Interface de usuário confusa", 
      "conteudo": "A interface do Angohut é pouco intuitiva e difícil de navegar. Tenho dificuldades para encontrar as funcionalidades desejadas, e o fluxo de trabalho não é claro. Isso me leva a cometer erros e a gastar mais tempo do que o necessário para realizar tarefas simples. Uma interface intuitiva é essencial para otimizar minha produtividade, e essa falha tem sido um obstáculo constante.",
      "user_id": 4
    },
    {
      "id": 4,
      "categoria": "Suporte técnico ineficiente", 
      "conteudo": "Ao enfrentar problemas técnicos, entrei em contato com o suporte técnico do Angohut, mas fiquei decepcionado com a falta de agilidade e eficácia na resolução dos problemas. As respostas têm sido lentas e, muitas vezes, não fornecem soluções adequadas. Como usuário, espero receber um suporte técnico competente e eficiente para resolver minhas dificuldades o mais rápido possível.",
      "user_id": 4
    },
    {
      "id": 5,
      "categoria": "Falta de integração com outros sistemas", 
      "conteudo": "No meu ambiente de trabalho, é crucial que o Angohut se integre perfeitamente com outros aplicativos e sistemas utilizados pela nossa empresa. Infelizmente, tenho encontrado dificuldades nessa integração, o que resulta em duplicação de esforços e comunicação falha entre diferentes ferramentas. Uma integração suave é essencial para melhorar a eficiência e facilitar a colaboração entre as equipes.",
      "user_id": 3
    }])
  }
}
