import React from 'react';
import { ThemeProvider } from './src/modules/theme/ThemeProvider';
import MainContent from "./components/MainContent";

const App = () => {
    return (
        <ThemeProvider>
            <MainContent />
        </ThemeProvider>
    );
};

export default App;
