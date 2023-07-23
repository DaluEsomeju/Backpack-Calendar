import React, { Component } from 'react';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from 'bpk-component-calendar';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';
import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departureDate: null,
      returnDate: null
    };
  }

  handleDepartureDateSelect = date => {
    this.setState({
      departureDate: date,
    });
  };

  handleReturnDateSelect = date => {
    this.setState({
      returnDate: date,
    });
  };

  handleMonthChange = date => {
    console.log(date);
  };

  handleYearChange = date => {
    console.log(date);
  };

  handleButtonClick = () => {
    alert('It works!');
  };

  render() {
    return (
      <div className={getClassName('App')}>
        <header className={getClassName('App__header')}>
          <div className={getClassName('App__header-inner')}>
            <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
          </div>
        </header>
        <main className={getClassName('App__main')}>
          <BpkText tagName="p" className={getClassName('App__text')}>
            Select departure and return dates for your flight
          </BpkText>
          <div className={getClassName('App__calendar-container')}>
            <div>
              <BpkText tagName="p">Departure date</BpkText>
              <BpkCalendar
                // ... All the same properties as before...
                title="Departure date"
                onDateSelect={this.handleDepartureDateSelect}
                date={this.state.departureDate}
              />
            </div>
            <div>
              <BpkText tagName="p">Return date</BpkText>
              <BpkCalendar
                // ... All the same properties as before...
                title="Return date"
                onDateSelect={this.handleReturnDateSelect}
                date={this.state.returnDate}
              />
            </div>
          </div>
          <BpkButton onClick={this.handleButtonClick}>Continue</BpkButton>
        </main>
      </div>
    );
  }
}

export default App;
