import React, { useEffect, useState } from 'react';

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [power, setPower] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [messages, setMessages] = useState([]);

  const checkStrength = (password) => {
    if (!password) {
      setPower(0);
      setFeedback('');
      setMessages([]);
      return;
    }

    let score = 0;
    let arr = [];
    const lenScore = Math.min(25, Math.floor(password.length * 2.5));
    score += lenScore;

    const regexNumbers = /\d/.test(password);
    if (regexNumbers) {
      score += 25;
      arr.push("Password has numbers");
    }

    const regexLowerCase = /[a-z]/.test(password);
    if (regexLowerCase) {
      score += 15;
      arr.push("Password contains lowercase letters");
    }

    const regexUpperCase = /[A-Z]/.test(password);
    if (regexUpperCase) {
      score += 15;
      arr.push("Password contains uppercase letters");
    }

    const regexSpecialCharacters = /[^A-Za-z0-9]/.test(password);
    if (regexSpecialCharacters) {
      score += 20;
      arr.push("Password contains special characters");
    }

    score = Math.min(100, score);
    setPower(score);
    setMessages(arr);

    if (score < 25) {
      setFeedback("Weak Password");
    } else if (score < 60) {
      setFeedback("Moderate Password");
    } else if (score < 80) {
      setFeedback("Strong Password");
    } else {
      setFeedback("Very Strong Password");
    }
  };

  useEffect(() => {
    checkStrength(password);
  }, [password]);

  return (
    <div>
      <h3>Password Strength</h3>

      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {password && (
        <div>
          <p>Strength: {power}</p>
          <p>{feedback}</p>
          <ul>
            {messages.map((v, i) => (
              <li key={i}>
                {v}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PasswordStrength;
