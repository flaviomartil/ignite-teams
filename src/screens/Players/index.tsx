import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';
import { Highlight } from '@components/HighLight';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { PlayerCard } from '@components/PlayerCard';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['Rodrigo', 'Vini']);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers> {players.length} </NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => {}}
          />
        )}
      />
    </Container>
  );
}
