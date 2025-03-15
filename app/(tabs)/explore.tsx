import { Image, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/hogwarts.jpg')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Consultoria para Alunos Novatos em Hogwarts!</ThemedText>
      </ThemedView>
      <ThemedText>É novo em Hogwarts e precisa de ajuda para entender como funciona?</ThemedText>

      <Collapsible title="Precisa de ajuda para entender seu horário de aulas?">
        <ThemedText  style={{ textAlign: 'justify' }}>
        Se você está perdido entre Poções, Herbologia e Transfiguração, eu posso te ajudar a 
        organizar seu cronograma, entender quais matérias exigem mais dedicação e até dar dicas 
        sobre os professores. Não perca pontos por atrasos—aprenda a dominar seu tempo como um 
        verdadeiro bruxo!
        </ThemedText>
        <ExternalLink href="https://harrypotter.fandom.com/pt-br/wiki/Primeiro_ano">
          <ThemedText type="link">Veja mais</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Dificuldades com Feitiços Básicos?">
        <ThemedText  style={{ textAlign: 'justify' }}>
        Não se preocupe, até mesmo os melhores bruxos já erraram um Wingardium Leviosa no início! 
        Se sua varinha parece não obedecer ou seus feitiços saem fracos (ou desastrosos), posso te 
        ajudar com técnicas de pronúncia, movimento da varinha e concentração. Com paciência e prática, 
        você estará lançando encantamentos com precisão em pouco tempo!
        </ThemedText>
      </Collapsible>

      <Collapsible title="Curioso sobre a Biblioteca Restrita?">
        <ThemedText  style={{ textAlign: 'justify' }}>
        A Biblioteca Restrita guarda alguns dos livros mais poderosos (e perigosos) do mundo bruxo. 
        Se você deseja explorar seus segredos sem correr riscos desnecessários (ou violar regras), 
        eu posso ajudar! Desde entender os requisitos para obter permissão até indicar leituras 
        avançadas que podem substituir títulos proibidos, ofereço orientações para estudos responsáveis 
        e eficazes.
        </ThemedText>
        <ExternalLink href="https://harrypotter.fandom.com/pt-br/wiki/Se%C3%A7%C3%A3o_Reservada">
          <ThemedText type="link">Veja Mais</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Conselhos sobre professores e matérias?">
      <Image
          source={require('@/assets/images/professor.jpg')}
          style={{
          alignSelf: 'center',
          height: 200,
          width: undefined,
          resizeMode: 'contain',
          }}
        />
        <ThemedText  style={{ textAlign: 'justify' }}>
        O Professor Dumbledore é um dos bruxos mais sábios e poderosos de todos os tempos. Diretor de 
        Hogwarts, ele não só ensina sobre magia, mas também sobre coragem, amizade e o valor da verdade. 
        Conhecido por sua mente brilhante e seu espírito acolhedor, Dumbledore sempre oferece conselhos 
        valiosos para aqueles que buscam aprender e crescer. Seu amor por Hogwarts e seus alunos é inegável, 
        e suas aulas são sempre uma combinação de conhecimento profundo e sabedoria prática.
        </ThemedText>
        <ExternalLink href="https://harrypotter.fandom.com/pt-br/wiki/Categoria:Funcion%C3%A1rios_de_Hogwarts">
          <ThemedText type="link">Veja mais</ThemedText>
        </ExternalLink>
      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
