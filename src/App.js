import styled from 'styled-components';
import ObjectDetect from './components/ObjectDetect';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1c2127;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <ObjectDetect/>
    </AppContainer>
  );
}

export default App;
