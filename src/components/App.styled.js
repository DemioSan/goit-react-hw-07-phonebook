import styled from 'styled-components';

export const AppDiv = styled('div')`
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  color: #ffffff;
  background-color: #f4bf96;
  padding-bottom: 50px;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0;
    margin: 0;
    margin-top: 50px;
  }

  li {
    border: 1px solid #ffffff;
    border-radius: 8px;
    padding: 10px;
    text-align: center;

    background-color: #cbad96;
    color: #ffffff;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 10px inset;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    font-size: 30px; /* зміна font-size */
    border-radius: 15px;
    padding-left: 10px;
  }

  button {
    width: 100%;
    min-width: 120px;
    height: 60px;
    display: block;
    font-size: 18px;
    text-transform: uppercase;
    border: 2px solid #ffffff;
    border-radius: 8px;
    background-color: rgb(206, 90, 103);
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 10px inset;

    &:hover {
      background-color: #951826;
      color: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.5) -5px -5px 10px inset;
    }
  }
`;
