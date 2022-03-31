import React from 'react';
import Content from './components/Content';
import { AppProvider } from './context/AppProvider';

import GlobalStyles from './styles/global';

function App() {
  return (
    <AppProvider>
      <Content />
      <GlobalStyles />
    </AppProvider>
  );
}

export default App;
