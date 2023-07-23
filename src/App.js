import React, { Component } from 'react';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from 'bpk-component-calendar';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';
import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tues',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thur',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departureSelectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
      returnSelectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDepartureDateSelect = date => {
    this.setState({
      departureSelectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: date,
      },
    });
  };

  handleReturnDateSelect = date => {
    this.setState({
      returnSelectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: date,
      },
    });
  };


  handleButtonClick = () => {
    const { departureSelectionConfiguration, returnSelectionConfiguration } = this.state;
    if (departureSelectionConfiguration.date && returnSelectionConfiguration.date) {
      if (departureSelectionConfiguration.date <= returnSelectionConfiguration.date) {
        alert('It works!');
      } else {
        alert('Error: Return date should be after the departure date.');
      }
    } else {
      alert('Please select both departure and return dates.');
    }
  };

  render() {

    const calendarContainerStyle = {
      display: 'flex',
      justifyContent: 'space between',
    };

    const departureCalendarStyle = {
      borderRight: '1px solid #e5e5e5', // Add a line to separate the calendars
      paddingRight: '10px', // Add some padding to give space between the calendar and the line
    };


    const parentContainerStyle = {
      display: 'flex',
      flexDirection: 'column', // Stack items vertically
      alignItems: 'center', // Center items horizontally
    };

    const buttonStyle = {
      marginTop: '20px' // Add some space between the calendar and the button
    };


    return (
      <div className={getClassName('App')}>
        <header className={getClassName('App__header')}>
          <div className={getClassName('App__header-inner')}>
            <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
          </div>
        </header>
        <main className={getClassName('App__main')} style={parentContainerStyle}>
          <BpkText tagName="p" className={getClassName('App__text')}>
            Select dates for your flight 
          </BpkText>
          <div className={getClassName('App__calendar-container')} style={calendarContainerStyle}>
            <div style={departureCalendarStyle}>
              <BpkText tagName="p">Depart</BpkText>
              <BpkCalendar
                id="departure-calendar"
                className={getClassName('App__calendar')}
                changeMonthLabel="Change month"
                closeButtonText="Close"
                daysOfWeek={ daysOfWeek }
                formatDateFull={(date, locale) => date.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                formatDate={(date, locale) => date.toLocaleDateString(locale, { day: 'numeric', month: 'numeric', year: 'numeric' })}
                formatMonth={(date, locale) => date.toLocaleDateString(locale, { month: 'long', year: 'numeric' })}
                title="Departure date"
                getApplicationElement={() => document.getElementById('root')}
                weekStartsOn={0}
                showWeekendSeparator 
                onDateSelect={this.handleDepartureDateSelect}
                onMonthChange={this.handleMonthChange}
                onYearChange={this.handleYearChange}
                selectionConfiguration={this.state.departureSelectionConfiguration}
              />
            </div>
            <div>
              <BpkText tagName="p">Return</BpkText>
              <BpkCalendar
                id="return-calendar"
                className={getClassName('App__calendar')}
                changeMonthLabel="Change month"
                closeButtonText="Close"
                daysOfWeek={ daysOfWeek }
                formatDateFull={(date, locale) => date.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                formatDate={(date, locale) => date.toLocaleDateString(locale, { day: 'numeric', month: 'numeric', year: 'numeric' })}
                formatMonth={(date, locale) => date.toLocaleDateString(locale, { month: 'long', year: 'numeric' })}
                title="Return date"
                getApplicationElement={() => document.getElementById('root')}
                weekStartsOn={0}
                showWeekendSeparator
                onDateSelect={this.handleReturnDateSelect}
                selectionConfiguration={this.state.returnSelectionConfiguration}
              />
            </div>
          </div>
          <BpkButton onClick={this.handleButtonClick} style={buttonStyle}>Continue</BpkButton>
        </main>
      </div>
    );
  }
}

export default App;
