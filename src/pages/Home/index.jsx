import { S } from './styles'
import Screen1 from '../../assets/screenshot-01.jpg'
import Screen2 from '../../assets/screenshot-02.jpg'
import Screen3 from '../../assets/screenshot-03.jpg'
import Screen4 from '../../assets/screenshot-04.jpg'

const Home = () => {
  return (
    <S.Main>
      <S.Section>
        <S.ContainerA>
          <S.Details>
            <S.Title>Conheça o Despesa Inteligente</S.Title>
            <p>
              Descubra o Despesa Inteligente, uma solução inovadora para
              gerenciar suas finanças! Com ele, você pode cadastrar e organizar
              suas despesas de maneira eficiente. Mas não para por aí! O Despesa
              Inteligente também oferece insights valiosos sobre seus gastos,
              ajudando você a entender melhor para onde seu dinheiro está indo.
              Venha experimentar e transforme a maneira como você lida com suas
              finanças hoje mesmo!
            </p>
          </S.Details>
          <S.Image src={Screen1} alt="imagem da tela do sistema" />
        </S.ContainerA>
      </S.Section>
      <S.Section>
        <S.ContainerB>
          <S.Image src={Screen2} alt="imagem da tela do sistema" />
          <S.Details>
            <S.Title>Tenha insights de como estão suas despesas</S.Title>
            <p>
              Explore o poder dos insights com o Despesa Inteligente! Nosso
              sistema permite que você visualize seus gastos por categoria,
              detalhando cada despesa para um entendimento mais profundo. Além
              disso, oferecemos um acompanhamento mensal de suas despesas,
              permitindo que você veja exatamente para onde seu dinheiro está
              indo a cada mês. Com o Despesa Inteligente, você tem o controle
              financeiro ao seu alcance. Experimente hoje mesmo e descubra uma
              nova maneira de gerenciar suas finanças!
            </p>
          </S.Details>
        </S.ContainerB>
      </S.Section>
      <S.Section>
        <S.ContainerA>
          <S.Details>
            <S.Title>Tenha total flexibilidade sobre suas finanças</S.Title>
            <p>
              Com o Despesa Inteligente, você tem total flexibilidade sobre suas
              finanças. Nosso sistema permite que você edite suas despesas a
              qualquer momento, garantindo que suas informações estejam sempre
              atualizadas. Seja uma mudança de categoria, uma alteração no valor
              ou uma atualização na descrição, você tem o controle total. Com o
              Despesa Inteligente, gerenciar suas finanças nunca foi tão fácil e
              conveniente. Experimente hoje mesmo!
            </p>
          </S.Details>
          <S.Image src={Screen4} alt="imagem da tela do sistema" />
        </S.ContainerA>
      </S.Section>
      <S.Section>
        <S.ContainerB>
          <S.Image src={Screen3} alt="imagem da tela do sistema" />
          <S.Details>
            <S.Title>Não perca mais tempo! Cadastre-se e faça login</S.Title>
            <p>
              Não perca mais tempo! Cadastre-se e faça login no Despesa
              Inteligente agora mesmo! Com o Despesa Inteligente, você pode
              organizar suas despesas de forma eficiente e obter insights
              valiosos sobre como estão suas despesas. Comece a tomar decisões
              financeiras mais informadas hoje mesmo. Junte-se a nós e descubra
              uma nova maneira de gerenciar suas despesas!
            </p>
          </S.Details>
        </S.ContainerB>
      </S.Section>
    </S.Main>
  )
}

export default Home
