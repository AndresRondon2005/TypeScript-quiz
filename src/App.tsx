import React from 'react';

import {TsBasics} from './quiz-ts-1'
import { TsUserProfile } from './quiz-ts-1';
import { TsCounter } from './quiz-ts-1';
import { TsButton } from './quiz-ts-1';
import { TsMessage } from './quiz-ts-1';
import { ThemeConsumer, ThemeProvider } from './quiz-ts-1/themeProvider';
import { TsList } from './quiz-ts-1';
import { TsReadonly } from './quiz-ts-1';
import { TsInput } from './quiz-ts-1';
import { TsTuple } from './quiz-ts-1';
import AppBar from './theme/appbar'

function App() {
  const stringArray = ['Item 1', 'Item 2', 'Item 3'];

  const readonlyStrings: ReadonlyArray<string> = ['Apple', 'Banana', 'Cherry'];

  return (
    <ThemeProvider theme="light">
      <AppBar/>
    <div className="App">
      <TsBasics basics={["Juan", "Diego", "Fernando", "Felipe"]}/>
      <TsUserProfile
      name="Andres Rondon"
      age={18}
      hobbies={['Cine', 'VideoJuegos', 'Escuchar musica']}
    />
    <TsCounter/>
    <TsButton/>
    <TsMessage message="Welcome" />
    <ThemeConsumer/>
    </div>
    <TsList items={stringArray} renderItem={(item) => <span>{item}</span>} />
    <TsReadonly items={readonlyStrings} />
    <TsInput value="Phone" />
    <TsInput value={351247896} />
    <TsInput value={{ name: "Andres ", age: 18 }} />
    <TsTuple/>
    </ThemeProvider>
  );
}

export default App;