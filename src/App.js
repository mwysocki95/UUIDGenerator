import React from 'react';
import { v4 as uuidv4} from 'uuid';

const styles = {
  backgroundColor: '#a4b0be',
  border : '#aaa69d solid 2px',
  color: '#dfe4ea',
  margin: '18px auto',
  padding: '12px 22px 10px',
  textAlign: 'center',
  width: 500,
  height: 130,
  title: {
      color: '#ffffff'
  },
}

const clickedHandler = () => {
  window.location.reload();
}

function App() {
  return (
    <div style={styles}>
      <h1 style={styles.title}>Your personal UUID4</h1>
      <h2 style={styles.code}>{uuidv4()}</h2>
      <button onClick={clickedHandler}>Refresh</button>
    </div>
  );
}

export default App;
