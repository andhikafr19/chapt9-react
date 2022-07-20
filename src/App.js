import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Submit from './components/Submit';
import Forms from './components/Forms';
import { Alert, Button, Container } from 'reactstrap';
import styles from './style.module.css';

class App extends Component {
  state = { danger: false }

  handleOnClick = (e) => {
    this.setState({ danger: true})
  }
  render() {
    const { danger } = this.state
    return (
      <Container className={styles.container}>
        <Container className='text-center'>
          <Button className='mb-4' color='danger' onClick={this.handleOnClick}>Hati-hati</Button>
          { danger && <Alert color='danger'>Sudah dibilang hati-hati</Alert> }
          <div>
            <Submit/>
          </div>
          <div>
            <Forms/>
          </div>
        </Container>
      </Container>
    );
  }
}

export default App;
