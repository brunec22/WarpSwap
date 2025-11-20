import React, { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '50px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>WarpSwap ⚡</h1>
      <p style={{ fontSize: '1.5rem' }}>Fastest & cheapest AMM on Kasplex</p>
      <p style={{ fontSize: '2rem', margin: '30px 0' }}>0.1 % fee • ZERO fees first 30 days</p>
      
      <div style={{ margin: '50px auto', maxWidth: '500px' }}>
        <input 
          type="text" 
          placeholder="Amount KAS"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ padding: '15px', width: '100%', fontSize: '1.2rem', borderRadius: '10px', border: 'none' }}
        />
        <div style={{ margin: '20px 0', fontSize: '1.5rem' }}>↓ Swap ↓</div>
        <input type="text" placeholder="Receive USDT" style={{ padding: '15px', width: '100%', fontSize: '1.2rem', borderRadius: '10px', border: 'none' }} disabled />
        
        <button style={{ 
          marginTop: '30px',
          padding: '20px 60px',
          fontSize: '1.5rem',
          background: '#00ff88',
          color: 'black',
          border: 'none',
          borderRadius: '15px',
          cursor: 'pointer'
        }}>
          SWAP (coming testnet Dec 2025)
        </button>
      </div>

      <p style={{ marginTop: '50px' }}>
        Testnet December 2025 • Phase 2: ZK-private swaps
      </p>
    </div>
  );
}

export default App;
